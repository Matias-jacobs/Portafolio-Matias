let idiomaActual = 'es';

const traducciones = {
es: {
subtitulo: 'Soy Analista en Sistemas y Programador, con conocimientos en análisis, diseño y desarrollo de soluciones tecnológicas. Me apasiona resolver problemas mediante el uso de la lógica y la programación.',
nav1: 'Inicio',
nav2: 'Proyectos',
nav3: 'Sobre mí',
nav4: 'Tecnologias',
nav11: 'Inicio',
nav12: 'Proyectos',
nav13: 'Sobre mí',
nav14: 'Tecnologias',
footer:'¡Gracias por su tiempo!',
tecnologia:'Tecnologias',
herramientas:'Herramientas',
sobreMi2:'Sobre mi',
misProyectos:'Mis proyectos',
sobreMi:'¡Hola! Mi nombre es Matías Jacobs. Nací el 5 de octubre de 2004 en Chacabuco, Buenos Aires, Argentina. Actualmente, estoy cursando el tercer año de la carrera de Analista en Sistemas. Me gradué de la secundaria en 2022 con orientación en Economía y, poco después, decidí seguir mi pasión por la tecnología e iniciar esta carrera. Aunque aún estoy en formación, me esfuerzo por seguir aprendiendo de manera autodidacta, adquiriendo nuevas habilidades y explorando continuamente el mundo de la programación y la tecnología.'
},
en: {
subtitulo: ' I am a Systems Analyst and Programmer, with expertise in the analysis, design, and development of technological solutions. I am passionate about solving problems through the use of logic and programming.',
nav1: 'Main',
nav2: 'Projects',
nav3: 'About me',
nav4: 'Technologies',
nav11: 'Main',
nav12: 'Projects',
nav13: 'About me',
nav14: 'Technology',
footer:'¡Thank you for your time!',
tecnologia:'Technologies',
herramientas:'Tools',
sobreMi2:'About me',
misProyectos:'My projects',
sobreMi:'Hello! My name is Matías Jacobs. I was born on October 5, 2004, in Chacabuco, Buenos Aires, Argentina. I am currently in my third year of studying Systems Analyst. I graduated from high school in 2022 with a major in Economics, and shortly after, I decided to follow my passion for technology and start this career. Although I am still in training, I strive to continue learning independently, acquiring new skills, and continually exploring the world of programming and technology.'
}
};

function cambiarIdioma() {
idiomaActual = idiomaActual === 'es' ? 'en' : 'es';
document.getElementById('subtitulo').textContent = traducciones[idiomaActual].subtitulo;
document.getElementById('nav1').textContent = traducciones[idiomaActual].nav1;
document.getElementById('nav2').textContent = traducciones[idiomaActual].nav2;
document.getElementById('nav3').textContent = traducciones[idiomaActual].nav3;
document.getElementById('nav4').textContent = traducciones[idiomaActual].nav4;
document.getElementById('nav11').textContent = traducciones[idiomaActual].nav11;
document.getElementById('nav12').textContent = traducciones[idiomaActual].nav12;
document.getElementById('nav13').textContent = traducciones[idiomaActual].nav13;
document.getElementById('nav14').textContent = traducciones[idiomaActual].nav14;
document.getElementById('footer').textContent = traducciones[idiomaActual].footer;
document.getElementById('sobreMi').textContent = traducciones[idiomaActual].sobreMi;
document.getElementById('tecnologia').textContent = traducciones[idiomaActual].tecnologia;
document.getElementById('herramientas').textContent = traducciones[idiomaActual].herramientas;
document.getElementById('sobreMi2').textContent = traducciones[idiomaActual].sobreMi2;
document.getElementById('misProyectos').textContent = traducciones[idiomaActual].misProyectos;
}
