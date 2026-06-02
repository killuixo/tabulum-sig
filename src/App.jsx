import React, { useState, useEffect, useRef } from 'react';

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
const PlusIcon = (p) => <Icon {...p} path={<><path d="M5 12h14"/><path d="M12 5v14"/></>} />;
const TrashIcon = (p) => <Icon {...p} path={<><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></>} />;
const SearchIcon = (p) => <Icon {...p} path={<><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>} />;

const COLORS = { cyan: '#00b7eb', crimson: '#DC143C', mustard: '#FFDB58' };

const EQUIPE_SEMENTE = [
  "Alexandre", "André", "Arthur", "Bia", "Cadu", "Caio", "Carla", "Carol Figueredo", 
  "Carol Morgan", "Cláudio", "Edina", "Fernando", "Gabriel", "Gelso", "Gislaine", 
  "Guilherme", "Guito", "Guto", "Isabel", "Jekupe", "Kerexu", "Lais", "Lea", "Leon", 
  "Lê", "Liandra", "Linete", "Lui", "Luis BL", "Maira", "Manu", "Marquinhos", 
  "Marquito", "Mayne", "Mexiana", "Mirê", "Odara", "Paty", "Pedro Guedes", "Tânia", 
  "Toninho", "Victor Klauck", "Vina", "Xalinska"
];

