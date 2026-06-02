import React, { useState, useEffect } from 'react';

// ==========================================
// ÍCONES NATIVOS (SVG PURO)
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
const SearchIcon = (p) => <Icon {...p} path={<><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></>} />;
const Trash2 = (p) => <Icon {...p} path={<><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></>} />;
const Mail = (p) => <Icon {...p} path={<><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></>} />;
const DownloadCloud = (p) => <Icon {...p} path={<><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m8 17 4 4 4-4"/></>} />;
const Folder = (p) => <Icon {...p} path={<><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></>} />;
const FileText = (p) => <Icon {...p} path={<><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></>} />;
const BookOpen = (p) => <Icon {...p} path={<><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></>} />;
const Database = (p) => <Icon {...p} path={<><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></>} />;

// ==========================================
// CONFIGURAÇÕES MATRIZES (FALLBACK GLOBAL)
// ==========================================
const DEFAULT_WEBHOOK_UTILIDADE = "https://script.google.com/macros/s/AKfycbzJ3Cg0SaE373kiXgU6auHQF9ufc5KU-KloRISH_h6Cg7ToDaNzj6FjfDbKe7YSh4o/exec";
const DEFAULT_WEBHOOK_EQUIPE = ""; 
const DEFAULT_EMAIL_CENTRAL = "mandatoagroecologicodados@gmail.com"; 

const COLORS = {
  cyan: '#00b7eb', crimson: '#DC143C', mustard: '#FFDB58',
  white: '#FFFFFF', black: '#000000', darkBg: '#0f0f0f', darkCard: '#1a1a1a'
};

const DOCS_KEYS = [
  '1 ATA DE FUNDAÇÃO', '2 ATA DE ELEIÇÃO/POSSE', '3 CNPJ', 
  '4 DECLARAÇÃO NÃO OSCIP', '5 DECLARAÇÃO FUNCIONAMENTO', 
  '6 - 7 DECLARAÇÃO REMUNERAÇÃO', '8 ESTATUTO', '9 RELATÓRIO DE ATIVIDADES'
];

const DOCS_PREFIX_MAP = {
  '1 ATA DE FUNDAÇÃO': '001-ATA_DE_FUNDACAO', '2 ATA DE ELEIÇÃO/POSSE': '002-ATA_ELEICAO_POSSE',
  '3 CNPJ': '003-CNPJ', '4 DECLARAÇÃO NÃO OSCIP': '004-DEC_NAO_OSCIP',
  '5 DECLARAÇÃO FUNCIONAMENTO': '005-DEC_FUNCIONAMENTO', '6 - 7 DECLARAÇÃO REMUNERAÇÃO': '006-DEC_REMUNERACAO',
  '8 ESTATUTO': '007-ESTATUTO', '9 RELATÓRIO DE ATIVIDADES': '008-RELATORIO_ATIVIDADES'
};

const DEFAULT_EQUIPE = [
  { Nome: 'Alexandre' }, { Nome: 'André' }, { Nome: 'Arthur' }, { Nome: 'Bia' }, { Nome: 'Cadu' }, 
  { Nome: 'Caio' }, { Nome: 'Carla' }, { Nome: 'Carol Figueredo' }, { Nome: 'Carol Morgan' }, 
  { Nome: 'Cláudio' }, { Nome: 'Edina' }, { Nome: 'Fernando' }, { Nome: 'Gabriel' }, { Nome: 'Gelso' }, 
  { Nome: 'Gislaine' }, { Nome: 'Guilherme' }, { Nome: 'Guito' }, { Nome: 'Guto' }, { Nome: 'Isabel' }, 
  { Nome: 'Jekupe' }, { Nome: 'Kerexu' }, { Nome: 'Lais' }, { Nome: 'Lea' }, { Nome: 'Leon' }, 
  { Nome: 'Lê' }, { Nome: 'Liandra' }, { Nome: 'Linete' }, { Nome: 'Lui' }, { Nome: 'Luis BL' }, 
  { Nome: 'Maira' }, { Nome: 'Manu' }, { Nome: 'Marquinhos' }, { Nome: 'Marquito' }, { Nome: 'Mayne' }, 
  { Nome: 'Mexiana' }, { Nome: 'Mirê' }, { Nome: 'Odara' }, { Nome: 'Paty' }, { Nome: 'Pedro Guedes' }, 
  { Nome: 'Tânia' }, { Nome: 'Toninho' }, { Nome: 'Victor Klauck' }, { Nome: 'Vina' }, { Nome: 'Xalinska' }
];

export default function App() {
  const [data, setData] = useState([]);
  const [equipe, setEquipe] = useState(DEFAULT_EQUIPE);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('kanban'); 
  
  // Ajustes Locais (Navegador)
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('tabulum_dark');
    return saved !== null ? JSON.parse(saved) : true;
  });
  const [fontSizeLevel, setFontSizeLevel] = useState(() => {
    const saved = localStorage.getItem('tabulum_font');
    return saved !== null ? parseInt(saved) : 2;
  });

  // URLs de Rede (Se estiver vazio no navegador, usa as Matrizes no código)
  const [webhookUtilidade, setWebhookUtilidade] = useState(() => localStorage.getItem('tabulum_wh_utilidade') || DEFAULT_WEBHOOK_UTILIDADE);
  const [webhookEquipe, setWebhookEquipe] = useState(() => localStorage.getItem('tabulum_wh_equipe') || DEFAULT_WEBHOOK_EQUIPE);
  const [emailCentral, setEmailCentral] = useState(() => localStorage.getItem('tabulum_email') || DEFAULT_EMAIL_CENTRAL);

  const [syncStatus, setSyncStatus] = useState('');
  const [activeFicha, setActiveFicha] = useState(null);
  const [activeArticulador, setActiveArticulador] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Persistência local contínua
  useEffect(() => { localStorage.setItem('tabulum_dark', JSON.stringify(isDark)); }, [isDark]);
  useEffect(() => { localStorage.setItem('tabulum_font', fontSizeLevel.toString()); }, [fontSizeLevel]);
  useEffect(() => { localStorage.setItem('tabulum_wh_utilidade', webhookUtilidade); }, [webhookUtilidade]);
  useEffect(() => { localStorage.setItem('tabulum_wh_equipe', webhookEquipe); }, [webhookEquipe]);
  useEffect(() => { localStorage.setItem('tabulum_email', emailCentral); }, [emailCentral]);

  useEffect(() => {
    fetchFromWebhooks();
  }, [webhookUtilidade, webhookEquipe]); // Atualiza automaticamente se o link mudar

  const fetchFromWebhooks = async () => {
    setLoading(true);
    setSyncStatus('Sincronizando Banco Central...');
    
    if (webhookUtilidade) {
      try {
        const response = await fetch(webhookUtilidade);
        const text = await response.text();
        const jsonData = JSON.parse(text);
        const formattedData = jsonData.map(item => {
          let newItem = {};
          for (let key in item) {
            let val = item[key];
            if (typeof val === 'string' && val.includes('T') && val.includes('Z') && val.length > 15) {
              val = new Date(val).toLocaleDateString('pt-BR');
            }
            newItem[key] = val;
          }
          return newItem;
        });
        setData(formattedData);
      } catch (error) {
        console.error("Erro Entidades:", error);
      }
    }

    if (webhookEquipe) {
      try {
        const resEq = await fetch(webhookEquipe);
        const textEq = await resEq.text();
        const jsonEq = JSON.parse(textEq);
        const formattedEq = jsonEq.map(item => ({ Nome: item['Nome do Assessor'] || item['Nome'] || 'Desconhecido' }));
        if (formattedEq.length > 0) setEquipe(formattedEq);
      } catch(e) {
        console.error("Erro Equipe:", e);
      }
    }

    setLoading(false);
    setSyncStatus('Sincronizado!');
    setTimeout(() => setSyncStatus(''), 3000);
  };

  const deleteItem = async (entidadeName) => {
    if (!webhookUtilidade) return;
    if (window.confirm(`Arquivista, confirma a exclusão definitiva do processo de: ${entidadeName}?`)) {
      setSyncStatus('Apagando registro no banco de dados...');
      try {
        await fetch(webhookUtilidade, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({ action: 'delete', ENTIDADE: entidadeName })
        });
        setData(prevData => prevData.filter(d => d.ENTIDADE !== entidadeName));
        setActiveFicha(null);
        setSyncStatus('Registro apagado.');
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => setSyncStatus(''), 3000);
      }
    }
  };

  const fontSizes = { 1: 'text-[10px] leading-tight', 2: 'text-xs', 3: 'text-sm', 4: 'text-base', 5: 'text-lg' };

  const themeConfig = {
    bg: isDark ? 'bg-[#0f0f0f]' : 'bg-[#f4f4f0]',
    text: isDark ? 'text-gray-100' : 'text-gray-900',
    border: isDark ? 'border-gray-200' : 'border-black',
    cardBg: isDark ? 'bg-[#1a1a1a]' : 'bg-white',
    inputBg: isDark ? 'bg-[#2a2a2a]' : 'bg-gray-100'
  };

  const bThick = `border-[4px] ${themeConfig.border}`;
  const bMedium = `border-[2px] ${themeConfig.border}`;

  return (
    <div className={`min-h-screen font-sans ${themeConfig.bg} ${themeConfig.text} ${fontSizes[fontSizeLevel]} transition-colors duration-300 flex flex-col`}>
      
      {/* HEADER MONDRIAN */}
      <header className={`flex flex-col md:flex-row border-b-[6px] ${themeConfig.border}`}>
        <div className={`flex-1 p-4 md:p-6 ${bMedium} border-b-0 md:border-b-0 md:border-r-[6px] flex items-center justify-between`}>
          <div>
            <h1 className="font-black uppercase tracking-widest text-2xl md:text-3xl leading-none">TABULUM</h1>
            <p className="font-bold opacity-80 uppercase tracking-widest text-[0.7em] mt-1">Sist. Integrado de Gestão • Dep. Marquito</p>
          </div>
          <div className="hidden md:flex gap-2">
            <div className="w-8 h-8" style={{ backgroundColor: COLORS.cyan, border: `3px solid ${isDark ? '#fff' : '#000'}` }}></div>
            <div className="w-8 h-8" style={{ backgroundColor: COLORS.mustard, border: `3px solid ${isDark ? '#fff' : '#000'}` }}></div>
            <div className="w-8 h-8" style={{ backgroundColor: COLORS.crimson, border: `3px solid ${isDark ? '#fff' : '#000'}` }}></div>
          </div>
        </div>

        <nav className={`flex flex-wrap md:flex-nowrap p-3 md:p-4 gap-3 overflow-x-auto ${themeConfig.cardBg} items-center md:justify-center`}>
          <NavButton active={view === 'kanban' && !activeFicha && !activeArticulador} onClick={() => {setView('kanban'); setActiveFicha(null); setActiveArticulador(null); setIsFormOpen(false);}} icon={<Kanban />} label="Kanban" isDark={isDark} />
          <NavButton active={view === 'dashboard' && !activeFicha && !activeArticulador} onClick={() => {setView('dashboard'); setActiveFicha(null); setActiveArticulador(null); setIsFormOpen(false);}} icon={<LayoutDashboard />} label="Dashboard" isDark={isDark} />
          
          <button 
            onClick={() => setIsFormOpen(true)}
            className={`flex items-center justify-center font-black text-2xl w-12 h-12 border-[4px] border-current transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(255,219,88,1)] ${isDark ? 'bg-black text-white hover:bg-white hover:text-black' : 'bg-white text-black hover:bg-black hover:text-white'}`}
            title="Adicionar Novo Pedido"
          >
            +
          </button>

          <NavButton active={view === 'settings'} onClick={() => {setView('settings'); setActiveFicha(null); setActiveArticulador(null); setIsFormOpen(false);}} icon={<Settings />} label="Ajustes" isDark={isDark} />
        </nav>
      </header>

      {/* ÁREA PRINCIPAL */}
      <main className="p-4 md:p-6 flex-1 flex flex-col relative">
        {loading ? (
          <div className="flex-1 flex flex-col items-center justify-center">
            <RefreshCw className="animate-spin mb-4" size={48} style={{ color: COLORS.cyan }} />
            <p className="font-black uppercase tracking-widest animate-pulse">{syncStatus}</p>
          </div>
        ) : (
          <>
            {isFormOpen && (
              <FormNovoPedido 
                onClose={() => setIsFormOpen(false)} 
                theme={themeConfig} thick={bThick} isDark={isDark}
                fetchFromWebhooks={fetchFromWebhooks} equipe={equipe}
                webhookUtilidade={webhookUtilidade} emailCentral={emailCentral}
              />
            )}

            {!isFormOpen && activeFicha && (
              <FichaEntidade 
                item={activeFicha} 
                onClose={() => setActiveFicha(null)} 
                onArticuladorClick={(nome) => {setActiveFicha(null); setActiveArticulador(nome);}}
                onDelete={() => deleteItem(activeFicha.ENTIDADE)}
                theme={themeConfig} thick={bThick} isDark={isDark}
              />
            )}
            
            {!isFormOpen && activeArticulador && (
              <PainelArticulador 
                nome={activeArticulador} data={data} 
                onClose={() => setActiveArticulador(null)}
                onEntidadeClick={(item) => {setActiveArticulador(null); setActiveFicha(item);}}
                theme={themeConfig} thick={bThick} isDark={isDark}
              />
            )}

            {!isFormOpen && !activeFicha && !activeArticulador && view === 'kanban' && (
              <KanbanView 
                data={data} theme={themeConfig} thick={bThick} med={bMedium} isDark={isDark} 
                onItemClick={setActiveFicha} onArticuladorClick={setActiveArticulador}
              />
            )}
            
            {!isFormOpen && !activeFicha && !activeArticulador && view === 'dashboard' && (
              <DashboardView data={data} theme={themeConfig} thick={bThick} med={bMedium} onItemClick={setActiveFicha} />
            )}
            
            {!isFormOpen && !activeFicha && !activeArticulador && view === 'settings' && (
              <SettingsView 
                isDark={isDark} setIsDark={setIsDark} 
                fontSizeLevel={fontSizeLevel} setFontSizeLevel={setFontSizeLevel}
                webhookUtilidade={webhookUtilidade} setWebhookUtilidade={setWebhookUtilidade}
                webhookEquipe={webhookEquipe} setWebhookEquipe={setWebhookEquipe}
                emailCentral={emailCentral} setEmailCentral={setEmailCentral}
                fetchFromWebhooks={fetchFromWebhooks}
                theme={themeConfig} thick={bThick}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
}

// ==========================================
// FORMULÁRIO COM DOWNLOAD LOCAL + MAILTO
// ==========================================
function FormNovoPedido({ onClose, theme, thick, isDark, fetchFromWebhooks, equipe, webhookUtilidade, emailCentral }) {
  const [formData, setFormData] = useState({ ENTIDADE: '', ARTICULADOR: '', EMAIL: '', TELEFONE: '', OBSERVAÇÕES: '' });
  const [stagedFiles, setStagedFiles] = useState({});
  const [sending, setSending] = useState(false);
  const [successMode, setSuccessMode] = useState(false);
  const [busca, setBusca] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  
  const [isManualOpen, setIsManualOpen] = useState(false);
  const [isPadronizadorOpen, setIsPadronizadorOpen] = useState(false);
  
  const handleFileChange = (docKey, e) => {
    const file = e.target.files[0];
    if (file) setStagedFiles(prev => ({ ...prev, [docKey]: file }));
  };

  const executeDownloads = () => {
    const safeEntidade = (formData.ENTIDADE || 'ENTIDADE').replace(/[^a-zA-Z0-9 -]/g, "").trim().toUpperCase();
    
    Object.keys(stagedFiles).forEach(key => {
      const file = stagedFiles[key];
      const ext = file.name.split('.').pop();
      const standardName = `${DOCS_PREFIX_MAP[key]} - ${safeEntidade}.${ext}`;
      
      const url = URL.createObjectURL(file);
      const a = document.createElement('a');
      a.href = url;
      a.download = standardName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!webhookUtilidade) { alert("Erro de Sistema: Webhook Central Ausente. Verifique os Ajustes."); return; }
    if (!formData.ENTIDADE.trim()) { alert("O nome da entidade é obrigatório."); return; }

    setSending(true);
    try {
      const payload = {
        "action": "add",
        "ENTIDADE": formData.ENTIDADE,
        "LIDERANÇA": "",
        "TELEFONE": formData.TELEFONE,
        "EMAIL": formData.EMAIL,
        "ARTICULADOR": formData.ARTICULADOR,
        "DATA DA SOLICITAÇÃO": new Date().toLocaleDateString('pt-BR'),
        "MANUAL/MODELOS ENVIADOS": "FALSE",
        "1 ATA DE FUNDAÇÃO": stagedFiles['1 ATA DE FUNDAÇÃO'] ? "TRUE" : "FALSE",
        "2 ATA DE ELEIÇÃO/POSSE": stagedFiles['2 ATA DE ELEIÇÃO/POSSE'] ? "TRUE" : "FALSE",
        "3 CNPJ": stagedFiles['3 CNPJ'] ? "TRUE" : "FALSE",
        "4 DECLARAÇÃO NÃO OSCIP": stagedFiles['4 DECLARAÇÃO NÃO OSCIP'] ? "TRUE" : "FALSE",
        "5 DECLARAÇÃO FUNCIONAMENTO": stagedFiles['5 DECLARAÇÃO FUNCIONAMENTO'] ? "TRUE" : "FALSE",
        "6 - 7 DECLARAÇÃO REMUNERAÇÃO": stagedFiles['6 - 7 DECLARAÇÃO REMUNERAÇÃO'] ? "TRUE" : "FALSE",
        "8 ESTATUTO": stagedFiles['8 ESTATUTO'] ? "TRUE" : "FALSE",
        "9 RELATÓRIO DE ATIVIDADES": stagedFiles['9 RELATÓRIO DE ATIVIDADES'] ? "TRUE" : "FALSE",
        "STATUS DA ANÁLISE": "Aguardando Documentos",
        "DATA DO ENVIO ALESC": "",
        "Nº DO PROCESSO ALESC": "",
        "ESTÁGIO ATUAL": "Gabinete",
        "OBSERVAÇÕES": formData.OBSERVAÇÕES
      };

      await fetch(webhookUtilidade, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      });
      
      if (Object.keys(stagedFiles).length > 0) {
        executeDownloads();
      }

      await fetchFromWebhooks();
      setSuccessMode(true); 
    } catch (error) {
      console.error(error);
      alert("Erro crítico na comunicação com o Arquivo Central.");
    } finally {
      setSending(false);
    }
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`[NOVO PROCESSO] Dossiê Utilidade Pública - ${formData.ENTIDADE}`);
    const body = encodeURIComponent(`Prezada equipe do Arquivo Central,\n\nUm novo processo de Utilidade Pública foi iniciado.\n\nEntidade: ${formData.ENTIDADE}\nArticulador: ${formData.ARTICULADOR}\n\n[ATENÇÃO ARTICULADOR: Arraste aqui os PDFs que acabaram de ser baixados no seu computador]\n\nAtenciosamente.`);
    window.location.href = `mailto:${emailCentral}?subject=${subject}&body=${body}`;
    onClose();
  };

  const filteredEquipe = equipe.filter(p => p.Nome.toLowerCase().includes(busca.toLowerCase()));

  if (successMode) {
    const hasFiles = Object.keys(stagedFiles).length > 0;
    return (
      <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in zoom-in duration-300">
        <div className={`w-full max-w-lg p-8 flex flex-col gap-6 text-center ${thick} ${theme.cardBg} border-sky-500 shadow-[8px_8px_0px_rgba(0,183,235,1)]`}>
          <CheckCircle2 className="w-20 h-20 mx-auto text-sky-500" />
          <h2 className="text-2xl font-black uppercase tracking-widest">Processo Registrado!</h2>
          <p className="font-bold opacity-80 leading-relaxed text-sm">
            Os dados da entidade foram inseridos no Kanban com sucesso.
            {hasFiles && <br/>}
            {hasFiles && <span className="text-yellow-600 dark:text-yellow-400 mt-2 block">Seus arquivos foram renomeados e baixados na sua pasta "Downloads".</span>}
          </p>

          {hasFiles ? (
            <button onClick={handleSendEmail} className="mt-4 p-5 bg-sky-500 text-black font-black uppercase tracking-widest border-[4px] border-black hover:-translate-y-1 transition-transform flex items-center justify-center gap-3">
              <Mail size={24} /> Abrir Aplicativo de E-mail
            </button>
          ) : (
            <button onClick={onClose} className="mt-4 p-4 border-[4px] border-current font-black uppercase tracking-widest hover:-translate-y-1 transition-transform">
              Concluir e Voltar
            </button>
          )}

          {hasFiles && (
            <p className="text-[10px] font-bold opacity-50 uppercase tracking-widest mt-2">
              (Seu programa de e-mail padrão abrirá automaticamente com o texto pronto. Apenas anexe os arquivos e envie).
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
    {isManualOpen && <ManualModal onClose={() => setIsManualOpen(false)} theme={theme} thick={thick} isDark={isDark} />}
    
    <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className={`w-full max-w-3xl p-6 md:p-8 flex flex-col gap-6 ${thick} ${theme.cardBg} shadow-[8px_8px_0px_rgba(255,219,88,1)] relative overflow-y-auto max-h-[90vh]`}>
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl font-black hover:scale-110 transition-transform z-10">X</button>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b-[4px] border-current pb-2 pr-8 gap-4">
          <h2 className="text-2xl font-black uppercase tracking-widest">Abertura de Processo</h2>
          <button type="button" onClick={() => setIsManualOpen(true)} className="flex items-center gap-2 px-3 py-2 bg-black text-white dark:bg-white dark:text-black font-black uppercase tracking-widest text-[10px] hover:-translate-y-1 transition-transform shadow-[2px_2px_0px_currentColor]">
            <BookOpen size={16} /> Consultar Manual de Requisitos
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className={`p-4 border-[3px] border-current ${theme.bg} flex flex-col gap-4`}>
            <h3 className="font-black uppercase tracking-widest text-[12px] opacity-70 mb-2 border-b-[2px] border-current pb-1">1. Metadados Essenciais</h3>
            <div className="flex flex-col gap-1">
              <label className="font-black uppercase tracking-widest text-[10px]">Nome da Entidade *</label>
              <input type="text" required value={formData.ENTIDADE} onChange={e => setFormData({...formData, ENTIDADE: e.target.value})} className={`p-3 border-[3px] border-current outline-none font-bold ${theme.inputBg}`} placeholder="Ex: Associação de Moradores..." />
            </div>

            <div className="flex flex-col gap-1 relative">
              <label className="font-black uppercase tracking-widest text-[10px]">Articulador Responsável</label>
              <div className="relative">
                <input type="text" value={busca} onChange={e => { setBusca(e.target.value); setFormData({...formData, ARTICULADOR: e.target.value}); setShowDropdown(true); }} onFocus={() => setShowDropdown(true)} className={`w-full p-3 border-[3px] border-current outline-none font-bold pr-10 ${theme.inputBg}`} placeholder="Busque ou digite o nome..." />
                <SearchIcon className="absolute right-3 top-3 opacity-50" />
              </div>
              {showDropdown && (
                <div className={`absolute top-full left-0 right-0 mt-1 border-[3px] border-current z-10 max-h-40 overflow-y-auto ${theme.cardBg}`}>
                  {filteredEquipe.map((p, idx) => (
                    <div key={idx} onClick={() => { setFormData({...formData, ARTICULADOR: p.Nome}); setBusca(p.Nome); setShowDropdown(false); }} className={`p-2 font-bold cursor-pointer hover:bg-[#00b7eb] hover:text-black transition-colors border-b border-current opacity-20`}>{p.Nome}</div>
                  ))}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-black uppercase tracking-widest text-[10px]">E-mail de Contato</label>
                <input type="email" value={formData.EMAIL} onChange={e => setFormData({...formData, EMAIL: e.target.value})} className={`p-3 border-[3px] border-current outline-none font-bold ${theme.inputBg}`} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-black uppercase tracking-widest text-[10px]">Telefone</label>
                <input type="text" value={formData.TELEFONE} onChange={e => setFormData({...formData, TELEFONE: e.target.value})} className={`p-3 border-[3px] border-current outline-none font-bold ${theme.inputBg}`} />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-black uppercase tracking-widest text-[10px]">Observações</label>
              <textarea rows="2" value={formData.OBSERVAÇÕES} onChange={e => setFormData({...formData, OBSERVAÇÕES: e.target.value})} className={`p-3 border-[3px] border-current outline-none font-bold resize-none ${theme.inputBg}`}></textarea>
            </div>
          </div>

          <button type="submit" disabled={sending} className={`p-5 font-black uppercase tracking-widest text-lg border-[4px] border-current transition-all shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(255,255,255,0.3)] ${sending ? 'opacity-50 shadow-none translate-y-1 translate-x-1' : 'active:shadow-none active:translate-y-1 active:translate-x-1'} ${isDark ? 'bg-yellow-600 text-white border-yellow-400' : 'bg-mustard text-black'}`} style={{ backgroundColor: isDark ? '' : COLORS.mustard }}>
            {sending ? 'Salvando...' : 'Salvar Ficha'}
          </button>

          <div className={`border-[3px] border-current ${theme.bg}`}>
             <button type="button" onClick={() => setIsPadronizadorOpen(!isPadronizadorOpen)} className="w-full p-4 flex items-center justify-between hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
               <h3 className="font-black uppercase tracking-widest text-[12px] flex items-center gap-2">
                 <Folder size={18} /> Padronização de Anexos (Opcional)
               </h3>
               <span className="text-xl leading-none font-mono">{isPadronizadorOpen ? '−' : '+'}</span>
             </button>

             {isPadronizadorOpen && (
               <div className="p-4 border-t-[3px] border-current">
                 <div className="mb-4 p-3 bg-mustard/20 border-l-[4px] border-mustard text-black dark:text-gray-200">
                   <p className="text-[10px] font-bold leading-relaxed">
                     ⚠️ <b>Aviso:</b> Esta ferramenta apenas renomeia o arquivo para a taxonomia correta para baixar. É indispensável verificar manualmente se o documento atende aos requisitos legais antes de anexar.
                     <br/><button type="button" onClick={() => setIsManualOpen(true)} className="underline font-black mt-1 hover:text-sky-600">Verifique os requisitos no Manual aqui.</button>
                   </p>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                   {DOCS_KEYS.map((key, idx) => {
                     const file = stagedFiles[key];
                     return (
                       <div key={idx} className={`p-2 border-[2px] border-current flex items-center justify-between transition-colors ${file ? (isDark ? 'bg-sky-900 border-sky-500' : 'bg-sky-200 border-sky-600') : ''}`}>
                         <div className="flex-1 overflow-hidden pr-2">
                            <span className="font-black uppercase tracking-widest text-[9px] block mb-0.5 opacity-80 truncate">{key}</span>
                            {file ? <span className="font-mono text-[9px] font-bold truncate block">{file.name}</span> : <span className="font-bold text-[9px] italic opacity-40">Nenhum</span>}
                         </div>
                         <div className="flex-shrink-0">
                           {!file ? (
                             <label className="cursor-pointer px-2 py-1 border-[2px] border-current font-black uppercase text-[8px] hover:bg-black hover:text-white transition-colors flex items-center gap-1">
                               <FileText className="w-3 h-3"/> Anexar <input type="file" accept=".pdf,.doc,.docx,.jpg,.png" className="hidden" onChange={(e) => handleFileChange(key, e)} />
                             </label>
                           ) : (
                             <button type="button" onClick={() => setStagedFiles(prev => {const n = {...prev}; delete n[key]; return n;})} className="px-2 py-1 border-[2px] border-current font-black uppercase text-[8px] hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-colors">X</button>
                           )}
                         </div>
                       </div>
                     );
                   })}
                 </div>
                 
                 <button 
                     type="button" 
                     onClick={executeDownloads} 
                     disabled={Object.keys(stagedFiles).length === 0}
                     className={`w-full p-3 font-black uppercase tracking-widest text-[10px] border-[2px] border-current transition-transform flex items-center justify-center gap-2 mt-2 ${Object.keys(stagedFiles).length > 0 ? 'bg-black text-white dark:bg-white dark:text-black hover:-translate-y-1 cursor-pointer' : 'opacity-40 cursor-not-allowed grayscale'}`}
                 >
                     <DownloadCloud size={16} /> Baixar Documentos Formatados
                 </button>
               </div>
             )}
          </div>
        </form>
      </div>
      {showDropdown && <div className="fixed inset-0 z-0" onClick={() => setShowDropdown(false)}></div>}
    </div>
    </>
  );
}

// ==========================================
// KANBAN VIEW COM RECOLHIMENTO E DEGRAUS
// ==========================================
function KanbanView({ data, theme, thick, med, isDark, onItemClick, onArticuladorClick }) {
  const [collapsedCols, setCollapsedCols] = useState({});
  const toggleCol = (id) => setCollapsedCols(prev => ({ ...prev, [id]: !prev[id] }));

  const columns = [
    { id: 'Aguardando Documentos', label: 'Aguardando', color: COLORS.mustard, icon: <AlertCircle size={16}/> },
    { id: 'Em análise', label: 'Análise', color: COLORS.cyan, icon: <Clock size={16}/> },
    { id: 'Protocolado', label: 'Protocolado', color: COLORS.crimson, icon: <CheckCircle2 size={16} className="text-white"/> }
  ];

  const getColData = (status) => data.filter(d => String(d['STATUS DA ANÁLISE'] || '').trim().toLowerCase() === status.toLowerCase());

  const getProgressColor = (count) => {
    if (count === 0) return null;
    if (count <= 3) return COLORS.crimson;
    if (count <= 7) return COLORS.mustard;
    return COLORS.cyan;
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 flex-1 items-stretch min-h-[500px]">
      {columns.map((col) => {
        const isCollapsed = collapsedCols[col.id];
        const colData = getColData(col.id);
        
        return (
          <div key={col.id} className={`flex flex-col transition-all duration-300 ${isCollapsed ? 'w-16 md:w-20' : 'flex-1'} ${thick} ${theme.cardBg}`}>
            <div onClick={() => toggleCol(col.id)} className={`p-3 font-black flex items-center gap-2 uppercase tracking-wider border-b-[4px] cursor-pointer transition-colors ${theme.border}`} style={{ backgroundColor: col.color, color: col.id === 'Protocolado' ? 'white' : 'black' }}>
              {isCollapsed ? (
                <div className="flex flex-col items-center w-full gap-4 py-4">
                  {col.icon}
                  <span className="writing-vertical-lr rotate-180 tracking-widest">{col.label}</span>
                  <span className="bg-black text-white px-2 py-0.5 rounded-full mt-auto text-[0.8em]">{colData.length}</span>
                </div>
              ) : (
                <>{col.icon}<span className="truncate">{col.label}</span><span className="ml-auto bg-black text-white px-2 py-0.5 rounded-full text-[0.8em]">{colData.length}</span></>
              )}
            </div>
            
            {!isCollapsed && (
              <div className="p-3 flex flex-col gap-3 overflow-y-auto flex-1">
                {colData.map((item, i) => {
                  let hasCount = 0;
                  const itemProgressBoxes = DOCS_KEYS.flatMap(key => {
                    const hasDoc = (String(item[key] || '').toUpperCase() === 'TRUE');
                    if (hasDoc) hasCount++;
                    if (key === '6 - 7 DECLARAÇÃO REMUNERAÇÃO') return [{ key: '6 DECLARAÇÃO REMUNERAÇÃO (1)', has: hasDoc }, { key: '7 DECLARAÇÃO REMUNERAÇÃO (2)', has: hasDoc }];
                    return [{ key, has: hasDoc }];
                  });
                  return (
                    <div key={i} onClick={() => onItemClick(item)} className={`p-3 md:p-4 ${med} hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.3)] transition-all cursor-pointer ${theme.bg}`}>
                      <h3 className="font-black mb-3 uppercase leading-tight" style={{ fontSize: '1.1em' }}>{item.ENTIDADE || 'Sem Nome'}</h3>
                      <div className="flex justify-between items-end gap-2">
                        <div className="flex flex-col">
                          <span className="text-[0.65em] uppercase font-black opacity-60 tracking-widest">Articulador</span>
                          <span onClick={(e) => { e.stopPropagation(); onArticuladorClick(item.ARTICULADOR); }} className={`font-bold hover:underline decoration-2 underline-offset-4 cursor-pointer`} style={{ textDecorationColor: COLORS.cyan }}>{item.ARTICULADOR || '-'}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[0.65em] uppercase font-black opacity-60 tracking-widest block">Data</span>
                          <span className="font-bold text-[0.9em]">{item['DATA DA SOLICITAÇÃO'] || '-'}</span>
                        </div>
                      </div>
                      <div className="mt-4 flex gap-1 h-3">
                        {itemProgressBoxes.map((box, bIdx) => {
                          const activeColor = box.has ? getProgressColor(hasCount) : null;
                          return (
                            <div 
                              key={bIdx} 
                              title={box.key} 
                              className={`flex-1 transition-colors duration-500 ${box.has ? 'border-[2px] border-current' : 'bg-transparent border-[1px] border-current opacity-20'}`}
                              style={activeColor ? { backgroundColor: activeColor } : {}}
                            /> 
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
                {colData.length === 0 && <div className="text-center opacity-40 p-6 border-[3px] border-dashed border-current font-black uppercase tracking-widest text-[0.8em]">Vazio</div>}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ==========================================
// FICHA COMPLETA DA ENTIDADE + PADRONIZADOR
// ==========================================
function FichaEntidade({ item, onClose, onArticuladorClick, onDelete, theme, thick, isDark }) {
  const [stagedFiles, setStagedFiles] = useState({});
  const [isPadronizadorOpen, setIsPadronizadorOpen] = useState(false);
  const [isManualOpen, setIsManualOpen] = useState(false);

  const handleFileStage = (docKey, event) => {
    const file = event.target.files[0];
    if (file) setStagedFiles(prev => ({ ...prev, [docKey]: file }));
  };

  const handleDownloadStandard = (docKey) => {
    const file = stagedFiles[docKey];
    if (!file) return;
    
    const ext = file.name.split('.').pop();
    const safeEntidade = (item.ENTIDADE || 'ENTIDADE').replace(/[^a-zA-Z0-9 -]/g, "").trim().toUpperCase();
    const standardName = `${DOCS_PREFIX_MAP[docKey]} - ${safeEntidade}.${ext}`;
    
    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = standardName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className={`p-6 md:p-8 ${thick} ${theme.cardBg} flex flex-col gap-6 relative animate-in fade-in zoom-in-95 duration-200`}>
      <button onClick={onClose} className="absolute top-4 right-4 md:top-6 md:right-6 text-2xl font-black hover:scale-110 transition-transform">X</button>
      
      <div className="pr-10 border-b-[6px] border-current pb-4">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-2">{item.ENTIDADE}</h2>
        <div className="flex gap-4">
          <span className="font-bold uppercase tracking-widest text-[0.8em] bg-black text-white dark:bg-white dark:text-black px-3 py-1">{item['STATUS DA ANÁLISE'] || 'Sem Status'}</span>
          <span className="font-bold uppercase tracking-widest text-[0.8em] px-3 py-1 border-[2px] border-current opacity-70">{item['DATA DA SOLICITAÇÃO']}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <div className="p-4 border-[4px] border-current">
            <span className="block text-[0.7em] uppercase font-black opacity-60 tracking-widest mb-1">Articulador</span>
            <span onClick={() => onArticuladorClick(item.ARTICULADOR)} className="text-xl font-black hover:underline decoration-4 underline-offset-4 cursor-pointer" style={{ textDecorationColor: COLORS.cyan }}>{item.ARTICULADOR || 'Não Definido'}</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className={`p-4 border-[2px] border-current ${theme.bg}`}>
              <span className="block text-[0.6em] uppercase font-black opacity-60 tracking-widest mb-1">Liderança</span>
              <span className="font-bold">{item.LIDERANÇA || '-'}</span>
            </div>
            <div className={`p-4 border-[2px] border-current ${theme.bg}`}>
              <span className="block text-[0.6em] uppercase font-black opacity-60 tracking-widest mb-1">Telefone</span>
              <span className="font-bold">{item.TELEFONE || '-'}</span>
            </div>
            <div className={`p-4 border-[2px] border-current ${theme.bg} col-span-2`}>
              <span className="block text-[0.6em] uppercase font-black opacity-60 tracking-widest mb-1">E-mail</span>
              <span className="font-bold break-all">{item.EMAIL || '-'}</span>
            </div>
          </div>
          <div className={`p-4 border-[2px] border-current ${theme.bg}`}>
            <span className="block text-[0.6em] uppercase font-black opacity-60 tracking-widest mb-1">Observações</span>
            <p className="font-bold whitespace-pre-wrap leading-relaxed">{item.OBSERVAÇÕES || 'Sem observações registradas.'}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className={`p-4 border-[4px] border-current`} style={{ backgroundColor: item['STATUS DA ANÁLISE'] === 'Protocolado' ? COLORS.crimson : 'transparent', color: item['STATUS DA ANÁLISE'] === 'Protocolado' ? 'white' : '' }}>
            <span className="block text-[0.7em] uppercase font-black opacity-80 tracking-widest mb-2 border-b-2 border-current pb-1">Trâmite ALESC</span>
            <div className="grid grid-cols-2 gap-2 font-bold">
              <div><span className="opacity-70 text-[0.8em]">Data Envio:</span><br/>{item['DATA DO ENVIO ALESC'] || '-'}</div>
              <div><span className="opacity-70 text-[0.8em]">Processo:</span><br/>{item['Nº DO PROCESSO ALESC'] || '-'}</div>
              <div className="col-span-2 mt-2"><span className="opacity-70 text-[0.8em]">Estágio:</span><br/>{item['ESTÁGIO ATUAL'] || '-'}</div>
            </div>
          </div>
          <div className="flex flex-col mt-2">
            <span className="block text-[0.8em] uppercase font-black tracking-widest mb-2 border-b-[4px] border-current pb-1">Checklist de Documentos Entregues</span>
            {DOCS_KEYS.map((key, idx) => {
              const hasDoc = String(item[key] || '').toUpperCase() === 'TRUE';
              return (
                <div key={idx} className="flex items-center gap-3 py-2 border-b-[2px] border-current opacity-90">
                  <div className={`w-4 h-4 flex-shrink-0 border-[2px] border-current ${hasDoc ? 'bg-current' : 'bg-transparent'}`}></div>
                  <span className={`font-bold text-[0.85em] ${hasDoc ? '' : 'opacity-60'}`}>{key}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={`mt-8 border-[6px] shadow-[6px_6px_0px_rgba(0,183,235,1)] ${isDark ? 'bg-gray-900 border-gray-500' : 'bg-gray-100 border-black'}`}>
        <button onClick={() => setIsPadronizadorOpen(!isPadronizadorOpen)} className="w-full p-6 flex items-center justify-between hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
          <div className="flex items-center gap-3">
            <Folder className="w-8 h-8" />
            <h3 className="text-xl font-black uppercase tracking-widest">Padronizador Local</h3>
          </div>
          <span className="text-3xl leading-none font-mono">{isPadronizadorOpen ? '−' : '+'}</span>
        </button>
        
        {isPadronizadorOpen && (
          <div className="p-6 pt-0 border-t-[4px] border-current mt-2">
            <div className="mb-6 mt-4 p-4 bg-mustard/20 border-l-[4px] border-mustard text-black dark:text-gray-200">
              <p className="text-[12px] font-bold leading-relaxed">
                ⚠️ <b>Aviso Importante:</b> Esta ferramenta <u>apenas renomeia o nome do arquivo</u> (ex: 001-ATA.pdf). 
                É estritamente necessário que o Assessor verifique manualmente o conteúdo do documento para garantir que atenda às exigências legais.
                <br/><button onClick={() => setIsManualOpen(true)} className="underline font-black mt-2 hover:text-sky-600 text-sm">Consulte o Manual de Requisitos aqui.</button>
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {DOCS_KEYS.map((key, idx) => {
                const stagedFile = stagedFiles[key];
                const safeEntidade = (item.ENTIDADE || 'ENTIDADE').replace(/[^a-zA-Z0-9 -]/g, "").trim().toUpperCase();
                const previewName = stagedFile ? `${DOCS_PREFIX_MAP[key]} - ${safeEntidade}.${stagedFile.name.split('.').pop()}` : '';

                return (
                  <div key={idx} className={`flex flex-col md:flex-row md:items-center justify-between p-3 border-[3px] border-current transition-colors ${stagedFile ? (isDark ? 'bg-sky-900' : 'bg-sky-200') : 'bg-transparent'}`}>
                    <div className="flex-1 pr-4 mb-2 md:mb-0">
                      <span className="font-black uppercase tracking-widest text-[0.75em] opacity-70 block mb-1">{key}</span>
                      {stagedFile ? <span className="font-mono text-[0.8em] font-bold truncate block">{previewName}</span> : <span className="font-bold text-[0.8em] italic opacity-50">Nenhum arquivo anexado.</span>}
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      {!stagedFile ? (
                        <label className="cursor-pointer px-4 py-2 border-[2px] border-current font-black uppercase tracking-widest text-[0.7em] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors flex items-center gap-2">
                          <FileText className="w-4 h-4" /> Anexar
                          <input type="file" className="hidden" onChange={(e) => handleFileStage(key, e)} />
                        </label>
                      ) : (
                        <>
                          <button onClick={() => handleDownloadStandard(key)} className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black border-[2px] border-current font-black uppercase tracking-widest text-[0.7em] hover:-translate-y-1 transition-transform flex items-center gap-2">
                            <DownloadCloud className="w-4 h-4" /> Salvar Formatado
                          </button>
                          <button onClick={() => setStagedFiles(prev => {const newObj = {...prev}; delete newObj[key]; return newObj;})} className="px-3 py-2 border-[2px] border-current text-[0.7em] hover:bg-rose-500 hover:text-white transition-colors" title="Remover">X</button>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-end mt-4 border-t-[4px] border-current pt-4">
        <button onClick={onDelete} className="flex items-center gap-2 px-4 py-3 font-black uppercase tracking-widest text-[0.8em] border-[3px] border-current opacity-50 hover:opacity-100 hover:bg-rose-600 hover:text-white transition-all hover:border-rose-600">
          <Trash2 size={16} /> Apagar Registro Definitivamente
        </button>
      </div>
      
      {isManualOpen && <ManualModal onClose={() => setIsManualOpen(false)} theme={theme} thick={thick} isDark={isDark} />}
    </div>
  );
}

// ==========================================
// COMPONENTE: MANUAL DE REQUISITOS (NOVO)
// ==========================================
function ManualModal({ onClose, theme, thick, isDark }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className={`w-full max-w-4xl p-6 md:p-10 flex flex-col gap-6 ${thick} ${theme.cardBg} shadow-[8px_8px_0px_rgba(0,183,235,1)] relative max-h-[95vh] overflow-hidden`}>
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl font-black hover:scale-110 transition-transform bg-black text-white dark:bg-white dark:text-black w-10 h-10 flex items-center justify-center">X</button>
        
        <div className="border-b-[6px] border-current pb-4 pr-12 flex-shrink-0">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest flex items-center gap-3">
            <BookOpen size={32} /> Manual de Requisitos
          </h2>
          <p className="font-bold opacity-80 uppercase tracking-widest text-[0.7em] mt-2 text-sky-600 dark:text-sky-400">Pedido de Utilidade Pública Estadual</p>
        </div>

        <div className="overflow-y-auto pr-2 space-y-6 flex-1 text-sm md:text-base font-bold opacity-90 leading-relaxed">
          <section className={`p-4 border-[3px] border-current ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <p>O reconhecimento do Título de Utilidade Pública estadual é orientado pela <b>Lei nº 18.269 de 9 de dezembro de 2021</b>. Para isso os documentos originais ou cópias autenticadas estabelecidos no artigo 3º da Lei nº 18.269/2021 devem ser encaminhados para um dos Deputados por meio de requerimento.</p>
            <p className="mt-3">A <b>ARTICULAÇÃO</b> deve enviar os documentos necessários ao <b>ASSESSOR</b> responsável pela análise de documentos, não deve ser enviado diretamente ao jurídico. Este ASSESSOR irá se comunicar com a ARTICULAÇÃO que deverá exigir das ENTIDADES os documentos faltantes ou inadequados.</p>
            <p className="mt-3 text-rose-600 dark:text-rose-400">É permitido realizar o protocolo de pedidos de Utilidade Pública mesmo que as DECLARAÇÕES ou o RELATÓRIO DE ATIVIDADES ainda não estejam completamente adequados. Contudo, a <b>ATA DE FUNDAÇÃO e o ESTATUTO devem estar obrigatoriamente corretos</b> e presentes no momento do protocolo.</p>
            <p className="mt-3 text-[0.8em] opacity-80">A relação atualizada das entidades declaradas de Utilidade Pública estadual está consolidada no Anexo Único da Lei nº 18.278 de 20 de dezembro de 2021.</p>
          </section>

          <div>
            <h3 className="text-lg font-black uppercase border-b-[3px] border-current pb-1 mb-4">Documentos que as entidades precisam entregar</h3>
            
            <div className="space-y-4">
              <div className="p-3 border-[2px] border-current">
                <h4 className="font-black uppercase text-sky-600 dark:text-sky-400 mb-1">001 Ata de Fundação</h4>
                <p>Apresentar ata da eleição e posse da diretoria em exercício com <b>REGISTRO EM CARTÓRIO</b>.</p>
              </div>

              <div className="p-3 border-[2px] border-current">
                <h4 className="font-black uppercase text-sky-600 dark:text-sky-400 mb-1">002 Ata da eleição e posse da Diretoria Executiva</h4>
                <p>Apresentar ata da eleição e posse da diretoria em exercício com <b>REGISTRO EM CARTÓRIO</b>.</p>
              </div>

              <div className="p-3 border-[2px] border-current">
                <h4 className="font-black uppercase text-sky-600 dark:text-sky-400 mb-1">003 Cadastro nacional da pessoa jurídica (CNPJ)</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>A entidade deve estar com a situação cadastral <b>ATIVA</b>.</li>
                  <li>A instituição precisa ser constituída em <b>SANTA CATARINA</b> e o documento deve ter data de emissão.</li>
                  <li>Este documento não tem prazo.</li>
                </ul>
              </div>

              <div className="p-3 border-[2px] border-current">
                <h4 className="font-black uppercase text-sky-600 dark:text-sky-400 mb-1">004 Declaração de não qualificação OSCIP</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Esta declaração de não OSCIP deve ser datada no máximo <b>90 dias anteriores</b> ao protocolo do pedido.</li>
                  <li>Informações obrigatórias incluem nome do presidente, CPF, telefone, email, e endereço de residência.</li>
                  <li>Deve constar a qualidade de presidente o nome da associação e a declaração de que não é OSCIP em si.</li>
                  <li>Necessário constar local, data, assinatura e o nome do presidente, conforme o modelo.</li>
                </ul>
              </div>

              <div className="p-3 border-[2px] border-current">
                <h4 className="font-black uppercase text-sky-600 dark:text-sky-400 mb-1">005 Declaração de funcionamento</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Deve ser datado no máximo <b>180 dias antes</b> ao do protocolo do pedido.</li>
                  <li>A entidade deve atestar o contínuo funcionamento nos 12 meses imediatamente anteriores à formulação do pedido por meio de declaração firmada pelo presidente da entidade.</li>
                  <li>Devem constar o número do registro no CNPJ e o endereço da entidade com assinatura do presidente, conforme o modelo.</li>
                </ul>
              </div>

              <div className="p-3 border-[2px] border-current bg-mustard/20">
                <h4 className="font-black uppercase mb-1">006 Declaração de que não remunera Cargo de Dirigente</h4>
                <ul className="list-disc pl-5 space-y-1 mb-3">
                  <li>Declarar expressamente em seu estatuto social ou em documento subscrito por seu presidente que a entidade não remunera os cargos de diretoria ou conselho.</li>
                  <li>Deve ter no máximo <b>180 dias antes</b> do protocolo.</li>
                  <li>Necessário ter o nome, nacionalidade, estado civil, residência completa, RG e CPF.</li>
                  <li>Deve constar que é presidente da associação o local da associação e a declaração com local data e assinatura do presidente, conforme o modelo.</li>
                </ul>
                <div className="font-black text-center my-2 text-xl">OU</div>
                <h4 className="font-black uppercase mb-1">007 Declaração de remuneração</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>No caso das fundações além da cópia da ata deve ser comprovada também a comunicação ao Ministério Público sobre a deliberação pela remuneração.</li>
                  <li>A entidade por seu representante legal deve declarar que os dirigentes são remunerados e atuam efetivamente na gestão executiva no caso de associações, fundações ou organizações da sociedade civil sem fins lucrativos.</li>
                  <li>A declaração deve constar nome, nacionalidade, estado civil, endereço completo, RG e CPF, além da condição de presidente e os nomes dos dirigentes que recebem remuneração, com a data da reunião em que o valor foi deliberado, conforme o modelo.</li>
                </ul>
              </div>

              <div className="p-3 border-[2px] border-current">
                <h4 className="font-black uppercase text-sky-600 dark:text-sky-400 mb-1">008 Estatuto da entidade</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Necessita <b>registro de cartório</b>.</li>
                  <li>Caso não remunere os dirigentes, o estatuto deve declarar expressamente que a entidade não remunera os cargos de diretoria e ou conselho, conforme inciso X do artigo 3º.</li>
                </ul>
              </div>

              <div className="p-3 border-[2px] border-current">
                <h4 className="font-black uppercase text-sky-600 dark:text-sky-400 mb-1">009 Relatório de Atividades</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Deve demonstrar detalhado mês a mês sem faltar nenhum mês que promoveu atividades em benefício da comunidade nos <b>12 meses anteriores</b> à formulação do pedido.</li>
                  <li>O relatório necessita DATA e tem validade de <b>180 dias anteriores</b> à data do protocolo do pedido.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t-[4px] border-current pt-4 mt-2 flex-shrink-0">
          <button onClick={onClose} className="w-full p-4 bg-black text-white dark:bg-white dark:text-black font-black uppercase tracking-widest hover:-translate-y-1 transition-transform border-[4px] border-current shadow-[4px_4px_0px_currentColor]">
            Entendido, Voltar.
          </button>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// PAINEL DO ARTICULADOR E DASHBOARD
// ==========================================
function PainelArticulador({ nome, data, onClose, onEntidadeClick, theme, thick, isDark }) {
  const processos = data.filter(d => d.ARTICULADOR === nome);
  const protocolados = processos.filter(d => d['STATUS DA ANÁLISE'] === 'Protocolado');

  return (
    <div className={`p-6 md:p-8 ${thick} ${theme.cardBg} flex flex-col gap-6 relative animate-in fade-in zoom-in-95 duration-200 min-h-[60vh]`}>
      <button onClick={onClose} className="absolute top-4 right-4 md:top-6 md:right-6 text-2xl font-black hover:scale-110 transition-transform">X</button>
      
      <div className="pr-10 border-b-[6px] border-current pb-4 flex items-center gap-4">
        <div className="w-16 h-16 border-[4px] border-current bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-black text-3xl uppercase">
          {nome.charAt(0)}
        </div>
        <div>
          <span className="block text-[0.8em] uppercase font-black opacity-60 tracking-widest">Dossiê Articulador</span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none">{nome}</h2>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className={`p-6 ${thick} flex flex-col items-center justify-center text-center`} style={{ backgroundColor: COLORS.mustard, color: 'black' }}>
          <span className="text-5xl font-black leading-none">{processos.length}</span>
          <span className="text-[0.7em] uppercase font-black tracking-widest mt-2">Processos Assumidos</span>
        </div>
        <div className={`p-6 ${thick} flex flex-col items-center justify-center text-center`} style={{ backgroundColor: COLORS.cyan, color: 'black' }}>
          <span className="text-5xl font-black leading-none">{protocolados.length}</span>
          <span className="text-[0.7em] uppercase font-black tracking-widest mt-2">Sucessos (Protocolados)</span>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <span className="block text-[0.9em] uppercase font-black tracking-widest border-b-[4px] border-current pb-2 mb-2">Entidades Sob Guarda</span>
        {processos.map((p, i) => (
          <div key={i} onClick={() => onEntidadeClick(p)} className={`p-4 border-[3px] border-current flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.3)] transition-all ${theme.bg}`}>
            <div>
              <h3 className="font-black uppercase text-lg leading-tight">{p.ENTIDADE}</h3>
              <span className="font-bold opacity-70 text-[0.8em]">{p['DATA DA SOLICITAÇÃO']}</span>
            </div>
            <div className="mt-3 md:mt-0 px-3 py-1 bg-black text-white dark:bg-white dark:text-black font-black uppercase text-[0.7em] tracking-widest w-max">
              {p['STATUS DA ANÁLISE'] || 'Pendente'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardView({ data, theme, thick, med, onItemClick }) {
  const total = data.length;
  const protocolados = data.filter(d => String(d['STATUS DA ANÁLISE'] || '').trim().toLowerCase() === 'protocolado').length;
  const emAnalise = data.filter(d => String(d['STATUS DA ANÁLISE'] || '').trim().toLowerCase() === 'em análise').length;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className={`md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4`}>
        <div className={`p-4 ${thick} ${theme.cardBg} flex flex-col justify-between`} style={{ borderTopColor: COLORS.cyan, borderTopWidth: '8px' }}>
          <span className="font-black uppercase tracking-widest opacity-70 text-[0.8em]">Total</span>
          <span className="text-5xl font-black mt-2">{total}</span>
        </div>
        <div className={`p-4 ${thick} ${theme.cardBg} flex flex-col justify-between`} style={{ borderTopColor: COLORS.crimson, borderTopWidth: '8px' }}>
          <span className="font-black uppercase tracking-widest opacity-70 text-[0.8em]">ALESC</span>
          <span className="text-5xl font-black mt-2">{protocolados}</span>
        </div>
        <div className={`p-4 ${thick} ${theme.cardBg} flex flex-col justify-between`} style={{ borderTopColor: COLORS.mustard, borderTopWidth: '8px' }}>
          <span className="font-black uppercase tracking-widest opacity-70 text-[0.8em]">Análise</span>
          <span className="text-5xl font-black mt-2">{emAnalise}</span>
        </div>
      </div>

      <div className={`md:col-span-1 p-4 ${thick} ${theme.cardBg} flex flex-col`}>
        <h2 className="font-black uppercase tracking-widest border-b-[4px] border-current pb-2 mb-4 text-[0.9em]">Visão Geral</h2>
        <div className="flex-1 flex flex-col justify-end gap-2 h-40">
          <div className="flex items-end gap-2 h-full">
            <div className="w-1/3 flex flex-col items-center gap-1 h-full justify-end">
              <div className="w-full transition-all duration-500" style={{ height: `${(emAnalise/total)*100 || 0}%`, backgroundColor: COLORS.cyan, border: '3px solid currentcolor' }}></div>
              <span className="text-[9px] uppercase font-black tracking-widest text-center mt-1">Int</span>
            </div>
            <div className="w-1/3 flex flex-col items-center gap-1 h-full justify-end">
              <div className="w-full transition-all duration-500" style={{ height: `${((total-emAnalise-protocolados)/total)*100 || 0}%`, backgroundColor: COLORS.mustard, border: '3px solid currentcolor' }}></div>
              <span className="text-[9px] uppercase font-black tracking-widest text-center mt-1">Docs</span>
            </div>
            <div className="w-1/3 flex flex-col items-center gap-1 h-full justify-end">
              <div className="w-full transition-all duration-500" style={{ height: `${(protocolados/total)*100 || 0}%`, backgroundColor: COLORS.crimson, border: '3px solid currentcolor' }}></div>
              <span className="text-[9px] uppercase font-black tracking-widest text-center mt-1">Ext</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`md:col-span-3 mt-4 ${thick} ${theme.cardBg} overflow-x-auto max-h-[500px]`}>
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead className="sticky top-0 z-10" style={{ backgroundColor: theme.cardBg === 'bg-white' ? 'white' : '#1a1a1a' }}>
            <tr className={`border-b-[6px] ${theme.border} uppercase font-black tracking-widest text-[0.8em]`}>
              <th className="p-4 border-r-[4px] border-current">Entidade</th>
              <th className="p-4 border-r-[4px] border-current">Articulador</th>
              <th className="p-4 border-r-[4px] border-current">Status</th>
              <th className="p-4">Solicitação</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} onClick={() => onItemClick(row)} className={`border-b-[3px] ${theme.border} hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer`}>
                <td className="p-4 border-r-[4px] border-current font-bold">{row.ENTIDADE}</td>
                <td className="p-4 border-r-[4px] border-current font-bold opacity-80">{row.ARTICULADOR}</td>
                <td className="p-4 border-r-[4px] border-current"><span className="px-2 py-1 bg-black text-white dark:bg-white dark:text-black font-black uppercase text-[0.75em] tracking-widest">{row['STATUS DA ANÁLISE'] || '-'}</span></td>
                <td className="p-4 font-bold opacity-80">{row['DATA DA SOLICITAÇÃO'] || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ==========================================
// AJUSTES COM ACORDEÕES E ESTADO MISTO
// ==========================================
function SettingsView({ isDark, setIsDark, fontSizeLevel, setFontSizeLevel, webhookUtilidade, setWebhookUtilidade, webhookEquipe, setWebhookEquipe, emailCentral, setEmailCentral, fetchFromWebhooks, theme, thick }) {
  const [openAppearance, setOpenAppearance] = useState(true);
  const [openNetwork, setOpenNetwork] = useState(false);
  const [savedMessage, setSavedMessage] = useState('');

  const handleSaveNetwork = () => {
    fetchFromWebhooks();
    setSavedMessage('Configuração sobreposta localmente com sucesso!');
    setTimeout(() => setSavedMessage(''), 4000);
  };

  return (
    <div className={`max-w-3xl mx-auto w-full p-6 md:p-8 flex flex-col gap-6 ${thick} ${theme.cardBg}`}>
      <h2 className="font-black uppercase tracking-widest text-2xl border-b-[6px] border-current pb-4 flex items-center gap-3">
        <Settings size={28}/> Ajustes do Sistema
      </h2>

      {/* ACORDEÃO 1: APARÊNCIA */}
      <div className={`border-[3px] border-current ${theme.bg}`}>
        <button onClick={() => setOpenAppearance(!openAppearance)} className="w-full p-4 flex items-center justify-between hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
          <h3 className="font-black uppercase tracking-widest text-[14px] flex items-center gap-2">
            <Sun size={18} /> Aparência e Leitura
          </h3>
          <span className="text-xl leading-none font-mono">{openAppearance ? '−' : '+'}</span>
        </button>

        {openAppearance && (
          <div className="p-6 border-t-[3px] border-current flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <label className="font-black uppercase tracking-widest opacity-80 text-[0.9em]">Luminosidade (Tema)</label>
              <div className="flex gap-4">
                <button onClick={() => setIsDark(false)} className={`flex-1 p-4 border-[3px] border-current flex items-center justify-center gap-3 uppercase font-black tracking-widest transition-transform hover:-translate-y-1 ${!isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
                  <Sun size={20} /> Claro
                </button>
                <button onClick={() => setIsDark(true)} className={`flex-1 p-4 border-[3px] border-current flex items-center justify-center gap-3 uppercase font-black tracking-widest transition-transform hover:-translate-y-1 ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
                  <Moon size={20} /> Escuro
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="font-black uppercase tracking-widest opacity-80 flex items-center gap-2 text-[0.9em]">
                <Type size={18}/> Conforto de Leitura (Zoom)
              </label>
              <div className={`flex items-center justify-between p-2 border-[3px] ${theme.border}`}>
                {[1, 2, 3, 4, 5].map(level => (
                  <button key={level} onClick={() => setFontSizeLevel(level)} className={`w-12 h-12 flex items-center justify-center font-black text-lg border-[3px] border-current transition-colors ${fontSizeLevel === level ? (isDark ? 'bg-white text-black' : 'bg-black text-white') : 'hover:bg-gray-500/20'}`}>
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ACORDEÃO 2: SISTEMA E REDE */}
      <div className={`border-[3px] border-current ${theme.bg}`}>
        <button onClick={() => setOpenNetwork(!openNetwork)} className="w-full p-4 flex items-center justify-between hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
          <h3 className="font-black uppercase tracking-widest text-[14px] flex items-center gap-2">
            <Database size={18} /> Sistema e Rede (Avançado)
          </h3>
          <span className="text-xl leading-none font-mono">{openNetwork ? '−' : '+'}</span>
        </button>

        {openNetwork && (
          <div className="p-6 border-t-[3px] border-current flex flex-col gap-6">
            <div className="p-4 bg-mustard/20 border-l-[4px] border-mustard text-black dark:text-gray-200">
              <p className="text-[10px] font-bold leading-relaxed uppercase tracking-widest">
                ⚠️ <b>O Paradoxo do Arquivo:</b> As alterações feitas nestas caixas sobrescrevem o código original e ficam salvas <b>apenas no seu navegador atual</b>. Para alterar a configuração matriz que aparece <b>igualmente para toda a equipe</b> de forma automática, o link deve ser substituído no código-fonte principal do GitHub.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-black uppercase tracking-widest opacity-80 text-[10px]">Webhook Utilidade Pública (Obrigatório)</label>
              <input type="text" value={webhookUtilidade} onChange={(e) => setWebhookUtilidade(e.target.value)} className={`w-full p-3 border-[3px] border-current outline-none font-mono text-[10px] ${theme.inputBg}`} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-black uppercase tracking-widest opacity-80 text-[10px]">Webhook Equipe (Opcional)</label>
              <input type="text" value={webhookEquipe} onChange={(e) => setWebhookEquipe(e.target.value)} placeholder="Cole aqui caso crie um script para a equipe..." className={`w-full p-3 border-[3px] border-current outline-none font-mono text-[10px] ${theme.inputBg}`} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-black uppercase tracking-widest opacity-80 text-[10px]">E-mail do Arquivo Central</label>
              <input type="text" value={emailCentral} onChange={(e) => setEmailCentral(e.target.value)} className={`w-full p-3 border-[3px] border-current outline-none font-mono text-[10px] ${theme.inputBg}`} />
            </div>

            <button onClick={handleSaveNetwork} className="mt-2 w-full p-4 bg-black text-white dark:bg-white dark:text-black font-black uppercase tracking-widest text-[11px] border-[3px] border-current hover:-translate-y-1 transition-transform flex items-center justify-center gap-2">
              <RefreshCw size={16} /> Salvar Localmente e Sincronizar
            </button>
            {savedMessage && <p className="font-black text-center uppercase tracking-widest text-[10px] text-sky-600 dark:text-sky-400">{savedMessage}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

function NavButton({ active, onClick, icon, label, isDark }) {
  const activeClass = active ? (isDark ? 'bg-white text-black border-white' : 'bg-black text-white border-black') : 'border-[rgba(128,128,128,0.3)] hover:border-current opacity-80 hover:opacity-100 hover:-translate-y-1';
  return (
    <button onClick={onClick} className={`flex-1 md:flex-none flex items-center justify-center gap-3 px-6 py-4 font-black uppercase tracking-widest border-[4px] transition-all duration-200 cursor-pointer ${activeClass}`} style={{ fontSize: '1.05em', minWidth: '150px' }}>
      {icon} <span>{label}</span>
    </button>
  );
}
