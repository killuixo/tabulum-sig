function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("App") || SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var data = sheet.getDataRange().getValues();
  var headers = data[0].map(function(h) { return h.toString().trim(); });
  var result = [];
  
  for (var i = 1; i < data.length; i++) {
    if (data[i][0] && data[i][0].toString().trim() !== "") {
      var obj = {};
      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = data[i][j];
      }
      result.push(obj);
    }
  }
  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("App") || SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    var params = JSON.parse(e.postData.contents);
    
    // SISTEMA DE DELEÇÃO
    if (params.action === 'delete') {
      var data = sheet.getDataRange().getValues();
      for (var i = 1; i < data.length; i++) {
        if (data[i][0] && data[i][0].toString().trim() === params.ENTIDADE.trim()) {
          sheet.deleteRow(i + 1);
          return ContentService.createTextOutput(JSON.stringify({"status": "deletado"})).setMimeType(ContentService.MimeType.JSON);
        }
      }
      return ContentService.createTextOutput(JSON.stringify({"status": "nao_encontrado"})).setMimeType(ContentService.MimeType.JSON);
    }

    // SISTEMA DE EDIÇÃO / ATUALIZAÇÃO
    if (params.action === 'update') {
      var data = sheet.getDataRange().getValues();
      var headers = data[0].map(function(h) { return h.toString().trim(); });
      
      for (var i = 1; i < data.length; i++) {
        if (data[i][0] && data[i][0].toString().trim() === params.ENTIDADE_ORIGINAL.trim()) {
          for (var key in params.newData) {
            var colIndex = headers.indexOf(key.trim());
            if (colIndex > -1) {
              sheet.getRange(i + 1, colIndex + 1).setValue(params.newData[key]);
            }
          }
          return ContentService.createTextOutput(JSON.stringify({"status": "atualizado"})).setMimeType(ContentService.MimeType.JSON);
        }
      }
      return ContentService.createTextOutput(JSON.stringify({"status": "nao_encontrado"})).setMimeType(ContentService.MimeType.JSON);
    }
    
    // SISTEMA DE ADIÇÃO NA PLANILHA (Melhorado para garantir as colunas certas)
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(function(h) { return h.toString().trim(); });
    var rowData = headers.map(function(header) {
      return params[header] !== undefined ? params[header] : "";
    });
    
    var columnA = sheet.getRange("A:A").getValues();
    var lastRowIndex = 0;
    for (var i = columnA.length - 1; i >= 0; i--) {
      if (columnA[i][0] && columnA[i][0].toString().trim() !== "") {
        lastRowIndex = i + 1;
        break;
      }
    }
    sheet.getRange(lastRowIndex + 1, 1, 1, rowData.length).setValues([rowData]);
    
    return ContentService.createTextOutput(JSON.stringify({"status": "adicionado"})).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({"erro": error.message})).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * IMPORTANTE:
 * Para que esta função rode DIARIAMENTE de forma autônoma, faça o seguinte no Google Apps Script:
 * 1. Vá no menu lateral esquerdo e clique no ícone de "Acionadores" (um relógio).
 * 2. Clique em "Adicionar Acionador" (botão azul no canto inferior direito).
 * 3. Selecione a função: syncMonitorLegislativo
 * 4. Selecione a origem do evento: Baseado no tempo
 * 5. Selecione o tipo de acionador com base no tempo: Temporizador baseado em dias
 * 6. Selecione a hora do dia: (escolha uma hora de madrugada, por exemplo: Meia-noite a 1h)
 * 7. Salve.
 */
function syncMonitorLegislativo() {
  var gestupSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("App") || SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var gestupData = gestupSheet.getDataRange().getValues();
  var gestupHeaders = gestupData[0].map(function(h) { return h.toString().trim(); });
  
  // Pegando os índices exatos das colunas da planilha do GestUP
  var colEntidade = gestupHeaders.indexOf("ENTIDADE");
  var colNumProc = gestupHeaders.indexOf("Nº DO PROCESSO ALESC");
  var colLink = gestupHeaders.indexOf("LINK");
  var colEstagio = gestupHeaders.indexOf("ESTÁGIO ATUAL");
  var colUltima = gestupHeaders.indexOf("ÚLTIMA ATUALIZAÇÃO");
  
  if (colEntidade === -1) return; // Se não tem coluna ENTIDADE, encerra
  
  try {
    // Abrindo a planilha Monitor Legislativo pelo ID
    var monitorSpreadsheet = SpreadsheetApp.openById('1se2lClYqObX9HV8dTfCR3nKsFZzMbbbIpDKv-WhrAfU');
    var monitorSheet = monitorSpreadsheet.getSheets()[0]; // Pega a primeira aba
    var monitorData = monitorSheet.getDataRange().getValues();
    
    // Obtendo datas de hoje formatadas
    var today = new Date();
    var todayStr1 = Utilities.formatDate(today, Session.getScriptTimeZone(), "dd/MM/yyyy");
    var todayStr2 = Utilities.formatDate(today, Session.getScriptTimeZone(), "dd/MM/yy");
    
    // Iterando as entidades do GestUP (começa de 1 pulando o cabeçalho)
    for (var i = 1; i < gestupData.length; i++) {
      var entidadeName = gestupData[i][colEntidade];
      if (!entidadeName) continue;
      
      var safeEntidade = entidadeName.toString().toLowerCase().trim();
      
      // Vasculhando o Monitor Legislativo
      for (var j = 1; j < monitorData.length; j++) {
        // Coluna K é índice 10 na matriz
        var ementa = monitorData[j][10] ? monitorData[j][10].toString().toLowerCase() : "";
        
        // Procura "utilidade pública" E o nome da entidade na Ementa
        if (ementa.indexOf("utilidade pública") > -1 && ementa.indexOf(safeEntidade) > -1) {
          
          // Captura os dados do Monitor (Coluna B=1, G=6, L=11, O=14)
          var numProc = monitorData[j][1] || "";
          var link = monitorData[j][6] || "";
          var ultimoMov = monitorData[j][11] ? monitorData[j][11].toString() : "";
          var infoRel = monitorData[j][14] ? monitorData[j][14].toString() : "";
          
          var rowToUpdate = i + 1; // +1 porque a matriz no appScript é 0-indexed, e getRange é 1-indexed
          
          // Atualiza Número e Link no GestUP se forem diferentes e a coluna existir
          if (colNumProc > -1 && gestupData[i][colNumProc] != numProc) {
            gestupSheet.getRange(rowToUpdate, colNumProc + 1).setValue(numProc);
          }
          if (colLink > -1 && gestupData[i][colLink] != link) {
            gestupSheet.getRange(rowToUpdate, colLink + 1).setValue(link);
          }
          
          // Verifica se houve movimento na data de HOJE na coluna L do Monitor
          if (ultimoMov.indexOf(todayStr1) > -1 || ultimoMov.indexOf(todayStr2) > -1) {
            var updateText = "Monitor ALESC em " + todayStr1 + ": " + infoRel;
            if (colUltima > -1 && gestupData[i][colUltima] != updateText) {
              gestupSheet.getRange(rowToUpdate, colUltima + 1).setValue(updateText);
            }
          }
          
          break; // Encontrou a entidade no monitor, avança pra próxima do GestUP
        }
      }
    }
  } catch (e) {
    Logger.log("Erro de Sincronização: " + e.toString());
  }
}