export default function App() {
  const [data, setData] = useState([]);
  const [equipe, setEquipe] = useState(EQUIPE_SEMENTE);
  
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('kanban'); 
  const [isDark, setIsDark] = useState(true);
  const [fontSizeLevel, setFontSizeLevel] = useState(2); 
  
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [selectedArticulator, setSelectedArticulator] = useState(null);

  // Armazenamento das URLs de Webhook (Utilidade Pública e Equipe)
  const [webhookUrl, setWebhookUrl] = useState(() => localStorage.getItem('tabulum_webhook') || '');
  const [webhookEquipe, setWebhookEquipe] = useState(() => localStorage.getItem('tabulum_equipe') || '');
  const [syncStatus, setSyncStatus] = useState('');

  useEffect(() => { localStorage.setItem('tabulum_webhook', webhookUrl); }, [webhookUrl]);
  useEffect(() => { localStorage.setItem('tabulum_equipe', webhookEquipe); }, [webhookEquipe]);

  // Rotinas de Inicialização
  useEffect(() => {
    if (webhookUrl) fetchFromWebhook();
    else setLoading(false);
    if (webhookEquipe) fetchEquipe();
  }, []);

  const handleEntityClick = (entityData) => { setSelectedEntity(entityData); setView('entity_details'); };
  const handleArticulatorClick = (e, articulatorName) => {
    e.stopPropagation(); 
    if (!articulatorName || articulatorName === '-') return;
    setSelectedArticulator(articulatorName); setView('articulator_details');
  };

  const fetchFromWebhook = async () => {
    if (!webhookUrl) { setSyncStatus('Nenhum servidor configurado.'); return; }
    setLoading(true); setSyncStatus('Acessando Arquivo Central...');
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
            if (typeof val === 'string' && val.includes('T') && val.includes('Z')) val = new Date(val).toLocaleDateString('pt-BR');
            newItem[key] = val;
          }
          return newItem;
        });
        setData(formattedData); setSyncStatus('Sincronizado!');
      } catch(e) { setData(parseCSV(text)); setSyncStatus('Sincronizado (CSV).'); }
    } catch (error) { setSyncStatus('Erro de conexão com o Drive.'); } finally {
      setLoading(false); setTimeout(() => setSyncStatus(''), 5000);
    }
  };

  const fetchEquipe = async () => {
    if (!webhookEquipe) return;
    try {
      const response = await fetch(webhookEquipe);
      const text = await response.text();
      const jsonData = JSON.parse(text);
      // Extrai os nomes da coluna NOME ou ARTICULADOR
      const nomes = jsonData.map(item => item.NOME || item.ARTICULADOR).filter(Boolean);
      if (nomes.length > 0) setEquipe(nomes.sort());
    } catch(e) { console.warn("Falha ao puxar equipe", e); }
  };

  const handleSubmitNewEntity = async (newEntity) => {
    setData([...data, newEntity]); setView('kanban');
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(newEntity)
        });
      } catch (error) { console.error("Erro ao inserir:", error); }
    }
  };

  const handleDeleteEntity = async (entidadeNome) => {
    if (!window.confirm(`Tem certeza que deseja APAGAR os registros de "${entidadeNome}"? Esta ação deletará a linha na planilha do Google.`)) return;
    
    setData(data.filter(d => d.ENTIDADE !== entidadeNome));
    setView('kanban');

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({ action: 'delete', ENTIDADE: entidadeNome })
        });
      } catch (error) { console.error("Erro ao deletar:", error); }
    }
  };

  const exportCSV = () => {
    if (data.length === 0) { alert("Vazio."); return; }
    const headers = Object.keys(data[0]); const csvRows = []; csvRows.push(headers.join(','));
    for (const row of data) {
      const values = headers.map(header => {
        const val = row[header] === null || row[header] === undefined ? '' : String(row[header]);
        let escaped = val.replace(/"/g, '""'); if (escaped.search(/("|,|\n)/g) >= 0) escaped = `"${escaped}"`;
        return escaped;
      });
      csvRows.push(values.join(','));
    }
    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a'); link.href = URL.createObjectURL(blob);
    link.download = `Tabulum_Backup_${new Date().toISOString().slice(0,10)}.csv`;
    link.click();
  };

  const importCSV = (e) => {
    const file = e.target.files[0]; if (!file) return;
    setLoading(true); const reader = new FileReader();
    reader.onload = (evt) => { setData(parseCSV(evt.target.result)); setLoading(false); };
    reader.readAsText(file); e.target.value = '';
  };

  const parseCSV = (str) => {
    const lines = str.split(/\r?\n/).filter(line => line.trim() !== ''); if (lines.length < 2) return [];
    const headers = lines[0].split(',').map(h => h.replace(/(^"|"$)/g, '').trim()); const result = [];
    for (let i = 1; i < lines.length; i++) {
      const currentline = lines[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/); const obj = {};
      for (let j = 0; j < headers.length; j++) obj[headers[j]] = currentline[j] ? currentline[j].replace(/(^"|"$)/g, '').trim() : '';
      result.push(obj);
    }
    return result;
  };

  const fontSizes = { 1: 'text-[10px] leading-tight', 2: 'text-xs', 3: 'text-sm', 4: 'text-base', 5: 'text-lg' };
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
      <header className={`flex flex-col md:flex-row border-b-[6px] ${themeConfig.border}`}>
        <div className={`flex-1 p-4 md:p-6 ${bMedium} border-b-0 md:border-b-0 md:border-r-[6px] flex items-center justify-between`}>
          <div>
            <h1 className="font-black uppercase tracking-widest" style={{ fontSize: '1.8em' }}>TABULUM</h1>
            <p className="opacity-80 font-bold uppercase tracking-wider mt-1" style={{ fontSize: '0.85em', color: COLORS.cyan }}>Gestão de Utilidade Pública</p>
          </div>
          <div className="hidden md:flex gap-2">
            <div className="w-10 h-10" style={{ backgroundColor: COLORS.cyan, border: `3px solid ${isDark ? '#fff' : '#000'}` }}></div>
            <div className="w-10 h-10" style={{ backgroundColor: COLORS.mustard, border: `3px solid ${isDark ? '#fff' : '#000'}` }}></div>
            <div className="w-10 h-10" style={{ backgroundColor: COLORS.crimson, border: `3px solid ${isDark ? '#fff' : '#000'}` }}></div>
          </div>
        </div>

        <nav className={`flex p-3 md:p-4 gap-3 overflow-x-auto ${themeConfig.cardBg} items-center justify-start md:justify-center`}>
          <NavButton active={view === 'kanban'} onClick={() => setView('kanban')} icon={<Kanban />} label="Kanban" isDark={isDark} />
          <NavButton active={view === 'dashboard'} onClick={() => setView('dashboard')} icon={<LayoutDashboard />} label="Dashboard" isDark={isDark} />
          <NavButton active={view === 'add_entity'} onClick={() => setView('add_entity')} icon={<PlusIcon />} label="Novo" isDark={isDark} />
          <NavButton active={view === 'settings' || view === 'system'} onClick={() => setView('settings')} icon={<Settings />} label="Ajustes" isDark={isDark} />
        </nav>
      </header>

      <main className="p-4 md:p-6 flex-1 flex flex-col relative">
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-50 backdrop-blur-sm bg-black/20">
            <RefreshCw className="animate-spin" size={48} style={{ color: COLORS.cyan }} />
            <span className="font-black uppercase tracking-widest text-sm opacity-80 animate-pulse bg-black text-white px-4 py-2">{syncStatus || "Processando..."}</span>
          </div>
        )}

        <>
          {view === 'kanban' && <KanbanView data={data} theme={themeConfig} thick={bThick} med={bMedium} isDark={isDark} onEntityClick={handleEntityClick} onArticulatorClick={handleArticulatorClick} />}
          {view === 'dashboard' && <DashboardView data={data} theme={themeConfig} thick={bThick} med={bMedium} onEntityClick={handleEntityClick} onArticulatorClick={handleArticulatorClick} />}
          {view === 'add_entity' && <AddEntityView equipe={equipe} onSubmit={handleSubmitNewEntity} theme={themeConfig} thick={bThick} med={bMedium} isDark={isDark} />}
          {view === 'entity_details' && selectedEntity && <EntityDetailsView entity={selectedEntity} onBack={() => setView('kanban')} onDelete={() => handleDeleteEntity(selectedEntity.ENTIDADE)} theme={themeConfig} thick={bThick} med={bMedium} isDark={isDark} />}
          {view === 'articulator_details' && selectedArticulator && <ArticulatorView articulator={selectedArticulator} data={data} onBack={() => setView('kanban')} onEntityClick={handleEntityClick} theme={themeConfig} thick={bThick} med={bMedium} isDark={isDark} />}
          {view === 'settings' && <SettingsView isDark={isDark} setIsDark={setIsDark} fontSizeLevel={fontSizeLevel} setFontSizeLevel={setFontSizeLevel} exportCSV={exportCSV} importCSV={importCSV} theme={themeConfig} thick={bThick} med={bMedium} onOpenSystem={() => setView('system')} />}
          {view === 'system' && <SystemView webhookUrl={webhookUrl} setWebhookUrl={setWebhookUrl} webhookEquipe={webhookEquipe} setWebhookEquipe={setWebhookEquipe} fetchFromWebhook={fetchFromWebhook} fetchEquipe={fetchEquipe} syncStatus={syncStatus} theme={themeConfig} thick={bThick} onBack={() => setView('settings')} />}
        </>
      </main>
    </div>
  );
}

