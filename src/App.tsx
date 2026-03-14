// @ts-nocheck
import { useState, useEffect, useRef } from "react";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://vuefojhztkzhdspwtjjq.supabase.co";
const SUPABASE_KEY = "sb_publishable_PoT-Y_jSM8E9Itbzc0OiUw_scTqTO1Q";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const LOGO_URL = "/logo.jpeg";

const DELEGADOS_INICIALES = [
  { id: 1, cedula: "", ciudad: "BOGOTA", nombre: "SANCHEZ PEREZ DEISY MARCELA", tipo: "PRINCIPAL" },
  { id: 2, cedula: "", ciudad: "BOGOTA", nombre: "PINZON CASTILLO RICHARD JHEYN", tipo: "PRINCIPAL" },
  { id: 3, cedula: "", ciudad: "BARRANQUILLA", nombre: "CARO ESCOBAR DIGNA", tipo: "PRINCIPAL" },
  { id: 4, cedula: "", ciudad: "BOGOTA", nombre: "ORTEGA MORENO JESUS ALBERTO", tipo: "PRINCIPAL" },
  { id: 5, cedula: "", ciudad: "BOGOTA", nombre: "LOZANO PEREA ASAEL", tipo: "PRINCIPAL" },
  { id: 6, cedula: "", ciudad: "BOGOTA", nombre: "TRUJILLO FRANCO CLAUDIA MILENA", tipo: "SUPLENTE" },
  { id: 7, cedula: "", ciudad: "BOGOTA", nombre: "VARGAS HOLGUIN JESUS DAVID", tipo: "SUPLENTE" },
  { id: 8, cedula: "", ciudad: "BOGOTA", nombre: "COMBITA MENDIETA MARTHA LILIANA", tipo: "SUPLENTE" },
  { id: 9, cedula: "", ciudad: "BOGOTA", nombre: "AHUMADA CABARCAS LUIS ALBERTO", tipo: "PRINCIPAL" },
  { id: 10, cedula: "", ciudad: "CUCUTA", nombre: "FLOREZ MONSALVE DIEGO ALEJANDRO", tipo: "PRINCIPAL" },
  { id: 11, cedula: "", ciudad: "CUCUTA", nombre: "TORRADO PRADA JORGE ANTONIO", tipo: "PRINCIPAL" },
  { id: 12, cedula: "", ciudad: "BARRANQUILLA", nombre: "SILVA JARAMILLO WILGEN RAFAEL", tipo: "PRINCIPAL" },
  { id: 13, cedula: "", ciudad: "MEDELLIN", nombre: "GARCES GOMEZ CLAUDIA PATRICIA", tipo: "PRINCIPAL" },
  { id: 14, cedula: "", ciudad: "CALI", nombre: "BUITRAGO HERNANDEZ CARLOS ANDRES", tipo: "PRINCIPAL" },
  { id: 15, cedula: "", ciudad: "CALI", nombre: "CALLES VILLANEDA FRANCISCO ANTONIO", tipo: "PRINCIPAL" },
  { id: 16, cedula: "", ciudad: "BOGOTA", nombre: "GUERRA SALGADO ONARLY SEGUNDO", tipo: "PRINCIPAL" },
  { id: 17, cedula: "", ciudad: "BOGOTA", nombre: "GALINDO TAVERA MALGENIN", tipo: "PRINCIPAL" },
  { id: 18, cedula: "", ciudad: "BUCARAMANGA", nombre: "CACERES DELGADO EVA CAROLINA", tipo: "PRINCIPAL" },
  { id: 19, cedula: "", ciudad: "MEDELLIN", nombre: "RAMIREZ DUQUE SANDRA MILENA", tipo: "PRINCIPAL" },
  { id: 20, cedula: "", ciudad: "BOGOTA", nombre: "SERNA SERNA LUZ ENELIDA", tipo: "PRINCIPAL" },
  { id: 21, cedula: "", ciudad: "BOGOTA", nombre: "ROJAS ORTIZ SANDRA LUCIA", tipo: "PRINCIPAL" },
  { id: 22, cedula: "", ciudad: "BOGOTA", nombre: "VARGAS NOVA NELSON JOAQUIN", tipo: "PRINCIPAL" },
  { id: 23, cedula: "", ciudad: "BOGOTA", nombre: "ANDRADE MONTANEZ CARLOS ANDRES", tipo: "PRINCIPAL" },
  { id: 24, cedula: "", ciudad: "BOGOTA", nombre: "RENGIFO RENGIFO GUILLERMO", tipo: "PRINCIPAL" },
  { id: 25, cedula: "", ciudad: "BOGOTA", nombre: "AGUDELO MORALES WILLINGTON HERNAN", tipo: "PRINCIPAL" },
  { id: 26, cedula: "", ciudad: "BOGOTA", nombre: "RODRIGUEZ BOHORQUEZ CESAR AUGUSTO", tipo: "PRINCIPAL" },
  { id: 27, cedula: "", ciudad: "BOGOTA", nombre: "QUIROGA PRIETO MARCELINO", tipo: "PRINCIPAL" },
  { id: 28, cedula: "", ciudad: "LA CALERA", nombre: "CIFUENTES RODRIGUEZ WILMAR ORLANDO", tipo: "PRINCIPAL" },
  { id: 29, cedula: "", ciudad: "BOGOTA", nombre: "ROA ROZO DANIEL RICARDO", tipo: "PRINCIPAL" },
  { id: 30, cedula: "", ciudad: "BOGOTA", nombre: "CANTILLO URINA SANTIAGO", tipo: "PRINCIPAL" },
  { id: 31, cedula: "", ciudad: "DUITAMA", nombre: "CARDENAS COLINA DIEGO FERNANDO", tipo: "PRINCIPAL" },
  { id: 32, cedula: "", ciudad: "BOGOTA", nombre: "ORTIZ SIERRA OSCAR MAURICIO", tipo: "PRINCIPAL" },
  { id: 33, cedula: "", ciudad: "BOGOTA", nombre: "PINTO BUCURU HERMINSO", tipo: "PRINCIPAL" },
  { id: 34, cedula: "", ciudad: "BOGOTA", nombre: "BARBOSA CRUZ ANDRES FELIPE", tipo: "PRINCIPAL" },
  { id: 35, cedula: "", ciudad: "BOGOTA", nombre: "PATINO QUINTANA JOSE SAUL", tipo: "PRINCIPAL" },
  { id: 36, cedula: "", ciudad: "BOGOTA", nombre: "MONTENEGRO PERILLA ANA CECILIA", tipo: "PRINCIPAL" },
  { id: 37, cedula: "", ciudad: "BOGOTA", nombre: "VITONCO PENA FRANCIA ESTELLA", tipo: "PRINCIPAL" },
  { id: 38, cedula: "", ciudad: "BOGOTA", nombre: "TORRES PINEDA MARIA LINETH", tipo: "PRINCIPAL" },
  { id: 39, cedula: "", ciudad: "BOGOTA", nombre: "PARADA POLANIA JHON JAIRO", tipo: "PRINCIPAL" },
  { id: 40, cedula: "", ciudad: "BOGOTA", nombre: "ALFEREZ ALVARO", tipo: "PRINCIPAL" },
];

