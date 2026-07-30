import React, { useState, useEffect } from 'react';

const Icon = ({ path, className = "w-6 h-6", onClick, size = 24, style }) => (
  <svg 
    onClick={onClick} 
    style={{ width: size, height: size, ...style }} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="square" 
    strokeLinejoin="miter" 
    className={className}
  >
    {path}
  </svg>
);

const LayoutDashboard = (p) => <Icon {...p} path={<><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></>} />;
const Kanban = (p) => <Icon {...p} path={<><path d="M6 5v11"/><path d="M12 5v6"/><path d="M18 5v14"/></>} />;
const CheckCircle2 = (p) => <Icon {...p} path={<><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></>} />;
const Clock = (p) => <Icon {...p} path={<><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>} />;
const AlertCircle = (p) => <Icon {...p} path={<><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></>} />;
const Save = (p) => <Icon {...p} path={<><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></>} />;
const SearchIcon = (p) => <Icon {...p} path={<><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></>} />;
const Trash2 = (p) => <Icon {...p} path={<><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></>} />;
const Mail = (p) => <Icon {...p} path={<><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></>} />;
const FileText = (p) => <Icon {...p} path={<><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></>} />;
const BookOpen = (p) => <Icon {...p} path={<><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></>} />;
const Edit2 = (p) => <Icon {...p} path={<><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></>} />;
const ExternalLink = (p) => <Icon {...p} path={<><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></>} />;
const Lock = (p) => <Icon {...p} path={<><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>} />;
const Unlock = (p) => <Icon {...p} path={<><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></>} />;

