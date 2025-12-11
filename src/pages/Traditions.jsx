import './Traditions.css';
import picanaImg from '../assets/picana.jpeg';
import misaImg from '../assets/misa.jpg';
import pesebreImg from '../assets/pesebre.jpeg';
import aguinaldoImg from '../assets/aguinaldo.jpg';
import villancicosImg from '../assets/villancicos.jpeg';
import juegosImg from '../assets/juegos.jpeg';

const traditions = [
  {
    title: '🍲 La Picana',
    image: picanaImg,
    description: `Este plato es el corazón de la cena navideña boliviana. Preparado con carnes de res, cordero y pollo, acompañado de vino y especias, la picana simboliza abundancia y gratitud. Su preparación comienza desde temprano en la mañana y reúne a toda la familia en la cocina. Más que un alimento, es un ritual que fortalece los lazos familiares y marca el inicio de la celebración.`,
  },
  {
    title: '🕯️ Misa de Gallo',
    image: misaImg,
    description: `A medianoche, las iglesias se llenan de fieles que celebran la llegada del Niño Jesús. La Misa de Gallo es un momento de reflexión y alegría, donde los villancicos acompañan la liturgia y las familias se abrazan al salir, deseándose paz y prosperidad.`,
  },
  {
    title: '🎄 Pesebres Artesanales',
    image: pesebreImg,
    description: `Los nacimientos bolivianos son verdaderas obras de arte. Hechos con barro, madera o materiales reciclados, reflejan la creatividad de cada comunidad. Muchos incluyen elementos locales como llamas, cholitas y paisajes andinos, mostrando cómo la Navidad se adapta a nuestra identidad cultural.`,
  },
  {
    title: '🎁 El Aguinaldo',
    image: aguinaldoImg,
    description: `En muchas comunidades, los niños reciben bolsas con dulces, frutas y pequeños obsequios llamados “aguinaldos”. Este gesto simboliza la generosidad y el compartir, recordando que la Navidad es también un tiempo para dar a los más pequeños un motivo de alegría.`,
  },
  {
    title: '🎶 Villancicos en Comunidad',
    image: villancicosImg,
    description: `Los coros comunitarios y las bandas escolares llenan las plazas de música, creando un ambiente festivo que une a todos en un mismo canto. Los villancicos bolivianos mezclan melodías tradicionales con ritmos locales, convirtiéndose en una expresión cultural única.`,
  },
  {
    title: '🎉 Juegos y Reuniones Familiares',
    image: juegosImg,
    description: `Después de la cena, muchas familias organizan juegos tradicionales, cantos y bailes. Es un momento de diversión que fortalece la unión entre generaciones. Los niños disfrutan de juegos sencillos, mientras los adultos comparten anécdotas y recuerdos.`,
  },
];

function Traditions() {
  return (
    <div className="traditions">
      <h2>🎅 Tradiciones Navideñas en Bolivia 🎅</h2>
      <p className="intro">
        La Navidad en Bolivia es una celebración que combina la espiritualidad cristiana con la riqueza cultural
        de nuestras comunidades. Cada región aporta sus costumbres, pero todas comparten un mismo espíritu:
        la unión familiar, la fe y la alegría de compartir.
      </p>

      <div className="tradition-grid">
        {traditions.map((item, index) => (
          <div className="tradition-card" key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Traditions;