const REFORMA_PENSIONADOS = [
  { id: "ref_art12", titulo: "Art. 12 — Vínculo de asociación", descripcion: "Determinación del vínculo de asociación y requisitos de ingreso – Incluye pensionados y nuevos requisitos SARLAFT/DIAN" },
  { id: "ref_art15", titulo: "Art. 15 — Pérdida del carácter de asociado", descripcion: "Nuevas causales por riesgo financiero, jurídico y tributario" },
  { id: "ref_art17", titulo: "Art. 17 — Reingreso posterior a renuncia", descripcion: "Nuevos requisitos y controles de residencia fiscal" },
  { id: "ref_art18", titulo: "Art. 18 — Desvinculación de entidad empleadora", descripcion: "Permanencia de pensionados conforme a Ley 496/1999" },
];
const REFORMA_APORTES = [
  { id: "ref_art32", titulo: "Art. 32 — Distribución de aportes", descripcion: "Compromiso económico de los asociados – Cambio distribución aportes de 20/80 a 50/50" },
];
const REFORMA_REQUISITOS_JUNTA = [
  { id: "ref_art55", titulo: "Art. 55 — Requisitos Junta Directiva", descripcion: "Requisitos e idoneidad para ser miembro de la Junta Directiva" },
  { id: "ref_art68", titulo: "Art. 68 — Requisitos Comité de Control Social", descripcion: "Requisitos e idoneidad para ser miembro del Comité de Control Social" },
];
const REFORMA_GERENTE = [
  { id: "ref_art60", titulo: "Art. 60 — Requisitos del Gerente", descripcion: "Requisitos e idoneidad para el cargo de Gerente" },
  { id: "ref_art61", titulo: "Art. 61 — Evaluación del Gerente", descripcion: "Evaluación de desempeño y rendición de cuentas del Gerente" },
  { id: "ref_art63", titulo: "Art. 63 — Causales de remoción del Gerente", descripcion: "Causales de remoción del Gerente – Profesionalización y rendición de cuentas" },
];
const REFORMA_GOBIERNO = [
  { id: "ref_art99", titulo: "Art. 99 — Gobierno corporativo y ética", descripcion: "Gobierno corporativo, ética y conflictos de interés" },
  { id: "ref_art110", titulo: "Art. 110 — Código de Buen Gobierno", descripcion: "Código de Buen Gobierno – Conflictos de interés y transparencia" },
];
const REFORMA_INSOLVENCIA = [
  { id: "ref_art124", titulo: "Art. 124 — Régimen de insolvencia", descripcion: "Reconocimiento del régimen de insolvencia (Ley 2445/2025) y sus efectos" },
  { id: "ref_art125", titulo: "Art. 125 — Efectos de la insolvencia", descripcion: "Efectos del régimen de insolvencia sobre los asociados y el fondo" },
];
const VOTACIONES_BIENESTAR = [
  { id: "bienA", texto: "Viaje / Paseo grupal de integración" },
  { id: "bienB", texto: "Evento cultural / recreativo en sede" },
  { id: "bienC", texto: "Actividad deportiva (olimpiadas internas)" },
];
const AUXILIOS_SOLIDARIOS = [
  { id: "aux1", titulo: "Auxilio de calamidad por salud", descripcion: "Implementar un nuevo auxilio solidario para calamidades de salud de los asociados" },
  { id: "aux2", titulo: "Auxilio por nacimiento de hijo", descripcion: "Implementar un nuevo auxilio solidario por nacimiento de hijo de los asociados" },
  { id: "aux3", titulo: "Eliminación de regalo para jóvenes 12-17 años", descripcion: "Que no se entregue el regalo navideño a hijos de asociados entre 12 y 17 años" },
];
const ADMIN_PASSWORD = "Fonse2025";
const OPCIONES_ORDEN_DIA = [{ id: "od1", titulo: "Aprobación del Orden del Día", descripcion: "Aprobación del orden del día presentado por la mesa directiva" }];
const OPCIONES_REGLAMENTO = [{ id: "rg1", titulo: "Aprobación del Reglamento de la Asamblea", descripcion: "Lectura y aprobación del reglamento que regirá el desarrollo de la Asamblea General 2026" }];
const OPCIONES_COMISIONES = [
  { id: "com1", titulo: "Comisión de Revisión y Aprobación del Acta (3 miembros)", descripcion: "Comisión encargada de revisar y aprobar el acta de la asamblea" },
  { id: "com2", titulo: "Comisión de Clasificación y Enumeración de Proposiciones (2 miembros)", descripcion: "Comisión encargada de clasificar y enumerar las proposiciones presentadas" },
  { id: "com3", titulo: "Comisión de Escrutinios (2 miembros)", descripcion: "Comisión encargada de verificar y validar los resultados de las votaciones" },
];
const OPCIONES_ESTADOS_FINANCIEROS = [{ id: "ef1", titulo: "Aprobación de Estados Financieros 2025", descripcion: "Aprobación de los estados financieros con corte a 31 de diciembre de 2025" }];
const OPCIONES_EXCEDENTES = [{ id: "ex1", titulo: "Aprobación del proyecto de distribución de excedentes 2025", descripcion: "Aprobación del proyecto de distribución de excedentes del ejercicio 2025" }];

