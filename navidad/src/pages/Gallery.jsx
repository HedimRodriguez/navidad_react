import './Gallery.css';
import arbolImg from '../assets/arbol.jpeg';
import lucesImg from '../assets/luces.jpg';
import cenaImg from '../assets/cena.jpg';
import villancicosImg from '../assets/villancicos.jpeg';
import regalosImg from '../assets/regalos.jpg';
import nieveImg from '../assets/nieve.jpg';

const galleryItems = [
  {
    title: '🎄 Árbol Navideño',
    image: arbolImg,
    description: 'Decorado con esferas, luces y estrellas, el árbol es el símbolo central de la Navidad.',
  },
  {
    title: '✨ Luces Festivas',
    image: lucesImg,
    description: 'Las calles y casas se iluminan con luces de colores que transmiten alegría y esperanza.',
  },
  {
    title: '🍲 Cena Familiar',
    image: cenaImg,
    description: 'La mesa se llena de platos típicos como la picana y el lechón, compartidos en unión.',
  },
  {
    title: '🎶 Villancicos',
    image: villancicosImg,
    description: 'Coros comunitarios y familias cantan melodías que llenan de música las noches de diciembre.',
  },
  {
    title: '🎁 Regalos',
    image: regalosImg,
    description: 'Los obsequios simbolizan cariño y generosidad, recordando que dar es tan importante como recibir.',
  },
  {
    title: '❄️ Paisajes Nevados',
    image: nieveImg,
    description: 'Aunque en Bolivia la Navidad es veraniega, las imágenes de nieve evocan la magia universal.',
  },
];

function Gallery() {
  return (
    <div className="gallery">
      <h2>🎄 Galería Navideña 🎄</h2>
      <p className="intro">
        La Navidad se vive también a través de imágenes: luces que iluminan las calles, árboles decorados,
        mesas llenas de comida y familias reunidas. Esta galería busca capturar esos momentos mágicos que
        hacen de diciembre un mes inolvidable.
      </p>

      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div className="gallery-card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="gallery-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
