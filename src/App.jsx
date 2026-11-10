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
const SearchIcon = (p) => <Icon {...p} path={<><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></>} />;
const Trash2 = (p) => <Icon {...p} path={<><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></>} />;
const Mail = (p) => <Icon {...p} path={<><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></>} />;
const FileText = (p) => <Icon {...p} path={<><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></>} />;
const BookOpen = (p) => <Icon {...p} path={<><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></>} />;
const Edit2 = (p) => <Icon {...p} path={<><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></>} />;
const ExternalLink = (p) => <Icon {...p} path={<><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></>} />;
const Lock = (p) => <Icon {...p} path={<><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>} />;
const Save = (p) => <Icon {...p} path={<><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></>} />;
const Bell = (p) => <Icon {...p} path={<><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></>} />;
const ChevronDown = (p) => <Icon {...p} path={<polyline points="6 9 12 15 18 9"/>} />;
const Unlock = (p) => <Icon {...p} path={<><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></>} />;

const MondrianSpinner = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className="animate-spin mb-4">
    <path d="M 50 10 A 40 40 0 0 1 84.6 30" fill="none" stroke="#00b7eb" strokeWidth="10" strokeLinecap="round" />
    <path d="M 88.6 42 A 40 40 0 0 1 63.6 87.5" fill="none" stroke="#FFDB58" strokeWidth="10" strokeLinecap="round" />
    <path d="M 47.5 90 A 40 40 0 0 1 12 55" fill="none" stroke="#DC143C" strokeWidth="10" strokeLinecap="round" />
  </svg>
);

const COLORS = {
  mustard: '#FFDB58', 
  cyan: '#00b7eb',    
  crimson: '#DC143C', 
  white: '#FFFFFF', 
  black: '#000000'
};

let safeWebhookUrl = "";
try { safeWebhookUrl = import.meta.env.VITE_WEBHOOK_URL; } catch (e) {}

const DEFAULT_WEBHOOK_UTILIDADE = safeWebhookUrl || ""; 
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


// ============================================================
// AVISOS / CONTATO COM ENTIDADE
// ============================================================
const COL_CONTATO = 'ÚLTIMO CONTATO COM ENTIDADE';
const ORANGE = '#FF8A1F';
const CONTATO_SUGESTOES = ['Relatório de atividades', 'Novos documentos', 'Atualização do andamento', 'Resposta à diligência', 'Primeiro contato'];
const DOCS_SHORT = {
  '1 ATA DE FUNDAÇÃO': 'Ata de fundação', '2 ATA DE ELEIÇÃO/POSSE': 'Ata de eleição/posse', '3 CNPJ': 'CNPJ',
  '4 DECLARAÇÃO NÃO OSCIP': 'Decl. não OSCIP', '5 DECLARAÇÃO FUNCIONAMENTO': 'Decl. funcionamento',
  '6 - 7 DECLARAÇÃO REMUNERAÇÃO': 'Decl. remuneração', '8 ESTATUTO': 'Estatuto', '9 RELATÓRIO DE ATIVIDADES': 'Relatório de atividades'
};

