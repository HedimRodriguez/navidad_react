import './Music.css';
import nochePazImg from '../assets/nochepaz.jpg';
import tamborileroImg from '../assets/tamborilero.jpeg';
import pastorcitosImg from '../assets/pastorcitos.jpeg';
import adesteImg from '../assets/adeste.jpg';

const songs = [
  {
    title: '🎵 Noche de Paz',
    image: nochePazImg,
    description: `Este villancico es uno de los más conocidos en todo el mundo. Su melodía suave y su mensaje de paz lo convierten en un himno universal de la Navidad. En Bolivia, se canta en iglesias y hogares, creando un ambiente de recogimiento y esperanza.`,
  },
  {
    title: '🥁 El Tamborilero',
    image: tamborileroImg,
    description: `Relata la historia de un humilde niño que, sin tener regalos, ofrece su música al Niño Jesús. Su ritmo marcado por el tambor transmite sencillez y devoción. Es muy popular en coros escolares y celebraciones comunitarias.`,
  },
  {
    title: '🕯️ Vamos Pastorcitos',
    image: pastorcitosImg,
    description: `Un villancico tradicional boliviano que invita a los pastores a visitar el pesebre. Su ritmo alegre refleja la identidad cultural local y es interpretado en plazas y barrios durante las fiestas.`,
  },
  {
    title: '🎶 Adeste Fideles',
    image: adesteImg,
    description: `Un himno clásico que invita a la adoración. Su origen europeo se mezcla con las celebraciones bolivianas, donde se canta en la Misa de Gallo y en coros comunitarios.`,
  },
];

function Music() {
  return (
    <div className="music-page">
      <header className="music-header">
        <h2>🎄 Villancicos y Música Navideña 🎄</h2>
        <p>
          La música es el alma de la Navidad. Desde los villancicos tradicionales hasta las canciones modernas,
          cada melodía nos transporta a recuerdos de infancia y momentos compartidos en familia. En Bolivia,
          los coros comunitarios y las bandas escolares llenan las plazas de música, creando un ambiente festivo
          que une a todos en un mismo canto.
        </p>
      </header>

      <div className="music-grid">
        {songs.map((song, index) => (
          <div className="music-card" key={index}>
            <img src={song.image} alt={song.title} />
            <div className="music-info">
              <h3>{song.title}</h3>
              <p>{song.description}</p>
            </div>
          </div>
        ))}
      </div>

      <footer className="music-footer">
        <p>🎶 La música navideña es un puente entre generaciones, un lenguaje universal que transmite alegría y esperanza. 🎶</p>
      </footer>
    </div>
  );
}

export default Music;
