// @ts-nocheck
import { useState, useEffect, useCallback, useRef } from "react";
import { createClient } from "@supabase/supabase-js";

// ─── SUPABASE CONFIG ──────────────────────────────────────────────────────────
const SUPABASE_URL = "https://vuefojhztkzhdspwtjjq.supabase.co";
const SUPABASE_KEY = "sb_publishable_PoT-Y_jSM8E9Itbzc0OiUw_scTqTO1Q";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// ─── LOGO BASE64 ─────────────────────────────────────────────────────────────
const LOGO_URL = "/logo.jpeg";

// ─── DATOS INICIALES ──────────────────────────────────────────────────────────
const DELEGADOS_INICIALES = [
  { id: 1, cedula: "", nombre: "SANCHEZ PEREZ DEISY MARCELA", ciudad: "BOGOTA", zona: "SEGURIDAD", tipo: "PRINCIPAL" },
  { id: 2, cedula: "", nombre: "PINZON CASTILLO RICHARD JHEYN", ciudad: "BOGOTA", zona: "SEGURIDAD", tipo: "PRINCIPAL" },
  { id: 3, cedula: "", nombre: "CARO ESCOBAR DIGNA", ciudad: "BARRANQUILLA", zona: "SEGURIDAD", tipo: "PRINCIPAL" },
  { id: 4, cedula: "", nombre: "ORTEGA MORENO JESUS ALBERTO", ciudad: "BOGOTA", zona: "SEGURIDAD", tipo: "PRINCIPAL" },
  { id: 5, cedula: "", nombre: "LOZANO PEREA ASAEL", ciudad: "BOGOTA", zona: "SEGURIDAD", tipo: "PRINCIPAL" },
  { id: 6, cedula: "", nombre: "TRUJILLO FRANCO CLAUDIA MILENA", ciudad: "BOGOTA", zona: "SEGURIDAD", tipo: "SUPLENTE" },
  { id: 7, cedula: "", nombre: "VARGAS HOLGUIN JESUS DAVID", ciudad: "BOGOTA", zona: "SEGURIDAD", tipo: "SUPLENTE" },
  { id: 8, cedula: "", nombre: "COMBITA MENDIETA MARTHA LILIANA", ciudad: "BOGOTA", zona: "SEGURIDAD", tipo: "SUPLENTE" },
  { id: 9, cedula: "", nombre: "AHUMADA CABARCAS LUIS ALBERTO", ciudad: "BOGOTA", zona: "AVIACION", tipo: "PRINCIPAL" },
  { id: 10, cedula: "", nombre: "FLOREZ MONSALVE DIEGO ALEJANDRO", ciudad: "CUCUTA", zona: "AVIACION", tipo: "PRINCIPAL" },
  { id: 11, cedula: "", nombre: "TORRADO PRADA JORGE ANTONIO", ciudad: "CUCUTA", zona: "AVIACION", tipo: "PRINCIPAL" },
  { id: 12, cedula: "", nombre: "SILVA JARAMILLO WILGEN RAFAEL", ciudad: "BARRANQUILLA", zona: "AVIACION", tipo: "PRINCIPAL" },
  { id: 13, cedula: "", nombre: "GARCES GOMEZ CLAUDIA PATRICIA", ciudad: "MEDELLIN", zona: "DIR. ÁREA NEGOCIOS 1", tipo: "PRINCIPAL" },
  { id: 14, cedula: "", nombre: "BUITRAGO HERNANDEZ CARLOS ANDRES", ciudad: "CALI", zona: "DIR. ÁREA NEGOCIOS 1", tipo: "PRINCIPAL" },
  { id: 15, cedula: "", nombre: "CALLES VILLANEDA FRANCISCO ANTONIO", ciudad: "CALI", zona: "DIR. ÁREA NEGOCIOS 1", tipo: "PRINCIPAL" },
  { id: 16, cedula: "", nombre: "GUERRA SALGADO ONARLY SEGUNDO", ciudad: "BOGOTA", zona: "DIR. ÁREA NEGOCIOS 1", tipo: "PRINCIPAL" },
  { id: 17, cedula: "", nombre: "GALINDO TAVERA MALGENIN", ciudad: "BOGOTA", zona: "DIR. ÁREA NEGOCIOS 1", tipo: "PRINCIPAL" },
  { id: 18, cedula: "", nombre: "CACERES DELGADO EVA CAROLINA", ciudad: "BUCARAMANGA", zona: "DIR. ÁREA NEGOCIOS 1", tipo: "PRINCIPAL" },
  { id: 19, cedula: "", nombre: "RAMIREZ DUQUE SANDRA MILENA", ciudad: "MEDELLIN", zona: "DIR. ÁREA NEGOCIOS 1", tipo: "PRINCIPAL" },
  { id: 20, cedula: "", nombre: "SERNA SERNA LUZ ENELIDA", ciudad: "BOGOTA", zona: "DIR. ÁREA NEGOCIOS 1", tipo: "PRINCIPAL" },
  { id: 21, cedula: "", nombre: "ROJAS ORTIZ SANDRA LUCIA", ciudad: "BOGOTA", zona: "DIR. ÁREA NEGOCIOS 2", tipo: "PRINCIPAL" },
  { id: 22, cedula: "", nombre: "VARGAS NOVA NELSON JOAQUIN", ciudad: "BOGOTA", zona: "DIR. ÁREA NEGOCIOS 2", tipo: "PRINCIPAL" },
  { id: 23, cedula: "", nombre: "ANDRADE MONTANEZ CARLOS ANDRES", ciudad: "BOGOTA", zona: "DIR. ÁREA NEGOCIOS 2", tipo: "PRINCIPAL" },
  { id: 24, cedula: "", nombre: "RENGIFO RENGIFO GUILLERMO", ciudad: "BOGOTA", zona: "DIR. ÁREA NEGOCIOS 2", tipo: "PRINCIPAL" },
  { id: 25, cedula: "", nombre: "AGUDELO MORALES WILLINGTON HERNAN", ciudad: "BOGOTA", zona: "DIR. ÁREA NEGOCIOS 2", tipo: "PRINCIPAL" },
  { id: 26, cedula: "", nombre: "RODRIGUEZ BOHORQUEZ CESAR AUGUSTO", ciudad: "BOGOTA", zona: "DIR. ÁREA NEGOCIOS 2", tipo: "PRINCIPAL" },
  { id: 27, cedula: "", nombre: "QUIROGA PRIETO MARCELINO", ciudad: "BOGOTA", zona: "DIR. ÁREA NEGOCIOS 2", tipo: "PRINCIPAL" },
  { id: 28, cedula: "", nombre: "CIFUENTES RODRIGUEZ WILMAR ORLANDO", ciudad: "LA CALERA", zona: "DIR. ÁREA NEGOCIOS 2", tipo: "PRINCIPAL" },
  { id: 29, cedula: "", nombre: "ROA ROZO DANIEL RICARDO", ciudad: "BOGOTA", zona: "DIR. ÁREA NEGOCIOS 2", tipo: "PRINCIPAL" },
  { id: 30, cedula: "", nombre: "CANTILLO URINA SANTIAGO", ciudad: "BOGOTA", zona: "DIR. ÁREA NEGOCIOS 2", tipo: "PRINCIPAL" },
  { id: 31, cedula: "", nombre: "CARDENAS COLINA DIEGO FERNANDO", ciudad: "DUITAMA", zona: "DIR. ÁREA NEGOCIOS 2", tipo: "PRINCIPAL" },
  { id: 32, cedula: "", nombre: "ORTIZ SIERRA OSCAR MAURICIO", ciudad: "BOGOTA", zona: "DIR. ÁREA NEGOCIOS 2", tipo: "PRINCIPAL" },
  { id: 33, cedula: "", nombre: "PINTO BUCURU HERMINSO", ciudad: "BOGOTA", zona: "DIR. ÁREA NEGOCIOS 3", tipo: "PRINCIPAL" },
  { id: 34, cedula: "", nombre: "BARBOSA CRUZ ANDRES FELIPE", ciudad: "BOGOTA", zona: "DIR. ÁREA NEGOCIOS 3", tipo: "PRINCIPAL" },
  { id: 35, cedula: "", nombre: "PATINO QUINTANA JOSE SAUL", ciudad: "BOGOTA", zona: "DIR. ÁREA NEGOCIOS 3", tipo: "PRINCIPAL" },
  { id: 36, cedula: "", nombre: "MONTENEGRO PERILLA ANA CECILIA", ciudad: "BOGOTA", zona: "ADMINISTRATIVOS", tipo: "PRINCIPAL" },
  { id: 37, cedula: "", nombre: "VITONCO PENA FRANCIA ESTELLA", ciudad: "BOGOTA", zona: "ADMINISTRATIVOS", tipo: "PRINCIPAL" },
  { id: 38, cedula: "", nombre: "TORRES PINEDA MARIA LINETH", ciudad: "BOGOTA", zona: "ADMINISTRATIVOS", tipo: "PRINCIPAL" },
  { id: 39, cedula: "", nombre: "PARADA POLANIA JHON JAIRO", ciudad: "BOGOTA", zona: "ADMINISTRATIVOS", tipo: "PRINCIPAL" },
  { id: 40, cedula: "", nombre: "ALFEREZ ALVARO", ciudad: "BOGOTA", zona: "ADMINISTRATIVOS", tipo: "PRINCIPAL" },
];

