// ... existing code ...
const Download = (p) => <Icon {...p} path={<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></>} />;
const Upload = (p) => <Icon {...p} path={<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></>} />;
const Save = (p) => <Icon {...p} path={<><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></>} />;
const ChevronLeft = (p) => <Icon {...p} path={<path d="m15 18-6-6 6-6"/>} />;
const UserIcon = (p) => <Icon {...p} path={<><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>} />;

// --- CORES TEMA MONDRIAN ---
// ... existing code ...
```

```react:AppGestaoUtilidadePublica:App.jsx
// ... existing code ...
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
// ... existing code ...
```

```react:AppGestaoUtilidadePublica:App.jsx
// ... existing code ...
      {/* ÁREA PRINCIPAL */}
      <main className="p-4 md:p-6 flex-1 flex flex-col">
        {loading ? (
          <div className="flex-1 flex items-center justify-center">
            <RefreshCw className="animate-spin" size={48} style={{ color: COLORS.cyan }} />
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
// ... existing code ...
```

```react:AppGestaoUtilidadePublica:App.jsx
// ... existing code ...
// ==========================================
// COMPONENTES DE VISUALIZAÇÃO
// ==========================================

function KanbanView({ data, theme, thick, med, isDark, onEntityClick, onArticulatorClick }) {
  const columns = [
    { id: 'Aguardando Documentos', label: 'Aguardando Docs', color: COLORS.mustard, icon: <AlertCircle size={16}/> },
// ... existing code ...
          <div className="p-3 flex flex-col gap-3 overflow-y-auto">
            {getColData(col.id).map((item, i) => (
              <div key={i} className={`p-3 ${med} hover:-translate-y-1 transition-transform ${theme.bg}`}>
                <h3 
                  className="font-bold mb-2 uppercase cursor-pointer hover:underline decoration-2 underline-offset-4" 
                  style={{ fontSize: '1.1em', textDecorationColor: COLORS.cyan }}
                  onClick={() => onEntityClick(item)}
                >
                  {item.ENTIDADE || 'Sem Nome'}
                </h3>
                
                <div className="grid grid-cols-2 gap-2 opacity-80" style={{ fontSize: '0.9em' }}>
                  <div>
                    <span className="block text-[0.8em] uppercase font-bold opacity-70">Articulador</span>
                    <span 
                      className="cursor-pointer hover:underline decoration-2 underline-offset-2"
                      style={{ textDecorationColor: COLORS.mustard }}
                      onClick={() => onArticulatorClick(item.ARTICULADOR)}
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
// ... existing code ...
```

```react:AppGestaoUtilidadePublica:App.jsx
// ... existing code ...
function DashboardView({ data, theme, thick, med, onEntityClick, onArticulatorClick }) {
  const total = data.length;
  const protocolados = data.filter(d => String(d['STATUS DA ANÁLISE'] || '').trim().toLowerCase() === 'protocolado').length;
// ... existing code ...
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
// ... existing code ...
```

```react:AppGestaoUtilidadePublica:App.jsx
// ... existing code ...
    </button>
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