const MODULOS_INICIALES = {
  ordenDia: { id: "ordenDia", orden: 1, titulo: "Aprobación del Orden del Día", descripcion: "Aprobación del orden del día de la Asamblea General 2026", tipo: "reforma", opciones: OPCIONES_ORDEN_DIA, activa: false, cerrada: false, votos: {} },
  mesaDirectiva: { id: "mesaDirectiva", orden: 2, titulo: "Elección Mesa Directiva", descripcion: "Elección del Presidente, Vicepresidente y Secretario de la Asamblea 2026", tipo: "plancha", opciones: [], activa: false, cerrada: false, votos: {} },
  reglamento: { id: "reglamento", orden: 3, titulo: "Aprobación del Reglamento", descripcion: "Lectura y aprobación del Reglamento de la Asamblea General 2026", tipo: "reforma", opciones: OPCIONES_REGLAMENTO, activa: false, cerrada: false, votos: {} },
  comisiones: { id: "comisiones", orden: 4, titulo: "Elección de Comisiones", descripcion: "Elección de las tres comisiones de trabajo de la Asamblea 2026", tipo: "reforma", opciones: OPCIONES_COMISIONES, activa: false, cerrada: false, votos: {} },
  estadosFinancieros: { id: "estadosFinancieros", orden: 5, titulo: "Aprobación Estados Financieros 2025", descripcion: "Aprobación de estados financieros con corte a 31 de diciembre de 2025", tipo: "reforma", opciones: OPCIONES_ESTADOS_FINANCIEROS, activa: false, cerrada: false, votos: {} },
  excedentes: { id: "excedentes", orden: 6, titulo: "Distribución de Excedentes 2025", descripcion: "Aprobación del proyecto de distribución de excedentes del ejercicio 2025", tipo: "reforma", opciones: OPCIONES_EXCEDENTES, activa: false, cerrada: false, votos: {} },
  refPensionados: { id: "refPensionados", orden: 7, titulo: "Reforma Estatutaria — Pensionados", descripcion: "Arts. 12, 15, 17 y 18 — Vínculo de asociación, pérdida de calidad, reingreso y desvinculación", tipo: "reforma", opciones: REFORMA_PENSIONADOS, activa: false, cerrada: false, votos: {} },
  refAportes: { id: "refAportes", orden: 8, titulo: "Reforma Estatutaria — Distribución de Aportes", descripcion: "Art. 32 — Cambio en la distribución de aportes de 20/80 a 50/50", tipo: "reforma", opciones: REFORMA_APORTES, activa: false, cerrada: false, votos: {} },
  refRequisitosJunta: { id: "refRequisitosJunta", orden: 9, titulo: "Reforma Estatutaria — Requisitos Junta y Comité", descripcion: "Arts. 55 y 68 — Requisitos para ser miembro de Junta Directiva y Comité de Control Social", tipo: "reforma", opciones: REFORMA_REQUISITOS_JUNTA, activa: false, cerrada: false, votos: {} },
  refGerente: { id: "refGerente", orden: 10, titulo: "Reforma Estatutaria — Cargo de Gerente", descripcion: "Arts. 60, 61 y 63 — Condiciones, evaluación y causales de remoción del Gerente", tipo: "reforma", opciones: REFORMA_GERENTE, activa: false, cerrada: false, votos: {} },
  refGobierno: { id: "refGobierno", orden: 11, titulo: "Reforma Estatutaria — Gobierno Corporativo", descripcion: "Arts. 99 y 110 — Gobierno corporativo, ética y conflictos de interés", tipo: "reforma", opciones: REFORMA_GOBIERNO, activa: false, cerrada: false, votos: {} },
  refInsolvencia: { id: "refInsolvencia", orden: 12, titulo: "Reforma Estatutaria — Insolvencia", descripcion: "Arts. 124 y 125 — Régimen de insolvencia (Ley 2445/2025) y sus efectos", tipo: "reforma", opciones: REFORMA_INSOLVENCIA, activa: false, cerrada: false, votos: {} },
  juntaDirectiva: { id: "juntaDirectiva", orden: 13, titulo: "Elección Junta Directiva", descripcion: "Periodo 2026-2028 — Voto por plancha completa (3 principales + 3 suplentes)", tipo: "plancha", opciones: [], activa: false, cerrada: false, votos: {} },
  comiteControl: { id: "comiteControl", orden: 14, titulo: "Elección Comité de Control Social", descripcion: "Periodo 2026-2028 — Voto por plancha completa (3 principales + 3 suplentes)", tipo: "plancha", opciones: [], activa: false, cerrada: false, votos: {} },
  revisorFiscal: { id: "revisorFiscal", orden: 15, titulo: "Elección Revisor Fiscal", descripcion: "Periodo 2026-2028 — Órgano de fiscalización externa y asignación de honorarios", tipo: "plancha", opciones: [], activa: false, cerrada: false, votos: {} },
  bienestar: { id: "bienestar", orden: 16, titulo: "Actividad de Bienestar 2026", descripcion: "Selección de la actividad social del año", tipo: "opcion_multiple", opciones: VOTACIONES_BIENESTAR, activa: false, cerrada: false, votos: {} },
  auxiliosSolidarios: { id: "auxiliosSolidarios", orden: 17, titulo: "Proposiciones — Auxilios Solidarios", descripcion: "Votación sobre propuestas de nuevos auxilios y modificación de beneficios", tipo: "reforma", opciones: AUXILIOS_SOLIDARIOS, activa: false, cerrada: false, votos: {} },
  extra1: { id: "extra1", orden: 18, titulo: "Votación Extra 1", descripcion: "Propuesta surgida en asamblea — pendiente de definir", tipo: "libre", opciones: [], activa: false, cerrada: false, votos: {} },
  extra2: { id: "extra2", orden: 19, titulo: "Votación Extra 2", descripcion: "Propuesta surgida en asamblea — pendiente de definir", tipo: "libre", opciones: [], activa: false, cerrada: false, votos: {} },
};

