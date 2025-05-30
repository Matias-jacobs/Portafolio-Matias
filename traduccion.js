let idiomaActual = 'es';

const traducciones = {
  es: {
    nav1: 'Inicio',
    nav2: 'Sobre mí',
    nav3: 'Proyectos',
    nav4: 'Tecnologias',
    mainPresentacionP: 'Soy Analista en Sistemas y Programador, con conocimientos en análisis, diseño y desarrollo de soluciones tecnológicas. Me apasiona resolver problemas mediante el uso de la lógica y la programación.',
    sectionProyectos: 'Mis Proyectos',
    sectionSobreMi: 'Sobre Mi',
    sobremiP: '¡Hola! Mi nombre es Matías Jacobs. Nací el 5 de octubre de 2004 en Chacabuco, Buenos Aires, Argentina. Actualmente, estoy cursando el tercer año de la carrera de Analista en Sistemas. Me gradué de la secundaria en 2022 con orientación en Economía y, poco después, decidí seguir mi pasión por la tecnología e iniciar esta carrera. Aunque aún estoy en formación, me esfuerzo por seguir aprendiendo de manera autodidacta, adquiriendo nuevas habilidades y explorando continuamente el mundo de la programación y la tecnología.',
    sectionTecnologias: 'Tecnologias',
    pHTML:'Estructura básica de todas las páginas web.',
    pCSS:'Estilos para hacer que tu sitio se vea profesional',
    pPython:'lenguaje de programación interpretado.',
    pMysql:'sistema de base de datos para guardar información. ',
    pFlask:'framework web en Python.',
    pGit:'sistema para controlar versiones y colaborar en proyectos.',
    derechosReservados:'&copy; 2025 Matias Jacobs.Todos los derechos reservados.',
    inicioFooter:'Inicio',
    sobremiFooter:'Sobre mí',
    proyectoFooter:'Proyectos',
    tecnologiasFooter:'Tecnologias',
    curriculum:'Descargar curriculum'
  },
  en: {
    nav1: 'Main',
    nav2: 'About me',
    nav3: 'Projects',    
    nav4: 'Technologies',
    mainPresentacionP: 'I am a Systems Analyst and Programmer, with expertise in the analysis, design, and development of technological solutions. I am passionate about solving problems through the use of logic and programming.',
    sectionProyectos: 'My Projects',
    sectionSobreMi: 'About Me',
    sobremiP: 'Hello! My name is Matías Jacobs. I was born on October 5, 2004, in Chacabuco, Buenos Aires, Argentina. I am currently in my third year of studying Systems Analyst. I graduated from high school in 2022 with a major in Economics, and shortly after, I decided to follow my passion for technology and start this career. Although I am still in training, I strive to continue learning independently, acquiring new skills, and continually exploring the world of programming and technology.',
    sectionTecnologias: 'Technologies',
    pHTML:'Basic structure of all web pages.',
    pCSS:'Styles to make your site look professional',
    pPython:'interpreted programming language.',
    pMysql:'database system for storing information.',
    pFlask:'framework web in Python.',
    pGit:'system for controlling versions and collaborating on projects.',
    derechosReservados:'&copy; 2025 Matias Jacobs. All rights reserved.',
    inicioFooter:'Main',
    sobremiFooter:'About me',
    proyectoFooter:'Projects',
    tecnologiasFooter:'Technologies',
    curriculum:'Download resume'

  }
};

function cambiarIdioma() {
  idiomaActual = idiomaActual === 'es' ? 'en' : 'es';
  document.getElementById('nav1').textContent = traducciones[idiomaActual].nav1;
  document.getElementById('nav2').textContent = traducciones[idiomaActual].nav2;
  document.getElementById('nav3').textContent = traducciones[idiomaActual].nav3;
  document.getElementById('nav4').textContent = traducciones[idiomaActual].nav4;
  document.getElementById('mainPresentacionP').textContent = traducciones[idiomaActual].mainPresentacionP;
  document.getElementById('sectionProyectos').textContent = traducciones[idiomaActual].sectionProyectos;
  document.getElementById('sectionSobreMi').textContent = traducciones[idiomaActual].sectionSobreMi;
  document.getElementById('sobremiP').textContent = traducciones[idiomaActual].sobremiP;
  document.getElementById('sectionTecnologias').textContent = traducciones[idiomaActual].sectionTecnologias;
  document.getElementById('pHTML').textContent = traducciones[idiomaActual].pHTML;
  document.getElementById('pCSS').textContent = traducciones[idiomaActual].pCSS;
  document.getElementById('pPython').textContent = traducciones[idiomaActual].pPython;
  document.getElementById('pMysql').textContent = traducciones[idiomaActual].pMysql;
  document.getElementById('pFlask').textContent = traducciones[idiomaActual].pFlask;
  document.getElementById('pGit').textContent = traducciones[idiomaActual].pGit;
  document.getElementById('derechosReservados').textContent = traducciones[idiomaActual].derechosReservados;
  document.getElementById('inicioFooter').textContent = traducciones[idiomaActual].inicioFooter;
  document.getElementById('sobremiFooter').textContent = traducciones[idiomaActual].sobremiFooter;
  document.getElementById('proyectoFooter').textContent = traducciones[idiomaActual].proyectoFooter;
  document.getElementById('tecnologiasFooter').textContent = traducciones[idiomaActual].tecnologiasFooter;
  document.getElementById('curriculum').textContent = traducciones[idiomaActual].curriculum;
}