const norm = (v) => String(v || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
const isConcluido = (item) => norm(item['STATUS DA ANÁLISE']).includes('conclu');
const isDiligencia = (item) => !isConcluido(item) && norm(item['ESTÁGIO ATUAL']).includes('diligenc');
const isTrue = (v) => String(v || '').toUpperCase() === 'TRUE';
const missingDocs = (item) => DOCS_KEYS.filter(k => !isTrue(item[k]));

const pad2 = (n) => String(n).padStart(2, '0');
const formatBR = (d) => `${pad2(d.getDate())}/${pad2(d.getMonth() + 1)}/${d.getFullYear()}`;
const todayInputValue = () => { const d = new Date(); return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`; };

const parseBRDate = (str) => {
  const m = String(str || '').match(/(\d{1,2})\/(\d{1,2})\/(\d{2,4})/);
  if (!m) return null;
  let y = parseInt(m[3], 10); if (y < 100) y += 2000;
  const d = new Date(y, parseInt(m[2], 10) - 1, parseInt(m[1], 10));
  return isNaN(d.getTime()) ? null : d;
};

const daysSince = (date) => {
  const now = new Date();
  const a = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const b = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return Math.max(0, Math.round((a - b) / 86400000));
};

// Lê "DD/MM/AAAA | o que foi pedido" (ou só a data) da coluna X
const parseContato = (item) => {
  const raw = String(item[COL_CONTATO] || '').trim();
  if (!raw) return null;
  const date = parseBRDate(raw);
  if (!date) return { date: null, days: null, texto: raw, level: 0 };
  const texto = raw.replace(/^\s*\d{1,2}\/\d{1,2}\/\d{2,4}\s*[|\-–—:]?\s*/, '').trim();
  const days = daysSince(date);
  return { date, days, texto, level: contatoLevel(days) };
};

// 0 = em dia | 1 = +1 semana | 2 = +15 dias | 3 = +1 mês (urgente)
const contatoLevel = (days) => (days >= 30 ? 3 : days >= 15 ? 2 : days >= 7 ? 1 : 0);
const LEVEL_INFO = {
  0: { label: 'EM DIA', bg: COLORS.white, fg: COLORS.black, border: COLORS.black },
  1: { label: '+1 SEMANA', bg: COLORS.mustard, fg: COLORS.black, border: COLORS.black },
  2: { label: '+15 DIAS', bg: ORANGE, fg: COLORS.black, border: COLORS.black },
  3: { label: 'URGENTE · +1 MÊS', bg: COLORS.crimson, fg: COLORS.white, border: COLORS.black }
};
const daysLabel = (d) => (d === 0 ? 'hoje' : d === 1 ? 'há 1 dia' : `há ${d} dias`);

const computeAlerts = (data) => {
  const ativos = data.filter(d => !isConcluido(d));
  const withContato = ativos.map(item => ({ item, contato: parseContato(item) }));

  const diligencias = withContato.filter(x => isDiligencia(x.item))
    .sort((a, b) => (b.contato?.days ?? 9999) - (a.contato?.days ?? 9999));

  const contatos = withContato.filter(x => x.contato && x.contato.level > 0)
    .sort((a, b) => b.contato.days - a.contato.days);

  const documentos = withContato.map(x => ({ ...x, faltam: missingDocs(x.item) })).filter(x => x.faltam.length > 0)
    .sort((a, b) => a.faltam.length - b.faltam.length);

  const lacunas = withContato.map(x => {
    const it = x.item; const gaps = [];
    if (!String(it.ARTICULADOR || '').trim()) gaps.push('Sem articulador');
    if (!String(it.EMAIL || '').trim() && !String(it.TELEFONE || '').trim()) gaps.push('Sem e-mail nem telefone');
    if (!String(it['DOCUMENTOS NO DRIVE'] || '').trim()) gaps.push('Sem pasta no Drive');
    if (!isTrue(it['MANUAL/MODELOS ENVIADOS']) && norm(it['STATUS DA ANÁLISE']).includes('aguardando')) gaps.push('Manual/modelos não enviados');
    if (norm(it['STATUS DA ANÁLISE']) === 'protocolado' && !String(it['Nº DO PROCESSO ALESC'] || '').trim()) gaps.push('Protocolado sem nº do processo');
    if (norm(it['STATUS DA ANÁLISE']) === 'protocolado' && !String(it['LINK'] || '').trim()) gaps.push('Sem link da ALESC');
    if ((isDiligencia(it) || norm(it['STATUS DA ANÁLISE']).includes('aguardando')) && !x.contato) gaps.push('Pendência sem contato registrado');
    return { ...x, gaps };
  }).filter(x => x.gaps.length > 0);

  return { diligencias, contatos, documentos, lacunas };
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

function EditableField({ value, onSave, multiline = false, textClass = "", accentColor, cycleAccent, isUnlocked, requireAuth }) {
  const [editing, setEditing] = useState(false);
  const [val, setVal] = useState(value || '');
  let pressTimer;

  const handleSave = () => { 
    setEditing(false); 
    if (val !== value) onSave(val); 
  };
  
  const handleKeyDown = (e) => { 
    if (e.key === 'Enter' && !multiline) handleSave(); 
    if (e.key === 'Escape') { setVal(value); setEditing(false); } 
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    requireAuth(() => { setEditing(true); if (cycleAccent) cycleAccent(); });
  };

  const startPress = () => {
    pressTimer = setTimeout(() => { requireAuth(() => { setEditing(true); if (cycleAccent) cycleAccent(); }); }, 500); 
  };
  
  const endPress = () => clearTimeout(pressTimer);

  if (editing) {
    return multiline ? (
      <textarea autoFocus value={val} onChange={e => setVal(e.target.value)} onBlur={handleSave} onKeyDown={handleKeyDown} 
        className={`w-full p-2 border outline-none resize-y transition-colors duration-300 bg-white text-black`} 
        style={{ borderColor: accentColor }} rows={4} 
      />
    ) : (
      <input autoFocus type="text" value={val} onChange={e => setVal(e.target.value)} onBlur={handleSave} onKeyDown={handleKeyDown} 
        className={`w-full p-1 border-b outline-none transition-colors duration-300 bg-transparent text-black`} 
        style={{ borderColor: accentColor }} 
      />
    );
  }

  return (
    <div className="group relative cursor-pointer flex-1 flex items-center min-h-[24px] w-full" 
      onTouchStart={startPress} onTouchEnd={endPress} onMouseDown={startPress} onMouseUp={endPress} onMouseLeave={endPress} 
      title={isUnlocked ? "Clique no ícone ou segure para editar" : "Desbloqueie para editar"}
    >
       <span className={textClass}>{value || '-'}</span>
       <button onClick={handleEditClick} className={`absolute -right-5 top-0 opacity-0 group-hover:opacity-100 p-1 rounded-sm shadow-md transition-opacity ${isUnlocked ? 'bg-black text-white' : 'theme-crimson'}`}>
         {isUnlocked ? <Edit2 size={12} /> : <Lock size={12} />}
       </button>
    </div>
  );
}

function EditableSelect({ value, options, onSave, textClass = "", accentColor, cycleAccent, isUnlocked, requireAuth }) {
  const [editing, setEditing] = useState(false);
  const handleEditClick = (e) => { e.stopPropagation(); requireAuth(() => { setEditing(true); if (cycleAccent) cycleAccent(); }); };

  if (editing) {
    return (
      <select autoFocus value={value || ''} onChange={e => { setEditing(false); if(e.target.value !== value) onSave(e.target.value); }} onBlur={() => setEditing(false)} 
        className={`p-1 border outline-none transition-colors duration-300 bg-white text-black`} style={{ borderColor: accentColor }}
      >
        <option value="">Selecione...</option>
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    );
  }

  return (
    <div className="group relative cursor-pointer flex items-center w-max" 
      onDoubleClick={() => requireAuth(() => { setEditing(true); if(cycleAccent) cycleAccent(); })} 
      onTouchStart={(e) => { e.target.pressTimer = setTimeout(()=> requireAuth(() => { setEditing(true); if(cycleAccent) cycleAccent(); }), 500); }} 
      onTouchEnd={(e) => clearTimeout(e.target.pressTimer)}
    >
       <span className={textClass}>{value || '-'}</span>
       <button onClick={handleEditClick} className={`opacity-0 group-hover:opacity-100 p-1 ml-1 rounded-sm shadow-md transition-opacity ${isUnlocked ? 'bg-black text-white' : 'theme-crimson'}`}>
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

  const webhookUtilidade = DEFAULT_WEBHOOK_UTILIDADE; 
  const EMERGENCY_PHRASE = "Nada resiste ao bem e ao amor.";
  const [masterPassword, setMasterPassword] = useState(() => localStorage.getItem('tabulum_master_pwd') || 'admin');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);

  const [syncStatus, setSyncStatus] = useState('');
  const [activeFicha, setActiveFicha] = useState(null);
  const [activeArticulador, setActiveArticulador] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(null);

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

  useEffect(() => { localStorage.setItem('tabulum_master_pwd', masterPassword); }, [masterPassword]);

  useEffect(() => { fetchFromWebhooks(); }, []);

  const fetchFromWebhooks = async () => {
    setLoading(true); 
    setSyncStatus('Sincronizando Banco Central...');
    const noCache = `t=${new Date().getTime()}`;
    if (!webhookUtilidade) {
      setSyncStatus('⚠️ URL de Utilidade Pública não configurada (VITE_WEBHOOK_URL).');
      setLoading(false);
      return;
    }
    try {
      const urlUtilidade = webhookUtilidade + (webhookUtilidade.includes('?') ? '&' : '?') + noCache;
      const response = await fetch(urlUtilidade, { method: 'GET', redirect: 'follow' });
      const text = await response.text();
      if (text.toLowerCase().includes('<!doctype html>') || text.toLowerCase().includes('<html')) throw new Error('Retornou página HTML. Verifique permissões como "Qualquer pessoa".');

      let parsedData = [];
      try {
        const jsonData = JSON.parse(text);
        parsedData = Array.isArray(jsonData) ? jsonData : (jsonData.data || jsonData.rows || []);
      } catch(e) { parsedData = parseCSV(text); }

      if (Array.isArray(parsedData) && parsedData.length > 0) {
        const formattedData = parsedData.filter(item => item && item.ENTIDADE && String(item.ENTIDADE).trim() !== '')
          .map(item => {
            let newItem = {};
            for (let key in item) {
              let val = item[key];
              if (typeof val === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(val)) val = new Date(val).toLocaleDateString('pt-BR');
              newItem[key] = val;
            }
            return newItem;
          });
        setData(formattedData);
        setSyncStatus('Sincronizado!');
        setTimeout(() => setSyncStatus(''), 5000);
      } else throw new Error('Nenhum registro válido encontrado.');
    } catch (error) { 
      console.error(error); 
      setSyncStatus(`⚠️ Sincronização: ${error.message}`);
    } finally { setLoading(false); }
  };

  const deleteItem = (entidadeName) => {
    if (!webhookUtilidade) return;
    showConfirm(`Arquivista, confirma a exclusão definitiva do processo de: ${entidadeName}?`, async () => {
      setSyncStatus('Apagando registro no banco de dados...');
      try {
        await fetch(webhookUtilidade, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify({ action: 'delete', ENTIDADE: entidadeName }) });
        setData(prevData => prevData.filter(d => d.ENTIDADE !== entidadeName));
        setActiveFicha(null); setView('kanban'); setSyncStatus('Registro apagado.');
      } catch (error) { console.error(error); } 
      finally { setTimeout(() => setSyncStatus(''), 3000); }
    });
  };

  const handleUpdateEntity = async (originalName, updatedFields) => {
    setData(prev => prev.map(d => d.ENTIDADE === originalName ? { ...d, ...updatedFields } : d));
    setActiveFicha(prev => prev && prev.ENTIDADE === originalName ? { ...prev, ...updatedFields } : prev);
    if (webhookUtilidade) {
      try { await fetch(webhookUtilidade, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify({ action: 'update', ENTIDADE_ORIGINAL: originalName, newData: updatedFields }) }); } 
      catch (error) { console.error("Erro ao atualizar", error); }
    }
  };

  const themeConfig = { bg: 'bg-[#f4f4f0]', text: 'text-gray-900', border: 'border-black/25', cardBg: 'bg-white', inputBg: 'bg-gray-100' };
  const bThick = `border border-black/20 rounded-xl`; 
  const bMedium = `border border-black/15 rounded-lg`;
  const alerts = computeAlerts(data);
  const urgentes = alerts.contatos.filter(x => x.contato.level === 3).length;
  const goToEntity = (item) => { setOpenAlert(null); setIsFormOpen(false); setActiveArticulador(null); handleEntityClick(item); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  useEffect(() => { const h = (e) => { if (e.key === 'Escape') setOpenAlert(null); }; window.addEventListener('keydown', h); return () => window.removeEventListener('keydown', h); }, []);
  const articuladoresUnicos = Array.from(new Set(data.map(d => String(d.ARTICULADOR || '').trim()).filter(Boolean)));

  const mondrianStyles = `
    button, input, select, textarea { border-radius: 8px; }
    .font-black { font-weight: 700 !important; }
    .tracking-widest { letter-spacing: 0.05em !important; }
    ::-webkit-scrollbar { width: 8px; height: 8px; } ::-webkit-scrollbar-thumb { background: rgba(0,0,0,.2); border-radius: 8px; }
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
    <div className={`h-screen overflow-hidden font-sans ${themeConfig.bg} ${themeConfig.text} text-[13px] transition-colors duration-300 flex flex-col`}>
      <style>{mondrianStyles}{`@keyframes tabPulse { 0%,100% { box-shadow: 0 0 0 0 rgba(220,20,60,.7); } 50% { box-shadow: 0 0 0 7px rgba(220,20,60,0); } } .tab-pulse { animation: tabPulse 1.6s infinite; }`}</style>
      <header className="flex-shrink-0 flex items-center gap-3 px-3 md:px-4 py-2 bg-white border-b border-black/10">
        <div onClick={() => {setView('kanban'); setActiveFicha(null); setActiveArticulador(null); setIsFormOpen(false); cycleAccent();}} className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-2.5" title="Ir para o Kanban">
          <img src="https://raw.githubusercontent.com/killuixo/tabulum-sig/refs/heads/main/icon-192.png" alt="TABULUM" className="w-9 h-9 object-contain" style={{ mixBlendMode: 'multiply' }} />
          <div className="leading-none">
            <h1 className="font-bold uppercase tracking-[0.22em] text-lg">TABULUM</h1>
            <span className="hidden sm:block text-[9px] uppercase opacity-50 tracking-wider mt-0.5">Gestão de Utilidade Pública</span>
          </div>
        </div>
        <nav className="flex items-center gap-2 ml-2 md:ml-6">
          <NavButton active={view === 'kanban' && !isFormOpen} onClick={() => {setView('kanban'); setActiveFicha(null); setActiveArticulador(null); setIsFormOpen(false); cycleAccent();}} icon={<Kanban />} label="Kanban" accentColor={accentColor} />
          <NavButton active={view === 'dashboard' && !isFormOpen} onClick={() => {setView('dashboard'); setActiveFicha(null); setActiveArticulador(null); setIsFormOpen(false); cycleAccent();}} icon={<LayoutDashboard />} label="Dashboard" accentColor={accentColor} />
          <button onClick={() => requireAuth(() => { setIsFormOpen(true); cycleAccent(); })} className="flex items-center gap-1.5 px-3 py-1.5 font-bold uppercase tracking-wider text-[0.8em] border-2 transition-all" style={isFormOpen ? { backgroundColor: '#000', color: '#fff', borderColor: '#000', boxShadow: `inset 0 -3px 0 ${accentColor}` } : { backgroundColor: accentColor, color: getTextColorForStatus(accentColor), borderColor: accentColor }} title="Adicionar Novo Pedido">
            <span className="text-base leading-none">+</span> Novo
          </button>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          {syncStatus && <span className="hidden md:block text-[0.7em] font-bold opacity-60">{syncStatus}</span>}
          <button onClick={() => isUnlocked ? setIsUnlocked(false) : requireAuth()} className={`p-2 transition-all opacity-60 hover:opacity-100 ${isUnlocked ? 'text-cyan' : 'text-current'}`} title={isUnlocked ? "Sessão Desbloqueada" : "Sessão Bloqueada"}>
            {isUnlocked ? <Unlock size={18} /> : <Lock size={18} />}
          </button>
          <div className="hidden md:flex gap-1 items-center">
            <div className="w-3.5 h-3.5" style={{ backgroundColor: COLORS.cyan }}></div><div className="w-3.5 h-3.5" style={{ backgroundColor: COLORS.mustard }}></div><div className="w-3.5 h-3.5" style={{ backgroundColor: COLORS.crimson }}></div>
          </div>
        </div>
      </header>
      {!loading && data.length > 0 && (
        <AlertBar alerts={alerts} urgentes={urgentes} openAlert={openAlert} setOpenAlert={setOpenAlert} onItemClick={goToEntity} />
      )}

      <main className="p-3 md:p-4 flex-1 min-h-0 flex flex-col relative overflow-y-auto">
        {loading ? (
          <div className="flex-1 flex flex-col items-center justify-center">
            <MondrianSpinner size={48} />
            <p className="font-black uppercase tracking-widest animate-pulse text-center leading-relaxed" style={{ color: (syncStatus.includes('Erro') || syncStatus.includes('⚠️')) ? COLORS.crimson : 'inherit' }}>
              {syncStatus.split('<br/>').map((line, i) => <React.Fragment key={i}>{line}{i < syncStatus.split('<br/>').length - 1 ? <br/> : ''}</React.Fragment>)}
            </p>
          </div>
        ) : (
          <>
            {isFormOpen && <FormNovoPedido onClose={() => setIsFormOpen(false)} theme={themeConfig} thick={bThick} fetchFromWebhooks={() => fetchFromWebhooks()} equipeOptions={articuladoresUnicos} webhookUtilidade={webhookUtilidade} accentColor={accentColor} cycleAccent={cycleAccent} requireAuth={requireAuth} showAlert={showAlert} setActiveFicha={(ficha) => {setActiveFicha(ficha); setView('entity_details'); setIsFormOpen(false);}} data={data} />}
            {!isFormOpen && view === 'entity_details' && activeFicha && <FichaEntidade item={activeFicha} equipeOptions={articuladoresUnicos} onClose={() => {setActiveFicha(null); setView('kanban'); cycleAccent();}} onArticuladorClick={handleArticulatorClick} onDelete={() => deleteItem(activeFicha.ENTIDADE)} onUpdate={(fields) => handleUpdateEntity(activeFicha.ENTIDADE, fields)} theme={themeConfig} thick={bThick} accentColor={accentColor} cycleAccent={cycleAccent} isUnlocked={isUnlocked} requireAuth={requireAuth} />}
            {!isFormOpen && view === 'articulator_details' && activeArticulador && <PainelArticulador nome={activeArticulador} data={data} onClose={() => {setActiveArticulador(null); setView('kanban'); cycleAccent();}} onEntidadeClick={handleEntityClick} theme={themeConfig} thick={bThick} />}
            {!isFormOpen && view === 'kanban' && <KanbanView data={data} theme={themeConfig} thick={bThick} med={bMedium} onEntityClick={handleEntityClick} onArticulatorClick={handleArticulatorClick} />}
            {!isFormOpen && view === 'dashboard' && <DashboardView data={data} theme={themeConfig} thick={bThick} onEntityClick={handleEntityClick} onArticulatorClick={handleArticulatorClick} />}
          </>
        )}
      </main>

      {authModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in zoom-in duration-200">
           <div className={`w-full max-w-sm p-6 flex flex-col gap-4 ${bThick} bg-white shadow-lg border-[1.5px]`} style={{ borderColor: accentColor }}>
              <div className="flex items-center gap-3 border-b border-black/25 pb-2">
                 <Lock size={24} className="text-crimson" />
                 <h2 className="text-xl font-black uppercase tracking-widest text-crimson">Acesso Restrito</h2>
              </div>
              <p className="text-sm font-bold opacity-80 leading-relaxed text-black">
                 Insira a senha mestra para habilitar edições.
              </p>
              <input type="password" autoFocus placeholder="Senha..." className={`w-full p-3 border-[1.5px] outline-none font-bold transition-colors duration-300 bg-gray-100 text-black`} style={{ borderColor: 'rgba(0,0,0,.25)' }}
                 onKeyDown={(e) => { if (e.key === 'Enter') { const val = e.target.value; if (val === masterPassword || val.trim().toLowerCase() === EMERGENCY_PHRASE.toLowerCase()) { setIsUnlocked(true); setAuthModalOpen(false); if (pendingAction) pendingAction(); } else { showAlert('Senha Incorreta.'); } } }} id="auth_pwd_input"
              />
              <div className="flex gap-2 mt-2">
                 <button onClick={() => { const val = document.getElementById('auth_pwd_input').value; if (val === masterPassword || val.trim().toLowerCase() === EMERGENCY_PHRASE.toLowerCase()) { setIsUnlocked(true); setAuthModalOpen(false); if (pendingAction) pendingAction(); } else { showAlert('Senha Incorreta.'); } }} className="flex-1 p-3 bg-black text-white font-black uppercase tracking-widest text-[0.8em] border-[1.5px] border-black/25 hover:-translate-y-1 transition-transform">Desbloquear</button>
                 <button onClick={() => { setAuthModalOpen(false); setPendingAction(null); }} className="flex-1 p-3 bg-transparent text-black font-black uppercase tracking-widest text-[0.8em] border-[1.5px] border-black/25 hover:-translate-y-1 transition-transform hover-crimson">Cancelar</button>
              </div>
           </div>
        </div>
      )}

      {dialog.isOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in zoom-in duration-200">
          <div className={`w-full max-w-sm p-6 flex flex-col gap-4 border-2 bg-white shadow-lg`} style={{ borderColor: dialog.type === 'confirm' ? COLORS.mustard : COLORS.crimson }}>
            <div className="flex items-center gap-3 border-b border-black/25 pb-2">
              <AlertCircle size={24} className={dialog.type === 'confirm' ? "text-mustard" : "text-crimson"} />
              <h2 className={`text-xl font-black uppercase tracking-widest ${dialog.type === 'confirm' ? 'text-mustard' : 'text-crimson'}`}>{dialog.type === 'confirm' ? 'Atenção' : 'Aviso'}</h2>
            </div>
            <p className="text-sm font-bold opacity-90 leading-relaxed whitespace-pre-wrap text-black">{dialog.message}</p>
            <div className="flex gap-2 mt-2">
              {dialog.type === 'confirm' && <button onClick={() => { setDialog({ isOpen: false }); dialog.onConfirm(); }} className="flex-1 p-3 bg-black text-white font-black uppercase tracking-widest text-[0.8em] border-[1.5px] border-black/25 hover:-translate-y-1 transition-transform">Confirmar</button>}
              <button onClick={() => setDialog({ isOpen: false })} className="flex-1 p-3 bg-transparent text-black font-black uppercase tracking-widest text-[0.8em] border-[1.5px] border-black/25 hover:-translate-y-1 transition-transform hover-crimson">{dialog.type === 'confirm' ? 'Cancelar' : 'OK'}</button>
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
  const concluidoData = data.filter(d => String(d['STATUS DA ANÁLISE'] || '').trim().toLowerCase().includes('concluído') || String(d['STATUS DA ANÁLISE'] || '').trim().toLowerCase().includes('concluido'));

  const renderConcluidoCard = (item, i) => {
    return (
      <div key={i} onClick={() => onEntityClick(item)} className={`p-3 md:p-4 ${med} hover:-translate-y-1 hover:shadow-lg transition-all cursor-pointer bg-white text-black border-[1.5px] border-black/25 flex flex-col gap-2`}>
        <div className="flex justify-between items-start gap-2 border-b border-black/25 pb-2">
          <h3 className="font-black uppercase leading-tight text-sm">{item.ENTIDADE || 'Sem Nome'}</h3>
        </div>
        <div className="flex justify-between items-center mt-1">
          <div className="flex flex-col">
            <span className="text-[0.65em] uppercase font-black opacity-60 tracking-widest">Articulador</span>
            <span onClick={(e) => { e.stopPropagation(); onArticulatorClick(item.ARTICULADOR); }} className="font-bold hover:underline decoration-2 underline-offset-4 cursor-pointer text-xs">{item.ARTICULADOR || '-'}</span>
          </div>
          <div className="text-right">
            <span className="text-[0.65em] uppercase font-black opacity-60 tracking-widest block">Aprovação</span>
            <span className="font-bold text-[0.8em]">
              {item['ÚLTIMA ATUALIZAÇÃO'] ? item['ÚLTIMA ATUALIZAÇÃO'].replace(/[^0-9/]/g, '').trim() || item['DATA DA SOLICITAÇÃO'] : item['DATA DA SOLICITAÇÃO'] || '-'}
            </span>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between">
           <span className="px-2 py-1 bg-black text-white font-black uppercase tracking-widest text-[0.65em]">LEI APROVADA</span>
           {item['LINK DA LEI'] && (
             <a href={item['LINK DA LEI']} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[0.7em] font-black uppercase tracking-widest text-cyan hover:underline transition-all" onClick={e => e.stopPropagation()}>
               <ExternalLink size={14} /> Abrir Lei
             </a>
           )}
        </div>
      </div>
    );
  };

  const renderCard = (item, i, colColor) => {
    let hasCount = 0;
    const cardContato = parseContato(item);
    const cardDilig = isDiligencia(item);
    const itemProgressBoxes = DOCS_KEYS.map(key => { const hasDoc = (String(item[key] || '').toUpperCase() === 'TRUE'); if (hasDoc) hasCount++; return { key, has: hasDoc }; });

    return (
      <div key={i} onClick={() => onEntityClick(item)} className={`p-3 ${med} hover:shadow-md transition-all cursor-pointer bg-white text-black overflow-hidden flex-shrink-0`} style={{ borderLeft: `5px solid ${colColor || '#111'}`, ...((cardContato && cardContato.level === 3) ? { boxShadow: `0 0 0 2px ${COLORS.crimson}` } : {}) }}>
        {cardDilig && <div className="-mx-3 -mt-3 mb-2 px-3 py-1 theme-crimson font-black uppercase tracking-widest text-[0.65em] flex items-center gap-2"><AlertCircle size={13} /> Diligência em aberto</div>}
        <h3 className="font-bold mb-2 leading-snug" style={{ fontSize: '1.02em' }}>{item.ENTIDADE || 'Sem Nome'}</h3>
        <div className="flex justify-between items-end gap-2">
          <div className="flex flex-col">
            <span className="text-[0.65em] uppercase font-black opacity-60 tracking-widest">Articulador</span>
            <span onClick={(e) => { e.stopPropagation(); onArticulatorClick(item.ARTICULADOR); }} className={`font-bold hover:underline decoration-2 underline-offset-4 cursor-pointer`} style={{ textDecorationColor: colColor || 'rgba(0,0,0,.25)' }}>{item.ARTICULADOR || '-'}</span>
          </div>
          <div className="text-right">
            <span className="text-[0.65em] uppercase font-black opacity-60 tracking-widest block">Data</span>
            <span className="font-bold text-[0.9em]">{item['DATA DA SOLICITAÇÃO'] || '-'}</span>
          </div>
        </div>

        {(item['LINK']) && (
          <a href={item['LINK']} target="_blank" rel="noopener noreferrer" className="mt-3 flex w-max items-center gap-1 text-[0.7em] font-black uppercase tracking-widest opacity-80 hover:opacity-100 hover:underline transition-all" style={{ color: colColor || 'rgba(0,0,0,.25)' }} onClick={e => e.stopPropagation()}>
            <ExternalLink size={14} /> Acompanhar tramitação
          </a>
        )}

        {cardContato ? (
          <div className="mt-3"><ContatoTag contato={cardContato} /></div>
        ) : (cardDilig || norm(item['STATUS DA ANÁLISE']).includes('aguardando')) && (
          <div className="mt-3 inline-block px-2 py-1 border border-dashed border-black/25 font-black uppercase tracking-wider text-[0.6em] opacity-60">Sem contato registrado</div>
        )}

        <div className="mt-4 flex gap-1 h-3">
          {itemProgressBoxes.map((box, bIdx) => <div key={bIdx} title={box.key} className={`flex-1 transition-colors duration-500 ${box.has ? 'border border-black/25' : 'bg-transparent border-[1px] border-black/25 opacity-20'}`} style={box.has ? { backgroundColor: getProgressColor(hasCount) } : {}} /> )}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-3 flex-1 min-h-0">
      <div className={`flex-shrink-0 rounded-lg border transition-colors duration-300 overflow-hidden ${isConcluidoOpen ? 'bg-white' : 'bg-transparent'} ${theme.border}`}>
        <button onClick={() => setIsConcluidoOpen(!isConcluidoOpen)} className={`w-full px-3 py-2 font-bold uppercase tracking-wider flex items-center justify-between transition-colors ${isConcluidoOpen ? 'bg-black text-white' : 'opacity-60 hover:opacity-100 hover:bg-black/5'}`}>
          <div className="flex items-center gap-3"><CheckCircle2 size={18} /><span className="text-sm md:text-base">Processos Concluídos ({concluidoData.length})</span></div>
          <span className="text-2xl leading-none font-mono">{isConcluidoOpen ? '−' : '+'}</span>
        </button>
        {isConcluidoOpen && (
          <div className="p-4 bg-black/5 border-t border-black/25">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[50vh] overflow-y-auto pr-2">
               {concluidoData.map((item, i) => renderConcluidoCard(item, i))}
               {concluidoData.length === 0 && <div className="col-span-full text-center opacity-40 p-6 border-[1.5px] border-dashed border-black/25 font-black uppercase tracking-widest text-[0.8em]">Nenhum processo concluído</div>}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-3 flex-1 min-h-0 items-stretch">
        {activeColumns.map((col) => {
          const isCollapsed = collapsedCols[col.id];
          const colData = getColData(col.id);
          const headerTextColor = getTextColorForStatus(col.color) || 'black';
          return (
            <div key={col.id} className={`flex flex-col min-h-[280px] md:min-h-0 overflow-hidden transition-all duration-300 ${isCollapsed ? 'w-16 md:w-20' : 'flex-1 min-w-0'} ${thick} bg-white`}>
              <div onClick={() => toggleCol(col.id)} className={`px-3 py-2 font-bold flex items-center gap-2 uppercase tracking-wider cursor-pointer flex-shrink-0 transition-colors ${theme.border}`} style={{ backgroundColor: col.color, color: headerTextColor }}>
                {isCollapsed ? (
                  <div className="flex flex-col items-center w-full gap-4 py-4">
                    {col.icon}<span className="writing-vertical-lr rotate-180 tracking-widest">{col.label}</span><span className="bg-black text-white px-2 py-0.5 rounded-full mt-auto text-[0.8em]">{colData.length}</span>
                  </div>
                ) : (
                  <>{col.icon}<span className="truncate">{col.label}</span><span className="ml-auto bg-black text-white px-2 py-0.5 rounded-full text-[0.8em]">{colData.length}</span></>
                )}
              </div>
              {!isCollapsed && (
                <div className="p-2.5 flex flex-col gap-2.5 overflow-y-auto flex-1 min-h-0 bg-[#f4f4f0]">
                  {colData.map((item, i) => renderCard(item, i, col.color))}
                  {colData.length === 0 && <div className="text-center opacity-40 p-6 border-[1.5px] border-dashed border-black/25 font-black uppercase tracking-widest text-[0.8em]">Vazio</div>}
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
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 content-start">
      <div className={`lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4`}>
        <div className={`p-4 ${thick} bg-white flex flex-col justify-between`} style={{ borderTopColor: 'currentcolor', borderTopWidth: '8px' }}>
          <span className="font-black uppercase tracking-widest opacity-70 text-[0.8em]">Total</span><span className="text-3xl font-bold mt-1">{total}</span>
        </div>
        <div className={`p-4 ${thick} bg-white flex flex-col justify-between`} style={{ borderTopColor: COLORS.mustard, borderTopWidth: '8px' }}>
          <span className="font-black uppercase tracking-widest opacity-70 text-[0.8em]">Análise</span><span className="text-3xl font-bold mt-1">{emAnalise}</span>
        </div>
        <div className={`p-4 ${thick} bg-white flex flex-col justify-between`} style={{ borderTopColor: COLORS.cyan, borderTopWidth: '8px' }}>
          <span className="font-black uppercase tracking-widest opacity-70 text-[0.8em]">ALESC</span><span className="text-3xl font-bold mt-1">{protocolados}</span>
        </div>
        <div className={`p-4 ${thick} bg-white flex flex-col justify-between`} style={{ borderTopColor: COLORS.black, borderTopWidth: '8px' }}>
          <span className="font-black uppercase tracking-widest opacity-70 text-[0.8em]">Concluído</span><span className="text-3xl font-bold mt-1">{concluidos}</span>
        </div>
      </div>
      <div className={`lg:col-span-1 p-4 ${thick} bg-white flex flex-col`}>
        <h2 className="font-black uppercase tracking-widest border-b border-black/25 pb-2 mb-4 text-[0.9em]">Visão Geral</h2>
        <div className="flex-1 flex flex-col justify-end gap-2 h-40">
          <div className="flex items-end gap-1 h-full">
            <div className="w-1/4 flex flex-col items-center gap-1 h-full justify-end"><div className="w-full transition-all duration-500" style={{ height: `${(aguardando/total)*100 || 0}%`, backgroundColor: COLORS.crimson, border: '3px solid currentcolor' }}></div><span className="text-[9px] uppercase font-black tracking-widest text-center mt-1">Doc</span></div>
            <div className="w-1/4 flex flex-col items-center gap-1 h-full justify-end"><div className="w-full transition-all duration-500" style={{ height: `${(emAnalise/total)*100 || 0}%`, backgroundColor: COLORS.mustard, border: '3px solid currentcolor' }}></div><span className="text-[9px] uppercase font-black tracking-widest text-center mt-1">Anál</span></div>
            <div className="w-1/4 flex flex-col items-center gap-1 h-full justify-end"><div className="w-full transition-all duration-500" style={{ height: `${(protocolados/total)*100 || 0}%`, backgroundColor: COLORS.cyan, border: '3px solid currentcolor' }}></div><span className="text-[9px] uppercase font-black tracking-widest text-center mt-1">Prot</span></div>
            <div className="w-1/4 flex flex-col items-center gap-1 h-full justify-end"><div className="w-full transition-all duration-500" style={{ height: `${(concluidos/total)*100 || 0}%`, backgroundColor: COLORS.black, border: '3px solid currentcolor' }}></div><span className="text-[9px] uppercase font-black tracking-widest text-center mt-1">Fim</span></div>
          </div>
        </div>
      </div>
      <div className={`lg:col-span-4 mt-4 ${thick} bg-white overflow-x-auto max-h-[48vh]`}>
        <table className="w-full text-left border-collapse min-w-[760px]">
          <thead className="sticky top-0 z-10 bg-white">
            <tr className={`border-b-2 ${theme.border} uppercase font-black tracking-widest text-[0.8em]`}>
              <th className="px-3 py-2 border-r border-black/25">Entidade</th><th className="px-3 py-2 border-r border-black/25">Articulador</th><th className="px-3 py-2 border-r border-black/25">Status</th><th className="px-3 py-2 border-r border-black/25">Último contato</th><th className="px-3 py-2">Solicitação</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className={`border-b ${theme.border} hover:bg-gray-200 transition-colors`}>
                <td className="px-3 py-2 border-r border-black/25 font-bold cursor-pointer hover:underline decoration-2" onClick={() => onEntityClick(row)}>{row.ENTIDADE}</td>
                <td className="px-3 py-2 border-r border-black/25 font-bold opacity-80 cursor-pointer hover:underline decoration-2" onClick={() => onArticulatorClick(row.ARTICULADOR)}>{row.ARTICULADOR}</td>
                <td className="px-3 py-2 border-r border-black/25"><span className="px-2 py-1 font-black uppercase text-[0.75em] tracking-widest" style={{ backgroundColor: getStatusColor(row['STATUS DA ANÁLISE']) || 'black', color: getTextColorForStatus(getStatusColor(row['STATUS DA ANÁLISE'])) || 'black' }}>{row['STATUS DA ANÁLISE'] || '-'}</span></td>
                <td className="px-3 py-2 border-r border-black/25">{isConcluido(row) ? <span className="opacity-40 font-bold">-</span> : (parseContato(row) ? <ContatoTag contato={parseContato(row)} compact /> : <span className="opacity-40 font-bold">-</span>)}</td>
                <td className="px-3 py-2 font-bold opacity-80">{row['DATA DA SOLICITAÇÃO'] || '-'}</td>
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
  const [saveLabel, setSaveLabel] = useState('SALVAR');
  const [activeTooltip, setActiveTooltip] = useState(null);
  const statusColor = getStatusColor(item['STATUS DA ANÁLISE']);
  let pressTimer;

  const handleManualSave = () => {
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    setSaveLabel('SALVANDO...');
    setTimeout(() => { setSaveLabel('SALVAR'); }, 1500);
  };

  const toggleDoc = (docKey) => {
    const currentVal = String(item[docKey] || '').toUpperCase() === 'TRUE';
    const newDocsState = { ...item, [docKey]: currentVal ? 'FALSE' : 'TRUE' };
    let countTrue = 0;
    DOCS_KEYS.forEach(k => { if(String(newDocsState[k]).toUpperCase() === 'TRUE') countTrue++; });
    
    let newStatus = newDocsState['STATUS DA ANÁLISE'] || 'Aguardando Documentos';
    if (countTrue === 8 && newStatus.toLowerCase().includes('aguardando')) newStatus = 'Em análise';
    else if (countTrue < 8 && newStatus.toLowerCase().includes('análise')) newStatus = 'Aguardando Documentos';

    onUpdate({ [docKey]: newDocsState[docKey], 'STATUS DA ANÁLISE': newStatus, 'ÚLTIMA ATUALIZAÇÃO': `Checklist atualizado em ${new Date().toLocaleDateString('pt-BR')}` });
  };

  const handleTouchStart = (key) => { pressTimer = setTimeout(() => setActiveTooltip(key), 400); };
  const handleTouchEnd = () => { clearTimeout(pressTimer); setActiveTooltip(null); };

  const docsCount = DOCS_KEYS.filter(k => String(item[k] || '').toUpperCase() === 'TRUE').length;
  const checkGlobalColor = getProgressColor(docsCount);

  const ef = { accentColor, cycleAccent, isUnlocked, requireAuth };
  const t = (v) => v || '-';
  return (
    <div className="flex-1 min-h-0 flex flex-col bg-white rounded-xl border border-black/15 shadow-sm overflow-hidden animate-in fade-in duration-200">
      {/* TOPO FIXO: título, status e botão SALVAR sempre visíveis */}
      <div className="flex-shrink-0 flex items-center gap-3 px-4 py-2.5 border-b border-black/10 bg-white" style={{ boxShadow: `inset 0 -3px 0 ${statusColor || '#ddd'}` }}>
        <button onClick={onClose} className="px-2.5 py-1.5 border border-black/20 font-bold text-[0.8em] hover:bg-black hover:text-white transition-colors flex-shrink-0" title="Voltar ao Kanban">← Voltar</button>
        <div className="min-w-0 flex-1">
          <h2 className="text-lg md:text-xl font-bold leading-tight break-words">
            <EditableField value={item.ENTIDADE} onSave={(val) => onUpdate({ ENTIDADE: val })} {...ef} />
          </h2>
          <div className="flex flex-wrap items-center gap-1.5 mt-1">
            <span className="px-2 py-0.5 rounded-full font-bold uppercase tracking-wider text-[0.65em]" style={{ backgroundColor: statusColor || '#eee', color: getTextColorForStatus(statusColor) || 'black' }}>{item['STATUS DA ANÁLISE'] || 'Aguardando Documentos'}</span>
            <span className="px-2 py-0.5 rounded-full bg-[#f4f4f0] font-bold text-[0.65em] opacity-80">Solicitado em {item['DATA DA SOLICITAÇÃO'] || '-'}</span>
            {item['LINK'] && <a href={item['LINK']} target="_blank" rel="noopener noreferrer" className="px-2 py-0.5 rounded-full bg-[#f4f4f0] font-bold text-[0.65em] hover:underline flex items-center gap-1"><ExternalLink size={11}/> Processo ALESC</a>}
          </div>
        </div>
        <button onClick={() => requireAuth(onDelete)} className="p-2 border border-black/20 opacity-60 hover:opacity-100 hover-crimson transition-all flex-shrink-0" title="Apagar registro">{isUnlocked ? <Trash2 size={16} /> : <Lock size={16} />}</button>
        <button onClick={() => requireAuth(handleManualSave)} className="flex items-center gap-2 px-5 py-2 font-bold uppercase tracking-wider text-[0.8em] bg-black text-white hover:bg-gray-800 shadow-md transition-all flex-shrink-0" style={saveLabel !== 'SALVAR' ? { backgroundColor: COLORS.cyan, color: '#000' } : {}}>
          {isUnlocked ? <Save size={15} /> : <Lock size={15} />} {saveLabel === 'SALVAR' ? 'Salvar' : 'Salvo ✓'}
        </button>
        <button onClick={onClose} className="text-xl font-bold px-1 hover:scale-110 transition-transform flex-shrink-0" title="Fechar">✕</button>
      </div>

      {/* CORPO: 3 colunas, rola por dentro */}
      <div className="flex-1 min-h-0 overflow-y-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-4 items-start content-start bg-[#fafaf8]">
        <div className="flex flex-col gap-3">
          <ContatoBloco item={item} onUpdate={onUpdate} isUnlocked={isUnlocked} requireAuth={requireAuth} />
        </div>

        <div className="flex flex-col gap-3">
          <FieldBox label="Articulador">
            <EditableSelect value={item.ARTICULADOR} options={equipeOptions} onSave={(val) => onUpdate({ ARTICULADOR: val })} textClass="text-base font-bold hover:underline cursor-pointer" {...ef} />
          </FieldBox>
          <div className="grid grid-cols-2 gap-3">
            <FieldBox label="Liderança"><EditableField value={item.LIDERANÇA} onSave={(val) => onUpdate({ LIDERANÇA: val })} textClass="font-bold break-words max-w-full" {...ef} /></FieldBox>
            <FieldBox label="Telefone"><EditableField value={item.TELEFONE} onSave={(val) => onUpdate({ TELEFONE: val })} textClass="font-bold break-words max-w-full" {...ef} /></FieldBox>
            <FieldBox label="E-mail" span><EditableField value={item.EMAIL} onSave={(val) => onUpdate({ EMAIL: val })} textClass="font-bold break-all max-w-full" {...ef} /></FieldBox>
          </div>
          <FieldBox label="Observações"><EditableField value={item.OBSERVAÇÕES} onSave={(val) => onUpdate({ OBSERVAÇÕES: val })} multiline textClass="font-medium whitespace-pre-wrap leading-relaxed max-w-full" {...ef} /></FieldBox>
          <div className="rounded-xl bg-white border border-black/10 overflow-hidden">
            <div className="px-3 py-1.5 font-bold uppercase tracking-wider text-[0.65em]" style={{ backgroundColor: statusColor || '#eee', color: getTextColorForStatus(statusColor) || 'black' }}>Trâmite ALESC (sincronizado)</div>
            <div className="p-3 grid grid-cols-2 gap-x-3 gap-y-2">
              <div><span className="block text-[10px] uppercase font-bold opacity-50 tracking-wider">Data de envio</span><span className="font-bold">{t(item['DATA DO ENVIO ALESC'])}</span></div>
              <div><span className="block text-[10px] uppercase font-bold opacity-50 tracking-wider">Processo</span><span className="font-bold">{t(item['Nº DO PROCESSO ALESC'])}</span></div>
              <div className="col-span-2"><span className="block text-[10px] uppercase font-bold opacity-50 tracking-wider">Estágio</span><span className="font-bold">{t(item['ESTÁGIO ATUAL'])}</span></div>
              <div className="col-span-2"><span className="block text-[10px] uppercase font-bold opacity-50 tracking-wider">Última atualização</span><span className="italic opacity-80">{t(item['ÚLTIMA ATUALIZAÇÃO'])}</span></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <a href={`mailto:${EMAIL_CENTRAL}?subject=${encodeURIComponent(`Pedido de Utilidade Pública de ${item.ENTIDADE}`)}`} className="px-3 py-2.5 flex items-center justify-center gap-2 font-bold uppercase tracking-wider text-[0.7em] bg-black text-white hover-cyan transition-colors"><Mail size={14} /> Enviar docs</a>
            {item['DOCUMENTOS NO DRIVE'] ? <a href={item['DOCUMENTOS NO DRIVE']} target="_blank" rel="noopener noreferrer" className="px-3 py-2.5 flex items-center justify-center gap-2 font-bold uppercase tracking-wider text-[0.7em] border border-black/30 hover:bg-black hover:text-white transition-colors"><ExternalLink size={14} /> Pasta no Drive</a> : <div className="px-3 py-2.5 flex items-center justify-center font-bold uppercase tracking-wider text-[0.7em] border border-dashed border-black/30 opacity-50">Sem pasta</div>}
          </div>
          <FieldBox label="Link da pasta no Drive"><EditableField value={item['DOCUMENTOS NO DRIVE']} onSave={(val) => onUpdate({ 'DOCUMENTOS NO DRIVE': val })} textClass="text-[0.8em] break-all max-w-full opacity-80" {...ef} /></FieldBox>
          <div className="rounded-xl bg-white border border-black/10 p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold uppercase tracking-wider text-[0.7em]">Checklist de documentos</span>
              <span className="px-2 py-0.5 rounded-full font-bold text-[0.7em]" style={{ backgroundColor: checkGlobalColor || '#eee', color: getTextColorForStatus(checkGlobalColor) || '#000' }}>{docsCount}/8</span>
            </div>
            {DOCS_KEYS.map((key, idx) => {
              const hasDoc = String(item[key] || '').toUpperCase() === 'TRUE';
              const displayLabel = key === '6 - 7 DECLARAÇÃO REMUNERAÇÃO' ? '6 OU 7 DEC. REMUNERAÇÃO' : key;
              return (
                <div key={idx} className="group relative flex items-center gap-2.5 py-1.5 border-b border-black/10 last:border-0 cursor-pointer hover:bg-black/5 transition-colors" title={isUnlocked ? "" : "Desbloqueie para marcar os documentos"} onMouseEnter={() => setActiveTooltip(key)} onMouseLeave={() => setActiveTooltip(null)} onTouchStart={() => handleTouchStart(key)} onTouchEnd={handleTouchEnd} onTouchCancel={handleTouchEnd}>
                  <div onClick={(e) => { e.stopPropagation(); requireAuth(() => toggleDoc(key)); }} className="w-5 h-5 flex-shrink-0 rounded border-[1.5px] border-black/50 flex items-center justify-center" style={{ backgroundColor: hasDoc ? (checkGlobalColor || COLORS.cyan) : 'transparent' }}>
                    {hasDoc && <CheckCircle2 size={13} className="text-white mix-blend-difference" />}
                  </div>
                  <span onClick={(e) => { e.stopPropagation(); requireAuth(() => toggleDoc(key)); }} className={`font-semibold text-[0.82em] flex-1 ${hasDoc ? '' : 'opacity-50 group-hover:opacity-80'}`}>{displayLabel}</span>
                  {!isUnlocked && <Lock size={11} className="opacity-30 group-hover:opacity-100 text-crimson" />}
                  {activeTooltip === key && (
                    <div className="absolute bottom-full mb-1 right-0 z-50 w-[260px] p-3 text-xs leading-relaxed rounded-lg border border-black/20 shadow-xl bg-white text-black pointer-events-none">
                      <span className="font-bold uppercase block mb-1 opacity-60 text-[9px] border-b border-black/20 pb-1">Exigências</span>{DOCS_REQUIREMENTS[key]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {isManualOpen && <ManualModal onClose={() => setIsManualOpen(false)} theme={theme} thick={thick} />}
    </div>
  );
}

function FieldBox({ label, children, span = false }) {
  return (
    <div className={`px-3 py-2 rounded-xl bg-white border border-black/10 flex flex-col items-start ${span ? 'col-span-2' : ''}`}>
      <span className="block text-[10px] uppercase font-bold opacity-50 tracking-wider mb-0.5">{label}</span>
      {children}
    </div>
  );
}

function ManualModal({ onClose, theme, thick }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className={`w-full max-w-4xl p-6 md:p-8 flex flex-col gap-6 ${thick} bg-white shadow-lg relative max-h-[95vh] overflow-hidden`}>
        <button onClick={onClose} className="absolute top-4 right-4 text-xl font-black hover:scale-110 transition-transform border-[1.5px] border-black/25 w-10 h-10 flex items-center justify-center">X</button>
        
        <div className="border-b border-black/25 pb-4 pr-12 flex-shrink-0">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest flex items-center gap-3"><BookOpen size={28} /> Diretrizes e Requisitos</h2>
          <p className="font-bold opacity-60 uppercase tracking-widest text-[0.7em] mt-2">Reconhecimento de Utilidade Pública Estadual</p>
        </div>

        <div className="overflow-y-auto pr-4 space-y-6 flex-1 text-sm font-medium leading-relaxed text-black">
          <section className="space-y-3 opacity-90">
            <p>O reconhecimento do Título de Utilidade Pública Estadual é regido pela <b>Lei nº 18.269/2021</b>. Os documentos previstos no art. 3º devem ser encaminhados ao gabinete parlamentar para análise técnica.</p>
            <p><b>Fluxo de Trabalho:</b> A Articulação coleta a documentação e envia à Assessoria responsável pela auditoria preliminar. É vedado o envio direto ao setor jurídico da ALESC. Caberá à Assessoria notificar a Articulação sobre pendências, devendo esta realizar a cobrança junto à entidade requerente.</p>
            <p><b>Admissibilidade:</b> Autoriza-se o protocolo de processos que apresentem vícios sanáveis em Declarações ou Relatórios. Contudo, é expressamente obrigatório que a Ata de Fundação, Ata de Posse e o Estatuto Social estejam sem incorreções e devidamente registrados em cartório no ato do protocolo.</p>
          </section>
          <div>
            <h3 className="text-base font-black uppercase border-b border-black/25 pb-2 mb-4">Checklist Documental Exigido</h3>
            <div className="space-y-4">
              <div className="pb-3 border-b border-current/20"><h4 className="font-bold uppercase tracking-wide mb-1 text-[0.9em]">001 e 002 - Atas de Fundação, Eleição e Posse</h4><p className="opacity-80">Apresentar atas de fundação e da diretoria executiva em exercício. <b>Requisito obrigatório:</b> Registro em Cartório.</p></div>
              <div className="pb-3 border-b border-current/20"><h4 className="font-bold uppercase tracking-wide mb-1 text-[0.9em]">003 - Cadastro Nacional da Pessoa Jurídica (CNPJ)</h4><p className="opacity-80">Documento sem prazo de validade. Exige-se situação cadastral <b>ATIVA</b>, emissão datada e constituição da instituição no Estado de Santa Catarina.</p></div>
              <div className="pb-3 border-b border-current/20"><h4 className="font-bold uppercase tracking-wide mb-1 text-[0.9em]">004 - Declaração de Não Qualificação como OSCIP</h4><p className="opacity-80">Validade máxima de <b>90 dias</b> anteriores ao protocolo. Deve declarar expressamente a não qualificação como OSCIP. Informações obrigatórias: nome completo do presidente, CPF, telefone, e-mail, endereço residencial, além de local, data e assinatura.</p></div>
              <div className="pb-3 border-b border-current/20"><h4 className="font-bold uppercase tracking-wide mb-1 text-[0.9em]">005 - Declaração de Funcionamento Contínuo</h4><p className="opacity-80">Validade máxima de <b>180 dias</b>. Atestar o funcionamento contínuo e regular nos 12 meses imediatamente anteriores. Deve constar: número do CNPJ, endereço da entidade, local, data e assinatura do presidente.</p></div>
              <div className="pb-3 border-b border-current/20"><h4 className="font-bold uppercase tracking-wide mb-1 text-[0.9em]">006 ou 007 - Declaração de Remuneração de Dirigentes</h4><p className="opacity-80 mb-2">Validade máxima de <b>180 dias</b>. A entidade deve emitir declaração específica atestando se remunera ou não os cargos de diretoria e conselho.</p><ul className="list-disc pl-5 opacity-80 space-y-1"><li><b>Dados obrigatórios do declarante:</b> Nome, nacionalidade, estado civil, RG, CPF e endereço completo.</li><li><b>Se remunerada:</b> Especificar os membros remunerados e a data de deliberação. Fundações exigem comprovação de ofício ao Ministério Público.</li></ul></div>
              <div className="pb-3 border-b border-current/20"><h4 className="font-bold uppercase tracking-wide mb-1 text-[0.9em]">008 - Estatuto Social da Entidade</h4><p className="opacity-80"><b>Requisito obrigatório:</b> Registro em Cartório. Para entidades que não remuneram dirigentes, o estatuto deve conter cláusula expressa dessa condição (em conformidade com o inciso X do art. 3º).</p></div>
              <div className="pb-1"><h4 className="font-bold uppercase tracking-wide mb-1 text-[0.9em]">009 - Relatório de Atividades</h4><p className="opacity-80">Validade máxima de <b>180 dias</b> até a data do protocolo. Deve demonstrar o detalhamento de atividades comunitárias, especificadas mês a mês, cobrindo integralmente os 12 meses anteriores. Exige-se data e assinatura responsável.</p></div>
            </div>
          </div>
        </div>
        <div className="border-t border-black/25 pt-4 mt-2 flex-shrink-0">
          <button onClick={onClose} className="w-full p-4 bg-transparent font-black uppercase tracking-widest hover:-translate-y-1 transition-transform border-2 border-black/25 hover:bg-black hover:text-white">Fechar Manual</button>
        </div>
      </div>
    </div>
  );
}

function PainelArticulador({ nome, data, onClose, onEntidadeClick, theme, thick }) {
  const procesos = data.filter(d => d.ARTICULADOR === nome);
  const sucessos = procesos.filter(d => {
    const s = String(d['STATUS DA ANÁLISE'] || '').trim().toLowerCase();
    return s === 'protocolado' || s === 'concluído' || s === 'concluido';
  });

  return (
    <div className={`p-6 md:p-8 ${thick} bg-white flex flex-col gap-6 relative animate-in fade-in zoom-in-95 duration-200 min-h-[60vh]`}>
      <button onClick={onClose} className="absolute top-4 right-4 md:top-6 md:right-6 text-2xl font-black hover:scale-110 transition-transform">X</button>
      
      <div className="pr-10 border-b-2 border-black/25 pb-4 flex items-center gap-4">
        <div className="w-16 h-16 border-2 border-black/25 bg-black text-white flex items-center justify-center font-black text-3xl uppercase">{nome.charAt(0)}</div>
        <div><span className="block text-[0.8em] uppercase font-black opacity-60 tracking-widest">Dossiê Articulador</span><h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none">{nome}</h2></div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className={`p-6 ${thick} flex flex-col items-center justify-center text-center`} style={{ backgroundColor: COLORS.mustard, color: 'black' }}>
          <span className="text-5xl font-black leading-none">{procesos.length}</span><span className="text-[0.7em] uppercase font-black tracking-widest mt-2">Processos Assumidos</span>
        </div>
        <div className={`p-6 ${thick} flex flex-col items-center justify-center text-center`} style={{ backgroundColor: COLORS.cyan, color: 'black' }}>
          <span className="text-5xl font-black leading-none">{sucessos.length}</span><span className="text-[0.7em] uppercase font-black tracking-widest mt-2">Sucessos (Protoc./Concl.)</span>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <span className="block text-[0.9em] uppercase font-black tracking-widest border-b border-black/25 pb-2 mb-2">Entidades Sob Guarda</span>
        {procesos.map((p, i) => (
          <div key={i} onClick={() => onEntidadeClick(p)} className={`p-4 border-[1.5px] border-black/25 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all bg-[#f4f4f0] text-black`}>
            <div>
              <h3 className="font-black uppercase text-lg leading-tight">{p.ENTIDADE}</h3>
              <span className="font-bold opacity-70 text-[0.8em]">{p['DATA DA SOLICITAÇÃO']}</span>
            </div>
            <div className="mt-3 md:mt-0 px-3 py-1 font-black uppercase text-[0.7em] tracking-widest w-max" style={{ backgroundColor: getStatusColor(p['STATUS DA ANÁLISE']) || 'black', color: getTextColorForStatus(getStatusColor(p['STATUS DA ANÁLISE'])) || 'black' }}>
              {p['STATUS DA ANÁLISE'] || 'Pendente'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FormNovoPedido({ onClose, theme, thick, fetchFromWebhooks, equipeOptions, webhookUtilidade, accentColor, cycleAccent, requireAuth, showAlert, setActiveFicha, data }) {
  const [formData, setFormData] = useState({ ENTIDADE: '', LIDERANÇA: '', ARTICULADOR: '', EMAIL: '', TELEFONE: '', OBSERVAÇÕES: '', 'DOCUMENTOS NO DRIVE': '' });
  const [contatoFeito, setContatoFeito] = useState(false);
  const [contatoData, setContatoData] = useState(todayInputValue());
  const [contatoTexto, setContatoTexto] = useState('');
  const [docs, setDocs] = useState({});
  const [sending, setSending] = useState(false);
  const [busca, setBusca] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [isManualOpen, setIsManualOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === 'Escape' && !isManualOpen && !showDropdown) onClose(); };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, isManualOpen, showDropdown]);

  const handleFocus = (fieldName) => { setFocusedField(fieldName); if(cycleAccent) cycleAccent(); };
  const toggleDoc = (key) => setDocs(prev => ({...prev, [key]: !prev[key]}));

  const handleSubmit = async (e) => {
    e.preventDefault();
    requireAuth(async () => {
      if (!webhookUtilidade) { showAlert("Erro de Sistema: Webhook Central Ausente."); return; }
      if (!formData.ENTIDADE.trim()) { showAlert("O nome da entidade é obrigatório."); return; }

      setSending(true);
      try {
        let countTrue = 0;
        DOCS_KEYS.forEach(k => { if(docs[k]) countTrue++; });
        const autoStatus = countTrue === 8 ? "Em análise" : "Aguardando Documentos";

        const payload = {
          "action": "add",
          "ENTIDADE": formData.ENTIDADE, "LIDERANÇA": formData.LIDERANÇA, "TELEFONE": formData.TELEFONE, "EMAIL": formData.EMAIL,
          "ARTICULADOR": formData.ARTICULADOR, "OBSERVAÇÕES": formData.OBSERVAÇÕES, "DOCUMENTOS NO DRIVE": formData['DOCUMENTOS NO DRIVE'],
          "DATA DA SOLICITAÇÃO": new Date().toLocaleDateString('pt-BR'), "STATUS DA ANÁLISE": autoStatus, 
          "DATA DO ENVIO ALESC": "", "Nº DO PROCESSO ALESC": "", "ESTÁGIO ATUAL": "", "LINK": "",
          "ÚLTIMA ATUALIZAÇÃO": `Processo criado em ${new Date().toLocaleDateString('pt-BR')}`
        };
        if (contatoFeito && contatoData) {
          const [cy, cm, cd] = contatoData.split('-');
          payload[COL_CONTATO] = `${cd}/${cm}/${cy} | ${contatoTexto.trim() || 'Contato registrado'}`;
        }
        
        DOCS_KEYS.forEach(k => { payload[k] = docs[k] ? "TRUE" : "FALSE"; });
        await fetch(webhookUtilidade, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify(payload) });
        await fetchFromWebhooks();
        
        const newEntityToOpen = { ...payload };
        setActiveFicha(newEntityToOpen);

      } catch (error) { console.error(error); showAlert("Erro ao comunicar com o Arquivo Central."); } 
      finally { setSending(false); }
    });
  };

  const filteredEquipe = equipeOptions.filter(nome => nome.toLowerCase().includes(busca.toLowerCase()));

  return (
    <>
    {isManualOpen && <ManualModal onClose={() => setIsManualOpen(false)} theme={theme} thick={thick} />}
    <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className={`w-full max-w-3xl p-6 md:p-8 flex flex-col gap-6 ${thick} bg-white shadow-lg relative overflow-y-auto max-h-[90vh]`}>
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl font-black hover:scale-110 transition-transform z-10" title="Pressione ESC para fechar">X</button>
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-black/25 pb-2 pr-8 gap-4">
          <h2 className="text-2xl font-black uppercase tracking-widest">Abertura de Processo</h2>
          <button type="button" onClick={() => {setIsManualOpen(true); cycleAccent();}} className="flex items-center gap-2 px-3 py-2 bg-black text-white font-black uppercase tracking-widest text-[10px] hover:-translate-y-1 transition-transform shadow-lg">
            <BookOpen size={16} /> Consultar Manual de Requisitos
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className={`p-4 border-[1.5px] border-black/25 bg-[#f4f4f0] flex flex-col gap-4`}>
            <h3 className="font-black uppercase tracking-widest text-[12px] opacity-70 mb-2 border-b border-black/25 pb-1">1. Metadados Essenciais</h3>
            <div className="flex flex-col gap-1">
              <label className="font-black uppercase tracking-widest text-[10px]">Nome da Entidade *</label>
              <input type="text" required value={formData.ENTIDADE} onChange={e => setFormData({...formData, ENTIDADE: e.target.value})} onFocus={() => handleFocus('ENTIDADE')} onBlur={() => setFocusedField(null)} className={`p-3 border-[1.5px] outline-none font-bold transition-colors duration-300 bg-white text-black`} style={{ borderColor: focusedField === 'ENTIDADE' ? accentColor : 'rgba(0,0,0,.25)' }} placeholder="Ex: Associação de Moradores..." />
            </div>
            <div className="flex flex-col gap-1 relative">
              <label className="font-black uppercase tracking-widest text-[10px]">Articulador Responsável</label>
              <div className="relative">
                <input type="text" value={busca} onChange={e => { setBusca(e.target.value); setFormData({...formData, ARTICULADOR: e.target.value}); setShowDropdown(true); }} onFocus={() => {setShowDropdown(true); handleFocus('ARTICULADOR');}} onBlur={() => setTimeout(()=>setFocusedField(null), 200)} className={`w-full p-3 border-[1.5px] outline-none font-bold pr-10 transition-colors duration-300 bg-white text-black`} style={{ borderColor: focusedField === 'ARTICULADOR' ? accentColor : 'rgba(0,0,0,.25)' }} placeholder="Busque ou digite o nome..." />
                <SearchIcon className="absolute right-3 top-3 opacity-50" />
              </div>
              {showDropdown && (
                <div className={`absolute top-full left-0 right-0 mt-1 border-[1.5px] z-10 max-h-40 overflow-y-auto bg-white`} style={{ borderColor: accentColor }}>
                  {filteredEquipe.map((nome, idx) => <div key={idx} onClick={() => { setFormData({...formData, ARTICULADOR: nome}); setBusca(nome); setShowDropdown(false); }} className={`p-2 font-bold cursor-pointer hover:bg-black/10 transition-colors border-b border-black/25 opacity-60 hover:opacity-100`}>{nome}</div>)}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-black uppercase tracking-widest text-[10px]">Liderança / Presidente</label>
              <input type="text" value={formData.LIDERANÇA} onChange={e => setFormData({...formData, LIDERANÇA: e.target.value})} onFocus={() => handleFocus('LIDERANÇA')} onBlur={() => setFocusedField(null)} className={`p-3 border-[1.5px] outline-none font-bold transition-colors duration-300 bg-white text-black`} style={{ borderColor: focusedField === 'LIDERANÇA' ? accentColor : 'rgba(0,0,0,.25)' }} placeholder="Nome do líder..." />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-black uppercase tracking-widest text-[10px]">E-mail de Contato</label>
                <input type="email" value={formData.EMAIL} onChange={e => setFormData({...formData, EMAIL: e.target.value})} onFocus={() => handleFocus('EMAIL')} onBlur={() => setFocusedField(null)} className={`p-3 border-[1.5px] outline-none font-bold transition-colors duration-300 bg-white text-black`} style={{ borderColor: focusedField === 'EMAIL' ? accentColor : 'rgba(0,0,0,.25)' }} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-black uppercase tracking-widest text-[10px]">Telefone</label>
                <input type="text" value={formData.TELEFONE} onChange={e => setFormData({...formData, TELEFONE: e.target.value})} onFocus={() => handleFocus('TELEFONE')} onBlur={() => setFocusedField(null)} className={`p-3 border-[1.5px] outline-none font-bold transition-colors duration-300 bg-white text-black`} style={{ borderColor: focusedField === 'TELEFONE' ? accentColor : 'rgba(0,0,0,.25)' }} />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-black uppercase tracking-widest text-[10px]">Documentos no Drive (Link da Pasta)</label>
              <input type="url" value={formData['DOCUMENTOS NO DRIVE']} onChange={e => setFormData({...formData, 'DOCUMENTOS NO DRIVE': e.target.value})} onFocus={() => handleFocus('DRIVE')} onBlur={() => setFocusedField(null)} className={`p-3 border-[1.5px] outline-none font-bold transition-colors duration-300 bg-white text-black`} style={{ borderColor: focusedField === 'DRIVE' ? accentColor : 'rgba(0,0,0,.25)' }} placeholder="https://drive.google.com/..." />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-black uppercase tracking-widest text-[10px]">Observações</label>
              <textarea rows="2" value={formData.OBSERVAÇÕES} onChange={e => setFormData({...formData, OBSERVAÇÕES: e.target.value})} onFocus={() => handleFocus('OBSERVAÇÕES')} onBlur={() => setFocusedField(null)} className={`p-3 border-[1.5px] outline-none font-bold resize-none transition-colors duration-300 bg-white text-black`} style={{ borderColor: focusedField === 'OBSERVAÇÕES' ? accentColor : 'rgba(0,0,0,.25)' }} />
            </div>
            
            <div className="p-3 border-[1.5px] border-black/25 bg-white flex flex-col gap-3">
              <label className="flex items-center gap-3 cursor-pointer font-black uppercase tracking-widest text-[10px]">
                <input type="checkbox" checked={contatoFeito} onChange={e => setContatoFeito(e.target.checked)} className="w-5 h-5" style={{ accentColor: accentColor }} />
                Já entrei em contato com a entidade
              </label>
              {contatoFeito && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <input type="date" value={contatoData} onChange={e => setContatoData(e.target.value)} className="p-3 border-[1.5px] border-black/25 outline-none font-bold bg-white text-black" />
                  <input type="text" value={contatoTexto} onChange={e => setContatoTexto(e.target.value)} placeholder="O que pedi? Ex: ata de eleição e CNPJ" className="md:col-span-2 p-3 border-[1.5px] border-black/25 outline-none font-bold bg-white text-black" />
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <a href={`mailto:${EMAIL_CENTRAL}?subject=${encodeURIComponent(`Pedido de Utilidade Pública de ${formData.ENTIDADE || '[NOME DA ENTIDADE]'}`)}`} className={`p-4 border-[1.5px] border-black/25 flex items-center justify-center gap-3 font-black uppercase tracking-widest text-[0.8em] transition-transform hover:-translate-y-1 bg-black text-white hover-cyan`}>
                <Mail size={18} /> Enviar Documentos por E-mail
              </a>
              <span className="block text-[0.8em] uppercase font-black tracking-widest mb-2 border-b border-black/25 pb-1 mt-4">Checklist de Documentos</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {DOCS_KEYS.map((key, idx) => {
                  const displayLabel = key === '6 - 7 DECLARAÇÃO REMUNERAÇÃO' ? '6 OU 7 DEC. REMUNERAÇÃO' : key;
                  return (
                    <div key={idx} className={`p-2 border border-black/25 flex items-center gap-3 transition-colors ${docs[key] ? 'bg-black/5' : 'bg-transparent'}`}>
                      <input type="checkbox" id={`doc-${idx}`} checked={!!docs[key]} onChange={() => toggleDoc(key)} className="w-5 h-5 cursor-pointer accent-current" style={{ accentColor: accentColor }} />
                      <label htmlFor={`doc-${idx}`} className="font-black uppercase tracking-widest text-[9px] cursor-pointer flex-1 truncate">{displayLabel}</label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <button type="submit" disabled={sending} className={`p-5 font-black uppercase tracking-widest text-lg border-2 border-black/25 transition-all shadow-lg flex items-center justify-center gap-3 ${sending ? 'opacity-50 shadow-none translate-y-1 translate-x-1' : 'active:shadow-none active:translate-y-1 active:translate-x-1'}`} style={{ backgroundColor: accentColor, color: getTextColorForStatus(accentColor) }}>
            <Lock size={20}/> {sending ? 'SALVANDO...' : 'SALVAR'}
          </button>
        </form>
      </div>
      {showDropdown && <div className="fixed inset-0 z-0" onClick={() => setShowDropdown(false)}></div>}
    </div>
    </>
  );
}


function ContatoTag({ contato, compact = false }) {
  if (!contato) return null;
  const info = LEVEL_INFO[contato.level];
  return (
    <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-0.5 px-2 py-1 border font-black uppercase tracking-wider text-[0.65em] leading-tight"
      style={{ backgroundColor: info.bg, color: info.fg, borderColor: info.border }}>
      <Mail size={11} />
      <span>{contato.days === null ? 'Contato' : `Contato ${daysLabel(contato.days)}`}</span>
      {contato.level > 0 && <span className="px-1 bg-black text-white">{info.label}</span>}
      {!compact && contato.texto && <span className="normal-case tracking-normal font-bold opacity-90 basis-full">Pedido: {contato.texto}</span>}
    </span>
  );
}

function AlertBar({ alerts, urgentes, openAlert, setOpenAlert, onItemClick }) {
  const { diligencias, contatos, documentos, lacunas } = alerts;
  const toggle = (id) => setOpenAlert(prev => (prev === id ? null : id));

  const tabs = [
    { id: 'diligencias', label: 'Diligências', count: diligencias.length, bg: COLORS.crimson, fg: COLORS.white, hot: diligencias.length > 0, big: true },
    { id: 'contatos', label: 'Cobranças', count: contatos.length, bg: urgentes > 0 ? COLORS.crimson : contatos.length > 0 ? COLORS.mustard : '#2a2a2a', fg: urgentes > 0 ? COLORS.white : contatos.length > 0 ? COLORS.black : COLORS.white, hot: urgentes > 0, extra: urgentes > 0 ? `${urgentes} urgente${urgentes > 1 ? 's' : ''}` : null },
    { id: 'documentos', label: 'Documentos', count: documentos.length, bg: documentos.length ? COLORS.mustard : '#2a2a2a', fg: documentos.length ? COLORS.black : COLORS.white },
    { id: 'lacunas', label: 'Lacunas', count: lacunas.length, bg: lacunas.length ? COLORS.cyan : '#2a2a2a', fg: lacunas.length ? COLORS.black : COLORS.white }
  ];

  const Row = ({ item, children, right }) => (
    <button onClick={() => onItemClick(item)} className="w-full text-left p-3 border-b border-black/25 hover:bg-black/5 transition-colors flex flex-col gap-1.5">
      <div className="flex items-start justify-between gap-3">
        <span className="font-black uppercase leading-tight text-[0.9em] break-words">{item.ENTIDADE}</span>
        {right}
      </div>
      {children}
    </button>
  );

  const Empty = ({ txt }) => <div className="p-6 text-center font-black uppercase tracking-widest opacity-40 text-[0.8em]">{txt}</div>;
  const Group = ({ title, color, fg = 'black', children }) => (
    <div>
      <div className="px-3 py-1.5 font-black uppercase tracking-widest text-[0.7em] border-b border-black/25" style={{ backgroundColor: color, color: fg }}>{title}</div>
      {children}
    </div>
  );
  const Chip = ({ children, bg = COLORS.black, fg = COLORS.white }) => <span className="px-1.5 py-0.5 font-black uppercase tracking-wider text-[0.62em]" style={{ backgroundColor: bg, color: fg }}>{children}</span>;
  const who = (item) => item.ARTICULADOR ? <span className="text-[0.7em] font-bold opacity-60 uppercase tracking-widest whitespace-nowrap">{item.ARTICULADOR}</span> : null;

  const renderPanel = () => {
    if (openAlert === 'diligencias') {
      if (!diligencias.length) return <Empty txt="Nenhuma diligência em aberto ✓" />;
      return diligencias.map(({ item, contato }) => (
        <Row key={item.ENTIDADE} item={item} right={who(item)}>
          <div className="flex flex-wrap gap-1.5 items-center">
            <Chip bg={COLORS.crimson}>Diligência</Chip>
            {contato ? <ContatoTag contato={contato} /> : <span className="px-2 py-1 border border-dashed border-black/25 font-black uppercase tracking-wider text-[0.65em] text-crimson">Nenhum contato registrado — cobrar entidade</span>}
          </div>
        </Row>
      ));
    }
    if (openAlert === 'contatos') {
      if (!contatos.length) return <Empty txt="Nenhum contato com prazo vencido ✓" />;
      const g = (lvl) => contatos.filter(x => x.contato.level === lvl);
      return (
        <>
          {[[3, 'Urgente · mais de 1 mês sem retorno', COLORS.crimson, 'white'], [2, '15 dias ou mais', ORANGE, 'black'], [1, '1 semana ou mais', COLORS.mustard, 'black']].map(([lvl, title, color, fg]) => g(lvl).length > 0 && (
            <Group key={lvl} title={`${title} (${g(lvl).length})`} color={color} fg={fg}>
              {g(lvl).map(({ item, contato }) => (
                <Row key={item.ENTIDADE} item={item} right={who(item)}>
                  <ContatoTag contato={contato} />
                </Row>
              ))}
            </Group>
          ))}
        </>
      );
    }
    if (openAlert === 'documentos') {
      if (!documentos.length) return <Empty txt="Nenhum documento faltando ✓" />;
      return documentos.map(({ item, faltam, contato }) => (
        <Row key={item.ENTIDADE} item={item} right={<Chip bg={COLORS.mustard} fg="black">{faltam.length} faltando</Chip>}>
          <span className="text-[0.75em] font-bold opacity-80 leading-snug">{faltam.map(k => DOCS_SHORT[k] || k).join(' · ')}</span>
          {contato ? <ContatoTag contato={contato} compact /> : <span className="text-[0.65em] font-black uppercase tracking-wider opacity-50">Sem cobrança registrada</span>}
        </Row>
      ));
    }
    if (openAlert === 'lacunas') {
      if (!lacunas.length) return <Empty txt="Nenhuma lacuna encontrada ✓" />;
      return lacunas.map(({ item, gaps }) => (
        <Row key={item.ENTIDADE} item={item} right={who(item)}>
          <div className="flex flex-wrap gap-1">{gaps.map(gp => <Chip key={gp} bg={COLORS.cyan} fg="black">{gp}</Chip>)}</div>
        </Row>
      ));
    }
    return null;
  };

  const panelTitle = { diligencias: 'Pedidos de diligência em aberto', contatos: 'Cobranças às entidades por prazo', documentos: 'Documentos faltantes', lacunas: 'Outras lacunas e pendências' };

  return (
    <div className="relative z-[120] flex-shrink-0">
      {openAlert && <div className="fixed inset-0 z-[-1]" onClick={() => setOpenAlert(null)} />}
      <div className="bg-[#f4f4f0] border-b border-black/10 flex flex-wrap items-center gap-2 px-3 md:px-4 py-1.5">
        <div className="hidden sm:flex items-center gap-2 pr-2 font-black uppercase tracking-widest text-[0.7em] opacity-70"><Bell size={16} /> Avisos</div>
        {tabs.map(t => (
          <button key={t.id} onClick={() => toggle(t.id)}
            className={`flex items-center gap-2 rounded-full px-3 ${t.big ? 'py-1.5' : 'py-1'} font-bold uppercase tracking-wider text-[0.7em] md:text-[0.75em] border-2 transition-all hover:shadow-md ${t.hot ? 'tab-pulse' : ''}`}
            style={{ backgroundColor: t.bg, color: t.fg, borderColor: openAlert === t.id ? '#111' : t.bg }}>
            <span>{t.label}</span>
            <span className="px-1.5 min-w-[1.6em] text-center rounded-full" style={{ backgroundColor: t.fg, color: t.bg }}>{t.count}</span>
            {t.extra && <span className="hidden md:inline px-1.5 bg-white text-black">{t.extra}</span>}
            <ChevronDown size={12} className={`transition-transform ${openAlert === t.id ? 'rotate-180' : ''}`} />
          </button>
        ))}
      </div>
      {openAlert && (
        <div className="absolute left-2 right-2 md:left-4 md:right-auto md:w-[min(560px,calc(100vw-32px))] mt-1 bg-white text-black border border-black/20 rounded-xl shadow-2xl max-h-[70vh] overflow-y-auto">
          <div className="sticky top-0 z-10 bg-[#111] text-white px-3 py-2 flex items-center justify-between font-black uppercase tracking-widest text-[0.7em]">
            <span>{panelTitle[openAlert]}</span>
            <button onClick={() => setOpenAlert(null)} className="text-base leading-none hover:scale-110 transition-transform">X</button>
          </div>
          {renderPanel()}
        </div>
      )}
    </div>
  );
}

function ContatoBloco({ item, onUpdate, isUnlocked, requireAuth }) {
  const [data, setData] = useState(todayInputValue());
  const [texto, setTexto] = useState('');
  const contato = parseContato(item);
  const diligencia = isDiligencia(item);
  const info = contato ? LEVEL_INFO[contato.level] : null;
  const accent = contato && contato.level > 0 ? info.bg : (diligencia ? COLORS.crimson : '#111');

  const registrar = () => {
    const [y, m, d] = data.split('-');
    if (!y || !m || !d) return;
    const dataBR = `${d}/${m}/${y}`;
    onUpdate({ [COL_CONTATO]: `${dataBR} | ${texto.trim() || 'Contato registrado'}` });
    setTexto('');
  };
  const limpar = () => onUpdate({ [COL_CONTATO]: '' });

  return (
    <div className="border-2 rounded-xl overflow-hidden flex flex-col bg-white" style={{ borderColor: accent }}>
      <div className="px-4 py-2 flex flex-wrap items-center justify-between gap-2 font-black uppercase tracking-widest text-[0.75em]" style={{ backgroundColor: accent, color: contato && contato.level > 0 ? info.fg : '#fff' }}>
        <span className="flex items-center gap-2"><Mail size={16} /> Último contato com a entidade</span>
        {contato && contato.level > 0 && <span className="px-2 bg-black text-white">{info.label}</span>}
      </div>
      <div className="p-3 grid grid-cols-1 gap-3">
        <div className="flex flex-col gap-2">
          {diligencia && <div className="px-3 py-2 theme-crimson font-black uppercase tracking-widest text-[0.7em] flex items-center gap-2"><AlertCircle size={16} /> Requerimento de diligência em aberto</div>}
          {contato ? (
            <>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black leading-none">{contato.days === null ? '—' : contato.days}</span>
                <span className="font-black uppercase tracking-widest text-[0.7em] opacity-70">{contato.days === null ? 'data não reconhecida' : contato.days === 1 ? 'dia sem retorno' : 'dias sem retorno'}</span>
              </div>
              <div className="text-[0.85em] font-bold">{contato.date ? formatBR(contato.date) : ''}</div>
              <div className="p-2 bg-[#f4f4f0] border border-black/25 text-[0.85em] font-bold leading-snug"><span className="block text-[0.7em] uppercase font-black opacity-60 tracking-widest">Pedido feito</span>{contato.texto || '—'}</div>
              <button onClick={() => requireAuth(limpar)} className="self-start flex items-center gap-2 px-3 py-1.5 border border-black/25 font-black uppercase tracking-widest text-[0.65em] opacity-60 hover:opacity-100 hover-cyan transition-all">
                {!isUnlocked && <Lock size={11} />} Entidade respondeu — limpar alerta
              </button>
            </>
          ) : (
            <div className="p-3 border-[1.5px] border-dashed border-black/25 font-black uppercase tracking-widest text-[0.7em] opacity-60">Nenhum contato registrado ainda</div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-black uppercase tracking-widest text-[0.65em] opacity-70">Registrar novo contato</span>
          <input type="date" value={data} onChange={e => setData(e.target.value)} className="p-2 border-[1.5px] border-black/25 font-bold bg-white text-black outline-none" />
          <input type="text" value={texto} onChange={e => setTexto(e.target.value)} placeholder="O que foi pedido? Ex: relatório de atividades" className="p-2 border-[1.5px] border-black/25 font-bold bg-white text-black outline-none"
            onKeyDown={e => { if (e.key === 'Enter') requireAuth(registrar); }} />
          <div className="flex flex-wrap gap-1">
            {CONTATO_SUGESTOES.map(sug => <button key={sug} type="button" onClick={() => setTexto(sug)} className="px-2 py-1 border border-black/25 font-black uppercase tracking-wider text-[0.6em] hover:bg-black hover:text-white transition-colors">{sug}</button>)}
          </div>
          <button onClick={() => requireAuth(registrar)} className="flex items-center justify-center gap-2 px-4 py-2 bg-black text-white font-black uppercase tracking-widest text-[0.75em] border-[1.5px] border-black/25 hover:-translate-y-1 transition-transform shadow-lg">
            {isUnlocked ? <Save size={14} /> : <Lock size={14} />} Registrar contato
          </button>
        </div>
      </div>
    </div>
  );
}

function NavButton({ active, onClick, icon, label, accentColor }) {
  return (
    <button onClick={onClick} className={`flex items-center justify-center gap-2 px-4 py-1.5 font-bold uppercase tracking-wider text-[0.8em] border-2 transition-all cursor-pointer ${active ? 'bg-black text-white' : 'bg-white text-black hover:bg-black/5 border-black/20'}`} style={active ? { borderColor: '#000', boxShadow: `inset 0 -3px 0 ${accentColor}` } : {}}>
      {React.cloneElement(icon, { size: 16 })} <span>{label}</span>
    </button>
  );
}