async function initDB(modulos, delegados) {
  const { data: existingMods } = await supabase.from("modulos").select("id");
  const existingIds = (existingMods || []).map(m => m.id);
  const newMods = Object.values(modulos).filter(m => !existingIds.includes(m.id));
  if (newMods.length > 0) {
    await supabase.from("modulos").insert(newMods.map(m => ({ id: m.id, titulo: m.titulo, descripcion: m.descripcion, tipo: m.tipo, opciones: m.opciones, activa: m.activa, cerrada: m.cerrada, votos: m.votos, orden: m.orden || 99 })));
  }
  const { data: existingDels } = await supabase.from("delegados").select("id");
  if (!existingDels || existingDels.length === 0) {
    await supabase.from("delegados").insert(delegados.map(d => ({ ...d, activo: true })));
  }
}
async function fetchModulos() {
  const { data } = await supabase.from("modulos").select("*").order("orden", { ascending: true });
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
  await supabase.from("modulos").upsert({ id: modulo.id, titulo: modulo.titulo, descripcion: modulo.descripcion, tipo: modulo.tipo, opciones: modulo.opciones, activa: modulo.activa, cerrada: modulo.cerrada, votos: modulo.votos, orden: modulo.orden || 99 });
}
async function saveDelegado(delegado) {
  await supabase.from("delegados").upsert(delegado);
}
async function fetchQuorum() {
  try { const { data } = await supabase.from("quorum").select("*"); return data || []; } catch { return []; }
}
async function fetchQuorumConfig() {
  try { const { data } = await supabase.from("quorum_config").select("*").eq("id", 1).single(); return data || { id: 1, minimo: 21, abierto: false }; } catch { return { id: 1, minimo: 21, abierto: false }; }
}
async function saveQuorumConfig(config) {
  try { await supabase.from("quorum_config").upsert(config); } catch {}
}
async function registrarAsistencia(delegadoId, tipo) {
  await supabase.from("quorum").upsert({ delegado_id: delegadoId, tipo, hora: new Date().toISOString() });
}
async function limpiarQuorum() {
  try { await supabase.from("quorum").delete().neq("delegado_id", 0); } catch {}
}

