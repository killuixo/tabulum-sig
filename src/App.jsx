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
const Database = (p) => <Icon {...p} path={<><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></>} />;
const Download = (p) => <Icon {...p} path={<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></>} />;
const Upload = (p) => <Icon {...p} path={<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></>} />;
const Save = (p) => <Icon {...p} path={<><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></>} />;
const ChevronLeft = (p) => <Icon {...p} path={<path d="m15 18-6-6 6-6"/>} />;
const UserIcon = (p) => <Icon {...p} path={<><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>} />;
const SearchIcon = (p) => <Icon {...p} path={<><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></>} />;
const Trash2 = (p) => <Icon {...p} path={<><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></>} />;
const Mail = (p) => <Icon {...p} path={<><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></>} />;
const DownloadCloud = (p) => <Icon {...p} path={<><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m8 17 4 4 4-4"/></>} />;
const Folder = (p) => <Icon {...p} path={<><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></>} />;
const FileText = (p) => <Icon {...p} path={<><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></>} />;
const BookOpen = (p) => <Icon {...p} path={<><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></>} />;
const Edit2 = (p) => <Icon {...p} path={<><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></>} />;
const Users = (p) => <Icon {...p} path={<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>} />;
const ExternalLink = (p) => <Icon {...p} path={<><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></>} />;
const Lock = (p) => <Icon {...p} path={<><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>} />;
const Unlock = (p) => <Icon {...p} path={<><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></>} />;
const Key = (p) => <Icon {...p} path={<><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"/><path d="m21 2-9.6 9.6"/><circle cx="7.5" cy="15.5" r="5.5"/></>} />;
const ListIcon = (p) => <Icon {...p} path={<><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></>} />;
const GridIcon = (p) => <Icon {...p} path={<><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></>} />;

// --- CORES TEMA MONDRIAN E MATRIZES ---
const COLORS = {
  mustard: '#FFDB58', // Amarelo Mostarda (Ciclo 1 / Neutros)
  cyan: '#00b7eb', // Ciano confortável (Ciclo 2 / Sucessos)
  crimson: '#DC143C', // Carmesim (Ciclo 3 / Erros e Perigo)
  white: '#FFFFFF', black: '#000000', darkBg: '#0f0f0f', darkCard: '#1a1a1a'
};

const DEFAULT_WEBHOOK_UTILIDADE = "https://script.google.com/macros/s/AKfycbzJ3Cg0SaE373kiXgU6auHQF9ufc5KU-KloRISH_h6Cg7ToDaNzj6FjfDbKe7YSh4o/exec";
const DEFAULT_WEBHOOK_EQUIPE = ""; 
const DEFAULT_EMAIL_CENTRAL = "mandatoagroecologicodados@gmail.com"; 

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

// Helper para obter cores de Status Kanban
const getStatusColor = (status) => {
  const s = String(status || '').trim().toLowerCase();
  if (s.includes('aguardando')) return COLORS.crimson;
  if (s.includes('análise') || s.includes('analise')) return COLORS.mustard;
  if (s.includes('protocolado')) return COLORS.cyan;
  return null;
};
const getTextColorForStatus = (statusColor) => {
  if (statusColor === COLORS.crimson) return 'white';
  if (statusColor === COLORS.mustard || statusColor === COLORS.cyan) return 'black';
  return 'inherit';
};
const getProgressColor = (count) => {
  if (count === 0) return null;
  if (count <= 3) return COLORS.crimson;
  if (count <= 7) return COLORS.mustard;
  return COLORS.cyan;
};

// ==========================================
// COMPONENTES DE EDIÇÃO INLINE MÁGICA
// ==========================================
function EditableField({ value, onSave, multiline = false, isDark, textClass = "", accentColor, cycleAccent, isUnlocked, requireAuth }) {
  const [editing, setEditing] = useState(false);
  const [val, setVal] = useState(value || '');
  let pressTimer;

  const handleSave = () => { setEditing(false); if(val !== value) onSave(val); };
  const handleKeyDown = (e) => { if(e.key === 'Enter' && !multiline) handleSave(); if(e.key === 'Escape') { setVal(value); setEditing(false); } };

  const handleEditClick = (e) => {
    e.stopPropagation();
    requireAuth(() => {
      setEditing(true);
      if(cycleAccent) cycleAccent();
    });
  };

  const startPress = (e) => {
    pressTimer = setTimeout(() => { 
      requireAuth(() => {
        setEditing(true); 
        if(cycleAccent) cycleAccent(); 
      });
    }, 500); 
  };
  const endPress = () => clearTimeout(pressTimer);

  if (editing) {
    return multiline ? (
      <textarea autoFocus value={val} onChange={e=>setVal(e.target.value)} onBlur={handleSave} onKeyDown={handleKeyDown} className={`w-full p-2 border-[2px] outline-none resize-y transition-colors duration-300 ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'}`} style={{ borderColor: accentColor }} rows={4} />
    ) : (
      <input autoFocus type="text" value={val} onChange={e=>setVal(e.target.value)} onBlur={handleSave} onKeyDown={handleKeyDown} className={`w-full p-1 border-b-[2px] outline-none transition-colors duration-300 ${isDark ? 'bg-gray-800 text-white' : 'bg-transparent text-black'}`} style={{ borderColor: accentColor }} />
    );
  }

  return (
    <div className="group relative cursor-pointer flex-1 flex items-center min-h-[24px] w-full" onTouchStart={startPress} onTouchEnd={endPress} onMouseDown={startPress} onMouseUp={endPress} onMouseLeave={endPress} title={isUnlocked ? "Clique no ícone ou segure para editar" : "Desbloqueie para editar"}>
       <span className={textClass}>{value || '-'}</span>
       <button onClick={handleEditClick} className={`absolute -right-5 top-0 opacity-0 group-hover:opacity-100 p-1 rounded-sm shadow-md transition-opacity ${isUnlocked ? 'bg-black text-white dark:bg-white dark:text-black' : 'theme-crimson'}`}>
         {isUnlocked ? <Edit2 size={12} /> : <Lock size={12} />}
       </button>
    </div>
  );
}

function EditableSelect({ value, options, onSave, isDark, textClass = "", isStatus = false, accentColor, cycleAccent, isUnlocked, requireAuth }) {
  const [editing, setEditing] = useState(false);
  
  const handleEditClick = (e) => {
    e.stopPropagation();
    requireAuth(() => {
      setEditing(true);
      if(cycleAccent) cycleAccent();
    });
  };

  if (editing) {
    return (
      <select autoFocus value={value || ''} onChange={e => { setEditing(false); if(e.target.value !== value) onSave(e.target.value); }} onBlur={() => setEditing(false)} className={`p-1 border-[2px] outline-none transition-colors duration-300 ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'}`} style={{ borderColor: accentColor }}>
        <option value="">Selecione...</option>
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    );
  }

  let statusColor = null; let textColor = 'inherit';
  if (isStatus) {
    statusColor = getStatusColor(value);
    textColor = getTextColorForStatus(statusColor) || (isDark ? 'white' : 'black');
  }

  return (
    <div className="group relative cursor-pointer flex items-center w-max" 
         onDoubleClick={() => requireAuth(() => {setEditing(true); if(cycleAccent) cycleAccent();})} 
         onTouchStart={(e) => { e.target.pressTimer = setTimeout(()=> requireAuth(()=>{setEditing(true); if(cycleAccent) cycleAccent();}), 500); }} 
         onTouchEnd={(e) => clearTimeout(e.target.pressTimer)}>
       {isStatus ? (
         <span className={textClass} style={{ backgroundColor: statusColor || 'transparent', color: textColor, borderColor: statusColor || 'currentcolor' }}>{value || '-'}</span>
       ) : (
         <span className={textClass}>{value || '-'}</span>
       )}
       <button onClick={handleEditClick} className={`opacity-0 group-hover:opacity-100 p-1 ml-1 rounded-sm shadow-md transition-opacity ${isUnlocked ? 'bg-black text-white dark:bg-white dark:text-black' : 'theme-crimson'}`}>
         {isUnlocked ? <Edit2 size={12} /> : <Lock size={12} />}
       </button>
    </div>
  );
}

// ==========================================
// APLICATIVO PRINCIPAL
// ==========================================
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

  // URLs de Rede (Memória Local vs Matriz Global)
  const [webhookUtilidade, setWebhookUtilidade] = useState(() => localStorage.getItem('tabulum_wh_utilidade') || DEFAULT_WEBHOOK_UTILIDADE);
  const [webhookEquipe, setWebhookEquipe] = useState(() => localStorage.getItem('tabulum_wh_equipe') || DEFAULT_WEBHOOK_EQUIPE);
  const [emailCentral, setEmailCentral] = useState(() => localStorage.getItem('tabulum_email') || DEFAULT_EMAIL_CENTRAL);

  // Sistema de Segurança Global
  const EMERGENCY_PHRASE = "Nada resiste ao bem e ao amor.";
  const [masterPassword, setMasterPassword] = useState(() => localStorage.getItem('tabulum_master_pwd') || 'admin');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);

  const [syncStatus, setSyncStatus] = useState('');
  const [activeFicha, setActiveFicha] = useState(null);
  const [activeArticulador, setActiveArticulador] = useState(null);
  const [activeMembroEquipe, setActiveMembroEquipe] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // MOTOR CÍCLICO MONDRIAN (A Magia da Seleção)
  const accentColors = [COLORS.mustard, COLORS.cyan, COLORS.crimson];
  const [accentIndex, setAccentIndex] = useState(0);
  const accentColor = accentColors[accentIndex];
  const cycleAccent = () => setAccentIndex(prev => (prev + 1) % 3);

  const requireAuth = (actionFn) => {
    if (isUnlocked) {
      if (actionFn) actionFn();
    } else {
      setPendingAction(() => actionFn);
      setAuthModalOpen(true);
    }
  };

  const handleEntityClick = (entityData) => {
    setActiveFicha(entityData);
    setView('entity_details');
  };

  const handleArticulatorClick = (articulatorName) => {
    if (!articulatorName || articulatorName === '-') return;
    setActiveArticulador(articulatorName);
    setView('articulator_details');
  };

  useEffect(() => { localStorage.setItem('tabulum_dark', JSON.stringify(isDark)); }, [isDark]);
  useEffect(() => { localStorage.setItem('tabulum_font', fontSizeLevel.toString()); }, [fontSizeLevel]);
  useEffect(() => { localStorage.setItem('tabulum_wh_utilidade', webhookUtilidade); }, [webhookUtilidade]);
  useEffect(() => { localStorage.setItem('tabulum_wh_equipe', webhookEquipe); }, [webhookEquipe]);
  useEffect(() => { localStorage.setItem('tabulum_email', emailCentral); }, [emailCentral]);
  useEffect(() => { localStorage.setItem('tabulum_master_pwd', masterPassword); }, [masterPassword]);

  useEffect(() => { 
    // Carrega dados na inicialização
    fetchFromWebhooks(webhookUtilidade, webhookEquipe); 
  }, []);

  // Passamos as URLs como parâmetro para evitar o "Bug da Memória Fantasma" (stale state no momento do clique)
  const fetchFromWebhooks = async (currentUrlUtilidade = webhookUtilidade, currentUrlEquipe = webhookEquipe) => {
    setLoading(true); 
    setSyncStatus('Sincronizando Banco Central...');
    
    // QUEBRADOR DE CACHE: Garante que o navegador pegue a versão mais nova da planilha sempre
    const noCache = `t=${new Date().getTime()}`;
    
    if (currentUrlUtilidade) {
      try {
        const urlUtilidade = currentUrlUtilidade + (currentUrlUtilidade.includes('?') ? '&' : '?') + noCache;
        const response = await fetch(urlUtilidade);
        const text = await response.text();
        try {
          const jsonData = JSON.parse(text);
          const formattedData = jsonData.map(item => {
            let newItem = {};
            for (let key in item) {
              let val = item[key];
              if (typeof val === 'string' && val.includes('T') && val.includes('Z') && val.length > 15) { val = new Date(val).toLocaleDateString('pt-BR'); }
              newItem[key] = val;
            }
            return newItem;
          });
          setData(formattedData);
        } catch(e) {
            setData(parseCSV(text));
            setSyncStatus('Sincronizado (Formato CSV).');
        }
      } catch (error) { console.error("Erro Entidades:", error); }
    }

    if (currentUrlEquipe) {
      try {
        const urlEquipe = currentUrlEquipe + (currentUrlEquipe.includes('?') ? '&' : '?') + noCache;
        const resEq = await fetch(urlEquipe);
        const textEq = await resEq.text();
        
        // Bloqueio contra erros de permissão do Google Script
        if (textEq.toLowerCase().includes('<!doctype html>') || textEq.toLowerCase().includes('<html')) {
          console.error("Script da Equipe não está público.");
          setSyncStatus('⚠️ Erro: Script da Equipe exige acesso "Qualquer pessoa"');
        } else {
          try {
            const jsonEq = JSON.parse(textEq);
            const formattedEq = jsonEq.map(item => ({ 
              ...item,
              Nome: item['Nome do Assessor'] || item['Nome'] || 'Desconhecido' 
            }));
            if (formattedEq.length > 0) setEquipe(formattedEq);
          } catch(e) {
            const parsedEq = parseCSV(textEq);
            const formattedEq = parsedEq.map(item => ({ 
              ...item,
              Nome: item['Nome do Assessor'] || item['Nome'] || 'Desconhecido' 
            }));
            if (formattedEq.length > 0) setEquipe(formattedEq);
          }
        }
      } catch(e) { console.error("Erro Equipe:", e); }
    }
    
    setLoading(false); 
    if(!syncStatus.includes('Erro')) setSyncStatus('Sincronizado!');
    setTimeout(() => setSyncStatus(''), 5000);
  };

  const applyNetworkSettings = (newUtilidade, newEquipe, newEmail) => {
    setWebhookUtilidade(newUtilidade); 
    setWebhookEquipe(newEquipe); 
    setEmailCentral(newEmail);
    // Dispara a busca forçando as URLs novas imediatamente
    fetchFromWebhooks(newUtilidade, newEquipe);
  };

  const deleteItem = async (entidadeName) => {
    if (!webhookUtilidade) return;
    if (window.confirm(`Arquivista, confirma a exclusão definitiva do processo de: ${entidadeName}?`)) {
      setSyncStatus('Apagando registro no banco de dados...');
      try {
        await fetch(webhookUtilidade, {
          method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({ action: 'delete', ENTIDADE: entidadeName })
        });
        setData(prevData => prevData.filter(d => d.ENTIDADE !== entidadeName));
        setActiveFicha(null); setView('kanban'); setSyncStatus('Registro apagado.');
      } catch (error) { console.error(error); } finally { setTimeout(() => setSyncStatus(''), 3000); }
    }
  };

  const handleUpdateEntity = async (originalName, updatedFields) => {
    setData(prev => prev.map(d => d.ENTIDADE === originalName ? { ...d, ...updatedFields } : d));
    setActiveFicha(prev => prev && prev.ENTIDADE === originalName ? { ...prev, ...updatedFields } : prev);
    if (webhookUtilidade) {
      try {
        await fetch(webhookUtilidade, {
          method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({ action: 'update', ENTIDADE_ORIGINAL: originalName, newData: updatedFields })
        });
      } catch (error) { console.error("Erro ao atualizar", error); }
    }
  };

  const handleUpdateEquipe = async (originalName, updatedFields) => {
    setEquipe(prev => prev.map(p => {
      if (p.Nome === originalName) {
        const novoNome = updatedFields['Nome do Assessor'] !== undefined ? updatedFields['Nome do Assessor'] : p.Nome;
        return { ...p, ...updatedFields, Nome: novoNome };
      }
      return p;
    }));
    
    setActiveMembroEquipe(prev => {
       if(prev && prev.Nome === originalName) {
         const novoNome = updatedFields['Nome do Assessor'] !== undefined ? updatedFields['Nome do Assessor'] : prev.Nome;
         return { ...prev, ...updatedFields, Nome: novoNome };
       }
       return prev;
    });

    if (webhookEquipe) {
      try {
        await fetch(webhookEquipe, {
          method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({ action: 'update', NOME_ORIGINAL: originalName, newData: updatedFields })
        });
      } catch (error) { console.error("Erro ao atualizar equipe", error); }
    } else {
      alert("⚠️ Aviso: O Webhook da Equipe não está configurado na rede. A alteração foi salva apenas localmente.");
    }
  };

  const exportCSV = () => {
    if (data.length === 0) { alert("Nenhum dado para exportar."); return; }
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
    const link = document.createElement('a'); link.href = url; link.download = `Tabulum_Backup_${new Date().toISOString().slice(0,10)}.csv`;
    link.style.display = 'none'; document.body.appendChild(link); link.click(); document.body.removeChild(link);
  };

  const importCSV = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLoading(true);
    const reader = new FileReader();
    reader.onload = (evt) => {
      setData(parseCSV(evt.target.result));
      setLoading(false); setSyncStatus('Backup carregado na tela atual!');
      setTimeout(() => setSyncStatus(''), 5000);
    };
    reader.onerror = () => { setLoading(false); setSyncStatus('Erro ao ler arquivo.'); };
    reader.readAsText(file); e.target.value = '';
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

  const fontSizes = { 1: 'text-[10px] leading-tight', 2: 'text-xs', 3: 'text-sm', 4: 'text-base', 5: 'text-lg' };

  const themeConfig = {
    bg: isDark ? 'bg-[#0f0f0f]' : 'bg-[#f4f4f0]', text: isDark ? 'text-gray-100' : 'text-gray-900',
    border: isDark ? 'border-gray-200' : 'border-black', cardBg: isDark ? 'bg-[#1a1a1a]' : 'bg-white',
    inputBg: isDark ? 'bg-[#2a2a2a]' : 'bg-gray-100', gridLines: isDark ? 'bg-gray-200' : 'bg-black'
  };

  const bThick = `border-[4px] ${themeConfig.border}`; const bMedium = `border-[2px] ${themeConfig.border}`;

  // CLASSES MONDRIAN INJETADAS
  const mondrianStyles = `
    .theme-crimson { background-color: ${COLORS.crimson} !important; color: white !important; border-color: ${COLORS.crimson} !important; }
    .hover-crimson:hover { background-color: ${COLORS.crimson} !important; color: white !important; border-color: ${COLORS.crimson} !important; }
    .text-crimson { color: ${COLORS.crimson} !important; }
    
    .theme-cyan { background-color: ${COLORS.cyan} !important; color: black !important; border-color: ${COLORS.cyan} !important; }
    .hover-cyan:hover { background-color: ${COLORS.cyan} !important; color: black !important; border-color: ${COLORS.cyan} !important; }
    .text-cyan { color: ${COLORS.cyan} !important; }
    
    .theme-mustard { background-color: ${COLORS.mustard} !important; color: black !important; border-color: ${COLORS.mustard} !important; }
    .hover-mustard:hover { background-color: ${COLORS.mustard} !important; color: black !important; border-color: ${COLORS.mustard} !important; }
    .text-mustard { color: ${COLORS.mustard} !important; }
  `;

  return (
    <div className={`min-h-screen font-sans ${themeConfig.bg} ${themeConfig.text} ${fontSizes[fontSizeLevel]} transition-colors duration-300 flex flex-col`}>
      <style>{mondrianStyles}</style>
      <header className={`flex flex-col md:flex-row border-b-[6px] ${themeConfig.border}`}>
        <div className={`flex-1 p-4 md:p-6 ${bMedium} border-b-0 md:border-b-0 md:border-r-[6px] flex items-center justify-between`}>
          <div 
            onClick={() => {setView('kanban'); setActiveFicha(null); setActiveArticulador(null); setActiveMembroEquipe(null); setIsFormOpen(false); cycleAccent();}}
            className="cursor-pointer hover:opacity-70 transition-opacity"
            title="Ir para o Kanban"
          >
            <h1 className="font-black uppercase tracking-widest text-2xl md:text-3xl leading-none">TABULUM</h1>
            <p className="font-bold opacity-60 uppercase tracking-widest text-[0.7em] mt-1">Sist. Integrado de Gestão • Dep. Marquito</p>
          </div>
          <div className="hidden md:flex gap-2 items-center">
            <button 
              onClick={() => isUnlocked ? setIsUnlocked(false) : requireAuth()}
              className={`flex items-center justify-center p-2 transition-all duration-300 hover:scale-110 opacity-50 hover:opacity-100 ${isUnlocked ? 'text-cyan' : 'text-current'}`}
              title={isUnlocked ? "Sessão Desbloqueada. Clique para Bloquear Edição" : "Sessão Bloqueada. Clique para Desbloquear Edição"}
            >
              {isUnlocked ? <Unlock size={20} /> : <Lock size={20} />}
            </button>
            <div className="w-8 h-8 ml-2" style={{ backgroundColor: COLORS.cyan, border: `3px solid ${isDark ? '#fff' : '#000'}` }}></div>
            <div className="w-8 h-8" style={{ backgroundColor: COLORS.mustard, border: `3px solid ${isDark ? '#fff' : '#000'}` }}></div>
            <div className="w-8 h-8" style={{ backgroundColor: COLORS.crimson, border: `3px solid ${isDark ? '#fff' : '#000'}` }}></div>
          </div>
        </div>

        <nav className={`flex flex-wrap md:flex-nowrap p-3 md:p-4 gap-3 overflow-x-auto ${themeConfig.cardBg} items-center md:justify-center`}>
          <NavButton active={view === 'kanban' && !isFormOpen} onClick={() => {setView('kanban'); setActiveFicha(null); setActiveArticulador(null); setActiveMembroEquipe(null); setIsFormOpen(false); cycleAccent();}} icon={<Kanban />} label="Kanban" isDark={isDark} accentColor={accentColor} />
          <NavButton active={view === 'dashboard' && !isFormOpen} onClick={() => {setView('dashboard'); setActiveFicha(null); setActiveArticulador(null); setActiveMembroEquipe(null); setIsFormOpen(false); cycleAccent();}} icon={<LayoutDashboard />} label="Dashboard" isDark={isDark} accentColor={accentColor} />
          <button 
            onClick={() => requireAuth(() => { setIsFormOpen(true); cycleAccent(); })}
            className={`flex items-center justify-center font-black text-2xl w-12 h-12 border-[4px] transition-all duration-300 hover:-translate-y-1 flex-shrink-0 ${isDark ? 'bg-black text-white hover:bg-white hover:text-black' : 'bg-white text-black hover:bg-black hover:text-white'}`}
            style={isFormOpen 
              ? { borderColor: accentColor, boxShadow: `4px 4px 0px ${accentColor}`, backgroundColor: isDark ? 'white' : 'black', color: isDark ? 'black' : 'white', transform: 'scale(1.05)', zIndex: 10 } 
              : { borderColor: 'currentColor', backgroundColor: isDark ? 'black' : 'white', color: isDark ? 'white' : 'black' }}
            title="Adicionar Novo Pedido"
          >
            +
          </button>
          
          {/* BOTÃO DISCRETO DA EQUIPE */}
          <button 
            onClick={() => {setView('equipe_list'); setActiveFicha(null); setActiveArticulador(null); setActiveMembroEquipe(null); setIsFormOpen(false); cycleAccent();}}
            className={`flex items-center justify-center w-12 h-12 transition-all duration-300 flex-shrink-0 ${view === 'equipe_list' && !isFormOpen ? 'border-[4px]' : 'border-[2px] border-transparent hover:border-current opacity-50 hover:opacity-100'}`}
            style={view === 'equipe_list' && !isFormOpen ? { borderColor: accentColor, color: accentColor, boxShadow: `4px 4px 0px ${accentColor}`, zIndex: 10 } : { color: 'inherit' }}
            title="Banco de Dados da Equipe"
          >
            <Users size={24} />
          </button>

          {/* BOTÃO DISCRETO DE AJUSTES (AGORA COMO O ÚLTIMO, SEM TEXTO, APENAS A ENGRENAGEM) */}
          <button 
            onClick={() => {setView('settings'); setActiveFicha(null); setActiveArticulador(null); setActiveMembroEquipe(null); setIsFormOpen(false); cycleAccent();}}
            className={`flex items-center justify-center w-12 h-12 transition-all duration-300 flex-shrink-0 ${view === 'settings' && !isFormOpen ? 'border-[4px]' : 'border-[2px] border-transparent hover:border-current opacity-50 hover:opacity-100'}`}
            style={view === 'settings' && !isFormOpen ? { borderColor: accentColor, color: accentColor, boxShadow: `4px 4px 0px ${accentColor}`, zIndex: 10 } : { color: 'inherit' }}
            title="Ajustes do Sistema"
          >
            <Settings size={24} />
          </button>
        </nav>
      </header>

      <main className="p-4 md:p-6 flex-1 flex flex-col relative">
        {loading ? (
          <div className="flex-1 flex flex-col items-center justify-center">
            <RefreshCw className="animate-spin mb-4" size={48} style={{ color: COLORS.cyan }} />
            <p className="font-black uppercase tracking-widest animate-pulse" style={{ color: syncStatus.includes('Erro') ? COLORS.crimson : 'inherit' }}>{syncStatus}</p>
          </div>
        ) : (
          <>
            {isFormOpen && <FormNovoPedido onClose={() => setIsFormOpen(false)} theme={themeConfig} thick={bThick} isDark={isDark} fetchFromWebhooks={() => fetchFromWebhooks()} equipe={equipe} webhookUtilidade={webhookUtilidade} emailCentral={emailCentral} accentColor={accentColor} cycleAccent={cycleAccent} requireAuth={requireAuth} />}
            
            {!isFormOpen && view === 'entity_details' && activeFicha && (
              <FichaEntidade 
                item={activeFicha} equipe={equipe} emailCentral={emailCentral}
                onClose={() => {setActiveFicha(null); setView('kanban'); cycleAccent();}} 
                onArticuladorClick={handleArticulatorClick}
                onDelete={() => deleteItem(activeFicha.ENTIDADE)}
                onUpdate={(fields) => handleUpdateEntity(activeFicha.ENTIDADE, fields)}
                theme={themeConfig} thick={bThick} isDark={isDark} accentColor={accentColor} cycleAccent={cycleAccent}
                isUnlocked={isUnlocked} requireAuth={requireAuth}
              />
            )}
            
            {!isFormOpen && view === 'articulator_details' && activeArticulador && <PainelArticulador nome={activeArticulador} data={data} onClose={() => {setActiveArticulador(null); setView('kanban'); cycleAccent();}} onEntidadeClick={handleEntityClick} theme={themeConfig} thick={bThick} isDark={isDark} />}
            
            {!isFormOpen && view === 'equipe_list' && <ListaEquipeView equipe={equipe} onMembroClick={(membro) => {setActiveMembroEquipe(membro); setView('equipe_details'); cycleAccent();}} onBack={() => {setView('kanban'); cycleAccent();}} theme={themeConfig} thick={bThick} isDark={isDark} />}
            
            {!isFormOpen && view === 'equipe_details' && activeMembroEquipe && (
              <FichaMembroEquipe 
                membro={activeMembroEquipe} 
                onClose={() => {setActiveMembroEquipe(null); setView('equipe_list'); cycleAccent();}} 
                onUpdate={(fields) => handleUpdateEquipe(activeMembroEquipe.Nome, fields)} 
                theme={themeConfig} thick={bThick} isDark={isDark} accentColor={accentColor} cycleAccent={cycleAccent} 
                isUnlocked={isUnlocked} requireAuth={requireAuth}
              />
            )}

            {!isFormOpen && view === 'kanban' && <KanbanView data={data} theme={themeConfig} thick={bThick} med={bMedium} isDark={isDark} onEntityClick={handleEntityClick} onArticulatorClick={handleArticulatorClick} />}
            {!isFormOpen && view === 'dashboard' && <DashboardView data={data} theme={themeConfig} thick={bThick} med={bMedium} onEntityClick={handleEntityClick} onArticulatorClick={handleArticulatorClick} isDark={isDark} />}
            
            {!isFormOpen && view === 'settings' && (
              <SettingsView 
                isDark={isDark} setIsDark={setIsDark} 
                fontSizeLevel={fontSizeLevel} setFontSizeLevel={setFontSizeLevel}
                webhookUtilidade={webhookUtilidade} webhookEquipe={webhookEquipe} emailCentral={emailCentral}
                applyNetworkSettings={applyNetworkSettings} exportCSV={exportCSV} importCSV={importCSV}
                setView={setView} theme={themeConfig} thick={bThick} med={bMedium} accentColor={accentColor} cycleAccent={cycleAccent}
                masterPassword={masterPassword} setMasterPassword={setMasterPassword} EMERGENCY_PHRASE={EMERGENCY_PHRASE}
              />
            )}
          </>
        )}
      </main>

      {/* MODAL DE AUTENTICAÇÃO GERAL */}
      {authModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in zoom-in duration-200">
           <div className={`w-full max-w-sm p-6 flex flex-col gap-4 ${bThick} ${themeConfig.cardBg} shadow-[8px_8px_0px_rgba(0,0,0,0.5)] border-[3px]`} style={{ borderColor: accentColor }}>
              <div className="flex items-center gap-3 border-b-[4px] border-current pb-2">
                 <Lock size={24} className="text-crimson" />
                 <h2 className="text-xl font-black uppercase tracking-widest text-crimson">Acesso Restrito</h2>
              </div>
              <p className="text-sm font-bold opacity-80 leading-relaxed">
                 Insira a senha mestra para habilitar edições. Apenas usuários autorizados podem alterar o banco de dados.
              </p>
              <input 
                 type="password" 
                 autoFocus
                 placeholder="Senha ou Frase..."
                 className={`w-full p-3 border-[3px] outline-none font-bold transition-colors duration-300 ${themeConfig.inputBg}`}
                 style={{ borderColor: 'currentcolor' }}
                 onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                       const val = e.target.value;
                       if (val === masterPassword || val.trim().toLowerCase() === EMERGENCY_PHRASE.toLowerCase()) {
                          setIsUnlocked(true);
                          setAuthModalOpen(false);
                          if (pendingAction) pendingAction();
                       } else {
                          alert('Acesso Negado: Senha ou Frase de Emergência Incorreta.');
                       }
                    }
                 }}
                 id="auth_pwd_input"
              />
              <div className="flex gap-2 mt-2">
                 <button 
                    onClick={() => {
                       const val = document.getElementById('auth_pwd_input').value;
                       if (val === masterPassword || val.trim().toLowerCase() === EMERGENCY_PHRASE.toLowerCase()) {
                          setIsUnlocked(true);
                          setAuthModalOpen(false);
                          if (pendingAction) pendingAction();
                       } else {
                          alert('Acesso Negado: Senha ou Frase de Emergência Incorreta.');
                       }
                    }}
                    className="flex-1 p-3 bg-black text-white dark:bg-white dark:text-black font-black uppercase tracking-widest text-[0.8em] border-[3px] border-current hover:-translate-y-1 transition-transform"
                 >
                   Desbloquear
                 </button>
                 <button 
                    onClick={() => { setAuthModalOpen(false); setPendingAction(null); }}
                    className="flex-1 p-3 bg-transparent font-black uppercase tracking-widest text-[0.8em] border-[3px] border-current hover:-translate-y-1 transition-transform hover-crimson"
                 >
                   Cancelar
                 </button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// COMPONENTES DE VISUALIZAÇÃO