function AddEntityView({ equipe, onSubmit, theme, thick, med, isDark }) {
  const [formData, setFormData] = useState({ ENTIDADE: '', ARTICULADOR: '', LIDERANÇA: '', TELEFONE: '', EMAIL: '', OBSERVAÇÕES: '' });
  const [searchArt, setSearchArt] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropRef = useRef(null);

  const filteredEquipe = equipe.filter(nome => nome.toLowerCase().includes(searchArt.toLowerCase()));

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => { if (dropRef.current && !dropRef.current.contains(event.target)) setShowDropdown(false); };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropRef]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSave = () => {
    if (!formData.ENTIDADE || !formData.ARTICULADOR) { alert("Atenção: Nome da Entidade e Articulador são preenchimentos obrigatórios."); return; }
    const dataAtual = new Date().toLocaleDateString('pt-BR');
    const newEntity = {
      ...formData,
      'DATA DA SOLICITAÇÃO': dataAtual, 'STATUS DA ANÁLISE': 'Aguardando Documentos',
      'MANUAL/MODELOS ENVIADOS': 'FALSE', '1 ATA DE FUNDAÇÃO': 'FALSE', '2 ATA DE ELEIÇÃO/POSSE': 'FALSE',
      '3 CNPJ': 'FALSE', '4 DECLARAÇÃO NÃO OSCIP': 'FALSE', '5 DECLARAÇÃO FUNCIONAMENTO': 'FALSE',
      '6 - 7 DECLARAÇÃO REMUNERAÇÃO': 'FALSE', '8 ESTATUTO': 'FALSE', '9 RELATÓRIO DE ATIVIDADES': 'FALSE',
      'DATA DO ENVIO ALESC': '', 'Nº DO PROCESSO ALESC': '', 'ESTÁGIO ATUAL': ''
    };
    onSubmit(newEntity);
  };

  const inputClass = `w-full p-4 ${med} bg-transparent outline-none focus:border-[${COLORS.cyan}] font-bold transition-colors mb-4`;
  const labelClass = "text-[10px] font-black uppercase tracking-widest opacity-70 mb-2 block";

  return (
    <div className={`max-w-3xl mx-auto flex flex-col w-full animate-in fade-in duration-300 ${thick} ${theme.cardBg} p-6 md:p-8`}>
      <div className="flex items-center gap-3 border-b-[4px] border-current pb-4 mb-6">
        <div className="w-8 h-8 flex items-center justify-center bg-black text-white dark:bg-white dark:text-black"><PlusIcon size={20} /></div>
        <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest">Novo Processo</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        <div className="md:col-span-2">
          <label className={labelClass}>Nome da Entidade Institucional *</label>
          <input type="text" name="ENTIDADE" placeholder="Associação Comunitária..." value={formData.ENTIDADE} onChange={handleChange} className={inputClass} />
        </div>
        
        {/* COMPONENTE SUSPENSO DE BUSCA DO ARTICULADOR */}
        <div className="md:col-span-1 relative" ref={dropRef}>
          <label className={labelClass}>Articulador Responsável *</label>
          <div className="relative">
             <input type="text" placeholder="Buscar ou Digitar Novo..." value={searchArt || formData.ARTICULADOR} 
                    onChange={(e) => { setSearchArt(e.target.value); setFormData({...formData, ARTICULADOR: e.target.value}); setShowDropdown(true); }}
                    onFocus={() => setShowDropdown(true)}
                    className={`${inputClass} pr-10`} />
             <SearchIcon size={16} className="absolute right-4 top-5 opacity-50 pointer-events-none" />
          </div>
          
          {showDropdown && (
            <div className={`absolute z-50 w-full mt-[-10px] max-h-48 overflow-y-auto ${thick} ${theme.cardBg} shadow-xl`}>
              {filteredEquipe.map(nome => (
                <div key={nome} onClick={() => { setFormData({...formData, ARTICULADOR: nome}); setSearchArt(''); setShowDropdown(false); }}
                     className={`p-3 font-bold border-b-[2px] ${theme.border} cursor-pointer hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors`}>
                  {nome}
                </div>
              ))}
              {filteredEquipe.length === 0 && <div className="p-3 opacity-50 text-[10px] uppercase font-black tracking-widest text-center">Nenhum na equipe. Pressione Salvar para criar novo.</div>}
            </div>
          )}
        </div>

        <div className="md:col-span-1">
          <label className={labelClass}>Liderança Comunitária (Contato Local)</label>
          <input type="text" name="LIDERANÇA" placeholder="Nome do Presidente/Representante" value={formData['LIDERANÇA']} onChange={handleChange} className={inputClass} />
        </div>
        <div className="md:col-span-1">
          <label className={labelClass}>Telefone de Contato</label>
          <input type="text" name="TELEFONE" placeholder="(00) 00000-0000" value={formData.TELEFONE} onChange={handleChange} className={inputClass} />
        </div>
        <div className="md:col-span-1">
          <label className={labelClass}>Correio Eletrônico (E-mail)</label>
          <input type="text" name="EMAIL" placeholder="contato@instituicao.org" value={formData.EMAIL} onChange={handleChange} className={inputClass} />
        </div>
        <div className="md:col-span-2">
          <label className={labelClass}>Observações e Anotações Iniciais</label>
          <textarea name="OBSERVAÇÕES" value={formData['OBSERVAÇÕES']} onChange={handleChange} rows="3" placeholder="Informações de contexto..." className={`${inputClass} resize-none`}></textarea>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button onClick={handleSave} className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black font-black uppercase tracking-widest border-[4px] border-transparent hover:-translate-y-1 transition-transform shadow-[4px_4px_0px_rgba(0,183,235,1)] hover:shadow-none">
          Salvar no Arquivo Central
        </button>
      </div>
    </div>
  );
}