const Badge = ({ children, color = "gray" }) => {
  const colors = { green: "bg-green-100 text-green-800 border-green-300", red: "bg-red-100 text-red-800 border-red-300", blue: "bg-blue-100 text-blue-800 border-blue-300", gray: "bg-gray-100 text-gray-700 border-gray-300", yellow: "bg-yellow-100 text-yellow-800 border-yellow-300" };
  return <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${colors[color]}`}>{children}</span>;
};
const ProgressBar = ({ value, total, color = "red" }) => {
  const pct = total > 0 ? Math.round((value / total) * 100) : 0;
  const colors = { red: "bg-red-600", blue: "bg-blue-800", green: "bg-green-600", gray: "bg-gray-400" };
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-gray-200 rounded-full h-3"><div className={`${colors[color]} h-3 rounded-full transition-all duration-700`} style={{ width: `${pct}%` }} /></div>
      <span className="text-xs font-bold text-gray-700 w-16 text-right">{value} ({pct}%)</span>
    </div>
  );
};

function PantallaVotacion({ modulos, delegado, onVotar, onExit }) {
  const [moduloActivo, setModuloActivo] = useState(null);
  const [seleccion, setSeleccion] = useState({});
  const [votado, setVotado] = useState(false);
  const [confirmar, setConfirmar] = useState(false);
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
          <div><div className="text-white font-bold text-lg">ASAMBLEA GENERAL 2026</div><div className="text-blue-200 text-sm">Panel de Votación</div></div>
        </div>
        <div className="text-right">
          <div className="text-white font-semibold text-sm">{delegado.nombre}</div>
          <div className="text-blue-200 text-xs">{delegado.ciudad} · {delegado.tipo}</div>
          <button onClick={onExit} className="text-xs text-red-300 hover:text-red-100 mt-1 underline">Cerrar sesión</button>
        </div>
      </div>
      <div className="flex-1 max-w-2xl mx-auto w-full px-4 py-6">
        {votado && <div className="bg-green-500 text-white rounded-xl p-4 mb-4 text-center font-bold animate-pulse">✅ ¡Voto registrado exitosamente!</div>}
        {!moduloActivo && !confirmar && (
          <div>
            <h2 className="text-white text-xl font-bold mb-4">📋 Votaciones disponibles</h2>
            {Object.values(modulos).filter(m => m.activa && !m.cerrada).length === 0 && (
              <div className="bg-white/10 rounded-xl p-8 text-center text-blue-200">
                <div className="text-4xl mb-2">⏳</div>
                <div className="font-semibold">No hay votaciones abiertas en este momento</div>
                <div className="text-sm mt-1">El administrador habilitará las votaciones conforme avance el orden del día</div>
              </div>
            )}
            <div className="space-y-3">
              {Object.values(modulos).sort((a,b) => (a.orden||99)-(b.orden||99)).map(m => {
                const abierto = m.activa && !m.cerrada;
                const yaVoto = yaVotoEnModulo(m.id);
                return (
                  <div key={m.id} className={`rounded-xl p-4 border transition-all ${abierto && !yaVoto ? "bg-white/15 border-blue-400 cursor-pointer hover:bg-white/25" : "bg-white/5 border-white/10"}`}
                    onClick={() => { if (abierto && !yaVoto) { setModuloActivo(m); setSeleccion({}); } }}>
                    <div className="flex items-start justify-between">
                      <div><div className="text-white font-semibold">{m.titulo}</div><div className="text-blue-200 text-xs mt-0.5">{m.descripcion}</div></div>
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

function ConfirmarAsistencia({ delegado, onConfirmar, onSaltar }) {
  const [tipo, setTipo] = useState(null);
  const [confirmado, setConfirmado] = useState(false);
  const handleConfirmar = async () => {
    if (!tipo) return;
    await registrarAsistencia(delegado.id, tipo);
    setConfirmado(true);
    setTimeout(() => onConfirmar(), 1500);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <img src={LOGO_URL} alt="Fonsecuritas" className="h-16 object-contain bg-white rounded-xl px-4 py-2 mx-auto mb-3" />
          <h2 className="text-white text-xl font-bold">Bienvenido, {delegado.nombre.split(" ")[0]}</h2>
          <p className="text-blue-300 text-sm">{delegado.ciudad} · {delegado.tipo}</p>
        </div>
        {confirmado ? (
          <div className="bg-green-600 rounded-2xl p-8 text-center text-white">
            <div className="text-5xl mb-3">✅</div>
            <div className="text-xl font-bold">¡Asistencia registrada!</div>
            <div className="text-sm opacity-80 mt-1">Redirigiendo...</div>
          </div>
        ) : (
          <div className="bg-white/10 backdrop-blur rounded-2xl border border-white/20 p-6">
            <h3 className="text-white font-bold text-center mb-4">¿Cómo estás participando hoy?</h3>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <button onClick={() => setTipo("presencial")} className={`py-4 rounded-xl border-2 font-bold transition-all ${tipo === "presencial" ? "border-green-400 bg-green-400/20 text-white" : "border-white/20 bg-white/5 text-white/60 hover:border-white/40"}`}>
                <div className="text-3xl mb-1">🏢</div><div>Presencial</div>
              </button>
              <button onClick={() => setTipo("virtual")} className={`py-4 rounded-xl border-2 font-bold transition-all ${tipo === "virtual" ? "border-blue-400 bg-blue-400/20 text-white" : "border-white/20 bg-white/5 text-white/60 hover:border-white/40"}`}>
                <div className="text-3xl mb-1">💻</div><div>Virtual</div>
              </button>
            </div>
            <button onClick={handleConfirmar} disabled={!tipo} className="w-full py-3 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white font-bold rounded-xl">Confirmar asistencia →</button>
            <button onClick={onSaltar} className="w-full py-2 text-blue-300 text-xs mt-2 hover:text-white">Saltar este paso (ya registrado)</button>
          </div>
        )}
      </div>
    </div>
  );
}

function LoginDelegado({ delegados, onLogin, soloAsistencia = false, onVolver = null }) {
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
            onKeyDown={e => e.key === "Enter" && handleLogin()} placeholder="Ingresa tu número de cédula"
            className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-blue-400 text-center text-lg font-mono tracking-widest" />
          {error && <p className="text-red-400 text-xs mt-2 text-center">{error}</p>}
          <button onClick={handleLogin} className="mt-4 w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all">
            {soloAsistencia ? "Confirmar asistencia →" : "Ingresar al sistema de votación"}
          </button>
          {onVolver && <button onClick={onVolver} className="mt-2 w-full py-2 text-blue-300 text-sm hover:text-white">← Volver al inicio</button>}
        </div>
        <p className="text-blue-400 text-xs text-center mt-4">Si tienes problemas para ingresar, acércate a la mesa directiva</p>
      </div>
    </div>
  );
}

function PanelAdmin({ modulos, setModulos, delegados, setDelegados, onExit }) {
  const [vista, setVista] = useState("dashboard");
  const [editando, setEditando] = useState(null);
  const [nuevaPlancha, setNuevaPlancha] = useState({ nombre: "", miembros: "" });
  const [nuevaOpcion, setNuevaOpcion] = useState({ titulo: "", descripcion: "" });
  const [editTitulo, setEditTitulo] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [editTipo, setEditTipo] = useState("");
  const [saving, setSaving] = useState(false);
  const [quorumLista, setQuorumLista] = useState([]);
  const [quorumConfig, setQuorumConfig] = useState({ id: 1, minimo: 21, abierto: false });
  const [quorumMinInput, setQuorumMinInput] = useState("21");

  useEffect(() => {
    fetchQuorum().then(setQuorumLista);
    fetchQuorumConfig().then(cfg => { setQuorumConfig(cfg); setQuorumMinInput(String(cfg.minimo)); });
    const iv = setInterval(() => {
      fetchQuorum().then(setQuorumLista);
      fetchQuorumConfig().then(cfg => { setQuorumConfig(cfg); setQuorumMinInput(String(cfg.minimo)); });
    }, 3000);
    return () => clearInterval(iv);
  }, []);

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
  const removePlancha = async (modId, opId) => { await updateModulo(modId, { opciones: modulos[modId].opciones.filter(o => o.id !== opId) }); };
  const addOpcion = async (modId) => {
    if (!nuevaOpcion.titulo.trim()) return;
    const newOpciones = [...(modulos[modId].opciones || []), { id: "op_" + Date.now(), ...nuevaOpcion }];
    await updateModulo(modId, { opciones: newOpciones });
    setNuevaOpcion({ titulo: "", descripcion: "" });
  };
  const removeOpcion = async (modId, opId) => { await updateModulo(modId, { opciones: modulos[modId].opciones.filter(o => o.id !== opId) }); };
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
    Object.values(modulos).sort((a,b)=>(a.orden||99)-(b.orden||99)).forEach(m => {
      const totalVotos = Object.keys(m.votos || {}).length;
      if (totalVotos === 0) return;
      lineas.push(`MÓDULO: ${m.titulo}`); lineas.push(`Total votos: ${totalVotos}`);
      const r = getResultados(m);
      if (m.tipo === "plancha" || m.tipo === "opcion_multiple") {
        Object.entries(r).forEach(([k, v]) => { const op = m.opciones?.find(o => o.id === k); lineas.push(`  ${op ? (op.nombre || op.texto) : k}: ${v}`); });
      } else {
        m.opciones?.forEach(op => { const res = r[op.id] || {}; lineas.push(`  ${op.titulo || op.texto}: SÍ=${res.SI||0}, NO=${res.NO||0}, BLANCO=${res.BLANCO||0}`); });
      }
      lineas.push("");
    });
    const blob = new Blob([lineas.join("\n")], { type: "text/plain" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "resultados_fonsecuritas_2026.txt"; a.click();
  };
  const nav = [{ id: "dashboard", label: "🏠 Dashboard" }, { id: "quorum", label: "✅ Quórum" }, { id: "modulos", label: "🗳️ Módulos" }, { id: "delegados", label: "👥 Delegados" }, { id: "resultados", label: "📊 Resultados" }];
  const sortedModulos = Object.values(modulos).sort((a,b) => (a.orden||99)-(b.orden||99));

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
      <div className="bg-blue-900 px-4 flex gap-1 overflow-x-auto">
        {nav.map(n => (
          <button key={n.id} onClick={() => setVista(n.id)}
            className={`px-4 py-2.5 text-sm font-semibold rounded-t-lg mt-1 transition-all whitespace-nowrap ${vista === n.id ? "bg-gray-50 text-blue-900" : "text-blue-200 hover:bg-white/10 hover:text-white"}`}>
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
              {sortedModulos.map(m => (
                <div key={m.id} className="bg-white rounded-xl border p-4 shadow-sm">
                  <div className="flex items-start justify-between mb-2">
                    <div><div className="font-bold text-gray-900 text-sm">{m.orden}. {m.titulo}</div><div className="text-gray-500 text-xs">{Object.keys(m.votos || {}).length} votos</div></div>
                    {m.cerrada ? <Badge color="green">Cerrada</Badge> : m.activa ? <Badge color="blue">Activa</Badge> : <Badge color="gray">Inactiva</Badge>}
                  </div>
                  <ProgressBar value={Object.keys(m.votos || {}).length} total={totalDelegados} color={m.activa ? "red" : "gray"} />
                </div>
              ))}
            </div>
          </div>
        )}

        {vista === "quorum" && (
          <div>
            <h2 className="text-blue-950 font-bold text-xl mb-4">Control de Quórum</h2>
            <div className="bg-white rounded-2xl border shadow-sm p-5 mb-5">
              <h3 className="font-bold text-gray-800 mb-3">⚙️ Configuración de quórum</h3>
              <div className="flex items-center gap-3 flex-wrap">
                <div>
                  <label className="text-sm text-gray-600 block mb-1">Mínimo de delegados requeridos</label>
                  <input type="number" value={quorumMinInput} onChange={e => setQuorumMinInput(e.target.value)} className="border rounded-lg px-3 py-2 text-sm w-24 font-mono text-center" />
                </div>
                <button onClick={async () => { const cfg = { ...quorumConfig, minimo: parseInt(quorumMinInput) || 21 }; setQuorumConfig(cfg); await saveQuorumConfig(cfg); }} className="mt-5 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg font-semibold hover:bg-blue-700">Guardar mínimo</button>
                <button onClick={async () => { const cfg = { ...quorumConfig, abierto: !quorumConfig.abierto }; setQuorumConfig(cfg); await saveQuorumConfig(cfg); }} className={`mt-5 px-4 py-2 text-sm rounded-lg font-semibold text-white ${quorumConfig.abierto ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"}`}>
                  {quorumConfig.abierto ? "🔒 Cerrar registro" : "🟢 Abrir registro de asistencia"}
                </button>
                <button onClick={async () => { if (confirm("¿Seguro? Esto borrará todos los registros de asistencia.")) { await limpiarQuorum(); setQuorumLista([]); } }} className="mt-5 px-4 py-2 bg-gray-200 text-gray-700 text-sm rounded-lg font-semibold hover:bg-gray-300">🗑️ Limpiar registros</button>
              </div>
            </div>
            {(() => {
              const presentes = quorumLista.length;
              const minimo = quorumConfig.minimo;
              const pct = totalDelegados > 0 ? Math.round(presentes / totalDelegados * 100) : 0;
              const hayQuorum = presentes >= minimo;
              return (
                <div className={`rounded-2xl p-6 mb-5 text-white ${hayQuorum ? "bg-green-700" : "bg-red-700"}`}>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <div className="text-5xl font-black">{presentes}</div>
                      <div className="text-lg opacity-90">delegados presentes</div>
                      <div className="text-sm opacity-75 mt-1">Mínimo requerido: {minimo} · Total habilitados: {totalDelegados}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-6xl">{hayQuorum ? "✅" : "⏳"}</div>
                      <div className="text-xl font-bold mt-1">{hayQuorum ? "¡QUÓRUM ALCANZADO!" : "Sin quórum aún"}</div>
                      <div className="text-sm opacity-75">{pct}% de asistencia · Faltan {Math.max(0, minimo - presentes)}</div>
                    </div>
                  </div>
                  <div className="mt-4 bg-white/20 rounded-full h-4">
                    <div className="bg-white h-4 rounded-full transition-all duration-700" style={{ width: `${Math.min(100, pct)}%` }} />
                  </div>
                </div>
              );
            })()}
            <div className="bg-white rounded-2xl border shadow-sm p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-800">📋 Registro manual de asistencia</h3>
                <button onClick={() => {
                  const presentes = quorumLista.length;
                  const minimo = quorumConfig.minimo;
                  const pct = totalDelegados > 0 ? Math.round(presentes / totalDelegados * 100) : 0;
                  const fecha = new Date().toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric" });
                  const hora = new Date().toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" });
                  const lineas = [
                    "FONSECURITAS — ASAMBLEA GENERAL 2026",
                    "LISTADO DE ASISTENCIA",
                    "=".repeat(60),
                    `Fecha: ${fecha}   Hora: ${hora}`,
                    `Total habilitados: ${totalDelegados}   Presentes: ${presentes}   Asistencia: ${pct}%`,
                    `Quórum mínimo requerido: ${minimo}   Estado: ${presentes >= minimo ? "✓ QUÓRUM ALCANZADO" : "✗ SIN QUÓRUM"}`,
                    "=".repeat(60),
                    "",
                    `${"N°".padEnd(4)} ${"NOMBRE".padEnd(40)} ${"CIUDAD".padEnd(15)} ${"TIPO".padEnd(10)} ${"MODALIDAD".padEnd(12)} HORA`,
                    "-".repeat(100),
                  ];
                  let contador = 1;
                  delegados.filter(d => d.activo !== false).forEach(d => {
                    const reg = quorumLista.find(q => q.delegado_id === d.id);
                    if (reg) {
                      const horaReg = new Date(reg.hora).toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" });
                      lineas.push(`${String(contador).padEnd(4)} ${d.nombre.padEnd(40)} ${(d.ciudad||"").padEnd(15)} ${d.tipo.padEnd(10)} ${reg.tipo.toUpperCase().padEnd(12)} ${horaReg}`);
                      contador++;
                    }
                  });
                  lineas.push("-".repeat(100));
                  lineas.push("");
                  lineas.push("AUSENTES:");
                  lineas.push("-".repeat(60));
                  delegados.filter(d => d.activo !== false).forEach(d => {
                    const reg = quorumLista.find(q => q.delegado_id === d.id);
                    if (!reg) lineas.push(`  ${d.nombre} — ${d.ciudad||""} (${d.tipo})`);
                  });
                  lineas.push("");
                  lineas.push("=".repeat(60));
                  lineas.push(`Firma Presidente de la Asamblea: ______________________________`);
                  lineas.push(`Firma Secretario de la Asamblea: ______________________________`);
                  const blob = new Blob([lineas.join("\n")], { type: "text/plain;charset=utf-8" });
                  const a = document.createElement("a");
                  a.href = URL.createObjectURL(blob);
                  a.download = `listado_asistencia_asamblea_2026.txt`;
                  a.click();
                }} className="px-4 py-2 bg-blue-900 text-white text-sm rounded-xl font-semibold hover:bg-blue-800">
                  📥 Descargar listado
                </button>
              </div>
              <div className="overflow-auto max-h-96">
                <table className="w-full text-sm">
                  <thead><tr className="bg-gray-50 border-b text-xs text-gray-500 uppercase">
                    <th className="px-3 py-2 text-left">Nombre</th>
                    <th className="px-3 py-2 text-left">Ciudad</th>
                    <th className="px-3 py-2 text-left">Tipo</th>
                    <th className="px-3 py-2 text-center">Presencial</th>
                    <th className="px-3 py-2 text-center">Virtual</th>
                    <th className="px-3 py-2 text-center">Estado</th>
                  </tr></thead>
                  <tbody>
                    {delegados.filter(d => d.activo !== false).map(d => {
                      const reg = quorumLista.find(q => q.delegado_id === d.id);
                      return (
                        <tr key={d.id} className={`border-b last:border-0 ${reg ? "bg-green-50" : ""}`}>
                          <td className="px-3 py-2 font-medium text-xs">{d.nombre}</td>
                          <td className="px-3 py-2 text-gray-500 text-xs">{d.ciudad}</td>
                          <td className="px-3 py-2"><Badge color={d.tipo === "PRINCIPAL" ? "blue" : "yellow"}>{d.tipo}</Badge></td>
                          <td className="px-3 py-2 text-center">
                            <button onClick={async () => { await registrarAsistencia(d.id, "presencial"); fetchQuorum().then(setQuorumLista); }} className={`px-2 py-1 rounded text-xs font-semibold ${reg?.tipo === "presencial" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-green-100"}`}>🏢 Presencial</button>
                          </td>
                          <td className="px-3 py-2 text-center">
                            <button onClick={async () => { await registrarAsistencia(d.id, "virtual"); fetchQuorum().then(setQuorumLista); }} className={`px-2 py-1 rounded text-xs font-semibold ${reg?.tipo === "virtual" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-blue-100"}`}>💻 Virtual</button>
                          </td>
                          <td className="px-3 py-2 text-center">
                            {reg ? <Badge color="green">✓ {reg.tipo}</Badge> : <Badge color="gray">Ausente</Badge>}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {vista === "modulos" && (
          <div>
            <h2 className="text-blue-950 font-bold text-xl mb-4">Gestión de módulos</h2>
            <div className="space-y-4">
              {sortedModulos.map(m => {
                const isEdit = editando === m.id;
                return (
                  <div key={m.id} className="bg-white rounded-2xl border shadow-sm overflow-hidden">
                    <div className="px-5 py-4 flex items-start justify-between bg-gray-50 border-b">
                      <div>
                        <div className="font-bold text-gray-900">{m.orden}. {m.titulo}</div>
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
                        <button onClick={() => { setEditando(isEdit ? null : m.id); setEditTitulo(m.titulo); setEditDesc(m.descripcion); setEditTipo(m.tipo); setNuevaPlancha({ nombre: "", miembros: "" }); setNuevaOpcion({ titulo: "", descripcion: "" }); }}
                          className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-100 text-blue-800 hover:bg-blue-200">
                          {isEdit ? "Cerrar" : "✏️ Editar"}
                        </button>
                      </div>
                    </div>
                    {isEdit && (
                      <div className="p-5 bg-blue-50 border-b space-y-3">
                        <input value={editTitulo} onChange={e => setEditTitulo(e.target.value)} className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="Título" />
                        <input value={editDesc} onChange={e => setEditDesc(e.target.value)} className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="Descripción" />
                        <div>
                          <label className="text-xs font-semibold text-gray-600 block mb-1">Tipo de votación:</label>
                          <select value={editTipo} onChange={e => setEditTipo(e.target.value)} className="w-full border rounded-lg px-3 py-2 text-sm bg-white">
                            <option value="plancha">🗳️ Plancha (votar por candidatos)</option>
                            <option value="reforma">✅ SÍ / NO / BLANCO (aprobación)</option>
                            <option value="opcion_multiple">🔘 Opción múltiple (elegir una)</option>
                            <option value="libre">📝 Libre (opciones personalizadas)</option>
                          </select>
                          {editTipo !== m.tipo && <p className="text-yellow-600 text-xs mt-1">⚠️ Al cambiar el tipo se borrarán las opciones actuales</p>}
                        </div>
                        <button onClick={() => { const changes = { titulo: editTitulo, descripcion: editDesc, tipo: editTipo }; if (editTipo !== m.tipo) changes.opciones = []; updateModulo(m.id, changes); }}
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
                              <button onClick={async () => { if (!nuevaOpcion.titulo.trim()) return; const newOpciones = [...(modulos[m.id].opciones || []), { id: "op_" + Date.now(), texto: nuevaOpcion.titulo }]; await updateModulo(m.id, { opciones: newOpciones }); setNuevaOpcion({ titulo: "", descripcion: "" }); }} className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg font-semibold hover:bg-green-700">+ Agregar opción</button>
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
            <div className="bg-white rounded-xl border overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b text-xs text-gray-500 uppercase">
                    <th className="px-4 py-2 text-left">N°</th>
                    <th className="px-4 py-2 text-left">Nombre</th>
                    <th className="px-4 py-2 text-left">Ciudad</th>
                    <th className="px-4 py-2 text-left">Tipo</th>
                    <th className="px-4 py-2 text-left">Cédula</th>
                    <th className="px-4 py-2 text-center">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {delegados.map(d => (
                    <tr key={d.id} className={`border-b last:border-0 ${d.activo === false ? "opacity-50 bg-gray-50" : ""}`}>
                      <td className="px-4 py-2 text-gray-400 font-mono text-xs">{d.id}</td>
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
        )}

        {vista === "resultados" && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-blue-950 font-bold text-xl">Resultados en tiempo real</h2>
              <button onClick={exportar} className="px-4 py-2 bg-blue-900 text-white text-sm rounded-xl font-semibold hover:bg-blue-800">📥 Exportar</button>
            </div>
            <div className="space-y-5">
              {sortedModulos.map(m => {
                const totalVotos = Object.keys(m.votos || {}).length;
                const r = getResultados(m);
                return (
                  <div key={m.id} className="bg-white rounded-2xl border shadow-sm p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div><div className="font-bold text-gray-900">{m.orden}. {m.titulo}</div><div className="text-gray-500 text-xs">{totalVotos} / {totalDelegados} votos</div></div>
                      {m.cerrada ? <Badge color="green">Cerrada ✓</Badge> : m.activa ? <Badge color="blue">En curso</Badge> : <Badge color="gray">Pendiente</Badge>}
                    </div>
                    {(m.tipo === "plancha" || m.tipo === "opcion_multiple") && totalVotos > 0 && (
                      <div className="space-y-2">
                        {Object.entries(r).map(([k, v]) => {
                          const op = m.opciones?.find(o => o.id === k);
                          return (<div key={k}><div className="text-sm font-medium text-gray-700 mb-1">{op ? (op.nombre || op.texto) : (k === "blanco" ? "Voto en blanco" : k)}</div><ProgressBar value={v} total={totalVotos} color="red" /></div>);
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
          <button onClick={() => pass === ADMIN_PASSWORD ? (setError(""), onLogin()) : setError("Contraseña incorrecta")} className="mt-4 w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl">Ingresar</button>
          <button onClick={onVolver} className="mt-2 w-full py-2 text-blue-300 text-sm hover:text-white">← Volver</button>
        </div>
      </div>
    </div>
  );
}

function PantallaPublica({ modulos, delegados, onVolver }) {
  const totalDelegados = delegados.filter(d => d.activo !== false).length;
  const activos = Object.values(modulos).filter(m => m.activa || m.cerrada).sort((a,b) => (a.orden||99)-(b.orden||99));
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
                  <div><div className="text-white font-bold">{m.orden}. {m.titulo}</div><div className="text-blue-200 text-xs">{totalVotos}/{totalDelegados} votos</div></div>
                  {m.cerrada ? <Badge color="green">Cerrada ✓</Badge> : <Badge color="blue">En curso</Badge>}
                </div>
                <ProgressBar value={totalVotos} total={totalDelegados} color="red" />
                {(m.tipo === "plancha" || m.tipo === "opcion_multiple") && totalVotos > 0 && (
                  <div className="mt-3 space-y-1.5">
                    {Object.entries(r).map(([k, v]) => {
                      const op = m.opciones?.find(o => o.id === k);
                      return (<div key={k}><div className="text-blue-100 text-xs mb-0.5">{op ? (op.nombre || op.texto) : (k === "blanco" ? "Voto en blanco" : k)}</div><ProgressBar value={v} total={totalVotos} color="red" /></div>);
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

function PantallaInicio({ onVotante, onAdmin, onPublico, onQuorum }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        <img src={LOGO_URL} alt="Fonsecuritas" className="h-24 object-contain bg-white rounded-2xl px-6 py-3 mx-auto mb-6 shadow-2xl" />
        <h1 className="text-white text-3xl font-black tracking-wide mb-1">ASAMBLEA GENERAL</h1>
        <h2 className="text-red-400 text-2xl font-black mb-2">FONSECURITAS 2026</h2>
        <p className="text-blue-300 text-sm mb-8">Sistema Digital de Votación — Asamblea Mixta Presencial/Virtual</p>
        <div className="space-y-3">
          <button onClick={onVotante} className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl text-lg shadow-lg transition-all hover:scale-105">🗳️ Soy delegado — Votar</button>
          <button onClick={onQuorum} className="w-full py-4 bg-green-700 hover:bg-green-600 text-white font-semibold rounded-2xl transition-all">✅ Confirmar mi asistencia</button>
          <button onClick={onPublico} className="w-full py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-2xl transition-all">📊 Ver resultados en pantalla</button>
          <button onClick={onAdmin} className="w-full py-3 bg-transparent hover:bg-white/10 border border-white/20 text-blue-300 hover:text-white text-sm font-semibold rounded-2xl transition-all">⚙️ Panel administrador</button>
        </div>
        <p className="text-blue-500 text-xs mt-6">Para votación virtual: comparte el enlace de este dashboard con los delegados remotos</p>
      </div>
    </div>
  );
}

export default function App() {
  const [pantalla, setPantalla] = useState("inicio");
  const [adminLogueado, setAdminLogueado] = useState(false);
  const [delegadoActivo, setDelegadoActivo] = useState(null);
  const [modulos, setModulos] = useState(MODULOS_INICIALES);
  const [delegados, setDelegados] = useState(DELEGADOS_INICIALES);
  const [quorumConfig, setQuorumConfig] = useState({ id: 1, minimo: 21, abierto: false });
  const [loading, setLoading] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    const init = async () => {
      await initDB(MODULOS_INICIALES, DELEGADOS_INICIALES);
      const [mods, dels, qc] = await Promise.all([fetchModulos(), fetchDelegados(), fetchQuorumConfig()]);
      if (mods) setModulos(mods);
      if (dels.length > 0) setDelegados(dels);
      setQuorumConfig(qc);
      setLoading(false);
    };
    init();
    intervalRef.current = setInterval(async () => {
      const [mods, dels, qc] = await Promise.all([fetchModulos(), fetchDelegados(), fetchQuorumConfig()]);
      if (mods) setModulos(mods);
      if (dels.length > 0) setDelegados(dels);
      setQuorumConfig(qc);
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

  if (pantalla === "quorum") return <LoginDelegado delegados={delegados.filter(d => d.activo !== false)} onLogin={d => { setDelegadoActivo(d); setPantalla("solo_asistencia"); }} soloAsistencia={true} onVolver={() => setPantalla("inicio")} />;
  if (pantalla === "solo_asistencia" && delegadoActivo) return <ConfirmarAsistencia delegado={delegadoActivo} onConfirmar={() => { setDelegadoActivo(null); setPantalla("inicio"); }} onSaltar={() => { setDelegadoActivo(null); setPantalla("inicio"); }} />;
  if (pantalla === "admin_login") return <LoginAdmin onLogin={() => { setAdminLogueado(true); setPantalla("admin"); }} onVolver={() => setPantalla("inicio")} />;
  if (pantalla === "admin" && adminLogueado) return <PanelAdmin modulos={modulos} setModulos={setModulos} delegados={delegados} setDelegados={setDelegados} onExit={() => { setAdminLogueado(false); setPantalla("inicio"); }} />;
  if (pantalla === "login_votante") return <LoginDelegado delegados={delegados.filter(d => d.activo !== false)} onLogin={d => { setDelegadoActivo(d); setPantalla(quorumConfig.abierto ? "confirmar_asistencia" : "votacion"); }} />;
  if (pantalla === "confirmar_asistencia" && delegadoActivo) return <ConfirmarAsistencia delegado={delegadoActivo} onConfirmar={() => setPantalla("votacion")} onSaltar={() => setPantalla("votacion")} />;
  if (pantalla === "votacion" && delegadoActivo) return <PantallaVotacion modulos={modulos} delegado={delegadoActivo} onVotar={handleVotar} onExit={() => { setDelegadoActivo(null); setPantalla("inicio"); }} />;
  if (pantalla === "publico") return <PantallaPublica modulos={modulos} delegados={delegados} onVolver={() => setPantalla("inicio")} />;

  return <PantallaInicio onVotante={() => setPantalla("login_votante")} onAdmin={() => setPantalla("admin_login")} onPublico={() => setPantalla("publico")} onQuorum={() => setPantalla("quorum")} />;
}