// ==========================================

function KanbanView({ data, theme, thick, med, isDark, onEntityClick, onArticulatorClick }) {
  const [collapsedCols, setCollapsedCols] = useState({});
  const toggleCol = (id) => setCollapsedCols(prev => ({ ...prev, [id]: !prev[id] }));

  const columns = [
    { id: 'Aguardando Documentos', label: 'Aguardando', color: COLORS.crimson, icon: <AlertCircle size={16}/> },
    { id: 'Em análise', label: 'Análise', color: COLORS.mustard, icon: <Clock size={16}/> },
    { id: 'Protocolado', label: 'Protocolado', color: COLORS.cyan, icon: <CheckCircle2 size={16}/> }
  ];

  const getColData = (status) => data.filter(d => String(d['STATUS DA ANÁLISE'] || '').trim().toLowerCase() === status.toLowerCase());

  return (
    <div className="flex flex-col md:flex-row gap-4 flex-1 items-stretch min-h-[500px]">
      {columns.map((col) => {
        const isCollapsed = collapsedCols[col.id];
        const colData = getColData(col.id);
        const headerTextColor = getTextColorForStatus(col.color) || (isDark ? 'white' : 'black');
        
        return (
          <div key={col.id} className={`flex flex-col transition-all duration-300 ${isCollapsed ? 'w-16 md:w-20' : 'flex-1'} ${thick} ${theme.cardBg}`}>
            <div onClick={() => toggleCol(col.id)} className={`p-3 font-black flex items-center gap-2 uppercase tracking-wider border-b-[4px] cursor-pointer transition-colors ${theme.border}`} style={{ backgroundColor: col.color, color: headerTextColor }}>
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
                  const itemProgressBoxes = DOCS_KEYS.map(key => {
                    const hasDoc = (String(item[key] || '').toUpperCase() === 'TRUE');
                    if (hasDoc) hasCount++;
                    return { key, has: hasDoc };
                  });

                  return (
                    <div key={i} onClick={() => onEntityClick(item)} className={`p-3 md:p-4 ${med} hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.3)] transition-all cursor-pointer ${theme.bg}`}>
                      <h3 className="font-black mb-3 uppercase leading-tight" style={{ fontSize: '1.1em' }}>{item.ENTIDADE || 'Sem Nome'}</h3>
                      <div className="flex justify-between items-end gap-2">
                        <div className="flex flex-col">
                          <span className="text-[0.65em] uppercase font-black opacity-60 tracking-widest">Articulador</span>
                          <span onClick={(e) => { e.stopPropagation(); onArticulatorClick(item.ARTICULADOR); }} className={`font-bold hover:underline decoration-2 underline-offset-4 cursor-pointer`} style={{ textDecorationColor: col.color }}>{item.ARTICULADOR || '-'}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[0.65em] uppercase font-black opacity-60 tracking-widest block">Data</span>
                          <span className="font-bold text-[0.9em]">{item['DATA DA SOLICITAÇÃO'] || '-'}</span>
                        </div>
                      </div>

                      {/* LINK DE TRAMITAÇÃO KANBAN */}
                      {(item['LINK']) && (
                        <a href={item['LINK']} target="_blank" rel="noopener noreferrer" className="mt-3 flex w-max items-center gap-1 text-[0.7em] font-black uppercase tracking-widest opacity-80 hover:opacity-100 hover:underline transition-all" style={{ color: col.color }} onClick={e => e.stopPropagation()}>
                          <ExternalLink size={14} /> Acompanhar tramitação
                        </a>
                      )}

                      <div className="mt-4 flex gap-1 h-3">
                        {itemProgressBoxes.map((box, bIdx) => {
                          const activeColor = box.has ? getProgressColor(hasCount) : null;
                          return (
                            <div 
                              key={bIdx} 
                              title={box.key === '6 - 7 DECLARAÇÃO REMUNERAÇÃO' ? '6 OU 7 DEC. REMUNERAÇÃO' : box.key} 
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

function DashboardView({ data, theme, thick, med, onEntityClick, onArticulatorClick, isDark }) {
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
              <div className="w-full transition-all duration-500" style={{ height: `${(emAnalise/total)*100 || 0}%`, backgroundColor: COLORS.mustard, border: '3px solid currentcolor' }}></div>
              <span className="text-[9px] uppercase font-black tracking-widest text-center mt-1">Int</span>
            </div>
            <div className="w-1/3 flex flex-col items-center gap-1 h-full justify-end">
              <div className="w-full transition-all duration-500" style={{ height: `${((total-emAnalise-protocolados)/total)*100 || 0}%`, backgroundColor: COLORS.crimson, border: '3px solid currentcolor' }}></div>
              <span className="text-[9px] uppercase font-black tracking-widest text-center mt-1">Docs</span>
            </div>
            <div className="w-1/3 flex flex-col items-center gap-1 h-full justify-end">
              <div className="w-full transition-all duration-500" style={{ height: `${(protocolados/total)*100 || 0}%`, backgroundColor: COLORS.cyan, border: '3px solid currentcolor' }}></div>
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
              <tr key={i} className={`border-b-[3px] ${theme.border} hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors`}>
                <td className="p-4 border-r-[4px] border-current font-bold cursor-pointer hover:underline decoration-2" onClick={() => onEntityClick(row)}>{row.ENTIDADE}</td>
                <td className="p-4 border-r-[4px] border-current font-bold opacity-80 cursor-pointer hover:underline decoration-2" onClick={() => onArticulatorClick(row.ARTICULADOR)}>{row.ARTICULADOR}</td>
                <td className="p-4 border-r-[4px] border-current">
                   <span className="px-2 py-1 font-black uppercase text-[0.75em] tracking-widest" style={{ backgroundColor: getStatusColor(row['STATUS DA ANÁLISE']) || 'black', color: getTextColorForStatus(getStatusColor(row['STATUS DA ANÁLISE'])) || (isDark ? 'white' : 'black') }}>
                     {row['STATUS DA ANÁLISE'] || '-'}
                   </span>
                </td>
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
// LISTA COMPLETA DA EQUIPE
// ==========================================
function ListaEquipeView({ equipe, onMembroClick, onBack, theme, thick, isDark }) {
  const [viewMode, setViewMode] = useState('list');

  return (
    <div className={`max-w-6xl mx-auto w-full flex flex-col gap-6 animate-in fade-in zoom-in-95 duration-200`}>
      <div className={`p-6 md:p-8 ${thick} ${theme.cardBg} flex flex-col gap-4`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-[6px] border-current pb-4">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className={`p-2 border-[3px] border-current hover:-translate-x-1 transition-transform`}><ChevronLeft size={24} /></button>
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-2 flex items-center gap-3"><Users size={36} /> Gestão de Equipe</h2>
              <p className="font-bold opacity-60 uppercase tracking-widest text-[0.8em]">Banco de Dados da Secretaria / RH</p>
            </div>
          </div>

          <div className="flex items-center gap-2 border-[3px] border-current p-1 bg-black/5 dark:bg-white/5 w-max">
            <button 
              onClick={() => setViewMode('list')} 
              className={`p-2 transition-colors ${viewMode === 'list' ? (isDark ? 'bg-white text-black' : 'bg-black text-white') : 'hover:bg-black/10 dark:hover:bg-white/10'}`}
              title="Visualização em Tabela"
            >
              <ListIcon size={20} />
            </button>
            <button 
              onClick={() => setViewMode('grid')} 
              className={`p-2 transition-colors ${viewMode === 'grid' ? (isDark ? 'bg-white text-black' : 'bg-black text-white') : 'hover:bg-black/10 dark:hover:bg-white/10'}`}
              title="Visualização em Cards"
            >
              <GridIcon size={20} />
            </button>
          </div>
        </div>

        {viewMode === 'list' ? (
          <div className="overflow-x-auto border-[4px] border-current mt-4">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead className={`border-b-[4px] border-current bg-black text-white dark:bg-white dark:text-black uppercase font-black tracking-widest text-[11px]`}>
                <tr>
                  <th className="p-4 border-r border-current">Nome Assessor (Chave)</th>
                  <th className="p-4 border-r border-current">Nome Completo</th>
                  <th className="p-4 border-r border-current">Coordenação</th>
                  <th className="p-4">E-mail Principal</th>
                </tr>
              </thead>
              <tbody>
                {equipe.map((membro, i) => (
                  <tr key={i} onClick={() => onMembroClick(membro)} className={`border-b-[2px] border-current hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer group`}>
                    <td className="p-4 border-r border-current font-black group-hover:underline decoration-2">
                       {membro.Nome}
                    </td>
                    <td className="p-4 border-r border-current font-bold opacity-90 text-sm">
                       {membro['Nome Completo'] || '-'}
                    </td>
                    <td className="p-4 border-r border-current font-bold opacity-90 text-xs uppercase tracking-widest">
                       {membro['Coordenação'] || '-'}
                    </td>
                    <td className="p-4 font-bold opacity-90 text-xs">
                       {membro['E-mail Principal'] || membro['E-mail do Assessor'] || '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {equipe.map((membro, i) => (
              <div key={i} onClick={() => onMembroClick(membro)} className={`p-5 border-[4px] border-current cursor-pointer hover:-translate-y-1 hover:shadow-[6px_6px_0px_currentColor] transition-all flex flex-col h-full ${theme.bg}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 border-[3px] border-current flex-shrink-0 flex items-center justify-center font-black text-2xl bg-black text-white dark:bg-white dark:text-black uppercase">
                    {membro.Nome ? membro.Nome.charAt(0) : '?'}
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="font-black text-lg uppercase leading-tight truncate" title={membro.Nome}>{membro.Nome}</h3>
                    <span className="font-bold opacity-70 text-[0.7em] uppercase tracking-widest truncate block" title={membro['Coordenação']}>{membro['Coordenação'] || 'Sem Coordenação'}</span>
                  </div>
                </div>
                <div className="mt-auto pt-3 border-t-[3px] border-current border-dashed">
                  <span className="text-[0.65em] font-black uppercase opacity-60 tracking-widest block mb-1">E-mail Principal</span>
                  <span className="font-bold text-[0.8em] truncate block" title={membro['E-mail Principal'] || membro['E-mail do Assessor']}>{membro['E-mail Principal'] || membro['E-mail do Assessor'] || 'Não cadastrado'}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ==========================================
// FICHA COMPLETA DO MEMBRO DA EQUIPE
// ==========================================
function FichaMembroEquipe({ membro, onClose, onUpdate, theme, thick, isDark, accentColor, cycleAccent, isUnlocked, requireAuth }) {
  const [saveLabel, setSaveLabel] = useState('Salvar Alterações');
  const keys = Object.keys(membro).filter(k => k !== 'Nome');

  const handleManualSave = () => {
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    setSaveLabel('Salvando...');
    setTimeout(() => {
      setSaveLabel('Salvo com sucesso!');
      setTimeout(() => setSaveLabel('Salvar Alterações'), 2000);
    }, 500);
  };

  return (
    <div className={`max-w-4xl mx-auto w-full p-6 md:p-8 ${thick} ${theme.cardBg} flex flex-col gap-6 relative animate-in fade-in zoom-in-95 duration-200`}>
      <button onClick={onClose} className="absolute top-4 right-4 md:top-6 md:right-6 text-2xl font-black hover:scale-110 transition-transform z-10">X</button>
      
      <div className="pr-10 border-b-[6px] border-current pb-4">
        <span className="block text-[0.8em] uppercase font-black opacity-60 tracking-widest mb-1">Ficha Funcional</span>
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-2 break-words">
          <EditableField value={membro.Nome} onSave={(val) => onUpdate({ 'Nome do Assessor': val })} isDark={isDark} accentColor={accentColor} cycleAccent={cycleAccent} isUnlocked={isUnlocked} requireAuth={requireAuth} />
        </h2>
        <p className="font-bold opacity-80 uppercase tracking-widest text-[0.7em] mt-2">
          {isUnlocked ? "Clique no lápis (ou segure no celular) para editar qualquer campo. As alterações são sincronizadas com a planilha matriz." : "⚠️ A sessão está bloqueada. É necessário senha para editar este registro."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {keys.map((key, i) => {
          const val = membro[key];
          const isLarge = key.toLowerCase().includes('endereço') || key.toLowerCase().includes('observação');

          return (
            <div key={i} className={`p-4 border-[2px] border-current flex flex-col items-start w-full ${isLarge ? 'md:col-span-2' : ''} ${theme.bg}`}>
              <span className="block text-[0.6em] uppercase font-black opacity-60 tracking-widest mb-1">{key}</span>
              <EditableField 
                value={val} 
                onSave={(newVal) => onUpdate({ [key]: newVal })} 
                isDark={isDark} 
                multiline={isLarge}
                textClass={`font-bold break-words max-w-full ${isLarge ? 'whitespace-pre-wrap leading-relaxed' : ''}`} 
                accentColor={accentColor} 
                cycleAccent={cycleAccent}
                isUnlocked={isUnlocked} requireAuth={requireAuth}
              />
            </div>
          );
        })}
      </div>
      
      <div className="mt-4 border-t-[4px] border-current pt-4 flex flex-col sm:flex-row gap-4">
        <button onClick={() => requireAuth(handleManualSave)} className={`flex-1 p-4 font-black uppercase tracking-widest hover:-translate-y-1 transition-transform border-[4px] border-current shadow-[4px_4px_0px_currentColor] flex items-center justify-center gap-2 ${saveLabel === 'Salvo com sucesso!' ? 'theme-cyan' : (isDark ? 'bg-white text-black' : 'bg-black text-white')}`}>
          {isUnlocked ? <Save size={18} /> : <Lock size={18} />} {saveLabel}
        </button>
        <button onClick={onClose} className="flex-1 p-4 bg-transparent border-[4px] border-current font-black uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
          Fechar
        </button>
      </div>
    </div>
  );
}

// ==========================================
// FICHA COMPLETA COM EDIÇÃO INLINE MÁGICA
// ==========================================
function FichaEntidade({ item, onClose, onArticuladorClick, onDelete, onUpdate, theme, thick, isDark, equipe, emailCentral, accentColor, cycleAccent, isUnlocked, requireAuth }) {
  const [stagedFiles, setStagedFiles] = useState({});
  const [isPadronizadorOpen, setIsPadronizadorOpen] = useState(false);
  const [isManualOpen, setIsManualOpen] = useState(false);
  const [saveLabel, setSaveLabel] = useState('Salvar Ficha');

  const statusColor = getStatusColor(item['STATUS DA ANÁLISE']);

  const handleManualSave = () => {
    // Retira o foco de qualquer campo ativo no momento para forçar o auto-save onBlur
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setSaveLabel('Salvando...');
    setTimeout(() => {
      setSaveLabel('Salvo com sucesso!');
      setTimeout(() => setSaveLabel('Salvar Ficha'), 2000);
    }, 500);
  };

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
    const a = document.createElement('a'); a.href = url; a.download = standardName;
    document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
  };

  const toggleDoc = (docKey) => {
    const currentVal = String(item[docKey] || '').toUpperCase() === 'TRUE';
    onUpdate({ [docKey]: currentVal ? 'FALSE' : 'TRUE' });
  };

  const docsCount = DOCS_KEYS.filter(k => String(item[k] || '').toUpperCase() === 'TRUE').length;
  const checkGlobalColor = getProgressColor(docsCount);
  const equipeOptions = equipe.map(e => e.Nome);

  return (
    <div className={`p-6 md:p-8 ${thick} ${theme.cardBg} flex flex-col gap-6 relative animate-in fade-in zoom-in-95 duration-200`}>
      <button onClick={onClose} className="absolute top-4 right-4 md:top-6 md:right-6 text-2xl font-black hover:scale-110 transition-transform z-10">X</button>
      
      <div className="pr-10 border-b-[6px] border-current pb-4">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-2 break-words">
          <EditableField value={item.ENTIDADE} onSave={(val) => onUpdate({ ENTIDADE: val })} isDark={isDark} accentColor={accentColor} cycleAccent={cycleAccent} isUnlocked={isUnlocked} requireAuth={requireAuth} />
        </h2>
        <div className="flex flex-wrap gap-4 mt-3">
          <EditableSelect 
            value={item['STATUS DA ANÁLISE']} 
            options={['Aguardando Documentos', 'Em análise', 'Protocolado']}
            onSave={(val) => onUpdate({ 'STATUS DA ANÁLISE': val })}
            isDark={isDark}
            isStatus={true}
            textClass="font-bold uppercase tracking-widest text-[0.8em] px-3 py-1 border-[2px] transition-colors duration-500"
            accentColor={accentColor} cycleAccent={cycleAccent} isUnlocked={isUnlocked} requireAuth={requireAuth}
          />
          <EditableField 
            value={item['DATA DA SOLICITAÇÃO']} 
            onSave={(val) => onUpdate({ 'DATA DA SOLICITAÇÃO': val })}
            isDark={isDark}
            textClass="font-bold uppercase tracking-widest text-[0.8em] px-3 py-1 border-[2px] border-current opacity-70"
            accentColor={accentColor} cycleAccent={cycleAccent} isUnlocked={isUnlocked} requireAuth={requireAuth}
          />
          {(item['LINK']) && (
             <a href={item['LINK']} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 font-black uppercase tracking-widest text-[0.8em] px-3 py-1 border-[2px] border-current transition-colors opacity-70 hover:opacity-100`} title="Acompanhar Tramitação">
               <ExternalLink size={14}/> Processo ALESC
             </a>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <div className="p-4 border-[4px] border-current flex flex-col items-start w-full">
            <span className="block text-[0.7em] uppercase font-black opacity-60 tracking-widest mb-1">Articulador</span>
            <EditableSelect 
              value={item.ARTICULADOR} 
              options={equipeOptions}
              onSave={(val) => onUpdate({ ARTICULADOR: val })}
              isDark={isDark}
              textClass="text-xl font-black hover:underline decoration-4 underline-offset-4 cursor-pointer truncate max-w-[200px]"
              accentColor={accentColor} cycleAccent={cycleAccent} isUnlocked={isUnlocked} requireAuth={requireAuth}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className={`p-4 border-[2px] border-current ${theme.bg} flex flex-col items-start w-full`}>
              <span className="block text-[0.6em] uppercase font-black opacity-60 tracking-widest mb-1">Liderança</span>
              <EditableField value={item.LIDERANÇA} onSave={(val) => onUpdate({ LIDERANÇA: val })} isDark={isDark} textClass="font-bold break-words max-w-full" accentColor={accentColor} cycleAccent={cycleAccent} isUnlocked={isUnlocked} requireAuth={requireAuth} />
            </div>
            <div className={`p-4 border-[2px] border-current ${theme.bg} flex flex-col items-start w-full`}>
              <span className="block text-[0.6em] uppercase font-black opacity-60 tracking-widest mb-1">Telefone</span>
              <EditableField value={item.TELEFONE} onSave={(val) => onUpdate({ TELEFONE: val })} isDark={isDark} textClass="font-bold break-words max-w-full" accentColor={accentColor} cycleAccent={cycleAccent} isUnlocked={isUnlocked} requireAuth={requireAuth} />
            </div>
            <div className={`p-4 border-[2px] border-current ${theme.bg} col-span-2 flex flex-col items-start w-full`}>
              <span className="block text-[0.6em] uppercase font-black opacity-60 tracking-widest mb-1">E-mail</span>
              <EditableField value={item.EMAIL} onSave={(val) => onUpdate({ EMAIL: val })} isDark={isDark} textClass="font-bold break-all max-w-full" accentColor={accentColor} cycleAccent={cycleAccent} isUnlocked={isUnlocked} requireAuth={requireAuth} />
            </div>
          </div>
          <div className={`p-4 border-[2px] border-current ${theme.bg} flex flex-col items-start w-full`}>
            <span className="block text-[0.6em] uppercase font-black opacity-60 tracking-widest mb-1">Observações</span>
            <EditableField value={item.OBSERVAÇÕES} onSave={(val) => onUpdate({ OBSERVAÇÕES: val })} isDark={isDark} multiline textClass="font-bold whitespace-pre-wrap leading-relaxed max-w-full" accentColor={accentColor} cycleAccent={cycleAccent} isUnlocked={isUnlocked} requireAuth={requireAuth} />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className={`p-4 border-[4px] transition-colors duration-500`} style={{ borderColor: statusColor || 'currentcolor' }}>
            <span className="block text-[0.7em] uppercase font-black opacity-80 tracking-widest mb-2 border-b-2 pb-1" style={{ borderColor: statusColor || 'currentcolor', color: statusColor || 'inherit' }}>Trâmite ALESC</span>
            <div className="grid grid-cols-2 gap-2 font-bold w-full">
              <div className="flex flex-col items-start"><span className="opacity-70 text-[0.8em]">Data Envio:</span> <EditableField value={item['DATA DO ENVIO ALESC']} onSave={(val) => onUpdate({ 'DATA DO ENVIO ALESC': val })} isDark={isDark} accentColor={accentColor} cycleAccent={cycleAccent} isUnlocked={isUnlocked} requireAuth={requireAuth} /></div>
              <div className="flex flex-col items-start"><span className="opacity-70 text-[0.8em]">Processo:</span> <EditableField value={item['Nº DO PROCESSO ALESC']} onSave={(val) => onUpdate({ 'Nº DO PROCESSO ALESC': val })} isDark={isDark} accentColor={accentColor} cycleAccent={cycleAccent} isUnlocked={isUnlocked} requireAuth={requireAuth} /></div>
              <div className="col-span-2 mt-2 flex flex-col items-start"><span className="opacity-70 text-[0.8em]">Estágio:</span> <EditableSelect value={item['ESTÁGIO ATUAL']} options={['Gabinete', 'Protocolo', 'CCJ', 'Plenário', 'Sancionado']} onSave={(val) => onUpdate({ 'ESTÁGIO ATUAL': val })} isDark={isDark} accentColor={accentColor} cycleAccent={cycleAccent} isUnlocked={isUnlocked} requireAuth={requireAuth} /></div>
              <div className="col-span-2 mt-2 flex flex-col items-start">
                <span className="opacity-70 text-[0.8em]">Acompanhar Tramitação (Link):</span>
                <EditableField value={item['LINK']} onSave={(val) => onUpdate({ 'LINK': val })} isDark={isDark} textClass="font-bold break-all max-w-full underline decoration-current/50 hover:decoration-current transition-colors" accentColor={accentColor} cycleAccent={cycleAccent} isUnlocked={isUnlocked} requireAuth={requireAuth} />
                {(item['LINK']) && (
                   <a href={item['LINK']} target="_blank" rel="noopener noreferrer" className="text-[0.7em] font-black uppercase mt-1 flex items-center gap-1 hover:underline opacity-70 hover:opacity-100 transition-opacity">
                     <ExternalLink size={12}/> Abrir Link do Processo
                   </a>
                )}
              </div>
            </div>
          </div>
          
          {/* CAIXA DO GOOGLE DRIVE */}
          <div className={`p-4 border-[4px] transition-colors duration-500 mt-4 border-current`}>
            <span className="block text-[0.7em] uppercase font-black opacity-80 tracking-widest mb-2 border-b-2 pb-1 border-current">Documentos no Drive</span>
            <div className="flex flex-col items-start">
              <EditableField value={item['DOCUMENTOS NO DRIVE']} onSave={(val) => onUpdate({ 'DOCUMENTOS NO DRIVE': val })} isDark={isDark} textClass="font-bold break-all max-w-full underline decoration-current/50 hover:decoration-current transition-colors" accentColor={accentColor} cycleAccent={cycleAccent} isUnlocked={isUnlocked} requireAuth={requireAuth} />
              {(item['DOCUMENTOS NO DRIVE']) && (
                 <a href={item['DOCUMENTOS NO DRIVE']} target="_blank" rel="noopener noreferrer" className="text-[0.7em] font-black uppercase mt-1 flex items-center gap-1 hover:underline opacity-70 hover:opacity-100 transition-opacity">
                   <ExternalLink size={12}/> Abrir Pasta no Drive
                 </a>
              )}
            </div>
          </div>
          
          <div className="flex flex-col mt-4">
            <span className="block text-[0.8em] uppercase font-black tracking-widest mb-2 border-b-[4px] border-current pb-1">Checklist de Documentos (Toque p/ Marcar)</span>
            {DOCS_KEYS.map((key, idx) => {
              const hasDoc = String(item[key] || '').toUpperCase() === 'TRUE';
              const displayLabel = key === '6 - 7 DECLARAÇÃO REMUNERAÇÃO' ? '6 OU 7 DEC. REMUNERAÇÃO/NÃO REMUNERADA' : key;

              return (
                <div key={idx} onClick={() => requireAuth(() => toggleDoc(key))} className="group flex items-center gap-3 py-2 border-b-[2px] border-current opacity-90 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors" title={isUnlocked ? "" : "Desbloqueie para marcar os documentos"}>
                  <div className={`w-5 h-5 flex-shrink-0 border-[2px] border-current flex items-center justify-center transition-colors`} style={{ backgroundColor: hasDoc ? checkGlobalColor : 'transparent' }}>
                    {hasDoc && <CheckCircle2 size={14} className="text-black dark:text-white mix-blend-difference" />}
                  </div>
                  <span className={`font-bold text-[0.85em] transition-opacity ${hasDoc ? 'opacity-100' : 'opacity-50 group-hover:opacity-80'}`}>{displayLabel}</span>
                  {!isUnlocked && <Lock size={12} className="ml-auto opacity-30 group-hover:opacity-100 text-crimson" />}
                </div>
              );
            })}
            
            <a href={`mailto:${emailCentral}?subject=${encodeURIComponent(`[DOCUMENTOS] Utilidade Pública - ${item.ENTIDADE}`)}&body=${encodeURIComponent(`Atenção, Arquivo Central.\n\nSeguem em anexo os documentos padronizados para o processo de Utilidade Pública da entidade:\n\n* ${item.ENTIDADE}\n\nArticulador Responsável: ${item.ARTICULADOR}\n\n[DICA: Arraste aqui os PDFs que acabaram de ser baixados no seu computador]\n\nAtenciosamente.`)}`} className={`mt-6 p-4 border-[3px] border-current flex items-center justify-center gap-3 font-black uppercase tracking-widest text-[0.8em] transition-transform hover:-translate-y-1 ${isDark ? 'bg-white text-black' : 'bg-black text-white'} hover-cyan`}>
              <Mail size={18} /> Enviar Malote por E-mail
            </a>
          </div>
        </div>
      </div>

      <div className={`mt-8 border-[6px] shadow-[6px_6px_0px_rgba(0,0,0,0.2)] transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`} style={{ borderColor: isPadronizadorOpen ? accentColor : (isDark ? '#4b5563' : '#000') }}>
        <button onClick={() => { setIsPadronizadorOpen(!isPadronizadorOpen); cycleAccent(); }} className="w-full p-6 flex items-center justify-between hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
          <div className="flex items-center gap-3">
            <Folder className="w-8 h-8" />
            <h3 className="text-xl font-black uppercase tracking-widest">Padronizador Local</h3>
          </div>
          <span className="text-3xl leading-none font-mono">{isPadronizadorOpen ? '−' : '+'}</span>
        </button>
        
        {isPadronizadorOpen && (
          <div className="p-6 pt-0 border-t-[4px] border-current mt-2">
            <div className="mb-6 mt-4 p-4 border-l-[4px] text-black dark:text-gray-200" style={{ backgroundColor: 'rgba(255,219,88,0.2)', borderColor: COLORS.mustard }}>
              <p className="text-[12px] font-bold leading-relaxed">
                ⚠️ <b>Aviso Importante:</b> Esta ferramenta <u>apenas renomeia o nome do arquivo</u> (ex: 001-ATA.pdf) para seu computador.
                É estritamente necessário que o Assessor verifique manualmente o conteúdo do documento para garantir que atenda às exigências legais.
                <br/><button onClick={() => setIsManualOpen(true)} className="underline font-black mt-2 opacity-70 hover:opacity-100 text-sm">Consulte o Manual de Requisitos aqui.</button>
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {DOCS_KEYS.map((key, idx) => {
                const stagedFile = stagedFiles[key];
                const safeEntidade = (item.ENTIDADE || 'ENTIDADE').replace(/[^a-zA-Z0-9 -]/g, "").trim().toUpperCase();
                const previewName = stagedFile ? `${DOCS_PREFIX_MAP[key]} - ${safeEntidade}.${stagedFile.name.split('.').pop()}` : '';

                return (
                  <div key={idx} className={`flex flex-col md:flex-row md:items-center justify-between p-3 border-[3px] border-current transition-colors ${stagedFile ? (isDark ? 'bg-white/10' : 'bg-black/5') : 'bg-transparent'}`}>
                    <div className="flex-1 pr-4 mb-2 md:mb-0">
                      <span className="font-black uppercase tracking-widest text-[0.75em] opacity-70 block mb-1">{key === '6 - 7 DECLARAÇÃO REMUNERAÇÃO' ? '6 OU 7 DEC. REMUNERAÇÃO/NÃO REMUNERADA' : key}</span>
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
                          <button onClick={() => handleDownloadStandard(key)} className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black border-[2px] border-current font-black uppercase tracking-widest text-[0.7em] hover:-translate-y-1 transition-transform flex items-center gap-2 hover-cyan">
                            <DownloadCloud className="w-4 h-4" /> Salvar Formatado
                          </button>
                          <button onClick={() => setStagedFiles(prev => {const newObj = {...prev}; delete newObj[key]; return newObj;})} className="px-3 py-2 border-[2px] border-current text-[0.7em] transition-colors hover-crimson" title="Remover">X</button>
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

      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 border-t-[4px] border-current pt-4 gap-4">
        <button onClick={() => requireAuth(onDelete)} className={`flex items-center gap-2 px-4 py-3 font-black uppercase tracking-widest text-[0.8em] border-[3px] border-current opacity-50 hover:opacity-100 transition-all w-full sm:w-auto justify-center hover-crimson`}>
          {isUnlocked ? <Trash2 size={16} /> : <Lock size={16} />} Apagar Registro
        </button>

        <button onClick={() => requireAuth(handleManualSave)} className={`flex items-center justify-center gap-2 px-8 py-3 font-black uppercase tracking-widest text-[0.8em] border-[3px] border-current transition-all w-full sm:w-auto hover:-translate-y-1 ${saveLabel === 'Salvo com sucesso!' ? 'theme-cyan shadow-[4px_4px_0px_currentColor]' : (isDark ? 'bg-white text-black hover:bg-gray-200 shadow-[4px_4px_0px_white]' : 'bg-black text-white hover:bg-gray-800 shadow-[4px_4px_0px_black]')}`}>
          {isUnlocked ? <Save size={16} /> : <Lock size={16} />} {saveLabel}
        </button>
      </div>
      
      {isManualOpen && <ManualModal onClose={() => setIsManualOpen(false)} theme={theme} thick={thick} isDark={isDark} />}
    </div>
  );
}

// ==========================================
// COMPONENTE: MANUAL DE REQUISITOS
// ==========================================
function ManualModal({ onClose, theme, thick, isDark }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className={`w-full max-w-4xl p-6 md:p-10 flex flex-col gap-6 ${thick} ${theme.cardBg} shadow-[8px_8px_0px_currentColor] relative max-h-[95vh] overflow-hidden`}>
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl font-black hover:scale-110 transition-transform bg-black text-white dark:bg-white dark:text-black w-10 h-10 flex items-center justify-center">X</button>
        
        <div className="border-b-[6px] border-current pb-4 pr-12 flex-shrink-0">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest flex items-center gap-3">
            <BookOpen size={32} /> Manual de Requisitos
          </h2>
          <p className="font-bold opacity-60 uppercase tracking-widest text-[0.7em] mt-2">Pedido de Utilidade Pública Estadual</p>
        </div>

        <div className="overflow-y-auto pr-2 space-y-6 flex-1 text-sm md:text-base font-bold opacity-90 leading-relaxed">
          <section className={`p-4 border-[3px] border-current ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <p>O reconhecimento do Título de Utilidade Pública estadual é orientado pela <b>Lei nº 18.269 de 9 de dezembro de 2021</b>. Para isso os documentos originais ou cópias autenticadas estabelecidos no artigo 3º da Lei nº 18.269/2021 devem ser encaminhados para um dos Deputados por meio de requerimento.</p>
            <p className="mt-3 text-crimson">É permitido realizar o protocolo de pedidos de Utilidade Pública mesmo que as DECLARAÇÕES ou o RELATÓRIO DE ATIVIDADES ainda não estejam completamente adequados. Contudo, a <b>ATA DE FUNDAÇÃO e o ESTATUTO devem estar obrigatoriamente corretos</b> e presentes no momento do protocolo.</p>
            <p className="mt-3 text-[0.8em] opacity-80">A relação atualizada das entidades declaradas de Utilidade Pública estadual está consolidada no Anexo Único da Lei nº 18.278 de 20 de dezembro de 2021.</p>
          </section>

          <div>
            <h3 className="text-lg font-black uppercase border-b-[3px] border-current pb-1 mb-4">Documentos que a ENTIDADE precisa entregar ao ARTICULADOR:</h3>
            
            <div className="space-y-4">
              <div className="p-3 border-[2px] border-current">
                <h4 className="font-black uppercase mb-1">001 Ata de Fundação</h4>
                <p>Apresentar ata da eleição e posse da diretoria em exercício com <b>REGISTRO EM CARTÓRIO</b>.</p>
              </div>

              <div className="p-3 border-[2px] border-current">
                <h4 className="font-black uppercase mb-1">002 Ata da eleição e posse da Diretoria Executiva</h4>
                <p>Apresentar ata da eleição e posse da diretoria em exercício com <b>REGISTRO EM CARTÓRIO</b>.</p>
              </div>

              <div className="p-3 border-[2px] border-current">
                <h4 className="font-black uppercase mb-1">003 Cadastro nacional da pessoa jurídica (CNPJ)</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>A entidade deve estar com a situação cadastral <b>ATIVA</b>.</li>
                  <li>A instituição precisa ser constituída em <b>SANTA CATARINA</b> e o documento deve ter data de emissão.</li>
                  <li>Este documento não tem prazo.</li>
                </ul>
              </div>

              <div className="p-3 border-[2px] border-current">
                <h4 className="font-black uppercase mb-1">004 Declaração de não qualificação OSCIP</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Esta declaração de não OSCIP deve ser datada no máximo <b>90 dias anteriores</b> ao protocolo do pedido.</li>
                  <li>Informações obrigatórias incluem nome do presidente, CPF, telefone, email, e endereço de residência.</li>
                  <li>Deve constar a qualidade de presidente o nome da associação e a declaração de que não é OSCIP em si.</li>
                  <li>Necessário constar local, data, assinatura e o nome do presidente, conforme o modelo.</li>
                </ul>
              </div>

              <div className="p-3 border-[2px] border-current">
                <h4 className="font-black uppercase mb-1">005 Declaração de funcionamento</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Deve ser datado no máximo <b>180 dias antes</b> ao do protocolo do pedido.</li>
                  <li>A entidade deve atestar o contínuo funcionamento nos 12 meses imediatamente anteriores à formulação do pedido por meio de declaração firmada pelo presidente da entidade.</li>
                  <li>Devem constar o número do registro no CNPJ e o endereço da entidade com assinatura do presidente, conforme o modelo.</li>
                </ul>
              </div>

              <div className="p-3 border-[2px] border-current" style={{ backgroundColor: 'rgba(255,219,88,0.2)', borderColor: COLORS.mustard }}>
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
                  <li>A declaração deve constar nome, nacionalidade, estado civil, endereço completo, RG e CPF, além da condition de presidente e os nomes dos dirigentes que recebem remuneração, com a data da reunião em que o valor foi deliberado, conforme o modelo.</li>
                </ul>
              </div>

              <div className="p-3 border-[2px] border-current">
                <h4 className="font-black uppercase mb-1">008 Estatuto da entidade</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Necessita <b>registro de cartório</b>.</li>
                  <li>Caso não remunere os dirigentes, o estatuto deve declarar expressamente que a entidade não remunera os cargos de diretoria e ou conselho, conforme inciso X do artigo 3º.</li>
                </ul>
              </div>

              <div className="p-3 border-[2px] border-current">
                <h4 className="font-black uppercase mb-1">009 Relatório de Atividades</h4>
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
  const procesos = data.filter(d => d.ARTICULADOR === nome);
  const protocolados = procesos.filter(d => String(d['STATUS DA ANÁLISE'] || '').trim().toLowerCase() === 'protocolado');

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
          <span className="text-5xl font-black leading-none">{procesos.length}</span>
          <span className="text-[0.7em] uppercase font-black tracking-widest mt-2">Processos Assumidos</span>
        </div>
        <div className={`p-6 ${thick} flex flex-col items-center justify-center text-center`} style={{ backgroundColor: COLORS.cyan, color: 'black' }}>
          <span className="text-5xl font-black leading-none">{protocolados.length}</span>
          <span className="text-[0.7em] uppercase font-black tracking-widest mt-2">Sucessos (Protocolados)</span>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <span className="block text-[0.9em] uppercase font-black tracking-widest border-b-[4px] border-current pb-2 mb-2">Entidades Sob Guarda</span>
        {procesos.map((p, i) => (
          <div key={i} onClick={() => onEntidadeClick(p)} className={`p-4 border-[3px] border-current flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:-translate-y-1 hover:shadow-[4px_4px_0px_currentColor] transition-all ${theme.bg}`}>
            <div>
              <h3 className="font-black uppercase text-lg leading-tight">{p.ENTIDADE}</h3>
              <span className="font-bold opacity-70 text-[0.8em]">{p['DATA DA SOLICITAÇÃO']}</span>
            </div>
            <div className="mt-3 md:mt-0 px-3 py-1 font-black uppercase text-[0.7em] tracking-widest w-max" style={{ backgroundColor: getStatusColor(p['STATUS DA ANÁLISE']) || 'black', color: getTextColorForStatus(getStatusColor(p['STATUS DA ANÁLISE'])) || (isDark ? 'white' : 'black') }}>
              {p['STATUS DA ANÁLISE'] || 'Pendente'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// FORMULÁRIO DE NOVO PROCESSO (COM BORDAS MÁGICAS)
// ==========================================
function FormNovoPedido({ onClose, theme, thick, isDark, fetchFromWebhooks, equipe, webhookUtilidade, emailCentral, accentColor, cycleAccent, requireAuth }) {
  const [formData, setFormData] = useState({ ENTIDADE: '', ARTICULADOR: '', EMAIL: '', TELEFONE: '', OBSERVAÇÕES: '', 'LINK': '', 'DOCUMENTOS NO DRIVE': '' });
  const [stagedFiles, setStagedFiles] = useState({});
  const [sending, setSending] = useState(false);
  const [successMode, setSuccessMode] = useState(false);
  const [busca, setBusca] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  
  const [isManualOpen, setIsManualOpen] = useState(false);
  const [isPadronizadorOpen, setIsPadronizadorOpen] = useState(false);

  const handleFocus = (fieldName) => { setFocusedField(fieldName); if(cycleAccent) cycleAccent(); };
  
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
      const a = document.createElement('a'); a.href = url; a.download = standardName;
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    requireAuth(async () => {
      if (!webhookUtilidade) { alert("Erro de Sistema: Webhook Central Ausente. Verifique os Ajustes."); return; }
      if (!formData.ENTIDADE.trim()) { alert("O nome da entidade é obrigatório."); return; }

      setSending(true);
      try {
        const payload = {
          "action": "add",
          "ENTIDADE": formData.ENTIDADE, "LIDERANÇA": "", "TELEFONE": formData.TELEFONE, "EMAIL": formData.EMAIL,
          "ARTICULADOR": formData.ARTICULADOR, "DATA DA SOLICITAÇÃO": new Date().toLocaleDateString('pt-BR'),
          "MANUAL/MODELOS ENVIADOS": "FALSE",
          "1 ATA DE FUNDAÇÃO": stagedFiles['1 ATA DE FUNDAÇÃO'] ? "TRUE" : "FALSE",
          "2 ATA DE ELEIÇÃO/POSSE": stagedFiles['2 ATA DE ELEIÇÃO/POSSE'] ? "TRUE" : "FALSE",
          "3 CNPJ": stagedFiles['3 CNPJ'] ? "TRUE" : "FALSE",
          "4 DECLARAÇÃO NÃO OSCIP": stagedFiles['4 DECLARAÇÃO NÃO OSCIP'] ? "TRUE" : "FALSE",
          "5 DECLARAÇÃO FUNCIONAMENTO": stagedFiles['5 DECLARAÇÃO FUNCIONAMENTO'] ? "TRUE" : "FALSE",
          "6 - 7 DECLARAÇÃO REMUNERAÇÃO": stagedFiles['6 - 7 DECLARAÇÃO REMUNERAÇÃO'] ? "TRUE" : "FALSE",
          "8 ESTATUTO": stagedFiles['8 ESTATUTO'] ? "TRUE" : "FALSE",
          "9 RELATÓRIO DE ATIVIDADES": stagedFiles['9 RELATÓRIO DE ATIVIDADES'] ? "TRUE" : "FALSE",
          "STATUS DA ANÁLISE": "Aguardando Documentos", "DATA DO ENVIO ALESC": "", "Nº DO PROCESSO ALESC": "",
          "ESTÁGIO ATUAL": "Gabinete", "OBSERVAÇÕES": formData.OBSERVAÇÕES,
          "LINK": formData['LINK'],
          "DOCUMENTOS NO DRIVE": formData['DOCUMENTOS NO DRIVE']
        };

        await fetch(webhookUtilidade, {
          method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(payload)
        });
        await fetchFromWebhooks();
        setSuccessMode(true); 
      } catch (error) { console.error(error); alert("Erro ao comunicar com o Arquivo Central."); } finally { setSending(false); }
    });
  };

  const filteredEquipe = equipe.filter(p => p.Nome.toLowerCase().includes(busca.toLowerCase()));

  if (successMode) {
    return (
      <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in zoom-in duration-300">
        <div className={`w-full max-w-lg p-8 flex flex-col gap-6 text-center ${thick} ${theme.cardBg} shadow-[8px_8px_0px_currentColor] border-[3px]`} style={{ borderColor: COLORS.cyan }}>
          <CheckCircle2 className="w-20 h-20 mx-auto text-cyan" />
          <h2 className="text-2xl font-black uppercase tracking-widest">Processo Registrado!</h2>
          <p className="font-bold opacity-80 leading-relaxed text-sm">
            Os dados da entidade foram inseridos com sucesso.<br/>
            Para enviar anexos, acesse a Ficha Institucional.
          </p>
          <button onClick={onClose} className="mt-4 p-4 border-[4px] border-current font-black uppercase tracking-widest hover:-translate-y-1 transition-transform">
            Concluir e Voltar
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
    {isManualOpen && <ManualModal onClose={() => setIsManualOpen(false)} theme={theme} thick={thick} isDark={isDark} />}
    
    <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className={`w-full max-w-3xl p-6 md:p-8 flex flex-col gap-6 ${thick} ${theme.cardBg} shadow-[8px_8px_0px_rgba(0,0,0,0.3)] relative overflow-y-auto max-h-[90vh]`}>
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl font-black hover:scale-110 transition-transform z-10">X</button>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b-[4px] border-current pb-2 pr-8 gap-4">
          <h2 className="text-2xl font-black uppercase tracking-widest">Abertura de Processo</h2>
          <button type="button" onClick={() => {setIsManualOpen(true); cycleAccent();}} className="flex items-center gap-2 px-3 py-2 bg-black text-white dark:bg-white dark:text-black font-black uppercase tracking-widest text-[10px] hover:-translate-y-1 transition-transform shadow-[2px_2px_0px_currentColor]">
            <BookOpen size={16} /> Consultar Manual de Requisitos
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className={`p-4 border-[3px] border-current ${theme.bg} flex flex-col gap-4`}>
            <h3 className="font-black uppercase tracking-widest text-[12px] opacity-70 mb-2 border-b-[2px] border-current pb-1">1. Metadados Essenciais</h3>
            <div className="flex flex-col gap-1">
              <label className="font-black uppercase tracking-widest text-[10px]">Nome da Entidade *</label>
              <input type="text" required value={formData.ENTIDADE} onChange={e => setFormData({...formData, ENTIDADE: e.target.value})} onFocus={() => handleFocus('ENTIDADE')} onBlur={() => setFocusedField(null)} className={`p-3 border-[3px] outline-none font-bold transition-colors duration-300 ${theme.inputBg}`} style={{ borderColor: focusedField === 'ENTIDADE' ? accentColor : 'currentcolor' }} placeholder="Ex: Associação de Moradores..." />
            </div>

            <div className="flex flex-col gap-1 relative">
              <label className="font-black uppercase tracking-widest text-[10px]">Articulador Responsável</label>
              <div className="relative">
                <input type="text" value={busca} onChange={e => { setBusca(e.target.value); setFormData({...formData, ARTICULADOR: e.target.value}); setShowDropdown(true); }} onFocus={() => {setShowDropdown(true); handleFocus('ARTICULADOR');}} onBlur={() => setTimeout(()=>setFocusedField(null), 200)} className={`w-full p-3 border-[3px] outline-none font-bold pr-10 transition-colors duration-300 ${theme.inputBg}`} style={{ borderColor: focusedField === 'ARTICULADOR' ? accentColor : 'currentcolor' }} placeholder="Busque ou digite o nome..." />
                <SearchIcon className="absolute right-3 top-3 opacity-50" />
              </div>
              {showDropdown && (
                <div className={`absolute top-full left-0 right-0 mt-1 border-[3px] z-10 max-h-40 overflow-y-auto ${theme.cardBg}`} style={{ borderColor: accentColor }}>
                  {filteredEquipe.map((p, idx) => (
                    <div key={idx} onClick={() => { setFormData({...formData, ARTICULADOR: p.Nome}); setBusca(p.Nome); setShowDropdown(false); }} className={`p-2 font-bold cursor-pointer hover:bg-black/10 dark:hover:bg-white/10 transition-colors border-b border-current opacity-60 hover:opacity-100`}>{p.Nome}</div>
                  ))}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-black uppercase tracking-widest text-[10px]">E-mail de Contato</label>
                <input type="email" value={formData.EMAIL} onChange={e => setFormData({...formData, EMAIL: e.target.value})} onFocus={() => handleFocus('EMAIL')} onBlur={() => setFocusedField(null)} className={`p-3 border-[3px] outline-none font-bold transition-colors duration-300 ${theme.inputBg}`} style={{ borderColor: focusedField === 'EMAIL' ? accentColor : 'currentcolor' }} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-black uppercase tracking-widest text-[10px]">Telefone</label>
                <input type="text" value={formData.TELEFONE} onChange={e => setFormData({...formData, TELEFONE: e.target.value})} onFocus={() => handleFocus('TELEFONE')} onBlur={() => setFocusedField(null)} className={`p-3 border-[3px] outline-none font-bold transition-colors duration-300 ${theme.inputBg}`} style={{ borderColor: focusedField === 'TELEFONE' ? accentColor : 'currentcolor' }} />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-black uppercase tracking-widest text-[10px]">Acompanhar tramitação (Link do Processo)</label>
              <input type="url" value={formData['LINK']} onChange={e => setFormData({...formData, 'LINK': e.target.value})} onFocus={() => handleFocus('LINK')} onBlur={() => setFocusedField(null)} className={`p-3 border-[3px] outline-none font-bold transition-colors duration-300 ${theme.inputBg}`} style={{ borderColor: focusedField === 'LINK' ? accentColor : 'currentcolor' }} placeholder="https://..." />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-black uppercase tracking-widest text-[10px]">Documentos no Drive (Link da Pasta)</label>
              <input type="url" value={formData['DOCUMENTOS NO DRIVE']} onChange={e => setFormData({...formData, 'DOCUMENTOS NO DRIVE': e.target.value})} onFocus={() => handleFocus('DRIVE')} onBlur={() => setFocusedField(null)} className={`p-3 border-[3px] outline-none font-bold transition-colors duration-300 ${theme.inputBg}`} style={{ borderColor: focusedField === 'DRIVE' ? accentColor : 'currentcolor' }} placeholder="https://drive.google.com/..." />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-black uppercase tracking-widest text-[10px]">Observações</label>
              <textarea rows="2" value={formData.OBSERVAÇÕES} onChange={e => setFormData({...formData, OBSERVAÇÕES: e.target.value})} onFocus={() => handleFocus('OBSERVAÇÕES')} onBlur={() => setFocusedField(null)} className={`p-3 border-[3px] outline-none font-bold resize-none transition-colors duration-300 ${theme.inputBg}`} style={{ borderColor: focusedField === 'OBSERVAÇÕES' ? accentColor : 'currentcolor' }}></textarea>
            </div>
          </div>

          <button type="submit" disabled={sending} className={`p-5 font-black uppercase tracking-widest text-lg border-[4px] border-current transition-all shadow-[6px_6px_0px_currentColor] flex items-center justify-center gap-3 ${sending ? 'opacity-50 shadow-none translate-y-1 translate-x-1' : 'active:shadow-none active:translate-y-1 active:translate-x-1'}`} style={{ backgroundColor: accentColor, color: getTextColorForStatus(accentColor) }}>
            <Lock size={20}/> {sending ? 'Salvando...' : 'Desbloquear e Salvar Ficha Oficial'}
          </button>

          <div className={`border-[3px] transition-colors duration-300 ${theme.bg}`} style={{ borderColor: isPadronizadorOpen ? accentColor : 'currentcolor' }}>
             <button type="button" onClick={() => {setIsPadronizadorOpen(!isPadronizadorOpen); cycleAccent();}} className="w-full p-4 flex items-center justify-between hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
               <h3 className="font-black uppercase tracking-widest text-[12px] flex items-center gap-2">
                 <Folder size={18} /> Padronização de Anexos (Opcional)
               </h3>
               <span className="text-xl leading-none font-mono">{isPadronizadorOpen ? '−' : '+'}</span>
             </button>

             {isPadronizadorOpen && (
               <div className="p-4 border-t-[3px]" style={{ borderColor: accentColor }}>
                 <div className="mb-4 p-3 border-l-[4px] text-black dark:text-gray-200" style={{ backgroundColor: 'rgba(255,219,88,0.2)', borderColor: COLORS.mustard }}>
                   <p className="text-[10px] font-bold leading-relaxed">
                     ⚠️ <b>Aviso:</b> Esta ferramenta apenas renomeia o arquivo para a taxonomia correta para baixar. É indispensável verificar manualmente se atende aos requisitos legais antes de anexar.
                     <br/><button type="button" onClick={() => {setIsManualOpen(true); cycleAccent();}} className="underline font-black mt-1 opacity-70 hover:opacity-100">Verifique os requisitos no Manual aqui.</button>
                   </p>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                   {DOCS_KEYS.map((key, idx) => {
                     const file = stagedFiles[key];
                     const displayLabel = key === '6 - 7 DECLARAÇÃO REMUNERAÇÃO' ? '6 OU 7 DEC. REMUNERAÇÃO' : key;
                     return (
                       <div key={idx} className={`p-2 border-[2px] border-current flex items-center justify-between transition-colors ${file ? (isDark ? 'bg-white/10' : 'bg-black/5') : 'bg-transparent'}`}>
                         <div className="flex-1 overflow-hidden pr-2">
                            <span className="font-black uppercase tracking-widest text-[9px] block mb-0.5 opacity-80 truncate">{displayLabel}</span>
                            {file ? <span className="font-mono text-[9px] font-bold truncate block">{file.name}</span> : <span className="font-bold text-[9px] italic opacity-40">Nenhum</span>}
                         </div>
                         <div className="flex-shrink-0">
                           {!file ? (
                             <label className="cursor-pointer px-2 py-1 border-[2px] border-current font-black uppercase text-[8px] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors flex items-center gap-1">
                               <FileText className="w-3 h-3"/> Anexar <input type="file" accept=".pdf,.doc,.docx,.jpg,.png" className="hidden" onChange={(e) => handleFileChange(key, e)} />
                             </label>
                           ) : (
                             <button type="button" onClick={() => setStagedFiles(prev => {const n = {...prev}; delete n[key]; return n;})} className="px-2 py-1 border-[2px] border-current font-black uppercase text-[8px] transition-colors hover-crimson">X</button>
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
                     className={`w-full p-3 font-black uppercase tracking-widest text-[10px] border-[2px] border-current transition-transform flex items-center justify-center gap-2 mt-2 ${Object.keys(stagedFiles).length > 0 ? 'bg-black text-white dark:bg-white dark:text-black hover:-translate-y-1 cursor-pointer hover-cyan' : 'opacity-40 cursor-not-allowed grayscale'}`}
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
// AJUSTES LOCAIS (SALA DE MÁQUINAS RASCUNHO E EQUIPE)
// ==========================================
function SettingsView({ 
  isDark, setIsDark, fontSizeLevel, setFontSizeLevel, 
  webhookUtilidade, webhookEquipe, emailCentral, 
  applyNetworkSettings, exportCSV, importCSV, 
  setView, theme, thick, med, accentColor, cycleAccent,
  masterPassword, setMasterPassword, EMERGENCY_PHRASE
}) {
  const [openSection, setOpenSection] = useState('aparencia'); 
  const [openNetwork, setOpenNetwork] = useState(false);
  const [savedMessage, setSavedMessage] = useState('');
  const [focusedField, setFocusedField] = useState(null);

  const [draftUtilidade, setDraftUtilidade] = useState(webhookUtilidade);
  const [draftEquipe, setDraftEquipe] = useState(webhookEquipe);
  const [draftEmail, setDraftEmail] = useState(emailCentral);

  const [currentPwd, setCurrentPwd] = useState('');
  const [newPwd, setNewPwd] = useState('');

  const handleFocus = (fieldName) => { setFocusedField(fieldName); if(cycleAccent) cycleAccent(); };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleSaveNetwork = () => {
    if(window.confirm("⚠️ ATENÇÃO ARQUIVISTA:\n\nTem certeza que deseja alterar os endereços do sistema?\n\nUma configuração incorreta irá desconectar a sua máquina do banco de dados central.\n\nDeseja realmente prosseguir?")) {
        applyNetworkSettings(draftUtilidade, draftEquipe, draftEmail);
        setSavedMessage('Configuração sobreposta localmente com sucesso!');
        setTimeout(() => setSavedMessage(''), 4000);
    }
  };

  const handleSavePassword = () => {
    if (currentPwd === masterPassword || currentPwd.trim().toLowerCase() === EMERGENCY_PHRASE.toLowerCase()) {
      if (newPwd.trim().length > 0) {
        setMasterPassword(newPwd);
        alert("✔️ Senha alterada com sucesso!");
        setCurrentPwd('');
        setNewPwd('');
      } else {
        alert("A nova senha não pode ser vazia.");
      }
    } else {
      alert("❌ Acesso Negado: Senha atual incorreta.");
    }
  };

  return (
    <div className={`max-w-3xl mx-auto flex flex-col gap-4 w-full p-6 md:p-8 ${thick} ${theme.cardBg}`}>
      <h2 className="font-black uppercase tracking-widest text-2xl border-b-[6px] border-current pb-4 flex items-center gap-3">
        <Settings size={28}/> Ajustes do Sistema
      </h2>

      {/* BLOCO 0: SEGURANÇA E ACESSO */}
      <div className={`border-[3px] transition-colors duration-300 ${theme.bg}`} style={{ borderColor: openSection === 'seguranca' ? accentColor : 'currentcolor' }}>
        <button 
          onClick={() => { toggleSection('seguranca'); cycleAccent(); }}
          className="w-full p-4 flex justify-between items-center text-sm font-black uppercase tracking-widest hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
        >
          <span className="flex items-center gap-2"><Key size={18} /> Segurança e Controle de Acesso</span>
          <span className="text-xl leading-none font-mono">{openSection === 'seguranca' ? '−' : '+'}</span>
        </button>
        
        {openSection === 'seguranca' && (
          <div className="p-4 border-t-[4px] flex flex-col gap-4" style={{ borderColor: accentColor }}>
            <p className="font-bold text-sm opacity-80 leading-relaxed mb-2">
              Apenas quem possuir a senha pode editar registros. Ao definir uma nova senha, a equipe precisará utilizá-la para realizar alterações. A senha inicial é <b>admin</b>.
            </p>
            
            <div className="flex flex-col gap-1">
              <label className="font-black uppercase tracking-widest text-[10px]">Senha Atual ou Frase de Emergência</label>
              <input 
                type="password" 
                value={currentPwd} 
                onChange={(e) => setCurrentPwd(e.target.value)}
                onFocus={() => handleFocus('CURRENTPWD')} onBlur={() => setFocusedField(null)}
                className={`w-full p-3 border-[3px] outline-none font-bold transition-colors duration-300 ${theme.inputBg}`} 
                style={{ borderColor: focusedField === 'CURRENTPWD' ? accentColor : 'currentcolor' }}
                placeholder="Insira a senha atual..."
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-black uppercase tracking-widest text-[10px]">Nova Senha</label>
              <input 
                type="password" 
                value={newPwd} 
                onChange={(e) => setNewPwd(e.target.value)}
                onFocus={() => handleFocus('NEWPWD')} onBlur={() => setFocusedField(null)}
                className={`w-full p-3 border-[3px] outline-none font-bold transition-colors duration-300 ${theme.inputBg}`} 
                style={{ borderColor: focusedField === 'NEWPWD' ? accentColor : 'currentcolor' }}
                placeholder="Insira a nova senha desejada..."
              />
            </div>

            <button 
              onClick={handleSavePassword}
              className="mt-2 p-4 bg-black text-white dark:bg-white dark:text-black font-black uppercase tracking-widest text-[12px] border-[3px] border-current hover:-translate-y-1 transition-transform flex items-center justify-center gap-2 hover-cyan"
            >
              <Lock size={16} /> Confirmar Alteração de Senha
            </button>
          </div>
        )}
      </div>

      {/* BLOCO 1: APARÊNCIA E LEITURA */}
      <div className={`border-[3px] transition-colors duration-300 ${theme.bg}`} style={{ borderColor: openSection === 'aparencia' ? accentColor : 'currentcolor' }}>
        <button 
          onClick={() => { toggleSection('aparencia'); cycleAccent(); }}
          className="w-full p-4 flex justify-between items-center text-sm font-black uppercase tracking-widest hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
        >
          <span className="flex items-center gap-2"><Sun size={18} /> Aparência e Leitura</span>
          <span className="text-xl leading-none font-mono">{openSection === 'aparencia' ? '−' : '+'}</span>
        </button>
        
        {openSection === 'aparencia' && (
          <div className="p-4 border-t-[4px] flex flex-col gap-6" style={{ borderColor: accentColor }}>
            <div className="flex flex-col gap-3">
              <label className="font-bold uppercase tracking-wider opacity-80">Modo de Exibição</label>
              <div className="flex gap-4">
                <button 
                  onClick={() => { setIsDark(false); cycleAccent(); }}
                  className={`flex-1 p-4 border-[3px] flex items-center justify-center gap-2 uppercase font-bold transition-all hover:-translate-y-1 bg-white text-black`}
                  style={!isDark ? { borderColor: accentColor, boxShadow: `0 0 0 2px ${accentColor}` } : { borderColor: 'black' }}
                >
                  <Sun size={20} /> Claro
                </button>
                <button 
                  onClick={() => { setIsDark(true); cycleAccent(); }}
                  className={`flex-1 p-4 border-[3px] flex items-center justify-center gap-2 uppercase font-bold transition-all hover:-translate-y-1 bg-black text-white`}
                  style={isDark ? { borderColor: accentColor, boxShadow: `0 0 0 2px ${accentColor}` } : { borderColor: 'transparent' }}
                >
                  <Moon size={20} /> Escuro
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="font-bold uppercase tracking-wider opacity-80 flex items-center gap-2">
                <Type size={18}/> Tamanho da Fonte
              </label>
              <div className={`flex items-center justify-between p-2 border-[3px] ${theme.border}`}>
                {[1, 2, 3, 4, 5].map(level => (
                  <button
                    key={level}
                    onClick={() => { setFontSizeLevel(level); cycleAccent(); }}
                    className={`w-12 h-12 flex items-center justify-center font-bold border-[3px] transition-colors ${fontSizeLevel === level ? (isDark ? 'bg-white text-black' : 'bg-black text-white') : 'hover:bg-gray-500/20'}`}
                    style={fontSizeLevel === level ? { borderColor: accentColor, boxShadow: `0 0 0 2px ${accentColor}` } : { borderColor: 'currentcolor' }}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* BLOCO 3: BACKUP E RECUPERAÇÃO */}
      <div className={`border-[3px] transition-colors duration-300 ${theme.bg}`} style={{ borderColor: openSection === 'backup' ? accentColor : 'currentcolor' }}>
        <button 
          onClick={() => { toggleSection('backup'); cycleAccent(); }}
          className="w-full p-4 flex justify-between items-center text-sm font-black uppercase tracking-widest hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
        >
          <span className="flex items-center gap-2"><Save size={18} /> Backup e Restauração (.CSV)</span>
          <span className="text-xl leading-none font-mono">{openSection === 'backup' ? '−' : '+'}</span>
        </button>
        
        {openSection === 'backup' && (
          <div className="p-4 border-t-[4px] flex flex-col gap-3" style={{ borderColor: accentColor }}>
            <p className="opacity-80 font-bold" style={{ fontSize: '0.9em' }}>
              Baixe os dados atuais para preservação ou carregue um arquivo CSV de backup para visualização imediata no Kanban.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-2">
              <button 
                onClick={exportCSV}
                className={`flex-1 p-4 ${med} flex items-center justify-center gap-2 uppercase font-black tracking-widest transition-colors hover-cyan`}
                style={{ backgroundColor: accentColor, color: getTextColorForStatus(accentColor) }}
              >
                <Download size={20} /> Baixar CSV
              </button>
              
              <div className="flex-1 relative">
                <input 
                  type="file" 
                  accept=".csv"
                  onChange={importCSV}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  title="Carregar Backup CSV"
                />
                <div className={`p-4 ${med} flex items-center justify-center gap-2 uppercase font-black tracking-widest pointer-events-none`}
                     style={{ backgroundColor: accentColor, color: getTextColorForStatus(accentColor), opacity: 0.8 }}>
                  <Upload size={20} /> Restaurar CSV
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* BLOCO 4: SISTEMA (AVANÇADO) */}
      <div className="mt-8 pt-4 border-t-[2px] border-dashed opacity-40 hover:opacity-100 transition-colors duration-300" style={{ borderTopColor: openNetwork ? accentColor : 'currentcolor' }}>
        <button onClick={() => { setOpenNetwork(!openNetwork); cycleAccent(); }} className="w-full py-2 flex items-center justify-between text-left">
          <h3 className="font-bold uppercase tracking-widest text-[10px] flex items-center gap-2"><Database size={14} /> Configurações de Rede (Avançado)</h3>
          <span className="text-sm leading-none font-mono">{openNetwork ? '−' : '+'}</span>
        </button>

        {openNetwork && (
          <div className="mt-4 p-5 flex flex-col gap-6 bg-black/5 dark:bg-white/5 border-[2px] transition-colors duration-300" style={{ borderColor: accentColor }}>
            <div className="p-3 border-l-[4px] text-black dark:text-gray-200" style={{ borderColor: COLORS.crimson }}>
              <p className="text-[10px] font-bold leading-relaxed uppercase tracking-widest text-crimson">
                ⚠️ <b>Atenção:</b> Alterações aqui afetam apenas o seu navegador. Cuidado ao editar estes links, pois podem desconectar você do Banco de Dados Central.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-black uppercase tracking-widest opacity-80 text-[10px]">Webhook Utilidade Pública</label>
              <input type="text" value={draftUtilidade} onChange={(e) => setDraftUtilidade(e.target.value)} onFocus={() => handleFocus('WH1')} onBlur={() => setFocusedField(null)} className="w-full p-3 border-[2px] outline-none font-mono text-[10px] bg-white text-black dark:bg-[#0a0a0a] dark:text-white transition-colors duration-300" style={{ borderColor: focusedField === 'WH1' ? accentColor : 'currentcolor' }} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-black uppercase tracking-widest opacity-80 text-[10px]">Webhook Equipe (Opcional)</label>
              <input type="text" value={draftEquipe} onChange={(e) => setDraftEquipe(e.target.value)} onFocus={() => handleFocus('WH2')} onBlur={() => setFocusedField(null)} placeholder="Cole aqui caso crie um script para a equipe..." className="w-full p-3 border-[2px] outline-none font-mono text-[10px] bg-white text-black dark:bg-[#0a0a0a] dark:text-white transition-colors duration-300" style={{ borderColor: focusedField === 'WH2' ? accentColor : 'currentcolor' }} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-black uppercase tracking-widest opacity-80 text-[10px]">E-mail do Arquivo Central</label>
              <input type="text" value={draftEmail} onChange={(e) => setDraftEmail(e.target.value)} onFocus={() => handleFocus('EMAIL')} onBlur={() => setFocusedField(null)} className="w-full p-3 border-[2px] outline-none font-mono text-[10px] bg-white text-black dark:bg-[#0a0a0a] dark:text-white transition-colors duration-300" style={{ borderColor: focusedField === 'EMAIL' ? accentColor : 'currentcolor' }} />
            </div>

            <button onClick={handleSaveNetwork} className="mt-2 w-full p-4 text-white font-black uppercase tracking-widest text-[10px] border-[3px] border-current hover:-translate-y-1 transition-transform flex items-center justify-center gap-2 hover-cyan" style={{ backgroundColor: accentColor, color: getTextColorForStatus(accentColor) }}>
              <RefreshCw size={14} /> Salvar Localmente e Sincronizar
            </button>
            {savedMessage && <p className="font-black text-center uppercase tracking-widest text-[10px]" style={{ color: accentColor }}>{savedMessage}</p>}
          </div>
        )}
      </div>

    </div>
  );
}

// Utilitário de Botão de Navegação
function NavButton({ active, onClick, icon, label, isDark, accentColor }) {
  const activeStyle = active 
    ? { 
        borderColor: accentColor, 
        boxShadow: `0 4px 0 ${accentColor}`, 
        backgroundColor: isDark ? 'white' : 'black', 
        color: isDark ? 'black' : 'white',
        transform: 'scale(1.05)',
        zIndex: 10
      } 
    : { borderColor: 'rgba(128,128,128,0.3)' };

  const activeClass = active 
    ? '' 
    : 'hover:border-current opacity-80 hover:opacity-100 hover:scale-[1.02]';

  return (
    <button 
      onClick={onClick}
      className={`flex-1 md:flex-none flex items-center justify-center gap-3 px-6 py-4 font-bold uppercase tracking-wider border-[4px] transition-all duration-200 cursor-pointer ${activeClass}`}
      style={{ fontSize: '1.05em', minWidth: '150px', ...activeStyle }}
    >
      {icon} <span>{label}</span>
    </button>
  );
}
