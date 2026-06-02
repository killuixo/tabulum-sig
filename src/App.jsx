function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var headers = data[0];
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
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var params = JSON.parse(e.postData.contents);
    
    // SISTEMA DE DELEÇÃO
    if (params.action === 'delete') {
      var data = sheet.getDataRange().getValues();
      for (var i = 1; i < data.length; i++) {
        if (data[i][0] == params.ENTIDADE) {
          sheet.deleteRow(i + 1);
          return ContentService.createTextOutput(JSON.stringify({"status": "deletado"})).setMimeType(ContentService.MimeType.JSON);
        }
      }
      return ContentService.createTextOutput(JSON.stringify({"status": "nao_encontrado"})).setMimeType(ContentService.MimeType.JSON);
    }

    // SISTEMA DE EDIÇÃO / ATUALIZAÇÃO (NOVO)
    if (params.action === 'update') {
      var data = sheet.getDataRange().getValues();
      var headers = data[0];
      for (var i = 1; i < data.length; i++) {
        if (data[i][0] == params.ENTIDADE_ORIGINAL) {
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
    
    // SISTEMA DE ADIÇÃO NA PLANILHA
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var rowData = headers.map(function(header) {
      return params[header.trim()] !== undefined ? params[header.trim()] : "";
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