const REFORMAS_ESTATUTARIAS = [
  { id: "ref_art12", titulo: "Reforma Art. 12", descripcion: "Determinación del vínculo de asociación y requisitos de ingreso – Incluye pensionados y nuevos requisitos SARLAFT/DIAN" },
  { id: "ref_art15", titulo: "Reforma Art. 15", descripcion: "Pérdida del carácter de asociado – Nuevas causales por riesgo financiero, jurídico y tributario" },
  { id: "ref_art17", titulo: "Reforma Art. 17", descripcion: "Reingreso posterior a renuncia voluntaria – Nuevos requisitos y controles de residencia fiscal" },
  { id: "ref_art18", titulo: "Reforma Art. 18", descripcion: "Desvinculación de la entidad empleadora – Permanencia de pensionados conforme a Ley 496/1999" },
  { id: "ref_art32", titulo: "Reforma Art. 32", descripcion: "Compromiso económico de los asociados – Cambio distribución aportes de 20/80 a 50/50" },
  { id: "ref_art60", titulo: "Reforma Art. 60-62", descripcion: "Requisitos, idoneidad, evaluación y causales de remoción del Gerente – Profesionalización y rendición de cuentas" },
  { id: "ref_art99", titulo: "Adición Art. 99 y 110", descripcion: "Gobierno corporativo, ética y conflictos de interés – Código de Buen Gobierno" },
  { id: "ref_art124", titulo: "Adición Art. 124-125", descripcion: "Reconocimiento del régimen de insolvencia (Ley 2445/2025) y sus efectos" },
];

const VOTACIONES_BIENESTAR = [
  { id: "bienA", texto: "Viaje / Paseo grupal de integración" },
  { id: "bienB", texto: "Evento cultural / recreativo en sede" },
  { id: "bienC", texto: "Actividad deportiva (olimpiadas internas)" },
];

const AUXILIOS_SOLIDARIOS = [
  { id: "aux1", titulo: "Auxilio de calamidad por salud", descripcion: "Implementar un nuevo auxilio solidario para calamidades de salud de los asociados" },
  { id: "aux2", titulo: "Auxilio por nacimiento de hijo", descripcion: "Implementar un nuevo auxilio solidario por nacimiento de hijo de los asociados" },
  { id: "aux3", titulo: "Eliminación de regalo para jóvenes 12-17 años", descripcion: "Que no se entregue el regalo navideño a hijos de asociados entre 12 y 17 años, por considerarse jóvenes y no niños" },
];

const ADMIN_PASSWORD = "Fonse2025";

const MODULOS_INICIALES = {
  juntaDirectiva: { id: "juntaDirectiva", titulo: "Elección Junta Directiva", descripcion: "Periodo 2026-2028 — Voto por plancha completa (3 principales + 3 suplentes)", tipo: "plancha", opciones: [], activa: false, cerrada: false, votos: {} },
  comiteControl: { id: "comiteControl", titulo: "Elección Comité de Control Social", descripcion: "Periodo 2026-2028 — Voto por plancha completa (3 principales + 3 suplentes)", tipo: "plancha", opciones: [], activa: false, cerrada: false, votos: {} },
  reformasEstatutarias: { id: "reformasEstatutarias", titulo: "Reforma Estatutaria", descripcion: "Aprobación reforma parcial de estatutos FONSECURITAS", tipo: "reforma", opciones: REFORMAS_ESTATUTARIAS, activa: false, cerrada: false, votos: {} },
  revisorFiscal: { id: "revisorFiscal", titulo: "Elección Revisor Fiscal", descripcion: "Periodo 2026-2028 — Órgano de fiscalización externa y asignación de honorarios", tipo: "plancha", opciones: [], activa: false, cerrada: false, votos: {} },
  bienestar: { id: "bienestar", titulo: "Actividad de Bienestar 2026", descripcion: "Selección de la actividad social del año", tipo: "opcion_multiple", opciones: VOTACIONES_BIENESTAR, activa: false, cerrada: false, votos: {} },
  auxiliosSolidarios: { id: "auxiliosSolidarios", titulo: "Proposiciones — Auxilios Solidarios", descripcion: "Votación sobre propuestas de nuevos auxilios y modificación de beneficios", tipo: "reforma", opciones: AUXILIOS_SOLIDARIOS, activa: false, cerrada: false, votos: {} },
  extra1: { id: "extra1", titulo: "Votación Extra 1", descripcion: "Propuesta surgida en asamblea — pendiente de definir", tipo: "libre", opciones: [], activa: false, cerrada: false, votos: {} },
  extra2: { id: "extra2", titulo: "Votación Extra 2", descripcion: "Propuesta surgida en asamblea — pendiente de definir", tipo: "libre", opciones: [], activa: false, cerrada: false, votos: {} },
};

