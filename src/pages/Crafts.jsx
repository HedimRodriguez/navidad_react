import './Crafts.css';
import adornosImg from '../assets/adornos.jpeg';
import guirnaldasImg from '../assets/guirnaldas.jpeg';
import tarjetasImg from '../assets/tarjetas.jpeg';
import velasImg from '../assets/velas.jpeg';
import coronasImg from '../assets/coronas.jpeg';
import reciclajeImg from '../assets/reciclaje.jpeg';

const crafts = [
  {
    title: '⭐ Adornos Reciclados',
    image: adornosImg,
    description: `Usa botellas plásticas, cartón y papel de colores para crear estrellas brillantes y esferas decorativas. 
    Es una forma de cuidar el medio ambiente mientras llenas tu árbol de creatividad.`,
  },
  {
    title: '🎀 Guirnaldas de Papel',
    image: guirnaldasImg,
    description: `Recorta figuras navideñas como árboles, campanas y estrellas, únelas con hilo y forma una guirnalda colorida. 
    Ideal para decorar puertas, ventanas y pasillos.`,
  },
  {
    title: '💌 Tarjetas Artesanales',
    image: tarjetasImg,
    description: `Diseña tarjetas personalizadas con cartulina, recortes de revistas y mensajes festivos. 
    Son perfectas para regalar a familiares y amigos, transmitiendo cariño y creatividad.`,
  },
  {
    title: '🕯️ Velas Decoradas',
    image: velasImg,
    description: `Compra velas sencillas y decóralas con cintas rojas, verdes y doradas. 
    Añade ramas de pino o canela para darles aroma y un toque artesanal.`,
  },
  {
    title: '🌿 Coronas Navideñas',
    image: coronasImg,
    description: `Con ramas de pino, flores secas y cintas, arma coronas para colgar en la puerta. 
    Son símbolo de bienvenida y unión familiar.`,
  },
  {
    title: '♻️ Manualidades con Reciclaje',
    image: reciclajeImg,
    description: `Transforma latas, frascos y retazos de tela en portavelas, centros de mesa o pequeños adornos. 
    Una forma divertida de dar nueva vida a materiales usados.`,
  },
];

function Crafts() {
  return (
    <div className="crafts-page">
      <header className="crafts-header">
        <h2>✂️ Manualidades Navideñas ✂️</h2>
        <p>
          La creatividad es parte esencial de la Navidad. Con materiales simples, se pueden crear adornos que llenan de color y alegría los hogares. 
          Las manualidades también son una oportunidad para compartir tiempo en familia y enseñar a los más pequeños el valor de crear con sus propias manos.
        </p>
      </header>

      <div className="crafts-grid">
        {crafts.map((craft, index) => (
          <div className="craft-card" key={index}>
            <img src={craft.image} alt={craft.title} />
            <div className="craft-info">
              <h3>{craft.title}</h3>
              <p>{craft.description}</p>
            </div>
          </div>
        ))}
      </div>

      <footer className="crafts-footer">
        <p>✨ Cada manualidad es una oportunidad para crear recuerdos inolvidables ✨</p>
      </footer>
    </div>
  );
}

export default Crafts;
