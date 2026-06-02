import React, { useState, useEffect } from 'react';

// ==========================================
// ÍCONES NATIVOS (Sem dependências externas)
// ==========================================
const Icon = ({ path, className = "w-6 h-6", onClick, size = 24, style }) => (
  <svg onClick={onClick} style={{ width: size, height: size, ...style }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" className={className}>{path}</svg>
);

const LayoutDashboard = (p) => <Icon {...p} path={<><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></>} />;
const Kanban = (p) => <Icon {...p} path={<><path d="M6 5v11"/><path d="M12 5v6"/><path d="M18 5v14"/></>} />;
const Settings = (p) => <Icon {...p} path={<><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></>} />;
const Sun = (p) => <Icon {...p} path={<><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></>} />;
const Moon = (p) => <Icon {...p} path={<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>} />;
const Type = (p) => <Icon {...p} path={<><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/></>} />;
const RefreshCw = (p) => <Icon {...p} path={<><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></>} />;
const CheckCircle2 = (p) => <Icon {...p} path={<><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></>} />;
const Clock = (p) => <Icon {...p} path={<><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>} />;
const AlertCircle = (p) => <Icon {...p} path={<><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></>} />;
const Database = (p) => <Icon {...p} path={<><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></>} />;
const Download = (p) => <Icon {...p} path={<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></>} />;
const Upload = (p) => <Icon {...p} path={<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></>} />;
const Save = (p) => <Icon {...p} path={<><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></>} />;
const ChevronLeft = (p) => <Icon {...p} path={<path d="m15 18-6-6 6-6"/>} />;
const UserIcon = (p) => <Icon {...p} path={<><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>} />;

// --- CORES TEMA MONDRIAN ---
const COLORS = {
  cyan: '#00b7eb', // Ciano confortável
  crimson: '#DC143C', // Carmesim
  mustard: '#FFDB58' // Amarelo Mostarda
};

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('kanban'); 
  const [isDark, setIsDark] = useState(true);
  const [fontSizeLevel, setFontSizeLevel] = useState(2); 
  
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [selectedArticulator, setSelectedArticulator] = useState(null);

  // URL DO WEBHOOK JÁ PRÉ-CONFIGURADA E EMBUTIDA NO CÓDIGO
  const [webhookUrl, setWebhookUrl] = useState('https://script.google.com/macros/s/AKfycbye_nWzL6sFN31psbTaBL5n9kbbHY_XFK5jUOMFEEHFTaomw3C0MX7OYoSR0YQRH6Ou/exec');
  const [syncStatus, setSyncStatus] = useState('');

  const handleEntityClick = (entityData) => {
    setSelectedEntity(entityData);
    setView('entity_details');
  };

  const handleArticulatorClick = (articulatorName) => {
    if (!articulatorName || articulatorName === '-') return;
    setSelectedArticulator(articulatorName);
    setView('articulator_details');
  };

  // Ao iniciar, ele vê que a URL existe e já puxa os dados automaticamente
  useEffect(() => {
    if (webhookUrl) {
      fetchFromWebhook();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchFromWebhook = async () => {
    if (!webhookUrl) {
      setSyncStatus('URL do Webhook vazia.');
      return;
    }
    
    setLoading(true);
    setSyncStatus('Sincronizando com Arquivo Central...');
    try {
      const response = await fetch(webhookUrl);
      if (!response.ok) throw new Error('Falha na resposta da rede.');
      
      const text = await response.text();
      
      try {
        const jsonData = JSON.parse(text);
        const formattedData = jsonData.map(item => {
          let newItem = {};
          for (let key in item) {
            let val = item[key];
            if (typeof val === 'string' && val.includes('T') && val.includes('Z')) {
              val = new Date(val).toLocaleDateString('pt-BR');
            }
            newItem[key] = val;
          }
          return newItem;
        });
        setData(formattedData);
        setSyncStatus('Dados sincronizados com sucesso!');
      } catch(e) {
        setData(parseCSV(text));
        setSyncStatus('Sincronizado (Formato CSV).');
      }
    } catch (error) {
      console.error("Erro ao sincronizar:", error);
      setSyncStatus('Erro de conexão. Verifique o link no painel Avançado.');
    } finally {
      setLoading(false);
      setTimeout(() => setSyncStatus(''), 5000);
    }
  };

  const exportCSV = () => {
    if (data.length === 0) {
      alert("Nenhum dado para exportar.");
      return;
    }
    
    const headers = Object.keys(data[0]);
    const csvRows = [];
    csvRows.push(headers.join(','));

    for (const row of data) {
      const values = headers.map(header => {
        const val = row[header] === null || row[header] === undefined ? '' : String(row[header]);
        let escaped = val.replace(/"/g, '""');
        if (escaped.search(/("|,|\n)/g) >= 0) escaped = `"${escaped}"`;
        return escaped;
      });
      csvRows.push(values.join(','));
    }

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `Tabulum_Backup_${new Date().toISOString().slice(0,10)}.csv`;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const importCSV = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    setLoading(true);
    const reader = new FileReader();
    reader.onload = (evt) => {
      const parsedData = parseCSV(evt.target.result);
      setData(parsedData);
      setLoading(false);
      setSyncStatus('Backup carregado na tela atual!');
      setTimeout(() => setSyncStatus(''), 5000);
    };
    reader.onerror = () => {
      setLoading(false);
      setSyncStatus('Erro ao ler arquivo.');
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const parseCSV = (str) => {
    const lines = str.split(/\r?\n/).filter(line => line.trim() !== '');
    if (lines.length < 2) return [];
    
    const headers = lines[0].split(',').map(h => h.replace(/(^"|"$)/g, '').trim());
    const result = [];
    
    for (let i = 1; i < lines.length; i++) {
      const currentline = lines[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
      const obj = {};
      for (let j = 0; j < headers.length; j++) {
        const val = currentline[j] ? currentline[j].replace(/(^"|"$)/g, '').trim() : '';
        obj[headers[j]] = val;
      }
      result.push(obj);
    }
    return result;
  };

  const fontSizes = {
    1: 'text-[10px] leading-tight',
    2: 'text-xs',
    3: 'text-sm',
    4: 'text-base',
    5: 'text-lg'
  };

  const themeConfig = {
    bg: isDark ? 'bg-[#0f0f0f]' : 'bg-[#f4f4f0]',
    text: isDark ? 'text-gray-100' : 'text-gray-900',
    border: isDark ? 'border-gray-200' : 'border-black',
    cardBg: isDark ? 'bg-[#1a1a1a]' : 'bg-white',
    gridLines: isDark ? 'bg-gray-200' : 'bg-black'
  };

  const bThick = `border-[4px] ${themeConfig.border}`;
  const bMedium = `border-[2px] ${themeConfig.border}`;

  return (
    <div className={`min-h-screen font-sans ${themeConfig.bg} ${themeConfig.text} ${fontSizes[fontSizeLevel]} transition-colors duration-300 flex flex-col`}>
      
      {/* HEADER MONDRIAN */}
      <header className={`flex flex-col md:flex-row border-b-[6px] ${themeConfig.border}`}>
        <div className={`flex-1 p-4 md:p-6 ${bMedium} border-b-0 md:border-b-0 md:border-r-[6px] flex items-center justify-between`}>
          <div>
            <h1 className="font-black uppercase tracking-widest" style={{ fontSize: '1.8em' }}>
              TABULUM
            </h1>
            <p className="opacity-80 font-bold uppercase tracking-wider mt-1" style={{ fontSize: '0.85em', color: COLORS.cyan }}>
              Sistema de Gestão de Utilidade Pública
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <div className="w-10 h-10" style={{ backgroundColor: COLORS.cyan, border: `3px solid ${isDark ? '#fff' : '#000'}` }}></div>
            <div className="w-10 h-10" style={{ backgroundColor: COLORS.mustard, border: `3px solid ${isDark ? '#fff' : '#000'}` }}></div>
            <div className="w-10 h-10" style={{ backgroundColor: COLORS.crimson, border: `3px solid ${isDark ? '#fff' : '#000'}` }}></div>
          </div>
        </div>

        {/* NAVEGAÇÃO SUPERIOR */}
        <nav className={`flex flex-wrap md:flex-nowrap p-3 md:p-4 gap-3 overflow-x-auto ${themeConfig.cardBg} items-center md:justify-center`}>
          <NavButton active={view === 'kanban'} onClick={() => setView('kanban')} icon={<Kanban />} label="Kanban" isDark={isDark} />
          <NavButton active={view === 'dashboard'} onClick={() => setView('dashboard')} icon={<LayoutDashboard />} label="Dashboard" isDark={isDark} />
          <NavButton active={view === 'settings'} onClick={() => setView('settings')} icon={<Settings />} label="Ajustes" isDark={isDark} />
        </nav>
      </header>

      {/* ÁREA PRINCIPAL */}
      <main className="p-4 md:p-6 flex-1 flex flex-col">
        {loading ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <RefreshCw className="animate-spin" size={48} style={{ color: COLORS.cyan }} />
            <span className="font-black uppercase tracking-widest text-sm opacity-80 animate-pulse">{syncStatus || "Acessando Arquivo Central..."}</span>
          </div>
        ) : (
          <>
            {view === 'kanban' && <KanbanView data={data} theme={themeConfig} thick={bThick} med={bMedium} isDark={isDark} onEntityClick={handleEntityClick} onArticulatorClick={handleArticulatorClick} />}
            {view === 'dashboard' && <DashboardView data={data} theme={themeConfig} thick={bThick} med={bMedium} onEntityClick={handleEntityClick} onArticulatorClick={handleArticulatorClick} />}
            {view === 'entity_details' && selectedEntity && <EntityDetailsView entity={selectedEntity} onBack={() => setView('kanban')} theme={themeConfig} thick={bThick} med={bMedium} isDark={isDark} />}
            {view === 'articulator_details' && selectedArticulator && <ArticulatorView articulator={selectedArticulator} data={data} onBack={() => setView('kanban')} onEntityClick={handleEntityClick} theme={themeConfig} thick={bThick} med={bMedium} isDark={isDark} />}
            {view === 'settings' && (
              <SettingsView 
                isDark={isDark} setIsDark={setIsDark} 
                fontSizeLevel={fontSizeLevel} setFontSizeLevel={setFontSizeLevel}
                webhookUrl={webhookUrl} setWebhookUrl={setWebhookUrl} fetchFromWebhook={fetchFromWebhook}
                exportCSV={exportCSV} importCSV={importCSV}
                syncStatus={syncStatus} theme={themeConfig} thick={bThick} med={bMedium}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
}

// ==========================================
// COMPONENTES DE VISUALIZAÇÃO
// ==========================================

function KanbanView({ data, theme, thick, med, isDark, onEntityClick, onArticulatorClick }) {
  const columns = [
    { id: 'Aguardando Documentos', label: 'Aguardando Docs', color: COLORS.mustard, icon: <AlertCircle size={16}/> },
    { id: 'Em análise', label: 'Em Análise', color: COLORS.cyan, icon: <Clock size={16}/> },
    { id: 'Protocolado', label: 'Protocolado', color: COLORS.crimson, icon: <CheckCircle2 size={16} className="text-white"/> }
  ];

  const getColData = (status) => data.filter(d => {
    const s = String(d['STATUS DA ANÁLISE'] || '').trim();
    return s.toLowerCase() === status.toLowerCase();
  });

  return (
    <div className="flex flex-col md:flex-row gap-4 flex-1 items-stretch min-h-[500px]">
      {columns.map((col) => (
        <div key={col.id} className={`flex-1 flex flex-col ${thick} ${theme.cardBg}`}>
          <div 
            className={`p-3 font-bold flex items-center gap-2 uppercase tracking-wider border-b-[4px] ${theme.border}`}
            style={{ backgroundColor: col.color, color: col.id === 'Protocolado' ? 'white' : 'black' }}
          >
            {col.icon}
            {col.label}
            <span className="ml-auto bg-black text-white px-2 py-0.5 rounded-full" style={{ fontSize: '0.8em' }}>
              {getColData(col.id).length}
            </span>
          </div>
          
          <div className="p-3 flex flex-col gap-3 overflow-y-auto">
            {getColData(col.id).map((item, i) => (
              <div 
                key={i} 
                className={`p-3 ${med} hover:-translate-y-1 transition-transform cursor-pointer ${theme.bg}`}
                onClick={() => onEntityClick(item)}
              >
                <h3 
                  className="font-bold mb-2 uppercase" 
                  style={{ fontSize: '1.1em', color: COLORS.cyan }}
                >
                  {item.ENTIDADE || 'Sem Nome'}
                </h3>
                
                <div className="grid grid-cols-2 gap-2 opacity-80" style={{ fontSize: '0.9em' }}>
                  <div>
                    <span className="block text-[0.8em] uppercase font-bold opacity-70">Articulador</span>
                    <span 
                      className="cursor-pointer hover:underline decoration-2 underline-offset-2 relative z-10"
                      style={{ textDecorationColor: COLORS.mustard }}
                      onClick={(e) => {
                        e.stopPropagation(); // Impede que o clique "vaze" para o quadro da entidade
                        onArticulatorClick(item.ARTICULADOR);
                      }}
                    >
                      {item.ARTICULADOR || '-'}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[0.8em] uppercase font-bold opacity-70">Data</span>
                    {item['DATA DA SOLICITAÇÃO'] || '-'}
                  </div>
                </div>

                <div className={`mt-3 pt-2 border-t-[2px] ${theme.border} flex gap-1`}>
                  {['1 ', '2 ', '3 ', '4 ', '5 ', '8 ', '9 '].map(num => {
                    const docKey = Object.keys(item).find(k => k.startsWith(num.trim()));
                    const val = String(item[docKey] || '').toUpperCase();
                    const hasDoc = val === 'TRUE' || val === 'VERDADEIRO' || val === 'SIM';
                    return (
                      <div 
                        key={num} 
                        title={docKey}
                        className={`flex-1 h-2 ${hasDoc ? 'bg-black dark:bg-white' : 'bg-transparent border border-current opacity-30'}`}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
            {getColData(col.id).length === 0 && (
              <div className="text-center opacity-50 p-4 border-2 border-dashed border-current">
                Vazio
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function DashboardView({ data, theme, thick, med, onEntityClick, onArticulatorClick }) {
  const total = data.length;
  const protocolados = data.filter(d => String(d['STATUS DA ANÁLISE'] || '').trim().toLowerCase() === 'protocolado').length;
  const emAnalise = data.filter(d => String(d['STATUS DA ANÁLISE'] || '').trim().toLowerCase() === 'em análise').length;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className={`md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4`}>
        <div className={`p-4 ${thick} ${theme.cardBg} flex flex-col justify-between`} style={{ borderTopColor: COLORS.cyan, borderTopWidth: '8px' }}>
          <span className="font-bold uppercase opacity-70">Total de Pedidos</span>
          <span className="text-4xl font-black">{total}</span>
        </div>
        <div className={`p-4 ${thick} ${theme.cardBg} flex flex-col justify-between`} style={{ borderTopColor: COLORS.crimson, borderTopWidth: '8px' }}>
          <span className="font-bold uppercase opacity-70">Protocolados na ALESC</span>
          <span className="text-4xl font-black">{protocolados}</span>
        </div>
        <div className={`p-4 ${thick} ${theme.cardBg} flex flex-col justify-between`} style={{ borderTopColor: COLORS.mustard, borderTopWidth: '8px' }}>
          <span className="font-bold uppercase opacity-70">Em Análise Interna</span>
          <span className="text-4xl font-black">{emAnalise}</span>
        </div>
      </div>

      <div className={`md:col-span-1 p-4 ${thick} ${theme.cardBg} flex flex-col`}>
        <h2 className="font-bold uppercase border-b-[2px] border-current pb-2 mb-4">Progresso Geral</h2>
        <div className="flex-1 flex flex-col justify-end gap-2 h-40">
          <div className="flex items-end gap-2 h-full">
            <div className="w-1/3 flex flex-col items-center gap-1 h-full justify-end">
              <div className="w-full transition-all duration-500" style={{ height: `${(emAnalise/total)*100 || 0}%`, backgroundColor: COLORS.cyan, border: '2px solid currentcolor' }}></div>
              <span className="text-[10px] uppercase font-bold text-center">Análise</span>
            </div>
            <div className="w-1/3 flex flex-col items-center gap-1 h-full justify-end">
              <div className="w-full transition-all duration-500" style={{ height: `${((total-emAnalise-protocolados)/total)*100 || 0}%`, backgroundColor: COLORS.mustard, border: '2px solid currentcolor' }}></div>
              <span className="text-[10px] uppercase font-bold text-center">Docs</span>
            </div>
            <div className="w-1/3 flex flex-col items-center gap-1 h-full justify-end">
              <div className="w-full transition-all duration-500" style={{ height: `${(protocolados/total)*100 || 0}%`, backgroundColor: COLORS.crimson, border: '2px solid currentcolor' }}></div>
              <span className="text-[10px] uppercase font-bold text-center">ALESC</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`md:col-span-3 mt-4 ${thick} ${theme.cardBg} overflow-x-auto max-h-96`}>
        <table className="w-full text-left border-collapse">
          <thead className="sticky top-0 z-10" style={{ backgroundColor: theme.cardBg === 'bg-white' ? 'white' : '#1a1a1a' }}>
            <tr className={`border-b-[4px] ${theme.border} uppercase font-bold`}>
              <th className="p-3 border-r-[2px] border-current">Entidade</th>
              <th className="p-3 border-r-[2px] border-current">Articulador</th>
              <th className="p-3 border-r-[2px] border-current">Status</th>
              <th className="p-3">Data Solicitação</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className={`border-b-[2px] ${theme.border} opacity-90 hover:opacity-100 transition-opacity`}>
                <td 
                  className="p-3 border-r-[2px] border-current font-bold cursor-pointer hover:underline decoration-2 underline-offset-4"
                  style={{ textDecorationColor: COLORS.cyan }}
                  onClick={() => onEntityClick(row)}
                >
                  {row.ENTIDADE}
                </td>
                <td 
                  className="p-3 border-r-[2px] border-current cursor-pointer hover:underline decoration-2 underline-offset-2"
                  style={{ textDecorationColor: COLORS.mustard }}
                  onClick={() => onArticulatorClick(row.ARTICULADOR)}
                >
                  {row.ARTICULADOR}
                </td>
                <td className="p-3 border-r-[2px] border-current">
                  <span className="px-2 py-1 bg-black text-white rounded text-[0.85em]">
                    {row['STATUS DA ANÁLISE'] || '-'}
                  </span>
                </td>
                <td className="p-3">{row['DATA DA SOLICITAÇÃO'] || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function EntityDetailsView({ entity, onBack, theme, thick, med, isDark }) {
  const keys = Object.keys(entity).filter(k => k.trim() !== '');
  
  return (
    <div className="flex flex-col gap-4 animate-in fade-in duration-300 w-full max-w-5xl mx-auto">
      <div className="flex items-center gap-4 border-b-[4px] border-current pb-4">
        <button 
          onClick={onBack}
          className={`p-2 ${thick} ${theme.cardBg} hover:-translate-x-1 transition-transform`}
        >
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest">Ficha Institucional</h2>
      </div>

      <div className={`p-6 ${thick} ${theme.cardBg} flex flex-col gap-6`}>
        <div className={`border-l-[8px] pl-4`} style={{ borderColor: COLORS.cyan }}>
          <h3 className="text-2xl md:text-3xl font-black uppercase">{entity.ENTIDADE || 'Entidade Sem Nome'}</h3>
          <p className="opacity-70 font-bold uppercase tracking-wider mt-1">Articulador: {entity.ARTICULADOR || '-'}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {keys.map((key, i) => {
            if (key === 'ENTIDADE' || key === 'ARTICULADOR') return null;
            const val = entity[key];
            const isBool = val === 'TRUE' || val === 'FALSE' || val === 'VERDADEIRO' || val === 'FALSO';
            
            let displayVal = val || '-';
            let valColor = 'inherit';

            if (isBool) {
               const isTrue = val === 'TRUE' || val === 'VERDADEIRO';
               displayVal = isTrue ? '✓ Entregue' : 'Pendente';
               valColor = isTrue ? (isDark ? '#4ade80' : '#166534') : (isDark ? '#f87171' : '#991b1b');
            }

            return (
              <div key={i} className={`p-3 ${med} flex flex-col gap-1 ${theme.bg}`}>
                <span className="text-[10px] font-black uppercase tracking-widest opacity-60">{key}</span>
                <span className="font-bold text-sm uppercase break-words" style={{ color: valColor }}>{displayVal}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ArticulatorView({ articulator, data, onBack, onEntityClick, theme, thick, med, isDark }) {
  const myEntities = data.filter(d => d.ARTICULADOR === articulator);
  const protocolados = myEntities.filter(d => String(d['STATUS DA ANÁLISE'] || '').trim().toLowerCase() === 'protocolado').length;
  
  return (
    <div className="flex flex-col gap-4 animate-in fade-in duration-300 w-full max-w-6xl mx-auto">
      <div className="flex items-center gap-4 border-b-[4px] border-current pb-4">
        <button 
          onClick={onBack}
          className={`p-2 ${thick} ${theme.cardBg} hover:-translate-x-1 transition-transform`}
        >
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest flex items-center gap-3">
          <UserIcon size={28} /> Painel do Articulador
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className={`p-6 ${thick} ${theme.cardBg} lg:col-span-1 flex flex-col border-t-[8px] h-fit`} style={{ borderTopColor: COLORS.mustard }}>
          <h3 className="text-2xl md:text-3xl font-black uppercase">{articulator || 'Sem Nome'}</h3>
          <p className="opacity-70 font-bold uppercase tracking-wider mt-2">Membro da Equipe</p>
          
          <div className="mt-8 flex flex-col gap-3">
            <div className={`p-4 ${med} flex justify-between items-center ${theme.bg}`}>
              <span className="text-[11px] font-black uppercase tracking-widest opacity-80">Total de Entidades</span>
              <span className="font-black text-2xl">{myEntities.length}</span>
            </div>
            <div className={`p-4 ${med} flex justify-between items-center ${theme.bg}`}>
              <span className="text-[11px] font-black uppercase tracking-widest opacity-80">Protocolados</span>
              <span className="font-black text-2xl" style={{ color: COLORS.cyan }}>{protocolados}</span>
            </div>
          </div>
        </div>

        <div className={`lg:col-span-2 ${thick} ${theme.cardBg} overflow-x-auto`}>
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 z-10" style={{ backgroundColor: theme.cardBg === 'bg-white' ? 'white' : '#1a1a1a' }}>
              <tr className={`border-b-[4px] ${theme.border} uppercase font-bold`}>
                <th className="p-4 border-r-[2px] border-current">Entidade (Acessar Ficha)</th>
                <th className="p-4 border-r-[2px] border-current">Status</th>
                <th className="p-4 min-w-[150px]">Progresso (Docs)</th>
              </tr>
            </thead>
            <tbody>
              {myEntities.map((row, i) => {
                let docsTotal = 0;
                let docsEntregues = 0;
                ['1 ', '2 ', '3 ', '4 ', '5 ', '8 ', '9 '].forEach(num => {
                  const docKey = Object.keys(row).find(k => k.startsWith(num.trim()));
                  if(docKey) {
                    docsTotal++;
                    const val = String(row[docKey] || '').toUpperCase();
                    if(val === 'TRUE' || val === 'VERDADEIRO' || val === 'SIM') docsEntregues++;
                  }
                });

                return (
                  <tr key={i} className={`border-b-[2px] ${theme.border} opacity-90 hover:opacity-100 transition-opacity`}>
                    <td 
                      className="p-4 border-r-[2px] border-current font-bold cursor-pointer hover:underline decoration-2 underline-offset-4"
                      style={{ textDecorationColor: COLORS.cyan }}
                      onClick={() => onEntityClick(row)}
                    >
                      {row.ENTIDADE}
                    </td>
                    <td className="p-4 border-r-[2px] border-current">
                      <span className="px-2 py-1 bg-black text-white dark:bg-white dark:text-black font-bold uppercase rounded-sm text-[10px] tracking-wider">
                        {row['STATUS DA ANÁLISE'] || '-'}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className={`w-full h-3 border-[2px] ${theme.border} flex overflow-hidden`} style={{ backgroundColor: theme.gridLines }}>
                        <div 
                          className="h-full transition-all duration-500" 
                          style={{ 
                            width: `${(docsEntregues/docsTotal)*100 || 0}%`,
                            backgroundColor: COLORS.mustard,
                            borderRight: docsEntregues > 0 ? `2px solid ${isDark ? '#fff' : '#000'}` : 'none'
                          }}
                        />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-60 mt-1 block text-right">
                        {docsEntregues} / {docsTotal}
                      </span>
                    </td>
                  </tr>
                );
              })}
              {myEntities.length === 0 && (
                 <tr>
                    <td colSpan="3" className="p-6 text-center opacity-50 font-bold uppercase tracking-widest">Nenhuma entidade associada.</td>
                 </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function SettingsView({ isDark, setIsDark, fontSizeLevel, setFontSizeLevel, webhookUrl, setWebhookUrl, fetchFromWebhook, exportCSV, importCSV, syncStatus, theme, thick, med }) {
  const [openSection, setOpenSection] = useState('aparencia'); // 'aparencia' já começa aberto

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className={`max-w-3xl mx-auto flex flex-col gap-4 w-full`}>
      <h2 className={`font-black uppercase text-xl border-b-[4px] border-current pb-2 mb-2 flex items-center gap-2 ${thick} p-4 ${theme.cardBg}`}>
        <Settings /> Configurações do Tabulum
      </h2>

      {/* BLOCO 1: APARÊNCIA E LEITURA */}
      <div className={`${thick} ${theme.cardBg}`}>
        <button 
          onClick={() => toggleSection('aparencia')}
          className="w-full p-4 flex justify-between items-center text-sm font-black uppercase tracking-widest"
        >
          <span className="flex items-center gap-2"><Sun size={18} /> Aparência e Leitura</span>
          <span className="text-xl leading-none">{openSection === 'aparencia' ? '−' : '+'}</span>
        </button>
        
        {openSection === 'aparencia' && (
          <div className={`p-4 border-t-[4px] ${theme.border} flex flex-col gap-6`}>
            {/* TEMA VISUAL */}
            <div className="flex flex-col gap-3">
              <label className="font-bold uppercase tracking-wider opacity-80">Modo de Exibição</label>
              <div className="flex gap-4">
                <button 
                  onClick={() => setIsDark(false)}
                  className={`flex-1 p-4 border-[3px] border-current flex items-center justify-center gap-2 uppercase font-bold transition-transform hover:-translate-y-1 ${!isDark ? 'bg-black text-white' : 'bg-white text-black'}`}
                >
                  <Sun size={20} /> Claro
                </button>
                <button 
                  onClick={() => setIsDark(true)}
                  className={`flex-1 p-4 border-[3px] border-current flex items-center justify-center gap-2 uppercase font-bold transition-transform hover:-translate-y-1 ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}
                >
                  <Moon size={20} /> Escuro
                </button>
              </div>
            </div>

            {/* TAMANHO DA FONTE */}
            <div className="flex flex-col gap-3">
              <label className="font-bold uppercase tracking-wider opacity-80 flex items-center gap-2">
                <Type size={18}/> Tamanho da Fonte
              </label>
              <div className={`flex items-center justify-between p-2 border-[3px] ${theme.border}`}>
                {[1, 2, 3, 4, 5].map(level => (
                  <button
                    key={level}
                    onClick={() => setFontSizeLevel(level)}
                    className={`w-12 h-12 flex items-center justify-center font-bold border-[2px] border-current transition-colors
                      ${fontSizeLevel === level ? (isDark ? 'bg-white text-black' : 'bg-black text-white') : 'hover:bg-gray-500/20'}`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* BLOCO 2: BACKUP E RECUPERAÇÃO */}
      <div className={`${thick} ${theme.cardBg}`}>
        <button 
          onClick={() => toggleSection('backup')}
          className="w-full p-4 flex justify-between items-center text-sm font-black uppercase tracking-widest"
        >
          <span className="flex items-center gap-2"><Save size={18} /> Backup e Restauração (.CSV)</span>
          <span className="text-xl leading-none">{openSection === 'backup' ? '−' : '+'}</span>
        </button>
        
        {openSection === 'backup' && (
          <div className={`p-4 border-t-[4px] ${theme.border} flex flex-col gap-3`}>
            <p className="opacity-80" style={{ fontSize: '0.9em' }}>
              Baixe os dados atuais para preservação ou carregue um arquivo CSV de backup para visualização imediata no Kanban.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-2">
              <button 
                onClick={exportCSV}
                className={`flex-1 p-4 ${med} flex items-center justify-center gap-2 uppercase font-bold hover:bg-[${COLORS.mustard}] hover:text-black transition-colors`}
                style={{ backgroundColor: COLORS.cyan, color: 'black' }}
              >
                <Download size={20} /> Baixar CSV (Backup)
              </button>
              
              <div className="flex-1 relative">
                <input 
                  type="file" 
                  accept=".csv"
                  onChange={importCSV}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  title="Carregar Backup CSV"
                />
                <div className={`p-4 ${med} flex items-center justify-center gap-2 uppercase font-bold pointer-events-none`}
                     style={{ backgroundColor: COLORS.mustard, color: 'black' }}>
                  <Upload size={20} /> Restaurar CSV
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* BLOCO 3: SISTEMA (AVANÇADO) */}
      <div className={`border-[4px] border-gray-400 dark:border-gray-600 ${isDark ? 'bg-[#121212]' : 'bg-[#e5e5e5]'}`}>
        <button 
          onClick={() => toggleSection('sistema')}
          className="w-full p-4 flex justify-between items-center text-sm font-black uppercase tracking-widest opacity-80"
        >
          <span className="flex items-center gap-2"><Database size={18} /> Sistema e Rede (Avançado)</span>
          <span className="text-xl leading-none">{openSection === 'sistema' ? '−' : '+'}</span>
        </button>
        
        {openSection === 'sistema' && (
          <div className={`p-4 border-t-[4px] border-current flex flex-col gap-3 opacity-90`}>
            <p className="opacity-80" style={{ fontSize: '0.9em' }}>
              URL de integração com o Google Apps Script. <strong>Não altere</strong> a menos que a planilha matriz tenha mudado de servidor.
            </p>
            <div className="flex flex-col md:flex-row gap-2">
              <input 
                type="text" 
                placeholder="https://script.google.com/macros/s/..." 
                className={`flex-1 p-3 border-[3px] border-current bg-transparent outline-none focus:border-[${COLORS.cyan}] opacity-70`}
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
              />
              <button 
                onClick={fetchFromWebhook}
                className="p-3 bg-black text-white dark:bg-white dark:text-black font-bold uppercase border-[3px] border-current hover:-translate-y-1 transition-transform flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <RefreshCw size={18} /> Testar Link
              </button>
            </div>
            {syncStatus && (
              <p className="font-bold mt-1" style={{ color: syncStatus.includes('Erro') ? COLORS.crimson : COLORS.cyan }}>
                {syncStatus}
              </p>
            )}
          </div>
        )}
      </div>

    </div>
  );
}

// Utilitário de Botão de Navegação
function NavButton({ active, onClick, icon, label, isDark }) {
  const activeClass = active 
    ? (isDark ? 'bg-white text-black border-white scale-105 shadow-[0_4px_0_rgba(255,255,255,0.3)]' : 'bg-black text-white border-black scale-105 shadow-[0_4px_0_rgba(0,0,0,0.3)]') 
    : 'border-[rgba(128,128,128,0.3)] hover:border-current opacity-80 hover:opacity-100 hover:scale-[1.02]';

  return (
    <button 
      onClick={onClick}
      className={`flex-1 md:flex-none flex items-center justify-center gap-3 px-6 py-4 font-bold uppercase tracking-wider border-[4px] transition-all duration-200 cursor-pointer ${activeClass}`}
      style={{ fontSize: '1.05em', minWidth: '150px' }}
    >
      {icon} <span>{label}</span>
    </button>
  );
}