// ─── SUPABASE HELPERS ─────────────────────────────────────────────────────────
async function initDB(modulos, delegados) {
  // Init modulos
  const { data: existingMods } = await supabase.from("modulos").select("id");
  if (!existingMods || existingMods.length === 0) {
    const rows = Object.values(modulos).map(m => ({
      id: m.id, titulo: m.titulo, descripcion: m.descripcion,
      tipo: m.tipo, opciones: m.opciones, activa: m.activa, cerrada: m.cerrada, votos: m.votos
    }));
    await supabase.from("modulos").insert(rows);
  }
  // Init delegados
  const { data: existingDels } = await supabase.from("delegados").select("id");
  if (!existingDels || existingDels.length === 0) {
    await supabase.from("delegados").insert(delegados.map(d => ({ ...d, activo: true })));
  }
}

async function fetchModulos() {
  const { data } = await supabase.from("modulos").select("*");
  if (!data) return null;
  const obj = {};
  data.forEach(m => { obj[m.id] = m; });
  return obj;
}

async function fetchDelegados() {
  const { data } = await supabase.from("delegados").select("*").order("id");
  return data || [];
}

async function saveModulo(modulo) {
  await supabase.from("modulos").upsert({
    id: modulo.id, titulo: modulo.titulo, descripcion: modulo.descripcion,
    tipo: modulo.tipo, opciones: modulo.opciones,
    activa: modulo.activa, cerrada: modulo.cerrada, votos: modulo.votos
  });
}

async function saveDelegado(delegado) {
  await supabase.from("delegados").upsert(delegado);
}

