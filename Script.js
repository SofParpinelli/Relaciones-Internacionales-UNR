// Lista de materias con sus correlatividades
const materias = {
  // 1° año
  "Teoría Política 1": [],
  "Historia de las Relaciones Internacionales Contemporáneas": [],
  "Ingles Nivel 1": [],
  "Teoría Económica": [],
  "Problemática de las Relaciones Internacionales": [],
  "Política y Derecho": [],
  "Teoría Sociológica 1": [],

  // 2° año
  "Teoría Política 2": ["Teoría Política 1"],
  "Inglés Nivel 2": ["Ingles Nivel 1"],
  "Política Económica": ["Teoría Económica"],
  "Relaciones Internacionales": ["Problemática de las Relaciones Internacionales"],
  "Epistemología": [],
  "Teoría Sociológica 2": ["Teoría Sociológica 1"],
  "Historia Política Latinoamericana": [],

  // 3° año
  "Teoría Política 3": ["Teoría Política 2"],
  "Historia Política Argentina": ["Historia Política Latinoamericana"],
  "Ingles Nivel 3": ["Inglés Nivel 2"],
  "Economía Internacional": ["Política Económica"],
  "Integración y Cooperación Latinoamericana": ["Relaciones Internacionales"],
  "Metodología de la Investigación en las Ciencias Sociales": ["Epistemología"],
  "Política Comparada": ["Relaciones Internacionales"],

  // 4° año
  "Derecho Internacional Publico": ["Teoría Política 1", "Historia de las Relaciones Internacionales Contemporáneas", "Teoría Económica", "Problemática de las Relaciones Internacionales", "Política y Derecho", "Teoría Sociológica 1", "Teoría Política 2"],
  "Ingles Nivel 4": ["Ingles Nivel 3"],
  "Frances Nivel 1": [],
  "Finanzas Internacionales": ["Teoría Política 1", "Historia de las Relaciones Internacionales Contemporáneas", "Teoría Económica", "Problemática de las Relaciones Internacionales", "Política y Derecho", "Teoría Sociológica 1", "Teoría Política 2", "Política Económica", "Relaciones Internacionales", "Epistemología", "Teoría Sociológica 2", "Historia Política Latinoamericana", "Economía Internacional"],
  "Teoría de las Relaciones Internacionales": ["Teoría Política 1", "Historia de las Relaciones Internacionales Contemporáneas", "Teoría Económica", "Problemática de las Relaciones Internacionales", "Política y Derecho", "Teoría Sociológica 1", "Teoría Política 2", "Política Económica", "Relaciones Internacionales", "Epistemología", "Teoría Sociológica 2", "Historia Política Latinoamericana"],
  "Comercio Exterior": ["Teoría Política 1", "Historia de las Relaciones Internacionales Contemporáneas", "Teoría Económica", "Problemática de las Relaciones Internacionales", "Política y Derecho", "Teoría Sociológica 1", "Teoría Política 2", "Política Económica", "Relaciones Internacionales", "Epistemología", "Teoría Sociológica 2", "Historia Política Latinoamericana", "Economía Internacional", "Integración y Cooperación Latinoamericana"],
  "Política Internacional": ["Teoría Política 1", "Historia de las Relaciones Internacionales Contemporáneas", "Teoría Económica", "Problemática de las Relaciones Internacionales", "Política y Derecho", "Teoría Sociológica 1", "Teoría Política 2", "Política Económica", "Relaciones Internacionales", "Epistemología", "Teoría Sociológica 2", "Historia Política Latinoamericana"],
  "Historia de las Relaciones Internacionales Latinoamericanas y Argentinas": ["Teoría Política 1", "Historia de las Relaciones Internacionales Contemporáneas", "Teoría Económica", "Problemática de las Relaciones Internacionales", "Política y Derecho", "Teoría Sociológica 1", "Teoría Política 2", "Política Económica", "Relaciones Internacionales", "Epistemología", "Teoría Sociológica 2", "Historia Política Latinoamericana"],

  // 5° año
  "Política Internacional Argentina": ["Teoría Política 1", "Historia de las Relaciones Internacionales Contemporáneas", "Teoría Económica", "Problemática de las Relaciones Internacionales", "Política y Derecho", "Teoría Sociológica 1", "Teoría Política 2", "Política Económica", "Relaciones Internacionales", "Epistemología", "Teoría Sociológica 2", "Historia Política Latinoamericana", "Historia Política Argentina", "Política Internacional"],
  "Francés Nivel 2": ["Frances Nivel 1"],
  "Politica Internacional Latinoamericana": ["Teoría Política 1", "Historia de las Relaciones Internacionales Contemporáneas", "Teoría Económica", "Problemática de las Relaciones Internacionales", "Política y Derecho", "Teoría Sociológica 1", "Teoría Política 2", "Política Económica", "Relaciones Internacionales", "Epistemología", "Teoría Sociológica 2", "Historia Política Latinoamericana", "Integración y Cooperación Latinoamericana", "Política Internacional"],
  "Electiva 1": ["Teoría Política 1", "Historia de las Relaciones Internacionales Contemporáneas", "Teoría Económica", "Problemática de las Relaciones Internacionales", "Política y Derecho", "Teoría Sociológica 1", "Teoría Política 2", "Política Económica", "Relaciones Internacionales", "Epistemología", "Teoría Sociológica 2", "Historia Política Latinoamericana", "Economía Internacional", "Integración y Cooperación Latinoamericana", "Metodología de la Investigación en las Ciencias Sociales", "Política Comparada"],
  "Taller": ["Teoría Política 1", "Historia de las Relaciones Internacionales Contemporáneas", "Teoría Económica", "Problemática de las Relaciones Internacionales", "Política y Derecho", "Teoría Sociológica 1", "Teoría Política 2", "Política Económica", "Relaciones Internacionales", "Epistemología", "Teoría Sociológica 2", "Historia Política Latinoamericana", "Metodología de la Investigación en las Ciencias Sociales"],
  "Derecho Consular y Diplomático": ["Teoría Política 1", "Historia de las Relaciones Internacionales Contemporáneas", "Teoría Económica", "Problemática de las Relaciones Internacionales", "Política y Derecho", "Teoría Sociológica 1", "Teoría Política 2", "Política Económica", "Relaciones Internacionales", "Epistemología", "Teoría Sociológica 2", "Historia Política Latinoamericana", "Derecho Internacional Publico"],
  "Electiva 2": ["Teoría Política 1", "Historia de las Relaciones Internacionales Contemporáneas", "Teoría Económica", "Problemática de las Relaciones Internacionales", "Política y Derecho", "Teoría Sociológica 1", "Teoría Política 2", "Política Económica", "Relaciones Internacionales", "Epistemología", "Teoría Sociológica 2", "Historia Política Latinoamericana", "Economía Internacional", "Integración y Cooperación Latinoamericana", "Metodología de la Investigación en las Ciencias Sociales", "Política Comparada"],
  "Electiva 3": ["Teoría Política 1", "Historia de las Relaciones Internacionales Contemporáneas", "Teoría Económica", "Problemática de las Relaciones Internacionales", "Política y Derecho", "Teoría Sociológica 1", "Teoría Política 2", "Política Económica", "Relaciones Internacionales", "Epistemología", "Teoría Sociológica 2", "Historia Política Latinoamericana", "Economía Internacional", "Integración y Cooperación Latinoamericana", "Metodología de la Investigación en las Ciencias Sociales", "Política Comparada"]
};

const estadoMaterias = {}; // aprobado / habilitado / bloqueado

function crearGrilla() {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  Object.keys(materias).forEach(nombre => {
    const div = document.createElement("div");
    div.className = "materia bloqueada";
    div.textContent = nombre;
    div.id = nombre;
    div.onclick = () => toggleMateria(nombre);
    grid.appendChild(div);
    estadoMaterias[nombre] = "bloqueada";
  });
  actualizarEstados();
}

function actualizarEstados() {
  for (const nombre in materias) {
    const requisitos = materias[nombre];
    const aprobadas = requisitos.every(req => estadoMaterias[req] === "aprobada");

    if (estadoMaterias[nombre] !== "aprobada") {
      estadoMaterias[nombre] = aprobadas ? "habilitada" : "bloqueada";
    }

    const div = document.getElementById(nombre);
    div.className = "materia " + estadoMaterias[nombre];
  }
}

function toggleMateria(nombre) {
  if (estadoMaterias[nombre] === "habilitada") {
    estadoMaterias[nombre] = "aprobada";
    actualizarEstados();
  }
}

function resetMaterias() {
  for (const nombre in estadoMaterias) {
    estadoMaterias[nombre] = "bloqueada";
  }
  actualizarEstados();
}

crearGrilla();
