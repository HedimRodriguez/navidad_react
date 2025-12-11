import './Stories.css';
import estrellaImg from '../assets/estrella.jpeg';
import regaloImg from '../assets/regalo.jpeg';
import niñoImg from '../assets/niño.jpeg';
import comunidadImg from '../assets/comunidad.jpeg';

const stories = [
  {
    title: '🌟 La Estrella de Navidad',
    image: estrellaImg,
    description: `Cuenta la leyenda que una estrella brillante guió a los pastores hacia el pesebre. 
    En Bolivia, se dice que esa estrella aparece cada año para recordar que la luz siempre vence a la oscuridad. 
    Es un símbolo de guía y esperanza que ilumina los corazones y acompaña las celebraciones familiares.`,
  },
  {
    title: '🎁 El Regalo Mágico',
    image: regaloImg,
    description: `Un niño recibe un pequeño obsequio que, aunque humilde, cambia su vida y la de su comunidad. 
    Este cuento enseña que el verdadero valor de un regalo está en el amor con que se entrega, 
    recordándonos que la generosidad es el mayor tesoro de la Navidad.`,
  },
  {
    title: '👦 El Niño y el Pesebre',
    image: niñoImg,
    description: `Un niño curioso construye su propio pesebre con materiales reciclados. 
    Al mostrarlo a su familia, todos descubren que la creatividad y la fe pueden transformar lo sencillo en algo grandioso. 
    Este relato refleja la tradición boliviana de crear nacimientos artesanales.`,
  },
  {
    title: '🤝 La Comunidad Unida',
    image: comunidadImg,
    description: `En un pequeño pueblo, los vecinos se organizan para compartir alimentos, música y cuentos en la plaza. 
    La Navidad se convierte en un espacio de solidaridad, donde cada persona aporta algo para que nadie quede fuera de la celebración.`,
  },
];

function Stories() {
  return (
    <div className="stories-page">
      <header className="stories-header">
        <h2>📖 Cuentos y Leyendas Navideñas 📖</h2>
        <p>
          La Navidad está llena de relatos que transmiten valores de solidaridad, esperanza y amor. 
          Estos cuentos se cuentan en familia, alrededor del árbol o antes de dormir, y se convierten en parte 
          de la tradición oral que une generaciones.
        </p>
      </header>

      <div className="stories-timeline">
        {stories.map((story, index) => (
          <div className="story-card" key={index}>
            <img src={story.image} alt={story.title} />
            <div className="story-info">
              <h3>{story.title}</h3>
              <p>{story.description}</p>
            </div>
          </div>
        ))}
      </div>

      <footer className="stories-footer">
        <p>✨ Cada cuento es una chispa que ilumina la Navidad ✨</p>
      </footer>
    </div>
  );
}

export default Stories;