// ─── COMPONENTES ─────────────────────────────────────────────────────────────
const Badge = ({ children, color = "gray" }) => {
  const colors = {
    green: "bg-green-100 text-green-800 border-green-300",
    red: "bg-red-100 text-red-800 border-red-300",
    blue: "bg-blue-100 text-blue-800 border-blue-300",
    gray: "bg-gray-100 text-gray-700 border-gray-300",
    yellow: "bg-yellow-100 text-yellow-800 border-yellow-300",
  };
  return <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${colors[color]}`}>{children}</span>;
};

const ProgressBar = ({ value, total, color = "red" }) => {
  const pct = total > 0 ? Math.round((value / total) * 100) : 0;
  const colors = { red: "bg-red-600", blue: "bg-blue-800", green: "bg-green-600", gray: "bg-gray-400" };
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-gray-200 rounded-full h-3">
        <div className={`${colors[color]} h-3 rounded-full transition-all duration-700`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs font-bold text-gray-700 w-16 text-right">{value} ({pct}%)</span>
    </div>
  );
};

// ─── PANTALLA VOTACIÓN DELEGADO ───────────────────────────────────────────────
function PantallaVotacion({ modulos, delegado, onVotar, onExit }) {
  const [moduloActivo, setModuloActivo] = useState(null);
  const [seleccion, setSeleccion] = useState({});
  const [votado, setVotado] = useState(false);
  const [confirmar, setConfirmar] = useState(false);

  const modulosAbiertos = Object.values(modulos).filter(m => m.activa && !m.cerrada);
  const yaVotoEnModulo = (mId) => modulos[mId]?.votos?.[delegado.id] !== undefined;

  const handleVotar = () => { if (Object.keys(seleccion).length > 0) setConfirmar(true); };
  const confirmarVoto = async () => {
    await onVotar(moduloActivo.id, delegado.id, seleccion);
    setVotado(true); setConfirmar(false); setModuloActivo(null); setSeleccion({});
    setTimeout(() => setVotado(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex flex-col">
      <div className="bg-white/10 backdrop-blur border-b border-white/20 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={LOGO_URL} alt="Fonsecuritas" className="h-10 object-contain bg-white rounded px-2" />
          <div>
            <div className="text-white font-bold text-lg">ASAMBLEA GENERAL 2026</div>
            <div className="text-blue-200 text-sm">Panel de Votación</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-white font-semibold text-sm">{delegado.nombre}</div>
          <div className="text-blue-200 text-xs">{delegado.zona} · {delegado.tipo}</div>
          <button onClick={onExit} className="text-xs text-red-300 hover:text-red-100 mt-1 underline">Cerrar sesión</button>
        </div>
      </div>
      <div className="flex-1 max-w-2xl mx-auto w-full px-4 py-6">
        {votado && <div className="bg-green-500 text-white rounded-xl p-4 mb-4 text-center font-bold animate-pulse">✅ ¡Voto registrado exitosamente!</div>}
        {!moduloActivo && !confirmar && (
          <div>
            <h2 className="text-white text-xl font-bold mb-4">📋 Votaciones disponibles</h2>
            {modulosAbiertos.length === 0 && (
              <div className="bg-white/10 rounded-xl p-8 text-center text-blue-200">
                <div className="text-4xl mb-2">⏳</div>
                <div className="font-semibold">No hay votaciones abiertas en este momento</div>
                <div className="text-sm mt-1">El administrador habilitará las votaciones conforme avance el orden del día</div>
              </div>
            )}
            <div className="space-y-3">
              {Object.values(modulos).map(m => {
                const abierto = m.activa && !m.cerrada;
                const yaVoto = yaVotoEnModulo(m.id);
                return (
                  <div key={m.id} className={`rounded-xl p-4 border transition-all ${abierto && !yaVoto ? "bg-white/15 border-blue-400 cursor-pointer hover:bg-white/25" : "bg-white/5 border-white/10"}`}
                    onClick={() => { if (abierto && !yaVoto) { setModuloActivo(m); setSeleccion({}); } }}>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-white font-semibold">{m.titulo}</div>
                        <div className="text-blue-200 text-xs mt-0.5">{m.descripcion}</div>
                      </div>
                      <div className="ml-3 shrink-0">
                        {yaVoto ? <Badge color="green">✓ Votado</Badge> : m.cerrada ? <Badge color="gray">Cerrada</Badge> : abierto ? <Badge color="blue">Abierta</Badge> : <Badge color="gray">Pendiente</Badge>}
                      </div>
                    </div>
                    {abierto && !yaVoto && <div className="text-xs text-blue-300 mt-2">→ Toca para votar</div>}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {moduloActivo && !confirmar && (
          <div className="bg-white/10 rounded-2xl border border-blue-400 p-5">
            <button onClick={() => { setModuloActivo(null); setSeleccion({}); }} className="text-blue-300 text-sm mb-3 hover:text-white">← Volver</button>
            <h2 className="text-white text-xl font-bold mb-1">{moduloActivo.titulo}</h2>
            <p className="text-blue-200 text-sm mb-4">{moduloActivo.descripcion}</p>
            {moduloActivo.tipo === "plancha" && (
              <div>
                <p className="text-yellow-300 text-sm mb-3 font-semibold">Selecciona UNA plancha (o voto en blanco):</p>
                {moduloActivo.opciones.length === 0 && <div className="text-blue-200 text-sm italic mb-3">No se han registrado planchas aún.</div>}
                <div className="space-y-2">
                  {moduloActivo.opciones.map((op, i) => (
                    <div key={op.id} onClick={() => setSeleccion({ plancha: op.id })}
                      className={`rounded-xl p-4 border-2 cursor-pointer transition-all ${seleccion.plancha === op.id ? "border-yellow-400 bg-yellow-400/20" : "border-white/20 bg-white/5 hover:border-white/40"}`}>
                      <div className="flex items-center gap-2">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${seleccion.plancha === op.id ? "border-yellow-400 bg-yellow-400" : "border-white/40"}`}>
                          {seleccion.plancha === op.id && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                        <span className="text-white font-semibold">Plancha {i + 1}: {op.nombre}</span>
                      </div>
                      {op.miembros && <div className="text-blue-200 text-xs mt-2 pl-7">{op.miembros}</div>}
                    </div>
                  ))}
                  <div onClick={() => setSeleccion({ plancha: "blanco" })}
                    className={`rounded-xl p-4 border-2 cursor-pointer transition-all ${seleccion.plancha === "blanco" ? "border-gray-300 bg-white/10" : "border-white/20 bg-white/5 hover:border-white/30"}`}>
                    <div className="flex items-center gap-2">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${seleccion.plancha === "blanco" ? "border-white bg-white" : "border-white/40"}`}>
                        {seleccion.plancha === "blanco" && <div className="w-2 h-2 rounded-full bg-gray-600" />}
                      </div>
                      <span className="text-white font-semibold">Voto en blanco</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {(moduloActivo.tipo === "reforma" || moduloActivo.tipo === "libre") && (
              <div>
                <p className="text-yellow-300 text-sm mb-3 font-semibold">Vota SÍ o NO en cada punto:</p>
                {moduloActivo.opciones.length === 0 && <div className="text-blue-200 text-sm italic">No hay opciones configuradas.</div>}
                <div className="space-y-3">
                  {moduloActivo.opciones.map(op => (
                    <div key={op.id} className="rounded-xl p-3 bg-white/5 border border-white/10">
                      <div className="text-white text-sm font-semibold mb-1">{op.titulo || op.texto}</div>
                      {op.descripcion && <div className="text-blue-200 text-xs mb-2">{op.descripcion}</div>}
                      <div className="flex gap-2">
                        {["SI", "NO", "BLANCO"].map(opt => (
                          <button key={opt} onClick={() => setSeleccion(s => ({ ...s, [op.id]: opt }))}
                            className={`flex-1 py-1.5 rounded-lg text-sm font-bold border transition-all ${seleccion[op.id] === opt ? (opt === "SI" ? "bg-green-500 border-green-400 text-white" : opt === "NO" ? "bg-red-600 border-red-500 text-white" : "bg-gray-500 border-gray-400 text-white") : "bg-white/10 border-white/20 text-white/60 hover:bg-white/20"}`}>
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {moduloActivo.tipo === "opcion_multiple" && (
              <div>
                <p className="text-yellow-300 text-sm mb-3 font-semibold">Selecciona UNA opción:</p>
                <div className="space-y-2">
                  {moduloActivo.opciones.map(op => (
                    <div key={op.id} onClick={() => setSeleccion({ opcion: op.id })}
                      className={`rounded-xl p-3 border-2 cursor-pointer transition-all ${seleccion.opcion === op.id ? "border-yellow-400 bg-yellow-400/20" : "border-white/20 bg-white/5 hover:border-white/40"}`}>
                      <div className="flex items-center gap-2">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${seleccion.opcion === op.id ? "border-yellow-400 bg-yellow-400" : "border-white/40"}`}>
                          {seleccion.opcion === op.id && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                        <span className="text-white text-sm font-medium">{op.texto}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <button onClick={handleVotar} disabled={Object.keys(seleccion).length === 0}
              className="mt-6 w-full py-3 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white font-bold rounded-xl transition-all text-lg">
              Confirmar voto →
            </button>
          </div>
        )}
        {confirmar && moduloActivo && (
          <div className="bg-white/10 rounded-2xl border border-yellow-400 p-6 text-center">
            <div className="text-4xl mb-3">🗳️</div>
            <h2 className="text-white text-xl font-bold mb-2">¿Confirmar tu voto?</h2>
            <p className="text-blue-200 text-sm mb-1">{moduloActivo.titulo}</p>
            <p className="text-yellow-300 text-sm mb-6">Esta acción no se puede deshacer</p>
            <div className="flex gap-3">
              <button onClick={() => setConfirmar(false)} className="flex-1 py-3 bg-white/10 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/20">Volver a revisar</button>
              <button onClick={confirmarVoto} className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold">✓ Confirmar voto</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── LOGIN DELEGADO ───────────────────────────────────────────────────────────
function LoginDelegado({ delegados, onLogin }) {
  const [cedulaInput, setCedulaInput] = useState("");
  const [error, setError] = useState("");
  const handleLogin = () => {
    const found = delegados.find(d => d.cedula && d.cedula.trim() === cedulaInput.trim() && d.activo !== false);
    if (found) { setError(""); onLogin(found); }
    else setError("Cédula no encontrada o no habilitada. Verifica con la mesa directiva.");
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img src={LOGO_URL} alt="Fonsecuritas" className="h-20 object-contain bg-white rounded-xl px-4 py-2 mx-auto mb-4" />
          <h1 className="text-white text-2xl font-bold">ASAMBLEA GENERAL 2026</h1>
          <p className="text-blue-300 text-sm mt-1">Sistema de Votación Digital</p>
        </div>
        <div className="bg-white/10 backdrop-blur rounded-2xl border border-white/20 p-6">
          <label className="text-blue-200 text-sm font-semibold block mb-2">Número de cédula</label>
          <input type="text" value={cedulaInput} onChange={e => { setCedulaInput(e.target.value); setError(""); }}
            onKeyDown={e => e.key === "Enter" && handleLogin()}
            placeholder="Ingresa tu número de cédula"
            className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-blue-400 text-center text-lg font-mono tracking-widest" />
          {error && <p className="text-red-400 text-xs mt-2 text-center">{error}</p>}
          <button onClick={handleLogin} className="mt-4 w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all">
            Ingresar al sistema de votación
          </button>
        </div>
        <p className="text-blue-400 text-xs text-center mt-4">Si tienes problemas para ingresar, acércate a la mesa directiva</p>
      </div>
    </div>
  );
}

// ─── PANEL ADMIN ──────────────────────────────────────────────────────────────
function PanelAdmin({ modulos, setModulos, delegados, setDelegados, onExit }) {
  const [vista, setVista] = useState("dashboard");
  const [editando, setEditando] = useState(null);
  const [nuevaPlancha, setNuevaPlancha] = useState({ nombre: "", miembros: "" });
  const [nuevaOpcion, setNuevaOpcion] = useState({ titulo: "", descripcion: "" });
  const [editTitulo, setEditTitulo] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [saving, setSaving] = useState(false);

  const totalDelegados = delegados.filter(d => d.activo !== false).length;

  const updateModulo = async (id, changes) => {
    setSaving(true);
    const updated = { ...modulos[id], ...changes };
    setModulos(m => ({ ...m, [id]: updated }));
    await saveModulo(updated);
    setSaving(false);
  };

  const addPlancha = async (modId) => {
    if (!nuevaPlancha.nombre.trim()) return;
    const newOpciones = [...(modulos[modId].opciones || []), { id: "p_" + Date.now(), ...nuevaPlancha }];
    await updateModulo(modId, { opciones: newOpciones });
    setNuevaPlancha({ nombre: "", miembros: "" });
  };

  const removePlancha = async (modId, opId) => {
    const newOpciones = modulos[modId].opciones.filter(o => o.id !== opId);
    await updateModulo(modId, { opciones: newOpciones });
  };

  const addOpcion = async (modId) => {
    if (!nuevaOpcion.titulo.trim()) return;
    const newOpciones = [...(modulos[modId].opciones || []), { id: "op_" + Date.now(), ...nuevaOpcion }];
    await updateModulo(modId, { opciones: newOpciones });
    setNuevaOpcion({ titulo: "", descripcion: "" });
  };

  const removeOpcion = async (modId, opId) => {
    const newOpciones = modulos[modId].opciones.filter(o => o.id !== opId);
    await updateModulo(modId, { opciones: newOpciones });
  };

  const updateDelegado = async (delegado) => {
    setDelegados(d => d.map(del => del.id === delegado.id ? delegado : del));
    await saveDelegado(delegado);
  };

  const getResultados = (m) => {
    if (!m.votos) return {};
    if (m.tipo === "plancha" || m.tipo === "opcion_multiple") {
      const conteo = {};
      Object.values(m.votos).forEach(v => { const op = v.plancha || v.opcion || "blanco"; conteo[op] = (conteo[op] || 0) + 1; });
      return conteo;
    }
    const conteo = {};
    m.opciones?.forEach(op => {
      conteo[op.id] = { SI: 0, NO: 0, BLANCO: 0 };
      Object.values(m.votos).forEach(v => { if (v[op.id]) conteo[op.id][v[op.id]] = (conteo[op.id][v[op.id]] || 0) + 1; });
    });
    return conteo;
  };

  const exportar = () => {
    const lineas = ["RESULTADOS ASAMBLEA FONSECURITAS 2026", "=".repeat(50), ""];
    Object.values(modulos).forEach(m => {
      const totalVotos = Object.keys(m.votos || {}).length;
      if (totalVotos === 0) return;
      lineas.push(`MÓDULO: ${m.titulo}`);
      lineas.push(`Total votos: ${totalVotos}`);
      const r = getResultados(m);
      if (m.tipo === "plancha" || m.tipo === "opcion_multiple") {
        Object.entries(r).forEach(([k, v]) => {
          const op = m.opciones?.find(o => o.id === k);
          lineas.push(`  ${op ? (op.nombre || op.texto) : k}: ${v}`);
        });
      } else {
        m.opciones?.forEach(op => {
          const res = r[op.id] || {};
          lineas.push(`  ${op.titulo || op.texto}: SÍ=${res.SI||0}, NO=${res.NO||0}, BLANCO=${res.BLANCO||0}`);
        });
      }
      lineas.push("");
    });
    const blob = new Blob([lineas.join("\n")], { type: "text/plain" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob);
    a.download = "resultados_fonsecuritas_2026.txt"; a.click();
  };

  const nav = [{ id: "dashboard", label: "🏠 Dashboard" }, { id: "modulos", label: "🗳️ Módulos" }, { id: "delegados", label: "👥 Delegados" }, { id: "resultados", label: "📊 Resultados" }];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-blue-950 text-white px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={LOGO_URL} alt="Fonsecuritas" className="h-9 object-contain bg-white rounded px-2" />
          <div>
            <div className="font-bold text-sm">Panel Administrador — Asamblea 2026</div>
            <div className="text-blue-300 text-xs">{saving ? "💾 Guardando..." : "✅ Sincronizado con Supabase"}</div>
          </div>
        </div>
        <button onClick={onExit} className="text-xs bg-red-700 hover:bg-red-600 px-3 py-1.5 rounded-lg font-semibold">Cerrar sesión</button>
      </div>
      <div className="bg-blue-900 px-4 flex gap-1">
        {nav.map(n => (
          <button key={n.id} onClick={() => setVista(n.id)}
            className={`px-4 py-2.5 text-sm font-semibold rounded-t-lg mt-1 transition-all ${vista === n.id ? "bg-gray-50 text-blue-900" : "text-blue-200 hover:bg-white/10 hover:text-white"}`}>
            {n.label}
          </button>
        ))}
      </div>
      <div className="flex-1 p-6 overflow-auto">
        {vista === "dashboard" && (
          <div>
            <h2 className="text-blue-950 font-bold text-xl mb-4">Resumen en tiempo real</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { label: "Delegados habilitados", value: totalDelegados, color: "bg-blue-900 text-white", icon: "👥" },
                { label: "Votaciones abiertas", value: Object.values(modulos).filter(m => m.activa && !m.cerrada).length, color: "bg-red-600 text-white", icon: "🗳️" },
                { label: "Total módulos", value: Object.keys(modulos).length, color: "bg-slate-700 text-white", icon: "📋" },
                { label: "Módulos cerrados", value: Object.values(modulos).filter(m => m.cerrada).length, color: "bg-green-700 text-white", icon: "✅" },
              ].map(s => (
                <div key={s.label} className={`${s.color} rounded-2xl p-5`}>
                  <div className="text-3xl mb-1">{s.icon}</div>
                  <div className="text-4xl font-black">{s.value}</div>
                  <div className="text-sm opacity-80 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Object.values(modulos).map(m => (
                <div key={m.id} className="bg-white rounded-xl border p-4 shadow-sm">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{m.titulo}</div>
                      <div className="text-gray-500 text-xs">{Object.keys(m.votos || {}).length} votos</div>
                    </div>
                    {m.cerrada ? <Badge color="green">Cerrada</Badge> : m.activa ? <Badge color="blue">Activa</Badge> : <Badge color="gray">Inactiva</Badge>}
                  </div>
                  <ProgressBar value={Object.keys(m.votos || {}).length} total={totalDelegados} color={m.activa ? "red" : "gray"} />
                </div>
              ))}
            </div>
          </div>
        )}

        {vista === "modulos" && (
          <div>
            <h2 className="text-blue-950 font-bold text-xl mb-4">Gestión de módulos</h2>
            <div className="space-y-4">
              {Object.values(modulos).map(m => {
                const isEdit = editando === m.id;
                return (
                  <div key={m.id} className="bg-white rounded-2xl border shadow-sm overflow-hidden">
                    <div className="px-5 py-4 flex items-start justify-between bg-gray-50 border-b">
                      <div>
                        <div className="font-bold text-gray-900">{m.titulo}</div>
                        <div className="text-gray-500 text-xs">{Object.keys(m.votos || {}).length} votos · {m.descripcion}</div>
                      </div>
                      <div className="flex gap-2 ml-3 flex-wrap items-center">
                        {m.cerrada ? (
                          <button onClick={() => updateModulo(m.id, { activa: true, cerrada: false })} className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700">Reabrir</button>
                        ) : m.activa ? (
                          <button onClick={() => updateModulo(m.id, { activa: false, cerrada: true })} className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-red-600 text-white hover:bg-red-700">Cerrar votación</button>
                        ) : (
                          <button onClick={() => updateModulo(m.id, { activa: true, cerrada: false })} className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-green-600 text-white hover:bg-green-700">Abrir votación</button>
                        )}
                        <button onClick={() => { setEditando(isEdit ? null : m.id); setEditTitulo(m.titulo); setEditDesc(m.descripcion); setNuevaPlancha({ nombre: "", miembros: "" }); setNuevaOpcion({ titulo: "", descripcion: "" }); }}
                          className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-100 text-blue-800 hover:bg-blue-200">
                          {isEdit ? "Cerrar" : "✏️ Editar"}
                        </button>
                      </div>
                    </div>
                    {isEdit && (
                      <div className="p-5 bg-blue-50 border-b space-y-3">
                        <input value={editTitulo} onChange={e => setEditTitulo(e.target.value)} className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="Título" />
                        <input value={editDesc} onChange={e => setEditDesc(e.target.value)} className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="Descripción" />
                        <button onClick={() => updateModulo(m.id, { titulo: editTitulo, descripcion: editDesc })}
                          className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg font-semibold hover:bg-blue-700">Guardar</button>

                        {m.tipo === "plancha" && (
                          <div>
                            <h4 className="font-semibold text-sm text-gray-700 mb-2">Planchas:</h4>
                            {(m.opciones || []).map((op, i) => (
                              <div key={op.id} className="flex items-start gap-2 bg-white rounded-lg p-2 border text-sm mb-1">
                                <div className="flex-1"><span className="font-semibold">Plancha {i + 1}:</span> {op.nombre}{op.miembros && <div className="text-gray-500 text-xs">{op.miembros}</div>}</div>
                                <button onClick={() => removePlancha(m.id, op.id)} className="text-red-500 text-xs font-bold">✕</button>
                              </div>
                            ))}
                            <div className="bg-white rounded-lg p-3 border space-y-2 mt-2">
                              <input value={nuevaPlancha.nombre} onChange={e => setNuevaPlancha(n => ({ ...n, nombre: e.target.value }))} placeholder="Nombre plancha" className="w-full border rounded px-3 py-2 text-sm" />
                              <textarea value={nuevaPlancha.miembros} onChange={e => setNuevaPlancha(n => ({ ...n, miembros: e.target.value }))} placeholder="Miembros..." rows={2} className="w-full border rounded px-3 py-2 text-sm resize-none" />
                              <button onClick={() => addPlancha(m.id)} className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg font-semibold hover:bg-green-700">+ Agregar plancha</button>
                            </div>
                          </div>
                        )}
                        {(m.tipo === "libre" || m.tipo === "reforma") && (
                          <div>
                            <h4 className="font-semibold text-sm text-gray-700 mb-2">Opciones de votación (SÍ/NO/BLANCO):</h4>
                            {(m.opciones || []).map(op => (
                              <div key={op.id} className="flex items-start gap-2 bg-white rounded-lg p-2 border text-sm mb-1">
                                <div className="flex-1"><span className="font-semibold">{op.titulo || op.texto}</span>{op.descripcion && <div className="text-gray-500 text-xs">{op.descripcion}</div>}</div>
                                <button onClick={() => removeOpcion(m.id, op.id)} className="text-red-500 text-xs font-bold">✕</button>
                              </div>
                            ))}
                            <div className="bg-white rounded-lg p-3 border space-y-2 mt-2">
                              <input value={nuevaOpcion.titulo} onChange={e => setNuevaOpcion(n => ({ ...n, titulo: e.target.value }))} placeholder="Título propuesta" className="w-full border rounded px-3 py-2 text-sm" />
                              <input value={nuevaOpcion.descripcion} onChange={e => setNuevaOpcion(n => ({ ...n, descripcion: e.target.value }))} placeholder="Descripción (opcional)" className="w-full border rounded px-3 py-2 text-sm" />
                              <button onClick={() => addOpcion(m.id)} className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg font-semibold hover:bg-green-700">+ Agregar opción</button>
                            </div>
                          </div>
                        )}
                        {m.tipo === "opcion_multiple" && (
                          <div>
                            <h4 className="font-semibold text-sm text-gray-700 mb-2">Opciones de selección única:</h4>
                            {(m.opciones || []).map(op => (
                              <div key={op.id} className="flex items-start gap-2 bg-white rounded-lg p-2 border text-sm mb-1">
                                <div className="flex-1">🔘 <span className="font-semibold">{op.texto || op.titulo}</span></div>
                                <button onClick={() => removeOpcion(m.id, op.id)} className="text-red-500 text-xs font-bold">✕</button>
                              </div>
                            ))}
                            <div className="bg-white rounded-lg p-3 border space-y-2 mt-2">
                              <input value={nuevaOpcion.titulo} onChange={e => setNuevaOpcion(n => ({ ...n, titulo: e.target.value }))} placeholder="Texto de la opción" className="w-full border rounded px-3 py-2 text-sm" />
                              <button onClick={async () => {
                                if (!nuevaOpcion.titulo.trim()) return;
                                const newOpciones = [...(modulos[m.id].opciones || []), { id: "op_" + Date.now(), texto: nuevaOpcion.titulo }];
                                await updateModulo(m.id, { opciones: newOpciones });
                                setNuevaOpcion({ titulo: "", descripcion: "" });
                              }} className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg font-semibold hover:bg-green-700">+ Agregar opción</button>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    <div className="px-5 py-3">
                      <ProgressBar value={Object.keys(m.votos || {}).length} total={totalDelegados} color={m.activa ? "blue" : "gray"} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {vista === "delegados" && (
          <div>
            <h2 className="text-blue-950 font-bold text-xl mb-4">Registro de delegados</h2>
            <p className="text-gray-600 text-sm mb-4">Asigna cédulas y activa/desactiva suplentes cuando reemplacen a un principal.</p>
            {["SEGURIDAD", "AVIACION", "DIR. ÁREA NEGOCIOS 1", "DIR. ÁREA NEGOCIOS 2", "DIR. ÁREA NEGOCIOS 3", "ADMINISTRATIVOS"].map(zona => (
              <div key={zona} className="mb-5">
                <h3 className="font-bold text-blue-900 text-sm mb-2 bg-blue-50 px-3 py-1.5 rounded-lg inline-block uppercase tracking-wide">{zona}</h3>
                <div className="bg-white rounded-xl border overflow-hidden">
                  <table className="w-full text-sm">
                    <thead><tr className="bg-gray-50 border-b text-xs text-gray-500 uppercase">
                      <th className="px-4 py-2 text-left">N°</th><th className="px-4 py-2 text-left">Nombre</th>
                      <th className="px-4 py-2 text-left">Ciudad</th><th className="px-4 py-2 text-left">Tipo</th>
                      <th className="px-4 py-2 text-left">Cédula</th><th className="px-4 py-2 text-center">Estado</th>
                    </tr></thead>
                    <tbody>
                      {delegados.filter(d => d.zona === zona).map(d => (
                        <tr key={d.id} className={`border-b last:border-0 ${d.activo === false ? "opacity-50 bg-gray-50" : ""}`}>
                          <td className="px-4 py-2 text-gray-400">{d.id}</td>
                          <td className="px-4 py-2 font-medium text-gray-900 text-xs">{d.nombre}</td>
                          <td className="px-4 py-2 text-gray-500 text-xs">{d.ciudad}</td>
                          <td className="px-4 py-2"><Badge color={d.tipo === "PRINCIPAL" ? "blue" : "yellow"}>{d.tipo}</Badge></td>
                          <td className="px-4 py-2">
                            <input value={d.cedula || ""} onChange={e => updateDelegado({ ...d, cedula: e.target.value })}
                              placeholder="Cédula" className="border rounded px-2 py-1 text-xs font-mono w-32 focus:outline-none focus:ring-1 focus:ring-blue-400" />
                          </td>
                          <td className="px-4 py-2 text-center">
                            <button onClick={() => updateDelegado({ ...d, activo: d.activo === false ? true : false })}
                              className={`px-2 py-0.5 rounded-full text-xs font-semibold ${d.activo === false ? "bg-gray-200 text-gray-600" : "bg-green-100 text-green-700"}`}>
                              {d.activo === false ? "Inactivo" : "Activo"}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}

        {vista === "resultados" && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-blue-950 font-bold text-xl">Resultados en tiempo real</h2>
              <button onClick={exportar} className="px-4 py-2 bg-blue-900 text-white text-sm rounded-xl font-semibold hover:bg-blue-800">📥 Exportar</button>
            </div>
            <div className="space-y-5">
              {Object.values(modulos).map(m => {
                const totalVotos = Object.keys(m.votos || {}).length;
                const r = getResultados(m);
                return (
                  <div key={m.id} className="bg-white rounded-2xl border shadow-sm p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div><div className="font-bold text-gray-900">{m.titulo}</div><div className="text-gray-500 text-xs">{totalVotos} / {totalDelegados} votos</div></div>
                      {m.cerrada ? <Badge color="green">Cerrada ✓</Badge> : m.activa ? <Badge color="blue">En curso</Badge> : <Badge color="gray">Pendiente</Badge>}
                    </div>
                    {(m.tipo === "plancha" || m.tipo === "opcion_multiple") && totalVotos > 0 && (
                      <div className="space-y-2">
                        {Object.entries(r).map(([k, v]) => {
                          const op = m.opciones?.find(o => o.id === k);
                          return (
                            <div key={k}>
                              <div className="text-sm font-medium text-gray-700 mb-1">{op ? (op.nombre || op.texto) : (k === "blanco" ? "Voto en blanco" : k)}</div>
                              <ProgressBar value={v} total={totalVotos} color="red" />
                            </div>
                          );
                        })}
                      </div>
                    )}
                    {(m.tipo === "reforma" || m.tipo === "libre") && totalVotos > 0 && (
                      <div className="space-y-3">
                        {m.opciones?.map(op => {
                          const res = r[op.id] || { SI: 0, NO: 0, BLANCO: 0 };
                          const tot = res.SI + res.NO + res.BLANCO;
                          return (
                            <div key={op.id} className="bg-gray-50 rounded-xl p-3">
                              <div className="font-semibold text-sm text-gray-800 mb-2">{op.titulo || op.texto}</div>
                              <div className="grid grid-cols-3 gap-2">
                                {[["SÍ", res.SI, "green"], ["NO", res.NO, "red"], ["BLANCO", res.BLANCO, "gray"]].map(([lbl, val, col]) => (
                                  <div key={lbl} className={`rounded-lg p-2 text-center border ${col === "green" ? "bg-green-50 border-green-200" : col === "red" ? "bg-red-50 border-red-200" : "bg-gray-100 border-gray-200"}`}>
                                    <div className={`text-2xl font-black ${col === "green" ? "text-green-700" : col === "red" ? "text-red-700" : "text-gray-600"}`}>{val}</div>
                                    <div className="text-xs font-semibold text-gray-500">{lbl}</div>
                                    <div className="text-xs text-gray-400">{tot > 0 ? Math.round(val / tot * 100) : 0}%</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                    {totalVotos === 0 && <div className="text-gray-400 text-sm text-center py-4">Sin votos registrados aún</div>}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── LOGIN ADMIN ──────────────────────────────────────────────────────────────
function LoginAdmin({ onLogin, onVolver }) {
  const [pass, setPass] = useState(""); const [error, setError] = useState("");
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-6">
          <img src={LOGO_URL} alt="Fonsecuritas" className="h-16 object-contain bg-white rounded-xl px-4 py-2 mx-auto mb-3" />
          <h2 className="text-white text-xl font-bold">Acceso Administrador</h2>
        </div>
        <div className="bg-white/10 backdrop-blur rounded-2xl border border-white/20 p-6">
          <label className="text-blue-200 text-sm font-semibold block mb-2">Contraseña</label>
          <input type="password" value={pass} onChange={e => { setPass(e.target.value); setError(""); }}
            onKeyDown={e => e.key === "Enter" && (pass === ADMIN_PASSWORD ? (setError(""), onLogin()) : setError("Contraseña incorrecta"))}
            className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-blue-400" placeholder="••••••••" />
          {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
          <button onClick={() => pass === ADMIN_PASSWORD ? (setError(""), onLogin()) : setError("Contraseña incorrecta")}
            className="mt-4 w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl">Ingresar</button>
          <button onClick={onVolver} className="mt-2 w-full py-2 text-blue-300 text-sm hover:text-white">← Volver</button>
        </div>
      </div>
    </div>
  );
}

// ─── PANTALLA PÚBLICA ─────────────────────────────────────────────────────────
function PantallaPublica({ modulos, delegados, onVolver }) {
  const totalDelegados = delegados.filter(d => d.activo !== false).length;
  const activos = Object.values(modulos).filter(m => m.activa || m.cerrada);

  const getResultados = (m) => {
    if (!m.votos) return {};
    if (m.tipo === "plancha" || m.tipo === "opcion_multiple") {
      const conteo = {};
      Object.values(m.votos).forEach(v => { const op = v.plancha || v.opcion || "blanco"; conteo[op] = (conteo[op] || 0) + 1; });
      return conteo;
    }
    const conteo = {};
    m.opciones?.forEach(op => {
      conteo[op.id] = { SI: 0, NO: 0, BLANCO: 0 };
      Object.values(m.votos).forEach(v => { if (v[op.id]) conteo[op.id][v[op.id]] = (conteo[op.id][v[op.id]] || 0) + 1; });
    });
    return conteo;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <div className="bg-white/10 backdrop-blur border-b border-white/20 px-6 py-4 text-center">
        <img src={LOGO_URL} alt="Fonsecuritas" className="h-12 object-contain bg-white rounded-xl px-4 py-1.5 mx-auto mb-2" />
        <div className="text-white text-2xl font-black">ASAMBLEA GENERAL FONSECURITAS 2026</div>
        <div className="text-blue-300 text-sm">Resultados en tiempo real</div>
      </div>
      <div className="max-w-5xl mx-auto p-6">
        {activos.length === 0 && <div className="text-center text-blue-200 py-20 text-xl">⏳ Esperando inicio de votaciones...</div>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {activos.map(m => {
            const totalVotos = Object.keys(m.votos || {}).length;
            const r = getResultados(m);
            return (
              <div key={m.id} className="bg-white/10 backdrop-blur rounded-2xl border border-white/20 p-5">
                <div className="flex items-start justify-between mb-3">
                  <div><div className="text-white font-bold">{m.titulo}</div><div className="text-blue-200 text-xs">{totalVotos}/{totalDelegados} votos</div></div>
                  {m.cerrada ? <Badge color="green">Cerrada ✓</Badge> : <Badge color="blue">En curso</Badge>}
                </div>
                <ProgressBar value={totalVotos} total={totalDelegados} color="red" />
                {(m.tipo === "plancha" || m.tipo === "opcion_multiple") && totalVotos > 0 && (
                  <div className="mt-3 space-y-1.5">
                    {Object.entries(r).map(([k, v]) => {
                      const op = m.opciones?.find(o => o.id === k);
                      return (
                        <div key={k}>
                          <div className="text-blue-100 text-xs mb-0.5">{op ? (op.nombre || op.texto) : (k === "blanco" ? "Voto en blanco" : k)}</div>
                          <ProgressBar value={v} total={totalVotos} color="red" />
                        </div>
                      );
                    })}
                  </div>
                )}
                {(m.tipo === "reforma" || m.tipo === "libre") && totalVotos > 0 && (
                  <div className="mt-3 space-y-2">
                    {m.opciones?.map(op => {
                      const res = r[op.id] || { SI: 0, NO: 0, BLANCO: 0 };
                      return (
                        <div key={op.id} className="bg-white/5 rounded-lg p-2">
                          <div className="text-blue-100 text-xs font-semibold mb-1.5">{op.titulo || op.texto}</div>
                          <div className="grid grid-cols-3 gap-1 text-center">
                            {[["SÍ", res.SI, "text-green-400"], ["NO", res.NO, "text-red-400"], ["BLANCO", res.BLANCO, "text-gray-400"]].map(([lbl, val, cls]) => (
                              <div key={lbl}><div className={`font-black text-xl ${cls}`}>{val}</div><div className="text-xs text-blue-200">{lbl}</div></div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <button onClick={onVolver} className="fixed bottom-4 right-4 px-3 py-2 bg-blue-900 text-white text-xs rounded-lg opacity-60 hover:opacity-100">← Inicio</button>
    </div>
  );
}

// ─── INICIO ───────────────────────────────────────────────────────────────────
function PantallaInicio({ onVotante, onAdmin, onPublico }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        <img src={LOGO_URL} alt="Fonsecuritas" className="h-24 object-contain bg-white rounded-2xl px-6 py-3 mx-auto mb-6 shadow-2xl" />
        <h1 className="text-white text-3xl font-black tracking-wide mb-1">ASAMBLEA GENERAL</h1>
        <h2 className="text-red-400 text-2xl font-black mb-2">FONSECURITAS 2026</h2>
        <p className="text-blue-300 text-sm mb-8">Sistema Digital de Votación — Asamblea Mixta Presencial/Virtual</p>
        <div className="space-y-3">
          <button onClick={onVotante} className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl text-lg shadow-lg transition-all hover:scale-105">🗳️ Soy delegado — Votar</button>
          <button onClick={onPublico} className="w-full py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-2xl transition-all">📊 Ver resultados en pantalla</button>
          <button onClick={onAdmin} className="w-full py-3 bg-transparent hover:bg-white/10 border border-white/20 text-blue-300 hover:text-white text-sm font-semibold rounded-2xl transition-all">⚙️ Panel administrador</button>
        </div>
        <p className="text-blue-500 text-xs mt-6">Para votación virtual: comparte el enlace de este dashboard con los delegados remotos</p>
      </div>
    </div>
  );
}

// ─── APP PRINCIPAL ────────────────────────────────────────────────────────────
export default function App() {
  const [pantalla, setPantalla] = useState("inicio");
  const [adminLogueado, setAdminLogueado] = useState(false);
  const [delegadoActivo, setDelegadoActivo] = useState(null);
  const [modulos, setModulos] = useState(MODULOS_INICIALES);
  const [delegados, setDelegados] = useState(DELEGADOS_INICIALES);
  const [loading, setLoading] = useState(true);
  const intervalRef = useRef(null);

  // Carga inicial y polling cada 3 segundos
  useEffect(() => {
    const init = async () => {
      await initDB(MODULOS_INICIALES, DELEGADOS_INICIALES);
      const [mods, dels] = await Promise.all([fetchModulos(), fetchDelegados()]);
      if (mods) setModulos(mods);
      if (dels.length > 0) setDelegados(dels);
      setLoading(false);
    };
    init();
    intervalRef.current = setInterval(async () => {
      const [mods, dels] = await Promise.all([fetchModulos(), fetchDelegados()]);
      if (mods) setModulos(mods);
      if (dels.length > 0) setDelegados(dels);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleVotar = async (moduloId, delegadoId, seleccion) => {
    const modulo = modulos[moduloId];
    const nuevosVotos = { ...(modulo.votos || {}), [delegadoId]: seleccion };
    const updated = { ...modulo, votos: nuevosVotos };
    setModulos(m => ({ ...m, [moduloId]: updated }));
    await saveModulo(updated);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-white text-4xl mb-4 animate-spin">⚙️</div>
          <div className="text-white text-xl font-bold">Conectando con Supabase...</div>
          <div className="text-blue-300 text-sm mt-2">Cargando datos de la asamblea</div>
        </div>
      </div>
    );
  }

  if (pantalla === "admin_login") return <LoginAdmin onLogin={() => { setAdminLogueado(true); setPantalla("admin"); }} onVolver={() => setPantalla("inicio")} />;
  if (pantalla === "admin" && adminLogueado) return <PanelAdmin modulos={modulos} setModulos={setModulos} delegados={delegados} setDelegados={setDelegados} onExit={() => { setAdminLogueado(false); setPantalla("inicio"); }} />;
  if (pantalla === "login_votante") return <LoginDelegado delegados={delegados.filter(d => d.activo !== false)} onLogin={d => { setDelegadoActivo(d); setPantalla("votacion"); }} />;
  if (pantalla === "votacion" && delegadoActivo) return <PantallaVotacion modulos={modulos} delegado={delegadoActivo} onVotar={handleVotar} onExit={() => { setDelegadoActivo(null); setPantalla("inicio"); }} />;
  if (pantalla === "publico") return <PantallaPublica modulos={modulos} delegados={delegados} onVolver={() => setPantalla("inicio")} />;

  return <PantallaInicio onVotante={() => setPantalla("login_votante")} onAdmin={() => setPantalla("admin_login")} onPublico={() => setPantalla("publico")} />;
}