const ColoredSpinner = ({ size = 54 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className="animate-spin mb-4 mx-auto">
    <path d="M 50 10 A 40 40 0 0 1 84.6 30" fill="none" stroke="#00b7eb" strokeWidth="10" strokeLinecap="round" />
    <path d="M 88.6 42 A 40 40 0 0 1 63.6 87.5" fill="none" stroke="#FFDB58" strokeWidth="10" strokeLinecap="round" />
    <path d="M 47.5 90 A 40 40 0 0 1 12 55" fill="none" stroke="#DC143C" strokeWidth="10" strokeLinecap="round" />
  </svg>
);

const COLORS = { mustard: '#FFDB58', cyan: '#00b7eb', crimson: '#DC143C', white: '#FFFFFF', black: '#000000' };
const EMAIL_CENTRAL = "mandatoagroecologicodados@gmail.com"; 

const DOCS_KEYS = [
  '1 ATA DE FUNDAÇÃO', '2 ATA DE ELEIÇÃO/POSSE', '3 CNPJ', 
  '4 DECLARAÇÃO NÃO OSCIP', '5 DECLARAÇÃO FUNCIONAMENTO', 
  '6 - 7 DECLARAÇÃO REMUNERAÇÃO', '8 ESTATUTO', '9 RELATÓRIO DE ATIVIDADES'
];

const DOCS_REQUIREMENTS = {
  '1 ATA DE FUNDAÇÃO': 'Obrigatório: Apresentar ata da eleição e posse da diretoria em exercício com REGISTRO EM CARTÓRIO.',
  '2 ATA DE ELEIÇÃO/POSSE': 'Obrigatório: Apresentar ata da eleição e posse da diretoria em exercício com REGISTRO EM CARTÓRIO.',
  '3 CNPJ': 'Situação ATIVA. Constituída em SANTA CATARINA com data de emissão. Este documento não tem prazo.',
  '4 DECLARAÇÃO NÃO OSCIP': 'Máximo 90 dias. Deve conter: nome do presidente, CPF, telefone, email, endereço. Declarar qualidade de presidente e que NÃO é OSCIP.',
  '5 DECLARAÇÃO FUNCIONAMENTO': 'Máximo 180 dias. Atestar funcionamento contínuo nos 12 meses anteriores. Constar CNPJ e endereço com assinatura.',
  '6 - 7 DECLARAÇÃO REMUNERAÇÃO': 'Máximo 180 dias. Declarar expressamente a remuneração ou ausência dela. Requer dados completos: Nome, RG, CPF, nacionalidade, estado civil, endereço.',
  '8 ESTATUTO': 'Obrigatório: REGISTRO EM CARTÓRIO. Deve declarar expressamente se a entidade não remunera os cargos (se for o caso).',
  '9 RELATÓRIO DE ATIVIDADES': 'Detalhado MÊS A MÊS sem faltar nenhum dos 12 meses anteriores. O relatório necessita DATA e tem validade de 180 dias.'
};

const getStatusColor = (status) => {
  const s = String(status || '').trim().toLowerCase();
  if (s.includes('aguardando')) return COLORS.crimson;
  if (s.includes('análise') || s.includes('analise')) return COLORS.mustard;
  if (s.includes('protocolado')) return COLORS.cyan;
  if (s.includes('concluído') || s.includes('concluido')) return COLORS.black;
  return null;
};

const getTextColorForStatus = (statusColor) => {
  if (statusColor === COLORS.crimson || statusColor === COLORS.black) return 'white';
  if (statusColor === COLORS.mustard || statusColor === COLORS.cyan) return 'black';
  return 'inherit';
};

const getProgressColor = (count) => {
  if (count === 0) return null;
  if (count <= 3) return COLORS.crimson;
  if (count <= 7) return COLORS.mustard;
  return COLORS.cyan;
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

function EditableField({ value, onSave, multiline = false, isDark, textClass = "", accentColor, cycleAccent, isUnlocked, requireAuth }) {
  const [editing, setEditing] = useState(false);
  const [val, setVal] = useState(value || '');
  let pressTimer;

  const handleSave = () => { 
    setEditing(false); 
    if (val !== value) onSave(val); 
  };
  
  const handleKeyDown = (e) => { 
    if (e.key === 'Enter' && !multiline) handleSave(); 
    if (e.key === 'Escape') { 
      setVal(value); 
      setEditing(false); 
    } 
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    requireAuth(() => {
      setEditing(true);
      if (cycleAccent) cycleAccent();
    });
  };

  const startPress = () => {
    pressTimer = setTimeout(() => { 
      requireAuth(() => {
        setEditing(true); 
        if (cycleAccent) cycleAccent(); 
      });
    }, 500); 
  };
  
  const endPress = () => clearTimeout(pressTimer);

  if (editing) {
    return multiline ? (
      <textarea autoFocus value={val} onChange={e => setVal(e.target.value)} onBlur={handleSave} onKeyDown={handleKeyDown} 
        className={`w-full p-2 border-[2px] outline-none resize-y transition-colors duration-300 ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'}`} 
        style={{ borderColor: accentColor }} rows={4} />
    ) : (
      <input autoFocus type="text" value={val} onChange={e => setVal(e.target.value)} onBlur={handleSave} onKeyDown={handleKeyDown} 
        className={`w-full p-1 border-b-[2px] outline-none transition-colors duration-300 ${isDark ? 'bg-gray-800 text-white' : 'bg-transparent text-black'}`} 
        style={{ borderColor: accentColor }} />
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

function EditableSelect({ value, options, onSave, isDark, textClass = "", accentColor, cycleAccent, isUnlocked, requireAuth }) {
  const [editing, setEditing] = useState(false);
  const handleEditClick = (e) => { e.stopPropagation(); requireAuth(() => { setEditing(true); if (cycleAccent) cycleAccent(); }); };

  if (editing) {
    return (
      <select autoFocus value={value || ''} onChange={e => { setEditing(false); if(e.target.value !== value) onSave(e.target.value); }} onBlur={() => setEditing(false)} 
        className={`p-1 border-[2px] outline-none transition-colors duration-300 ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'}`} style={{ borderColor: accentColor }}>
        <option value="">Selecione...</option>
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    );
  }
  return (
    <div className="group relative cursor-pointer flex items-center w-max" onDoubleClick={() => requireAuth(() => { setEditing(true); if(cycleAccent) cycleAccent(); })} onTouchStart={(e) => { e.target.pressTimer = setTimeout(()=> requireAuth(() => { setEditing(true); if(cycleAccent) cycleAccent(); }), 500); }} onTouchEnd={(e) => clearTimeout(e.target.pressTimer)}>
       <span className={textClass}>{value || '-'}</span>
       <button onClick={handleEditClick} className={`opacity-0 group-hover:opacity-100 p-1 ml-1 rounded-sm shadow-md transition-opacity ${isUnlocked ? 'bg-black text-white dark:bg-white dark:text-black' : 'theme-crimson'}`}>
         {isUnlocked ? <Edit2 size={12} /> : <Lock size={12} />}
       </button>
    </div>
  );
}

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('kanban'); 
  const [dialog, setDialog] = useState({ isOpen: false, type: 'alert', message: '', onConfirm: null });

  const showAlert = (message) => setDialog({ isOpen: true, type: 'alert', message, onConfirm: null });
  const showConfirm = (message, onConfirm) => setDialog({ isOpen: true, type: 'confirm', message, onConfirm });

  // Apenas Modo Escuro Padrão
  const isDark = true;
  
  // Resgata com segurança no Vercel (Vite)
  let webhookUrl = "";
  try { webhookUrl = import.meta.env.VITE_WEBHOOK_URL || ""; } catch(e) {}

  const EMERGENCY_PHRASE = "Nada resiste ao bem e ao amor.";
  const [masterPassword] = useState('admin');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);

  const [syncStatus, setSyncStatus] = useState('');
  const [activeFicha, setActiveFicha] = useState(null);
  const [activeArticulador, setActiveArticulador] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const accentColors = [COLORS.mustard, COLORS.cyan, COLORS.crimson];
  const [accentIndex, setAccentIndex] = useState(0);
  const accentColor = accentColors[accentIndex];
  const cycleAccent = () => setAccentIndex(prev => (prev + 1) % 3);

  const requireAuth = (actionFn) => {
    if (isUnlocked) { if (actionFn) actionFn(); } 
    else { setPendingAction(() => actionFn); setAuthModalOpen(true); }
  };

  const handleEntityClick = (entityData) => { setActiveFicha(entityData); setView('entity_details'); };
  const handleArticulatorClick = (articulatorName) => { if (!articulatorName || articulatorName === '-') return; setActiveArticulador(articulatorName); setView('articulator_details'); };

  useEffect(() => { fetchFromWebhooks(); }, []);

  const fetchFromWebhooks = async () => {
    setLoading(true); 
    setSyncStatus('Sincronizando Banco Central...');
    
    if (!webhookUrl) {
      setSyncStatus('⚠️ URL de Utilidade Pública não encontrada no Environment (Vercel).');
      setLoading(false);
      return;
    }

    try {
      const urlUtilidade = webhookUrl + (webhookUrl.includes('?') ? '&' : '?') + `t=${new Date().getTime()}`;
      const response = await fetch(urlUtilidade, { method: 'GET', redirect: 'follow' });
      const text = await response.text();
      
      if (text.toLowerCase().includes('<!doctype html>')) throw new Error('Retornou página HTML. Verifique permissões do Script.');

      let parsedData = [];
      try {
        const jsonData = JSON.parse(text);
        parsedData = Array.isArray(jsonData) ? jsonData : (jsonData.data || jsonData.rows || []);
      } catch(e) { parsedData = parseCSV(text); }

      if (Array.isArray(parsedData) && parsedData.length > 0) {
        const formattedData = parsedData.filter(item => item && item.ENTIDADE && String(item.ENTIDADE).trim() !== '').map(item => {
            let newItem = {};
            for (let key in item) {
              let val = item[key];
              if (typeof val === 'string' && val.includes('T') && val.includes('Z') && val.length > 15) { val = new Date(val).toLocaleDateString('pt-BR'); }
              newItem[key] = val;
            }
            return newItem;
        });
        setData(formattedData);
        setSyncStatus('Sincronizado!');
        setTimeout(() => setSyncStatus(''), 5000);
      } else { throw new Error('Nenhum registro válido encontrado.'); }
    } catch (error) { 
      console.error(error); 
      setSyncStatus(`⚠️ Utilidade Pública: ${error.message || 'Erro de conexão.'}`);
    } finally { setLoading(false); }
  };

  const deleteItem = (entidadeName) => {
    showConfirm(`Arquivista, confirma a exclusão definitiva do processo de: ${entidadeName}?`, async () => {
      setSyncStatus('Apagando registro no banco...');
      try {
        await fetch(webhookUrl, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify({ action: 'delete', ENTIDADE: entidadeName }) });
        setData(prevData => prevData.filter(d => d.ENTIDADE !== entidadeName));
        setActiveFicha(null); setView('kanban'); 
      } catch (error) { console.error(error); } finally { setTimeout(() => setSyncStatus(''), 3000); }
    });
  };

  const handleUpdateEntity = async (originalName, updatedFields) => {
    setData(prev => prev.map(d => d.ENTIDADE === originalName ? { ...d, ...updatedFields } : d));
    setActiveFicha(prev => prev && prev.ENTIDADE === originalName ? { ...prev, ...updatedFields } : prev);
    if (webhookUrl) {
      try { await fetch(webhookUrl, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify({ action: 'update', ENTIDADE_ORIGINAL: originalName, newData: updatedFields }) }); } 
      catch (error) { console.error("Erro ao atualizar", error); }
    }
  };

  const themeConfig = { bg: 'bg-[#0f0f0f]', text: 'text-gray-100', border: 'border-gray-200', cardBg: 'bg-[#1a1a1a]', inputBg: 'bg-[#2a2a2a]' };
  const bThick = `border-[4px] ${themeConfig.border}`; 
  const bMedium = `border-[2px] ${themeConfig.border}`;
  const articuladoresUnicos = Array.from(new Set(data.map(d => String(d.ARTICULADOR || '').trim()).filter(Boolean)));

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
    <div className={`min-h-screen font-sans ${themeConfig.bg} ${themeConfig.text} text-xs transition-colors duration-300 flex flex-col`}>
      <style>{mondrianStyles}</style>
      <header className={`flex flex-col md:flex-row border-b-[6px] ${themeConfig.border}`}>
        <div className={`flex-1 p-4 md:p-6 ${bMedium} border-b-0 md:border-b-0 md:border-r-[6px] flex items-center justify-between`}>
          <div onClick={() => {setView('kanban'); setActiveFicha(null); setActiveArticulador(null); setIsFormOpen(false); cycleAccent();}} className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-3">
            <img src="https://raw.githubusercontent.com/killuixo/tabulum-sig/refs/heads/main/icon-192.png" alt="TABULUM" className="w-10 h-10 md:w-12 md:h-12 object-contain shadow-md border-[2px] border-white bg-white" />
            <div>
              <h1 className="font-black uppercase tracking-widest text-2xl md:text-3xl leading-none">TABULUM</h1>
              <p className="font-bold opacity-60 uppercase tracking-widest text-[0.7em] mt-1">Sist. Integrado de Gestão • Dep. Marquito</p>
            </div>
          </div>
          <div className="hidden md:flex gap-2 items-center">
            <button onClick={() => isUnlocked ? setIsUnlocked(false) : requireAuth()} className={`p-2 transition-all hover:scale-110 opacity-50 hover:opacity-100 ${isUnlocked ? 'text-cyan' : 'text-current'}`}>
              {isUnlocked ? <Unlock size={20} /> : <Lock size={20} />}
            </button>
            <div className="w-8 h-8 ml-2" style={{ backgroundColor: COLORS.cyan, border: `3px solid #fff` }}></div>
            <div className="w-8 h-8" style={{ backgroundColor: COLORS.mustard, border: `3px solid #fff` }}></div>
            <div className="w-8 h-8" style={{ backgroundColor: COLORS.crimson, border: `3px solid #fff` }}></div>
          </div>
        </div>

        <nav className={`flex flex-wrap md:flex-nowrap p-3 md:p-4 gap-3 overflow-x-auto ${themeConfig.cardBg} items-center md:justify-center`}>
          <NavButton active={view === 'kanban' && !isFormOpen} onClick={() => {setView('kanban'); setActiveFicha(null); setActiveArticulador(null); setIsFormOpen(false); cycleAccent();}} icon={<Kanban />} label="Kanban" accentColor={accentColor} />
          <NavButton active={view === 'dashboard' && !isFormOpen} onClick={() => {setView('dashboard'); setActiveFicha(null); setActiveArticulador(null); setIsFormOpen(false); cycleAccent();}} icon={<LayoutDashboard />} label="Dashboard" accentColor={accentColor} />
          <button onClick={() => requireAuth(() => { setIsFormOpen(true); cycleAccent(); })} className={`flex items-center justify-center font-black text-2xl w-12 h-12 border-[4px] transition-all duration-300 hover:-translate-y-1 flex-shrink-0 bg-black text-white hover:bg-white hover:text-black`} style={isFormOpen ? { borderColor: accentColor, boxShadow: `4px 4px 0px ${accentColor}`, backgroundColor: 'white', color: 'black', transform: 'scale(1.05)', zIndex: 10 } : { borderColor: 'currentColor' }}>+</button>
        </nav>
      </header>

      <main className="p-4 md:p-6 flex-1 flex flex-col relative">
        {loading ? (
          <div className="flex-1 flex flex-col items-center justify-center">
            <ColoredSpinner size={64} />
            <p className="font-black uppercase tracking-widest animate-pulse text-center leading-relaxed mt-4" style={{ color: (syncStatus.includes('Erro') || syncStatus.includes('⚠️')) ? COLORS.crimson : 'inherit' }}>
              {syncStatus}
            </p>
          </div>
        ) : (
          <>
            {isFormOpen && <FormNovoPedido onClose={() => setIsFormOpen(false)} theme={themeConfig} thick={bThick} fetchFromWebhooks={fetchFromWebhooks} equipeOptions={articuladoresUnicos} webhookUrl={webhookUrl} accentColor={accentColor} cycleAccent={cycleAccent} requireAuth={requireAuth} showAlert={showAlert} />}
            {!isFormOpen && view === 'entity_details' && activeFicha && <FichaEntidade item={activeFicha} equipeOptions={articuladoresUnicos} onClose={() => {setActiveFicha(null); setView('kanban'); cycleAccent();}} onArticuladorClick={handleArticulatorClick} onDelete={() => deleteItem(activeFicha.ENTIDADE)} onUpdate={(fields) => handleUpdateEntity(activeFicha.ENTIDADE, fields)} theme={themeConfig} thick={bThick} accentColor={accentColor} cycleAccent={cycleAccent} isUnlocked={isUnlocked} requireAuth={requireAuth} />}
            {!isFormOpen && view === 'articulator_details' && activeArticulador && <PainelArticulador nome={activeArticulador} data={data} onClose={() => {setActiveArticulador(null); setView('kanban'); cycleAccent();}} onEntidadeClick={handleEntityClick} theme={themeConfig} thick={bThick} />}
            {!isFormOpen && view === 'kanban' && <KanbanView data={data} theme={themeConfig} thick={bThick} med={bMedium} onEntityClick={handleEntityClick} onArticulatorClick={handleArticulatorClick} />}
            {!isFormOpen && view === 'dashboard' && <DashboardView data={data} theme={themeConfig} thick={bThick} onEntityClick={handleEntityClick} onArticulatorClick={handleArticulatorClick} />}
          </>
        )}
      </main>

      {authModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in zoom-in duration-200">
           <div className={`w-full max-w-sm p-6 flex flex-col gap-4 ${bThick} ${themeConfig.cardBg} shadow-[8px_8px_0px_rgba(0,0,0,0.5)] border-[3px]`} style={{ borderColor: accentColor }}>
              <div className="flex items-center gap-3 border-b-[4px] border-current pb-2">
                 <Lock size={24} className="text-crimson" />
                 <h2 className="text-xl font-black uppercase tracking-widest text-crimson">Acesso Restrito</h2>
              </div>
              <p className="text-sm font-bold opacity-80 leading-relaxed">Insira a senha mestra para habilitar edições.</p>
              <input type="password" autoFocus placeholder="Senha ou Frase..." className={`w-full p-3 border-[3px] outline-none font-bold transition-colors duration-300 ${themeConfig.inputBg}`} style={{ borderColor: 'currentcolor' }}
                 onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                       const val = e.target.value;
                       if (val === masterPassword || val.trim().toLowerCase() === EMERGENCY_PHRASE.toLowerCase()) { setIsUnlocked(true); setAuthModalOpen(false); if (pendingAction) pendingAction(); } 
                       else { showAlert('Acesso Negado.'); }
                    }
                 }} id="auth_pwd_input" />
              <div className="flex gap-2 mt-2">
                 <button onClick={() => {
                       const val = document.getElementById('auth_pwd_input').value;
                       if (val === masterPassword || val.trim().toLowerCase() === EMERGENCY_PHRASE.toLowerCase()) { setIsUnlocked(true); setAuthModalOpen(false); if (pendingAction) pendingAction(); } 
                       else { showAlert('Acesso Negado.'); }
                    }} className="flex-1 p-3 bg-white text-black font-black uppercase tracking-widest text-[0.8em] border-[3px] border-current hover:-translate-y-1 transition-transform">Desbloquear</button>
                 <button onClick={() => { setAuthModalOpen(false); setPendingAction(null); }} className="flex-1 p-3 bg-transparent font-black uppercase tracking-widest text-[0.8em] border-[3px] border-current hover:-translate-y-1 transition-transform hover-crimson">Cancelar</button>
              </div>
           </div>
        </div>
      )}

      {dialog.isOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in zoom-in duration-200">
          <div className={`w-full max-w-sm p-6 flex flex-col gap-4 border-[4px] ${themeConfig.cardBg} shadow-[8px_8px_0px_rgba(0,0,0,0.5)]`} style={{ borderColor: dialog.type === 'confirm' ? COLORS.mustard : COLORS.crimson }}>
            <div className="flex items-center gap-3 border-b-[4px] border-current pb-2">
              <AlertCircle size={24} className={dialog.type === 'confirm' ? "text-mustard" : "text-crimson"} />
              <h2 className={`text-xl font-black uppercase tracking-widest ${dialog.type === 'confirm' ? 'text-mustard' : 'text-crimson'}`}>{dialog.type === 'confirm' ? 'Atenção' : 'Aviso'}</h2>
            </div>
            <p className="text-sm font-bold opacity-90 leading-relaxed whitespace-pre-wrap">{dialog.message}</p>
            <div className="flex gap-2 mt-2">
              {dialog.type === 'confirm' && <button onClick={() => { setDialog({ isOpen: false }); dialog.onConfirm(); }} className="flex-1 p-3 bg-white text-black font-black uppercase tracking-widest text-[0.8em] border-[3px] border-current hover:-translate-y-1 transition-transform">Confirmar</button>}
              <button onClick={() => setDialog({ isOpen: false })} className="flex-1 p-3 bg-transparent font-black uppercase tracking-widest text-[0.8em] border-[3px] border-current hover:-translate-y-1 transition-transform hover-crimson">{dialog.type === 'confirm' ? 'Cancelar' : 'OK'}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function KanbanView({ data, theme, thick, med, onEntityClick, onArticulatorClick }) {
  const [collapsedCols, setCollapsedCols] = useState({});
  const [isConcluidoOpen, setIsConcluidoOpen] = useState(false);
  const toggleCol = (id) => setCollapsedCols(prev => ({ ...prev, [id]: !prev[id] }));

  const activeColumns = [
    { id: 'Aguardando Documentos', label: 'Aguardando', color: COLORS.crimson, icon: <AlertCircle size={16}/> },
    { id: 'Em análise', label: 'Análise', color: COLORS.mustard, icon: <Clock size={16}/> },
    { id: 'Protocolado', label: 'Protocolado', color: COLORS.cyan, icon: <FileText size={16}/> }
  ];

  const getColData = (status) => data.filter(d => String(d['STATUS DA ANÁLISE'] || '').trim().toLowerCase() === status.toLowerCase());
  const concluidoData = data.filter(d => { const s = String(d['STATUS DA ANÁLISE'] || '').trim().toLowerCase(); return s.includes('concluído') || s.includes('concluido'); });

  const renderCard = (item, i, colColor) => {
    let hasCount = 0;
    const itemProgressBoxes = DOCS_KEYS.map(key => { const hasDoc = (String(item[key] || '').toUpperCase() === 'TRUE'); if (hasDoc) hasCount++; return { key, has: hasDoc }; });

    return (
      <div key={i} onClick={() => onEntityClick(item)} className={`p-3 md:p-4 ${med} hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.3)] transition-all cursor-pointer ${theme.bg}`}>
        <h3 className="font-black mb-3 uppercase leading-tight" style={{ fontSize: '1.1em' }}>{item.ENTIDADE || 'Sem Nome'}</h3>
        <div className="flex justify-between items-end gap-2">
          <div className="flex flex-col">
            <span className="text-[0.65em] uppercase font-black opacity-60 tracking-widest">Articulador</span>
            <span onClick={(e) => { e.stopPropagation(); onArticulatorClick(item.ARTICULADOR); }} className={`font-bold hover:underline decoration-2 underline-offset-4 cursor-pointer`} style={{ textDecorationColor: colColor || 'currentcolor' }}>{item.ARTICULADOR || '-'}</span>
          </div>
          <div className="text-right">
            <span className="text-[0.65em] uppercase font-black opacity-60 tracking-widest block">Data</span>
            <span className="font-bold text-[0.9em]">{item['DATA DA SOLICITAÇÃO'] || '-'}</span>
          </div>
        </div>
        {(item['LINK']) && <a href={item['LINK']} target="_blank" rel="noopener noreferrer" className="mt-3 flex w-max items-center gap-1 text-[0.7em] font-black uppercase tracking-widest opacity-80 hover:opacity-100 hover:underline transition-all" style={{ color: colColor || 'currentcolor' }} onClick={e => e.stopPropagation()}><ExternalLink size={14} /> Acompanhar tramitação</a>}
        <div className="mt-4 flex gap-1 h-3">
          {itemProgressBoxes.map((box, bIdx) => {
            const activeColor = box.has ? getProgressColor(hasCount) : null;
            return <div key={bIdx} title={box.key} className={`flex-1 transition-colors duration-500 ${box.has ? 'border-[2px] border-current' : 'bg-transparent border-[1px] border-current opacity-20'}`} style={activeColor ? { backgroundColor: activeColor } : {}} />;
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4 flex-1 min-h-[500px]">
      <div className={`border-[4px] transition-colors duration-300 ${isConcluidoOpen ? theme.cardBg : 'bg-transparent'} ${theme.border}`}>
        <button onClick={() => setIsConcluidoOpen(!isConcluidoOpen)} className={`w-full p-3 font-black uppercase tracking-widest flex items-center justify-between transition-colors ${isConcluidoOpen ? 'bg-white text-black' : 'opacity-60 hover:opacity-100 hover:bg-white/5'}`}>
          <div className="flex items-center gap-3"><CheckCircle2 size={18} /><span className="text-sm md:text-base">Processos Concluídos ({concluidoData.length})</span></div>
          <span className="text-2xl leading-none font-mono">{isConcluidoOpen ? '−' : '+'}</span>
        </button>
        {isConcluidoOpen && (
          <div className="p-4 bg-white/5 border-t-[4px] border-current">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[50vh] overflow-y-auto pr-2">
               {concluidoData.map((item, i) => renderCard(item, i, COLORS.black))}
               {concluidoData.length === 0 && <div className="col-span-full text-center opacity-40 p-6 border-[3px] border-dashed border-current font-black uppercase tracking-widest text-[0.8em]">Nenhum processo concluído</div>}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-4 flex-1 items-stretch">
        {activeColumns.map((col) => {
          const isCollapsed = collapsedCols[col.id];
          const colData = getColData(col.id);
          const headerTextColor = getTextColorForStatus(col.color) || 'white';
          return (
            <div key={col.id} className={`flex flex-col transition-all duration-300 ${isCollapsed ? 'w-16 md:w-20' : 'flex-1'} ${thick} ${theme.cardBg}`}>
              <div onClick={() => toggleCol(col.id)} className={`p-3 font-black flex items-center gap-2 uppercase tracking-wider border-b-[4px] cursor-pointer transition-colors ${theme.border}`} style={{ backgroundColor: col.color, color: headerTextColor }}>
                {isCollapsed ? (
                  <div className="flex flex-col items-center w-full gap-4 py-4">{col.icon}<span className="writing-vertical-lr rotate-180 tracking-widest">{col.label}</span><span className="bg-black text-white px-2 py-0.5 rounded-full mt-auto text-[0.8em]">{colData.length}</span></div>
                ) : (
                  <>{col.icon}<span className="truncate">{col.label}</span><span className="ml-auto bg-black text-white px-2 py-0.5 rounded-full text-[0.8em]">{colData.length}</span></>
                )}
              </div>
              {!isCollapsed && (
                <div className="p-3 flex flex-col gap-3 overflow-y-auto flex-1 min-h-[300px]">
                  {colData.map((item, i) => renderCard(item, i, col.color))}
                  {colData.length === 0 && <div className="text-center opacity-40 p-6 border-[3px] border-dashed border-current font-black uppercase tracking-widest text-[0.8em]">Vazio</div>}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DashboardView({ data, theme, thick, onEntityClick, onArticulatorClick }) {
  const total = data.length;
  const aguardando = data.filter(d => String(d['STATUS DA ANÁLISE'] || '').trim().toLowerCase().includes('aguardando')).length;
  const emAnalise = data.filter(d => String(d['STATUS DA ANÁLISE'] || '').trim().toLowerCase().includes('análise') || String(d['STATUS DA ANÁLISE'] || '').trim().toLowerCase().includes('analise')).length;
  const protocolados = data.filter(d => String(d['STATUS DA ANÁLISE'] || '').trim().toLowerCase() === 'protocolado').length;
  const concluidos = data.filter(d => String(d['STATUS DA ANÁLISE'] || '').trim().toLowerCase().includes('concluído') || String(d['STATUS DA ANÁLISE'] || '').trim().toLowerCase().includes('concluido')).length;
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      <div className={`lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4`}>
        <div className={`p-4 ${thick} ${theme.cardBg} flex flex-col justify-between`} style={{ borderTopColor: 'currentcolor', borderTopWidth: '8px' }}><span className="font-black uppercase tracking-widest opacity-70 text-[0.8em]">Total</span><span className="text-5xl font-black mt-2">{total}</span></div>
        <div className={`p-4 ${thick} ${theme.cardBg} flex flex-col justify-between`} style={{ borderTopColor: COLORS.mustard, borderTopWidth: '8px' }}><span className="font-black uppercase tracking-widest opacity-70 text-[0.8em]">Análise</span><span className="text-5xl font-black mt-2">{emAnalise}</span></div>
        <div className={`p-4 ${thick} ${theme.cardBg} flex flex-col justify-between`} style={{ borderTopColor: COLORS.cyan, borderTopWidth: '8px' }}><span className="font-black uppercase tracking-widest opacity-70 text-[0.8em]">ALESC</span><span className="text-5xl font-black mt-2">{protocolados}</span></div>
        <div className={`p-4 ${thick} ${theme.cardBg} flex flex-col justify-between`} style={{ borderTopColor: COLORS.black, borderTopWidth: '8px' }}><span className="font-black uppercase tracking-widest opacity-70 text-[0.8em]">Concluído</span><span className="text-5xl font-black mt-2">{concluidos}</span></div>
      </div>
      <div className={`lg:col-span-1 p-4 ${thick} ${theme.cardBg} flex flex-col`}>
        <h2 className="font-black uppercase tracking-widest border-b-[4px] border-current pb-2 mb-4 text-[0.9em]">Visão Geral</h2>
        <div className="flex-1 flex flex-col justify-end gap-2 h-40">
          <div className="flex items-end gap-1 h-full">
            <div className="w-1/4 flex flex-col items-center gap-1 h-full justify-end"><div className="w-full transition-all duration-500" style={{ height: `${(aguardando/total)*100 || 0}%`, backgroundColor: COLORS.crimson, border: '3px solid currentcolor' }}></div><span className="text-[9px] uppercase font-black tracking-widest text-center mt-1">Doc</span></div>
            <div className="w-1/4 flex flex-col items-center gap-1 h-full justify-end"><div className="w-full transition-all duration-500" style={{ height: `${(emAnalise/total)*100 || 0}%`, backgroundColor: COLORS.mustard, border: '3px solid currentcolor' }}></div><span className="text-[9px] uppercase font-black tracking-widest text-center mt-1">Anál</span></div>
            <div className="w-1/4 flex flex-col items-center gap-1 h-full justify-end"><div className="w-full transition-all duration-500" style={{ height: `${(protocolados/total)*100 || 0}%`, backgroundColor: COLORS.cyan, border: '3px solid currentcolor' }}></div><span className="text-[9px] uppercase font-black tracking-widest text-center mt-1">Prot</span></div>
            <div className="w-1/4 flex flex-col items-center gap-1 h-full justify-end"><div className="w-full transition-all duration-500" style={{ height: `${(concluidos/total)*100 || 0}%`, backgroundColor: COLORS.black, border: '3px solid currentcolor' }}></div><span className="text-[9px] uppercase font-black tracking-widest text-center mt-1">Fim</span></div>
          </div>
        </div>
      </div>
      <div className={`lg:col-span-4 mt-4 ${thick} ${theme.cardBg} overflow-x-auto max-h-[500px]`}>
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead className="sticky top-0 z-10" style={{ backgroundColor: '#1a1a1a' }}>
            <tr className={`border-b-[6px] ${theme.border} uppercase font-black tracking-widest text-[0.8em]`}>
              <th className="p-4 border-r-[4px] border-current">Entidade</th>
              <th className="p-4 border-r-[4px] border-current">Articulador</th>
              <th className="p-4 border-r-[4px] border-current">Status</th>
              <th className="p-4">Solicitação</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className={`border-b-[3px] ${theme.border} hover:bg-gray-800 transition-colors`}>
                <td className="p-4 border-r-[4px] border-current font-bold cursor-pointer hover:underline decoration-2" onClick={() => onEntityClick(row)}>{row.ENTIDADE}</td>
                <td className="p-4 border-r-[4px] border-current font-bold opacity-80 cursor-pointer hover:underline decoration-2" onClick={() => onArticulatorClick(row.ARTICULADOR)}>{row.ARTICULADOR}</td>
                <td className="p-4 border-r-[4px] border-current"><span className="px-2 py-1 font-black uppercase text-[0.75em] tracking-widest" style={{ backgroundColor: getStatusColor(row['STATUS DA ANÁLISE']) || 'black', color: getTextColorForStatus(getStatusColor(row['STATUS DA ANÁLISE'])) || 'white' }}>{row['STATUS DA ANÁLISE'] || '-'}</span></td>
                <td className="p-4 font-bold opacity-80">{row['DATA DA SOLICITAÇÃO'] || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function FichaEntidade({ item, onClose, onArticuladorClick, onDelete, onUpdate, theme, thick, equipeOptions, accentColor, cycleAccent, isUnlocked, requireAuth }) {
  const [isManualOpen, setIsManualOpen] = useState(false);
  const [saveLabel, setSaveLabel] = useState('Salvar Ficha');
  const [activeTooltip, setActiveTooltip] = useState(null);
  const statusColor = getStatusColor(item['STATUS DA ANÁLISE']);
  let pressTimer;

  const handleManualSave = () => {
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    setSaveLabel('Salvando...');
    setTimeout(() => { setSaveLabel('Salvo!'); setTimeout(() => setSaveLabel('Salvar Ficha'), 2000); }, 500);
  };

  const toggleDoc = (docKey) => {
    const currentVal = String(item[docKey] || '').toUpperCase() === 'TRUE';
    onUpdate({ [docKey]: currentVal ? 'FALSE' : 'TRUE', 'ÚLTIMA ATUALIZAÇÃO': `Checklist atualizado em ${new Date().toLocaleDateString('pt-BR')}` });
  };

  const handleTouchStart = (key) => { pressTimer = setTimeout(() => setActiveTooltip(key), 400); };
  const handleTouchEnd = () => { clearTimeout(pressTimer); setActiveTooltip(null); };

  const docsCount = DOCS_KEYS.filter(k => String(item[k] || '').toUpperCase() === 'TRUE').length;
  const checkGlobalColor = getProgressColor(docsCount);

  return (
    <div className={`p-6 md:p-8 ${thick} ${theme.cardBg} flex flex-col gap-6 relative animate-in fade-in zoom-in-95 duration-200`}>
      <button onClick={onClose} className="absolute top-4 right-4 md:top-6 md:right-6 text-2xl font-black hover:scale-110 transition-transform z-10">X</button>
      
      <div className="pr-10 border-b-[6px] border-current pb-4">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-2 break-words">
          <EditableField value={item.ENTIDADE} onSave={(val) => onUpdate({ ENTIDADE: val })} isDark={true} accentColor={accentColor} cycleAccent={cycleAccent} isUnlocked={isUnlocked} requireAuth={requireAuth} />
        </h2>
        <div className="flex flex-wrap gap-4 mt-3">
          <span className="font-bold uppercase tracking-widest text-[0.8em] px-3 py-1 border-[2px] opacity-70" style={{ backgroundColor: statusColor || 'transparent', color: getTextColorForStatus(statusColor) || 'white', borderColor: statusColor || 'currentcolor' }}>{item['STATUS DA ANÁLISE'] || 'Aguardando Documentos'}</span>
          <span className="font-bold uppercase tracking-widest text-[0.8em] px-3 py-1 border-[2px] border-current opacity-70">{item['DATA DA SOLICITAÇÃO'] || 'Sem data'}</span>
          {(item['LINK']) && <a href={item['LINK']} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 font-black uppercase tracking-widest text-[0.8em] px-3 py-1 border-[2px] border-current transition-colors opacity-70 hover:opacity-100`} title="Acompanhar Tramitação"><ExternalLink size={14}/> Processo ALESC</a>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <div className="p-4 border-[4px] border-current flex flex-col items-start w-full">
            <span className="block text-[0.7em] uppercase font-black opacity-60 tracking-widest mb-1">Articulador</span>
            <EditableSelect value={item.ARTICULADOR} options={equipeOptions} onSave={(val) => onUpdate({ ARTICULADOR: val })} isDark={true} textClass="text-xl font-black hover:underline decoration-4 underline-offset-4 cursor-pointer truncate max-w-[200px]" accentColor={accentColor} cycleAccent={cycleAccent} isUnlocked={isUnlocked} requireAuth={requireAuth} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className={`p-4 border-[2px] border-current ${theme.bg} flex flex-col items-start w-full`}><span className="block text-[0.6em] uppercase font-black opacity-60 tracking-widest mb-1">Liderança</span><EditableField value={item.LIDERANÇA} onSave={(val) => onUpdate({ LIDERANÇA: val })} isDark={true} textClass="font-bold break-words max-w-full" accentColor={accentColor} cycleAccent={cycleAccent} isUnlocked={isUnlocked} requireAuth={requireAuth} /></div>
            <div className={`p-4 border-[2px] border-current ${theme.bg} flex flex-col items-start w-full`}><span className="block text-[0.6em] uppercase font-black opacity-60 tracking-widest mb-1">Telefone</span><EditableField value={item.TELEFONE} onSave={(val) => onUpdate({ TELEFONE: val })} isDark={true} textClass="font-bold break-words max-w-full" accentColor={accentColor} cycleAccent={cycleAccent} isUnlocked={isUnlocked} requireAuth={requireAuth} /></div>
            <div className={`p-4 border-[2px] border-current ${theme.bg} col-span-2 flex flex-col items-start w-full`}><span className="block text-[0.6em] uppercase font-black opacity-60 tracking-widest mb-1">E-mail</span><EditableField value={item.EMAIL} onSave={(val) => onUpdate({ EMAIL: val })} isDark={true} textClass="font-bold break-all max-w-full" accentColor={accentColor} cycleAccent={cycleAccent} isUnlocked={isUnlocked} requireAuth={requireAuth} /></div>
          </div>
          <div className={`p-4 border-[2px] border-current ${theme.bg} flex flex-col items-start w-full`}><span className="block text-[0.6em] uppercase font-black opacity-60 tracking-widest mb-1">Observações</span><EditableField value={item.OBSERVAÇÕES} onSave={(val) => onUpdate({ OBSERVAÇÕES: val })} isDark={true} multiline textClass="font-bold whitespace-pre-wrap leading-relaxed max-w-full" accentColor={accentColor} cycleAccent={cycleAccent} isUnlocked={isUnlocked} requireAuth={requireAuth} /></div>
        </div>

        <div className="flex flex-col gap-4">
          <div className={`p-4 border-[4px] transition-colors duration-500`} style={{ borderColor: statusColor || 'currentcolor' }}>
            <span className="block text-[0.7em] uppercase font-black opacity-80 tracking-widest mb-2 border-b-2 pb-1" style={{ borderColor: statusColor || 'currentcolor', color: statusColor || 'inherit' }}>Trâmite ALESC (Sincronizado via Monitor)</span>
            <div className="grid grid-cols-2 gap-3 font-bold w-full cursor-not-allowed">
              <div className="flex flex-col items-start"><span className="opacity-70 text-[0.7em] uppercase font-black tracking-widest">Data Envio:</span><span className="mt-1 text-sm">{item['DATA DO ENVIO ALESC'] || '-'}</span></div>
              <div className="flex flex-col items-start"><span className="opacity-70 text-[0.7em] uppercase font-black tracking-widest">Processo:</span><span className="mt-1 text-sm">{item['Nº DO PROCESSO ALESC'] || '-'}</span></div>
              <div className="col-span-2 mt-1 flex flex-col items-start"><span className="opacity-70 text-[0.7em] uppercase font-black tracking-widest">Estágio:</span><span className="mt-1 text-sm">{item['ESTÁGIO ATUAL'] || '-'}</span></div>
              <div className="col-span-2 mt-1 flex flex-col items-start"><span className="opacity-70 text-[0.7em] uppercase font-black tracking-widest">Acompanhar (Link):</span>{item['LINK'] ? <a href={item['LINK']} target="_blank" rel="noopener noreferrer" className="text-[0.8em] font-black uppercase mt-1 flex items-center gap-1 hover:underline opacity-70 hover:opacity-100 transition-opacity break-all"><ExternalLink size={12}/> Abrir Link ALESC</a> : <span className="text-sm mt-1">-</span>}</div>
              <div className="col-span-2 mt-1 flex flex-col items-start"><span className="opacity-70 text-[0.7em] uppercase font-black tracking-widest">Última Atualização:</span><span className="mt-1 text-[0.85em] opacity-80 italic font-medium">{item['ÚLTIMA ATUALIZAÇÃO'] || '-'}</span></div>
            </div>
          </div>
          
          <div className={`p-4 border-[4px] transition-colors duration-500 mt-4 border-current`}>
            <span className="block text-[0.7em] uppercase font-black opacity-80 tracking-widest mb-2 border-b-2 pb-1 border-current">Documentos no Drive</span>
            <div className="flex flex-col items-start">
              <EditableField value={item['DOCUMENTOS NO DRIVE']} onSave={(val) => onUpdate({ 'DOCUMENTOS NO DRIVE': val })} isDark={true} textClass="font-bold break-all max-w-full underline decoration-current/50 hover:decoration-current transition-colors" accentColor={accentColor} cycleAccent={cycleAccent} isUnlocked={isUnlocked} requireAuth={requireAuth} />
              {(item['DOCUMENTOS NO DRIVE']) && <a href={item['DOCUMENTOS NO DRIVE']} target="_blank" rel="noopener noreferrer" className="text-[0.7em] font-black uppercase mt-1 flex items-center gap-1 hover:underline opacity-70 hover:opacity-100 transition-opacity"><ExternalLink size={12}/> Abrir Pasta no Drive</a>}
            </div>
          </div>
          
          <div className="flex flex-col mt-4">
            <a href={`mailto:${EMAIL_CENTRAL}?subject=${encodeURIComponent(`Pedido de Utilidade Pública de ${item.ENTIDADE}`)}`} className={`mb-6 p-4 border-[3px] border-current flex items-center justify-center gap-3 font-black uppercase tracking-widest text-[0.8em] transition-transform hover:-translate-y-1 bg-white text-black hover-cyan`}><Mail size={18} /> Enviar Arquivos por E-mail</a>
            <span className="block text-[0.8em] uppercase font-black tracking-widest mb-2 border-b-[4px] border-current pb-1">Checklist de Documentos (Passe o mouse ou Segure)</span>
            {DOCS_KEYS.map((key, idx) => {
              const hasDoc = String(item[key] || '').toUpperCase() === 'TRUE';
              const displayLabel = key === '6 - 7 DECLARAÇÃO REMUNERAÇÃO' ? '6 OU 7 DEC. REMUNERAÇÃO/NÃO REMUNERADA' : key;
              return (
                <div key={idx} className="group relative flex items-center gap-3 py-2 border-b-[2px] border-current opacity-90 cursor-pointer hover:bg-white/5 transition-colors" onMouseEnter={() => setActiveTooltip(key)} onMouseLeave={() => setActiveTooltip(null)} onTouchStart={() => handleTouchStart(key)} onTouchEnd={handleTouchEnd} onTouchCancel={handleTouchEnd}>
                  <div onClick={(e) => { e.stopPropagation(); requireAuth(() => toggleDoc(key)); }} className={`w-5 h-5 flex-shrink-0 border-[2px] border-current flex items-center justify-center transition-colors hover:scale-110`} style={{ backgroundColor: hasDoc ? checkGlobalColor : 'transparent' }}>{hasDoc && <CheckCircle2 size={14} className="text-white mix-blend-difference" />}</div>
                  <span onClick={(e) => { e.stopPropagation(); requireAuth(() => toggleDoc(key)); }} className={`font-bold text-[0.85em] flex-1 transition-opacity ${hasDoc ? 'opacity-100' : 'opacity-50 group-hover:opacity-80'}`}>{displayLabel}</span>
                  {!isUnlocked && <Lock size={12} className="ml-auto opacity-30 group-hover:opacity-100 text-crimson" />}
                  {activeTooltip === key && (
                    <div className={`absolute bottom-full mb-1 right-0 sm:left-6 z-50 w-[260px] p-3 text-xs leading-relaxed border-[3px] shadow-[4px_4px_0px_rgba(0,0,0,0.5)] bg-gray-800 text-white border-white animate-in fade-in zoom-in-95 duration-200 pointer-events-none`}>
                      <span className="font-black uppercase block mb-1 opacity-60 text-[9px] border-b-[2px] border-current pb-1">Exigências</span>{DOCS_REQUIREMENTS[key]}<div className={`absolute top-full left-4 border-[6px] border-transparent border-t-white`}></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 border-t-[4px] border-current pt-4 gap-4">
        <button onClick={() => requireAuth(onDelete)} className={`flex items-center gap-2 px-4 py-3 font-black uppercase tracking-widest text-[0.8em] border-[3px] border-current opacity-50 hover:opacity-100 transition-all w-full sm:w-auto justify-center hover-crimson`}>{isUnlocked ? <Trash2 size={16} /> : <Lock size={16} />} Apagar Registro</button>
        <button onClick={() => requireAuth(handleManualSave)} className={`flex items-center justify-center gap-2 px-8 py-3 font-black uppercase tracking-widest text-[0.8em] border-[3px] border-current transition-all w-full sm:w-auto hover:-translate-y-1 ${saveLabel === 'Salvo!' ? 'theme-cyan shadow-[4px_4px_0px_currentColor]' : 'bg-white text-black hover:bg-gray-200 shadow-[4px_4px_0px_white]'}`}>{isUnlocked ? <Save size={16} /> : <Lock size={16} />} {saveLabel}</button>
      </div>
      {isManualOpen && <ManualModal onClose={() => setIsManualOpen(false)} theme={theme} thick={thick} />}
    </div>
  );
}

function ManualModal({ onClose, theme, thick }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className={`w-full max-w-4xl p-6 md:p-8 flex flex-col gap-6 ${thick} ${theme.cardBg} shadow-[8px_8px_0px_currentColor] relative max-h-[95vh] overflow-hidden`}>
        <button onClick={onClose} className="absolute top-4 right-4 text-xl font-black hover:scale-110 transition-transform border-[3px] border-current w-10 h-10 flex items-center justify-center">X</button>
        <div className="border-b-[4px] border-current pb-4 pr-12 flex-shrink-0"><h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest flex items-center gap-3"><BookOpen size={28} /> Diretrizes e Requisitos</h2><p className="font-bold opacity-60 uppercase tracking-widest text-[0.7em] mt-2">Reconhecimento de Utilidade Pública Estadual</p></div>
        <div className="overflow-y-auto pr-4 space-y-6 flex-1 text-sm font-medium leading-relaxed">
          <section className="space-y-3 opacity-90">
            <p>O reconhecimento do Título de Utilidade Pública Estadual é regido pela <b>Lei nº 18.269/2021</b>. Os documentos previstos no art. 3º devem ser encaminhados ao gabinete parlamentar para análise técnica.</p>
            <p><b>Admissibilidade:</b> Autoriza-se o protocolo de processos que apresentem vícios sanáveis em Declarações ou Relatórios. Contudo, é expressamente obrigatório que a Ata de Fundação, Ata de Posse e o Estatuto Social estejam sem incorreções e devidamente registrados em cartório no ato do protocolo.</p>
          </section>
          <div>
            <h3 className="text-base font-black uppercase border-b-[2px] border-current pb-2 mb-4">Checklist Documental Exigido</h3>
            <div className="space-y-4">
              <div className="pb-3 border-b border-current/20"><h4 className="font-bold uppercase tracking-wide mb-1 text-[0.9em]">001 e 002 - Atas de Fundação, Eleição e Posse</h4><p className="opacity-80">Apresentar atas de fundação e da diretoria executiva em exercício. <b>Requisito obrigatório:</b> Registro em Cartório.</p></div>
              <div className="pb-3 border-b border-current/20"><h4 className="font-bold uppercase tracking-wide mb-1 text-[0.9em]">003 - Cadastro Nacional da Pessoa Jurídica (CNPJ)</h4><p className="opacity-80">Documento sem prazo de validade. Exige-se situação cadastral <b>ATIVA</b>, emissão datada e constituição da instituição no Estado de Santa Catarina.</p></div>
              <div className="pb-3 border-b border-current/20"><h4 className="font-bold uppercase tracking-wide mb-1 text-[0.9em]">004 - Declaração de Não Qualificação como OSCIP</h4><p className="opacity-80">Validade máxima de <b>90 dias</b> anteriores ao protocolo. Deve declarar expressamente a não qualificação como OSCIP. Informações obrigatórias: nome completo do presidente, CPF, telefone, e-mail, endereço residencial, além de local, data e assinatura.</p></div>
              <div className="pb-3 border-b border-current/20"><h4 className="font-bold uppercase tracking-wide mb-1 text-[0.9em]">005 - Declaração de Funcionamento Contínuo</h4><p className="opacity-80">Validade máxima de <b>180 dias</b>. Atestar o funcionamento contínuo e regular nos 12 meses imediatamente anteriores. Deve constar: número do CNPJ, endereço da entidade, local, data e assinatura do presidente.</p></div>
              <div className="pb-3 border-b border-current/20"><h4 className="font-bold uppercase tracking-wide mb-1 text-[0.9em]">006 ou 007 - Declaração de Remuneração de Dirigentes</h4><p className="opacity-80 mb-2">Validade máxima de <b>180 dias</b>. A entidade deve emitir declaração específica atestando se remunera ou não os cargos de diretoria e conselho.</p></div>
              <div className="pb-3 border-b border-current/20"><h4 className="font-bold uppercase tracking-wide mb-1 text-[0.9em]">008 - Estatuto Social da Entidade</h4><p className="opacity-80"><b>Requisito obrigatório:</b> Registro em Cartório. Para entidades que não remuneram dirigentes, o estatuto deve conter cláusula expressa dessa condição (em conformidade com o inciso X do art. 3º).</p></div>
              <div className="pb-1"><h4 className="font-bold uppercase tracking-wide mb-1 text-[0.9em]">009 - Relatório de Atividades</h4><p className="opacity-80">Validade máxima de <b>180 dias</b> até a data do protocolo. Deve demonstrar o detalhamento de atividades comunitárias, especificadas mês a mês, cobrindo integralmente os 12 meses anteriores. Exige-se data e assinatura responsável.</p></div>
            </div>
          </div>
        </div>
        <div className="border-t-[4px] border-current pt-4 mt-2 flex-shrink-0"><button onClick={onClose} className="w-full p-4 bg-transparent font-black uppercase tracking-widest hover:-translate-y-1 transition-transform border-[4px] border-current hover:bg-white hover:text-black">Fechar Manual</button></div>
      </div>
    </div>
  );
}

function PainelArticulador({ nome, data, onClose, onEntidadeClick, theme, thick }) {
  const procesos = data.filter(d => d.ARTICULADOR === nome);
  const sucessos = procesos.filter(d => { const s = String(d['STATUS DA ANÁLISE'] || '').trim().toLowerCase(); return s === 'protocolado' || s === 'concluído' || s === 'concluido'; });

  return (
    <div className={`p-6 md:p-8 ${thick} ${theme.cardBg} flex flex-col gap-6 relative animate-in fade-in zoom-in-95 duration-200 min-h-[60vh]`}>
      <button onClick={onClose} className="absolute top-4 right-4 md:top-6 md:right-6 text-2xl font-black hover:scale-110 transition-transform">X</button>
      <div className="pr-10 border-b-[6px] border-current pb-4 flex items-center gap-4">
        <div className="w-16 h-16 border-[4px] border-current bg-white text-black flex items-center justify-center font-black text-3xl uppercase">{nome.charAt(0)}</div>
        <div><span className="block text-[0.8em] uppercase font-black opacity-60 tracking-widest">Dossiê Articulador</span><h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none">{nome}</h2></div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className={`p-6 ${thick} flex flex-col items-center justify-center text-center`} style={{ backgroundColor: COLORS.mustard, color: 'black' }}><span className="text-5xl font-black leading-none">{procesos.length}</span><span className="text-[0.7em] uppercase font-black tracking-widest mt-2">Processos Assumidos</span></div>
        <div className={`p-6 ${thick} flex flex-col items-center justify-center text-center`} style={{ backgroundColor: COLORS.cyan, color: 'black' }}><span className="text-5xl font-black leading-none">{sucessos.length}</span><span className="text-[0.7em] uppercase font-black tracking-widest mt-2">Sucessos (Protoc./Concl.)</span></div>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        <span className="block text-[0.9em] uppercase font-black tracking-widest border-b-[4px] border-current pb-2 mb-2">Entidades Sob Guarda</span>
        {procesos.map((p, i) => (
          <div key={i} onClick={() => onEntidadeClick(p)} className={`p-4 border-[3px] border-current flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:-translate-y-1 hover:shadow-[4px_4px_0px_currentColor] transition-all ${theme.bg}`}>
            <div><h3 className="font-black uppercase text-lg leading-tight">{p.ENTIDADE}</h3><span className="font-bold opacity-70 text-[0.8em]">{p['DATA DA SOLICITAÇÃO']}</span></div>
            <div className="mt-3 md:mt-0 px-3 py-1 font-black uppercase text-[0.7em] tracking-widest w-max" style={{ backgroundColor: getStatusColor(p['STATUS DA ANÁLISE']) || 'black', color: getTextColorForStatus(getStatusColor(p['STATUS DA ANÁLISE'])) || 'white' }}>{p['STATUS DA ANÁLISE'] || 'Pendente'}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FormNovoPedido({ onClose, theme, thick, fetchFromWebhooks, equipeOptions, webhookUrl, accentColor, cycleAccent, requireAuth, showAlert }) {
  const [formData, setFormData] = useState({ ENTIDADE: '', LIDERANÇA: '', ARTICULADOR: '', EMAIL: '', TELEFONE: '', OBSERVAÇÕES: '', 'DOCUMENTOS NO DRIVE': '' });
  const [docs, setDocs] = useState({});
  const [sending, setSending] = useState(false);
  const [successMode, setSuccessMode] = useState(false);
  const [busca, setBusca] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [isManualOpen, setIsManualOpen] = useState(false);

  const handleFocus = (fieldName) => { setFocusedField(fieldName); if(cycleAccent) cycleAccent(); };
  const toggleDoc = (key) => setDocs(prev => ({...prev, [key]: !prev[key]}));

  const handleSubmit = async (e) => {
    e.preventDefault();
    requireAuth(async () => {
      if (!webhookUrl) { showAlert("Erro de Sistema: Webhook Central Ausente (Vercel ENV)."); return; }
      if (!formData.ENTIDADE.trim()) { showAlert("O nome da entidade é obrigatório."); return; }

      setSending(true);
      try {
        const payload = {
          "action": "add",
          "ENTIDADE": formData.ENTIDADE, "LIDERANÇA": formData.LIDERANÇA, "TELEFONE": formData.TELEFONE, "EMAIL": formData.EMAIL,
          "ARTICULADOR": formData.ARTICULADOR, "DATA DA SOLICITAÇÃO": new Date().toLocaleDateString('pt-BR'),
          "MANUAL/MODELOS ENVIADOS": "FALSE",
          "1 ATA DE FUNDAÇÃO": docs['1 ATA DE FUNDAÇÃO'] ? "TRUE" : "FALSE", "2 ATA DE ELEIÇÃO/POSSE": docs['2 ATA DE ELEIÇÃO/POSSE'] ? "TRUE" : "FALSE", "3 CNPJ": docs['3 CNPJ'] ? "TRUE" : "FALSE", "4 DECLARAÇÃO NÃO OSCIP": docs['4 DECLARAÇÃO NÃO OSCIP'] ? "TRUE" : "FALSE", "5 DECLARAÇÃO FUNCIONAMENTO": docs['5 DECLARAÇÃO FUNCIONAMENTO'] ? "TRUE" : "FALSE", "6 - 7 DECLARAÇÃO REMUNERAÇÃO": docs['6 - 7 DECLARAÇÃO REMUNERAÇÃO'] ? "TRUE" : "FALSE", "8 ESTATUTO": docs['8 ESTATUTO'] ? "TRUE" : "FALSE", "9 RELATÓRIO DE ATIVIDADES": docs['9 RELATÓRIO DE ATIVIDADES'] ? "TRUE" : "FALSE",
          "STATUS DA ANÁLISE": "Aguardando Documentos", "DATA DO ENVIO ALESC": "", "Nº DO PROCESSO ALESC": "",
          "ESTÁGIO ATUAL": "", "OBSERVAÇÕES": formData.OBSERVAÇÕES, "LINK": "", "DOCUMENTOS NO DRIVE": formData['DOCUMENTOS NO DRIVE'],
          "ÚLTIMA ATUALIZAÇÃO": `Processo criado em ${new Date().toLocaleDateString('pt-BR')}`
        };

        await fetch(webhookUrl, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify(payload) });
        await fetchFromWebhooks();
        setSuccessMode(true); 
      } catch (error) { console.error(error); showAlert("Erro ao comunicar com o Arquivo Central."); } finally { setSending(false); }
    });
  };

  const filteredEquipe = equipeOptions.filter(nome => nome.toLowerCase().includes(busca.toLowerCase()));

  if (successMode) {
    return (
      <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in zoom-in duration-300">
        <div className={`w-full max-w-lg p-8 flex flex-col gap-6 text-center ${thick} ${theme.cardBg} shadow-[8px_8px_0px_currentColor] border-[3px]`} style={{ borderColor: COLORS.cyan }}><CheckCircle2 className="w-20 h-20 mx-auto text-cyan" /><h2 className="text-2xl font-black uppercase tracking-widest">Processo Registrado!</h2><p className="font-bold opacity-80 leading-relaxed text-sm">Os dados da entidade foram inseridos com sucesso no sistema.</p><button onClick={onClose} className="mt-4 p-4 border-[4px] border-current font-black uppercase tracking-widest hover:-translate-y-1 transition-transform">Concluir e Voltar</button></div>
      </div>
    );
  }

  return (
    <>
    {isManualOpen && <ManualModal onClose={() => setIsManualOpen(false)} theme={theme} thick={thick} />}
    <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className={`w-full max-w-3xl p-6 md:p-8 flex flex-col gap-6 ${thick} ${theme.cardBg} shadow-[8px_8px_0px_rgba(0,0,0,0.3)] relative overflow-y-auto max-h-[90vh]`}>
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl font-black hover:scale-110 transition-transform z-10">X</button>
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b-[4px] border-current pb-2 pr-8 gap-4"><h2 className="text-2xl font-black uppercase tracking-widest">Abertura de Processo</h2><button type="button" onClick={() => {setIsManualOpen(true); cycleAccent();}} className="flex items-center gap-2 px-3 py-2 bg-white text-black font-black uppercase tracking-widest text-[10px] hover:-translate-y-1 transition-transform shadow-[2px_2px_0px_currentColor]"><BookOpen size={16} /> Consultar Manual de Requisitos</button></div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className={`p-4 border-[3px] border-current ${theme.bg} flex flex-col gap-4`}>
            <h3 className="font-black uppercase tracking-widest text-[12px] opacity-70 mb-2 border-b-[2px] border-current pb-1">1. Metadados Essenciais</h3>
            <div className="flex flex-col gap-1"><label className="font-black uppercase tracking-widest text-[10px]">Nome da Entidade *</label><input type="text" required value={formData.ENTIDADE} onChange={e => setFormData({...formData, ENTIDADE: e.target.value})} onFocus={() => handleFocus('ENTIDADE')} onBlur={() => setFocusedField(null)} className={`p-3 border-[3px] outline-none font-bold transition-colors duration-300 ${theme.inputBg}`} style={{ borderColor: focusedField === 'ENTIDADE' ? accentColor : 'currentcolor' }} placeholder="Ex: Associação de Moradores..." /></div>
            <div className="flex flex-col gap-1"><label className="font-black uppercase tracking-widest text-[10px]">Liderança / Presidente</label><input type="text" value={formData.LIDERANÇA} onChange={e => setFormData({...formData, LIDERANÇA: e.target.value})} onFocus={() => handleFocus('LIDERANÇA')} onBlur={() => setFocusedField(null)} className={`p-3 border-[3px] outline-none font-bold transition-colors duration-300 ${theme.inputBg}`} style={{ borderColor: focusedField === 'LIDERANÇA' ? accentColor : 'currentcolor' }} placeholder="Nome do líder..." /></div>
            <div className="flex flex-col gap-1 relative"><label className="font-black uppercase tracking-widest text-[10px]">Articulador Responsável</label><div className="relative"><input type="text" value={busca} onChange={e => { setBusca(e.target.value); setFormData({...formData, ARTICULADOR: e.target.value}); setShowDropdown(true); }} onFocus={() => {setShowDropdown(true); handleFocus('ARTICULADOR');}} onBlur={() => setTimeout(()=>setFocusedField(null), 200)} className={`w-full p-3 border-[3px] outline-none font-bold pr-10 transition-colors duration-300 ${theme.inputBg}`} style={{ borderColor: focusedField === 'ARTICULADOR' ? accentColor : 'currentcolor' }} placeholder="Busque ou digite o nome..." /><SearchIcon className="absolute right-3 top-3 opacity-50" /></div>
              {showDropdown && (
                <div className={`absolute top-full left-0 right-0 mt-1 border-[3px] z-10 max-h-40 overflow-y-auto ${theme.cardBg}`} style={{ borderColor: accentColor }}>
                  {filteredEquipe.map((nome, idx) => (<div key={idx} onClick={() => { setFormData({...formData, ARTICULADOR: nome}); setBusca(nome); setShowDropdown(false); }} className={`p-2 font-bold cursor-pointer hover:bg-white/10 transition-colors border-b border-current opacity-60 hover:opacity-100`}>{nome}</div>))}
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1"><label className="font-black uppercase tracking-widest text-[10px]">E-mail de Contato</label><input type="email" value={formData.EMAIL} onChange={e => setFormData({...formData, EMAIL: e.target.value})} onFocus={() => handleFocus('EMAIL')} onBlur={() => setFocusedField(null)} className={`p-3 border-[3px] outline-none font-bold transition-colors duration-300 ${theme.inputBg}`} style={{ borderColor: focusedField === 'EMAIL' ? accentColor : 'currentcolor' }} /></div>
              <div className="flex flex-col gap-1"><label className="font-black uppercase tracking-widest text-[10px]">Telefone</label><input type="text" value={formData.TELEFONE} onChange={e => setFormData({...formData, TELEFONE: e.target.value})} onFocus={() => handleFocus('TELEFONE')} onBlur={() => setFocusedField(null)} className={`p-3 border-[3px] outline-none font-bold transition-colors duration-300 ${theme.inputBg}`} style={{ borderColor: focusedField === 'TELEFONE' ? accentColor : 'currentcolor' }} /></div>
            </div>
            <div className="flex flex-col gap-1"><label className="font-black uppercase tracking-widest text-[10px]">Documentos no Drive (Link da Pasta)</label><input type="url" value={formData['DOCUMENTOS NO DRIVE']} onChange={e => setFormData({...formData, 'DOCUMENTOS NO DRIVE': e.target.value})} onFocus={() => handleFocus('DRIVE')} onBlur={() => setFocusedField(null)} className={`p-3 border-[3px] outline-none font-bold transition-colors duration-300 ${theme.inputBg}`} style={{ borderColor: focusedField === 'DRIVE' ? accentColor : 'currentcolor' }} placeholder="https://drive.google.com/..." /></div>
            <div className="flex flex-col gap-1"><label className="font-black uppercase tracking-widest text-[10px]">Observações</label><textarea rows="2" value={formData.OBSERVAÇÕES} onChange={e => setFormData({...formData, OBSERVAÇÕES: e.target.value})} onFocus={() => handleFocus('OBSERVAÇÕES')} onBlur={() => setFocusedField(null)} className={`p-3 border-[3px] outline-none font-bold resize-none transition-colors duration-300 ${theme.inputBg}`} style={{ borderColor: focusedField === 'OBSERVAÇÕES' ? accentColor : 'currentcolor' }} /></div>
            <div className="flex flex-col gap-2 mt-2">
              <a href={`mailto:${EMAIL_CENTRAL}?subject=${encodeURIComponent(`Pedido de Utilidade Pública de ${formData.ENTIDADE || '[NOME DA ENTIDADE]'}`)}`} className={`p-4 border-[3px] border-current flex items-center justify-center gap-3 font-black uppercase tracking-widest text-[0.8em] transition-transform hover:-translate-y-1 bg-white text-black hover-cyan`}><Mail size={18} /> Enviar Documentos por E-mail</a>
              <span className="block text-[0.8em] uppercase font-black tracking-widest mb-2 border-b-[4px] border-current pb-1 mt-4">Checklist de Documentos</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {DOCS_KEYS.map((key, idx) => {
                  const displayLabel = key === '6 - 7 DECLARAÇÃO REMUNERAÇÃO' ? '6 OU 7 DEC. REMUNERAÇÃO' : key;
                  return (
                    <div key={idx} className={`p-2 border-[2px] border-current flex items-center gap-3 transition-colors ${docs[key] ? 'bg-white/10' : 'bg-transparent'}`}>
                      <input type="checkbox" id={`doc-${idx}`} checked={!!docs[key]} onChange={() => toggleDoc(key)} className="w-5 h-5 cursor-pointer accent-current" style={{ accentColor: accentColor }} />
                      <label htmlFor={`doc-${idx}`} className="font-black uppercase tracking-widest text-[9px] cursor-pointer flex-1 truncate">{displayLabel}</label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <button type="submit" disabled={sending} className={`p-5 font-black uppercase tracking-widest text-lg border-[4px] border-current transition-all shadow-[6px_6px_0px_currentColor] flex items-center justify-center gap-3 ${sending ? 'opacity-50 shadow-none translate-y-1 translate-x-1' : 'active:shadow-none active:translate-y-1 active:translate-x-1'}`} style={{ backgroundColor: accentColor, color: getTextColorForStatus(accentColor) }}><Lock size={20}/> {sending ? 'Salvando...' : 'Desbloquear e Salvar Ficha Oficial'}</button>
        </form>
      </div>
      {showDropdown && <div className="fixed inset-0 z-0" onClick={() => setShowDropdown(false)}></div>}
    </div>
    </>
  );
}

function NavButton({ active, onClick, icon, label, accentColor }) {
  const activeStyle = active ? { borderColor: accentColor, boxShadow: `0 4px 0 ${accentColor}`, backgroundColor: 'white', color: 'black', transform: 'scale(1.05)', zIndex: 10 } : { borderColor: 'rgba(255,255,255,0.3)' };
  const activeClass = active ? '' : 'hover:border-current opacity-80 hover:opacity-100 hover:scale-[1.02]';
  return <button onClick={onClick} className={`flex-1 md:flex-none flex items-center justify-center gap-3 px-6 py-4 font-bold uppercase tracking-wider border-[4px] transition-all duration-200 cursor-pointer ${activeClass}`} style={{ fontSize: '1.05em', minWidth: '150px', ...activeStyle }}>{icon} <span>{label}</span></button>;
}