function KanbanView({ data, theme, thick, med, isDark, onEntityClick, onArticulatorClick }) {
  const [collapsedCols, setCollapsedCols] = useState({});
  const toggleCol = (id) => setCollapsedCols(prev => ({ ...prev, [id]: !prev[id] }));

  const columns = [
    { id: 'Aguardando Documentos', label: 'Aguardando Docs', color: COLORS.mustard, icon: <AlertCircle size={16}/> },
    { id: 'Em análise', label: 'Em Análise', color: COLORS.crimson, icon: <Clock size={16}/> },
    { id: 'Protocolado', label: 'Protocolado', color: COLORS.cyan, icon: <CheckCircle2 size={16} /> }
  ];

  const DOC_MAPPING = [
    { label: 'Ata de Fundação', keyMatch: '1 ' }, { label: 'Ata de Eleição/Posse', keyMatch: '2 ' },
    { label: 'CNPJ', keyMatch: '3 ' }, { label: 'Declaração Não OSCIP', keyMatch: '4 ' },
    { label: 'Declaração de Funcionamento', keyMatch: '5 ' }, { label: 'Declaração Remuneração (P1)', keyMatch: '6 - 7' },
    { label: 'Declaração Remuneração (P2)', keyMatch: '6 - 7' }, { label: 'Estatuto', keyMatch: '8 ' },
    { label: 'Relatório de Atividades', keyMatch: '9 ' }
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 flex-1 items-stretch min-h-[500px]">
      {columns.map((col) => {
        const isCollapsed = collapsedCols[col.id];
        const colData = data.filter(d => String(d['STATUS DA ANÁLISE'] || '').trim().toLowerCase() === col.id.toLowerCase());

        return (
          <div key={col.id} className={`flex flex-col ${thick} ${theme.cardBg} transition-all duration-300 ${isCollapsed ? 'flex-none md:w-16' : 'flex-1'}`}>
            <div onClick={() => toggleCol(col.id)} className={`p-3 font-bold flex items-center gap-2 uppercase tracking-wider border-b-[4px] ${theme.border} cursor-pointer hover:brightness-110 transition-all select-none ${isCollapsed ? 'justify-center md:flex-col md:py-6 h-full border-b-0' : 'justify-between'}`} style={{ backgroundColor: col.color, color: 'black' }}>
              <div className={`flex items-center gap-2 ${isCollapsed ? 'md:flex-col' : ''}`}>
                {col.icon} {!isCollapsed && <span>{col.label}</span>}
              </div>
              <span className={`bg-black text-white px-2 py-0.5 rounded-full font-black ${isCollapsed ? 'mt-2 md:mt-4 text-[10px]' : 'text-xs'}`}>{colData.length}</span>
            </div>
            
            {!isCollapsed && (
              <div className="p-3 flex flex-col gap-3 overflow-y-auto">
                {colData.map((item, i) => {
                  const docStatuses = DOC_MAPPING.map(doc => {
                    const docKey = Object.keys(item).find(k => k.startsWith(doc.keyMatch));
                    const val = String(item[docKey] || '').toUpperCase();
                    return { label: doc.label, hasDoc: val === 'TRUE' || val === 'VERDADEIRO' || val === 'SIM' };
                  });
                  const deliveredCount = docStatuses.filter(d => d.hasDoc).length;
                  let progressColor = 'transparent';
                  if (deliveredCount > 0 && deliveredCount <= 3) progressColor = COLORS.crimson;
                  else if (deliveredCount >= 4 && deliveredCount <= 8) progressColor = COLORS.mustard;
                  else if (deliveredCount === 9) progressColor = COLORS.cyan;

                  return (
                    <div key={i} className={`p-3 ${med} hover:-translate-y-1 transition-transform cursor-pointer ${theme.bg}`} onClick={() => onEntityClick(item)}>
                      <h3 className="font-bold mb-2 uppercase text-[1.1em]">{item.ENTIDADE || 'Sem Nome'}</h3>
                      <div className="grid grid-cols-2 gap-2 opacity-80 text-[0.9em]">
                        <div>
                          <span className="block text-[0.8em] uppercase font-bold opacity-70">Articulador</span>
                          <span className="cursor-pointer hover:underline decoration-2 underline-offset-2 relative z-10 font-bold" style={{ textDecorationColor: col.color, color: col.color }} onClick={(e) => onArticulatorClick(e, item.ARTICULADOR)}>{item.ARTICULADOR || '-'}</span>
                        </div>
                        <div>
                          <span className="block text-[0.8em] uppercase font-bold opacity-70">Data</span>
                          {item['DATA DA SOLICITAÇÃO'] || '-'}
                        </div>
                      </div>
                      <div className={`mt-3 pt-2 border-t-[2px] ${theme.border} flex gap-1 h-3`}>
                        {docStatuses.map((doc, idx) => (
                          <div key={idx} className="group relative flex-1 h-full cursor-help">
                            <div className={`w-full h-full transition-colors duration-300 ${doc.hasDoc ? '' : 'border border-current opacity-20'}`} style={{ backgroundColor: doc.hasDoc ? progressColor : 'transparent' }} />
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block z-50 pointer-events-none">
                              <div className="bg-black text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 whitespace-nowrap shadow-md">{doc.label} {doc.hasDoc ? '✓' : 'Pendente'}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        );
      })}
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
        <div className={`p-4 ${thick} ${theme.cardBg} flex flex-col justify-between border-t-[8px]`} style={{ borderTopColor: COLORS.mustard }}><span className="font-bold uppercase opacity-70">Pedidos Totais</span><span className="text-4xl font-black">{total}</span></div>
        <div className={`p-4 ${thick} ${theme.cardBg} flex flex-col justify-between border-t-[8px]`} style={{ borderTopColor: COLORS.cyan }}><span className="font-bold uppercase opacity-70">Protocolados ALESC</span><span className="text-4xl font-black">{protocolados}</span></div>
        <div className={`p-4 ${thick} ${theme.cardBg} flex flex-col justify-between border-t-[8px]`} style={{ borderTopColor: COLORS.crimson }}><span className="font-bold uppercase opacity-70">Em Análise Interna</span><span className="text-4xl font-black">{emAnalise}</span></div>
      </div>
      <div className={`md:col-span-3 mt-4 ${thick} ${theme.cardBg} overflow-x-auto max-h-96`}>
        <table className="w-full text-left border-collapse">
          <thead className="sticky top-0 z-10" style={{ backgroundColor: theme.cardBg === 'bg-white' ? 'white' : '#1a1a1a' }}>
            <tr className={`border-b-[4px] ${theme.border} uppercase font-bold`}>
              <th className="p-3 border-r-[2px] border-current">Entidade</th>
              <th className="p-3 border-r-[2px] border-current">Articulador</th>
              <th className="p-3 border-r-[2px] border-current">Status</th>
              <th className="p-3">Data</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className={`border-b-[2px] ${theme.border} opacity-90 hover:opacity-100 transition-opacity`}>
                <td className="p-3 border-r-[2px] border-current font-bold cursor-pointer hover:underline" style={{ textDecorationColor: COLORS.cyan }} onClick={() => onEntityClick(row)}>{row.ENTIDADE}</td>
                <td className="p-3 border-r-[2px] border-current cursor-pointer hover:underline" style={{ textDecorationColor: COLORS.cyan }} onClick={(e) => onArticulatorClick(e, row.ARTICULADOR)}>{row.ARTICULADOR}</td>
                <td className="p-3 border-r-[2px] border-current"><span className="px-2 py-1 bg-black text-white rounded text-[0.85em] uppercase font-bold">{row['STATUS DA ANÁLISE'] || '-'}</span></td>
                <td className="p-3">{row['DATA DA SOLICITAÇÃO'] || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function EntityDetailsView({ entity, onBack, onDelete, theme, thick, med, isDark }) {
  const keys = Object.keys(entity).filter(k => k.trim() !== '');
  return (
    <div className="flex flex-col gap-4 animate-in fade-in duration-300 w-full max-w-5xl mx-auto">
      <div className="flex items-center justify-between border-b-[4px] border-current pb-4">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className={`p-2 ${thick} ${theme.cardBg} hover:-translate-x-1 transition-transform`}><ChevronLeft size={24} /></button>
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest">Ficha Institucional</h2>
        </div>
        <button onClick={onDelete} className={`flex items-center gap-2 p-2 px-4 ${thick} bg-red-100 text-red-800 border-red-500 hover:bg-red-500 hover:text-white transition-colors`} title="Apagar Registro do Banco de Dados">
          <TrashIcon size={18} /> <span className="text-[10px] font-black uppercase tracking-widest">Apagar Registro</span>
        </button>
      </div>
      <div className={`p-6 ${thick} ${theme.cardBg} flex flex-col gap-6`}>
        <div className={`border-l-[8px] pl-4 border-[${COLORS.cyan}]`} style={{ borderColor: COLORS.cyan }}>
          <h3 className="text-2xl md:text-3xl font-black uppercase">{entity.ENTIDADE || 'Entidade Sem Nome'}</h3>
          <p className="opacity-70 font-bold uppercase tracking-wider mt-1">Articulador: {entity.ARTICULADOR || '-'}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {keys.map((key, i) => {
            if (key === 'ENTIDADE' || key === 'ARTICULADOR') return null;
            const val = entity[key]; const isBool = ['TRUE', 'FALSE', 'VERDADEIRO', 'FALSO'].includes(String(val).toUpperCase());
            let displayVal = val || '-'; let valColor = 'inherit';
            if (isBool) {
               const isTrue = String(val).toUpperCase() === 'TRUE' || String(val).toUpperCase() === 'VERDADEIRO';
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
    <div className="flex flex-col gap-4 animate-in fade-in w-full max-w-6xl mx-auto">
      <div className="flex items-center gap-4 border-b-[4px] border-current pb-4">
        <button onClick={onBack} className={`p-2 ${thick} ${theme.cardBg}`}><ChevronLeft size={24} /></button>
        <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest flex items-center gap-3"><UserIcon size={28} /> Painel do Articulador</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className={`p-6 ${thick} ${theme.cardBg} lg:col-span-1 flex flex-col border-t-[8px] h-fit`} style={{ borderTopColor: COLORS.cyan }}>
          <h3 className="text-2xl md:text-3xl font-black uppercase">{articulator || 'Sem Nome'}</h3>
          <p className="opacity-70 font-bold uppercase tracking-wider mt-2">Equipe Mandato</p>
          <div className="mt-8 flex flex-col gap-3">
            <div className={`p-4 ${med} flex justify-between items-center ${theme.bg}`}><span className="text-[11px] font-black uppercase tracking-widest opacity-80">Total Entidades</span><span className="font-black text-2xl">{myEntities.length}</span></div>
            <div className={`p-4 ${med} flex justify-between items-center ${theme.bg}`}><span className="text-[11px] font-black uppercase tracking-widest opacity-80">Protocolados</span><span className="font-black text-2xl" style={{ color: COLORS.cyan }}>{protocolados}</span></div>
          </div>
        </div>
        <div className={`lg:col-span-2 ${thick} ${theme.cardBg} overflow-x-auto`}>
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0" style={{ backgroundColor: theme.cardBg === 'bg-white' ? 'white' : '#1a1a1a' }}>
              <tr className={`border-b-[4px] ${theme.border} uppercase font-bold`}>
                <th className="p-4 border-r-[2px] border-current">Entidade (Acessar)</th>
                <th className="p-4 border-r-[2px] border-current">Status</th>
                <th className="p-4 min-w-[150px]">Docs</th>
              </tr>
            </thead>
            <tbody>
              {myEntities.map((row, i) => {
                let docsTotal = 0; let docsEntregues = 0;
                ['1 ', '2 ', '3 ', '4 ', '5 ', '8 ', '9 '].forEach(num => {
                  const docKey = Object.keys(row).find(k => k.startsWith(num.trim()));
                  if(docKey) { docsTotal++; const val = String(row[docKey] || '').toUpperCase(); if(['TRUE','VERDADEIRO','SIM'].includes(val)) docsEntregues++; }
                });
                return (
                  <tr key={i} className={`border-b-[2px] ${theme.border} opacity-90 hover:opacity-100`}>
                    <td className="p-4 border-r-[2px] border-current font-bold cursor-pointer hover:underline" style={{ textDecorationColor: COLORS.cyan }} onClick={() => onEntityClick(row)}>{row.ENTIDADE}</td>
                    <td className="p-4 border-r-[2px] border-current"><span className="px-2 py-1 bg-black text-white font-bold uppercase rounded-sm text-[10px]">{row['STATUS DA ANÁLISE'] || '-'}</span></td>
                    <td className="p-4">
                      <div className={`w-full h-3 border-[2px] ${theme.border} flex overflow-hidden`} style={{ backgroundColor: theme.gridLines }}>
                        <div className="h-full transition-all duration-500" style={{ width: `${(docsEntregues/docsTotal)*100 || 0}%`, backgroundColor: COLORS.cyan }} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-60 mt-1 block text-right">{docsEntregues}/{docsTotal}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function SettingsView({ isDark, setIsDark, fontSizeLevel, setFontSizeLevel, exportCSV, importCSV, theme, thick, med, onOpenSystem }) {
  const [openSection, setOpenSection] = useState('aparencia'); 
  const toggleSection = (section) => setOpenSection(openSection === section ? null : section);

  return (
    <div className={`max-w-3xl mx-auto flex flex-col gap-4 w-full`}>
      <h2 className={`font-black uppercase text-xl border-b-[4px] border-current pb-2 mb-2 flex items-center gap-2 ${thick} p-4 ${theme.cardBg}`}>
        <Settings /> Configurações Gerais
      </h2>

      <div className={`${thick} ${theme.cardBg}`}>
        <button onClick={() => toggleSection('aparencia')} className="w-full p-4 flex justify-between items-center text-sm font-black uppercase tracking-widest">
          <span className="flex items-center gap-2"><Sun size={18} /> Aparência e Leitura</span>
          <span className="text-xl leading-none">{openSection === 'aparencia' ? '−' : '+'}</span>
        </button>
        {openSection === 'aparencia' && (
          <div className={`p-4 border-t-[4px] ${theme.border} flex flex-col gap-6`}>
            <div className="flex gap-4">
              <button onClick={() => setIsDark(false)} className={`flex-1 p-4 border-[3px] border-current font-bold uppercase ${!isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>Claro</button>
              <button onClick={() => setIsDark(true)} className={`flex-1 p-4 border-[3px] border-current font-bold uppercase ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>Escuro</button>
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-bold uppercase tracking-wider opacity-80 flex items-center gap-2"><Type size={18}/> Tamanho da Fonte</label>
              <div className={`flex justify-between p-2 border-[3px] ${theme.border}`}>
                {[1, 2, 3, 4, 5].map(lvl => (
                  <button key={lvl} onClick={() => setFontSizeLevel(lvl)} className={`w-12 h-12 font-bold border-[2px] border-current ${fontSizeLevel === lvl ? (isDark ? 'bg-white text-black' : 'bg-black text-white') : ''}`}>{lvl}</button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={`${thick} ${theme.cardBg}`}>
        <button onClick={() => toggleSection('backup')} className="w-full p-4 flex justify-between items-center text-sm font-black uppercase tracking-widest">
          <span className="flex items-center gap-2"><Save size={18} /> Backup (.CSV)</span>
          <span className="text-xl leading-none">{openSection === 'backup' ? '−' : '+'}</span>
        </button>
        {openSection === 'backup' && (
          <div className={`p-4 border-t-[4px] ${theme.border} flex gap-4`}>
            <button onClick={exportCSV} className={`flex-1 p-4 ${med} font-bold uppercase bg-[${COLORS.cyan}] text-black`} style={{backgroundColor: COLORS.cyan}}><Download size={20} className="inline mr-2"/> Baixar</button>
            <label className={`flex-1 p-4 ${med} font-bold uppercase bg-[${COLORS.mustard}] text-black text-center cursor-pointer`} style={{backgroundColor: COLORS.mustard}}><Upload size={20} className="inline mr-2"/> Restaurar<input type="file" accept=".csv" onChange={importCSV} className="hidden"/></label>
          </div>
        )}
      </div>

      <div className="mt-8 text-center">
        <button onClick={onOpenSystem} className={`px-6 py-4 font-black uppercase tracking-widest border-[4px] shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all ${isDark ? 'bg-gray-900 text-rose-400 border-rose-500 shadow-[4px_4px_0px_rgba(244,63,94,0.5)]' : 'bg-white text-rose-600 border-rose-600'}`}>
           <Database size={18} className="inline mr-2" /> Acessar Sistema e Rede (Avançado)
        </button>
      </div>
    </div>
  );
}

function SystemView({ webhookUrl, setWebhookUrl, webhookEquipe, setWebhookEquipe, fetchFromWebhook, fetchEquipe, syncStatus, theme, thick, onBack }) {
  const handleSyncConfirm = () => {
    if (window.confirm("Atenção: Modificar o banco de dados afetará todos os usuários conectados. Deseja confirmar os endereços e sincronizar agora?")) {
      fetchFromWebhook();
      if(webhookEquipe) fetchEquipe();
    }
  };

  return (
    <div className={`max-w-3xl mx-auto flex flex-col gap-6 w-full p-6 md:p-10 ${thick} ${theme.cardBg}`} style={{ borderColor: COLORS.crimson }}>
      <div className="flex items-center gap-4 border-b-[4px] pb-4 mb-2" style={{ borderColor: COLORS.crimson, color: COLORS.crimson }}>
        <button onClick={onBack} className={`p-2 border-[4px] border-current active:translate-y-1 active:translate-x-1 transition-all`}><ChevronLeft size={24} /></button>
        <h2 className="font-black uppercase text-xl flex items-center gap-2"><Database /> Central de Conexões</h2>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <label className="font-black uppercase tracking-widest text-[10px] opacity-80 mb-2 block">1. URL do Servidor - Utilidade Pública (Obrigatório)</label>
          <input type="text" placeholder="Cole o link do Google Apps Script (doGet/doPost)..." className={`w-full p-4 border-[4px] border-current bg-transparent outline-none font-mono text-xs focus:bg-gray-100 dark:focus:bg-gray-800 transition-colors`} value={webhookUrl} onChange={(e) => setWebhookUrl(e.target.value)} />
        </div>
        
        <div>
          <label className="font-black uppercase tracking-widest text-[10px] opacity-80 mb-2 block">2. URL do Servidor - Gestão de Equipe (Opcional)</label>
          <input type="text" placeholder="Cole o link do script da planilha de equipe..." className={`w-full p-4 border-[4px] border-current bg-transparent outline-none font-mono text-xs focus:bg-gray-100 dark:focus:bg-gray-800 transition-colors`} value={webhookEquipe} onChange={(e) => setWebhookEquipe(e.target.value)} />
        </div>

        <button onClick={handleSyncConfirm} className="mt-4 w-full p-5 bg-black text-white dark:bg-white dark:text-black font-black uppercase tracking-widest border-[4px] border-current active:translate-y-1 active:shadow-none transition-all shadow-[4px_4px_0px_rgba(220,20,60,1)] hover:shadow-[4px_4px_0px_rgba(220,20,60,0.5)]">
          <RefreshCw size={18} className="inline mr-2" /> Salvar Modificações e Forçar Sincronia
        </button>
        {syncStatus && <p className="font-black text-center uppercase tracking-widest text-[10px] p-3 border-[2px] border-current" style={{ color: COLORS.cyan }}>{syncStatus}</p>}
      </div>
    </div>
  );
}

function NavButton({ active, onClick, icon, label, isDark }) {
  const activeClass = active ? (isDark ? 'bg-white text-black border-white' : 'bg-black text-white border-black') : 'border-[rgba(128,128,128,0.3)] opacity-80 hover:opacity-100';
  return (
    <button onClick={onClick} className={`flex items-center gap-2 px-4 py-3 font-bold uppercase tracking-wider border-[4px] transition-all min-w-[120px] justify-center ${activeClass}`} style={{ fontSize: '1em' }}>
      {icon} <span>{label}</span>
    </button>
  );
}
