import './Recipes.css';
import picanaImg from '../assets/picana.jpeg';
import lechonImg from '../assets/lechon.jpg';
import roscaImg from '../assets/rosca.jpg';
import galletasImg from '../assets/galletas.jpeg';

const recipes = [
  {
    title: '🍲 Picana Navideña',
    image: picanaImg,
    description: `La picana es el plato estrella de la Nochebuena boliviana. Se prepara con carnes de res, cordero y pollo, cocidas lentamente en un caldo aromático con vino, cerveza, ají, zanahorias, papas y tunta rellena de queso. Es una sopa abundante que reúne a la familia y marca el inicio de la celebración navideña.`,
  },
  {
    title: '🐖 Lechón al Horno',
    image: lechonImg,
    description: `El lechón relleno es otra opción festiva, especialmente en el oriente boliviano. Se marina con especias, ajo, comino y jugo de limón, luego se hornea hasta que la piel esté crujiente. Se sirve con papas doradas, ensalada y llajwa. Es símbolo de abundancia y celebración.`,
  },
  {
    title: '🍞 Rosca Navideña',
    image: roscaImg,
    description: `La rosca navideña es un pan dulce en forma de corona, decorado con frutas confitadas, nueces y glaseado. Se comparte en familia durante la merienda o desayuno navideño, acompañado de chocolate caliente. Su forma circular representa la unidad y el ciclo de la vida.`,
  },
  {
    title: '🍪 Galletas de Navidad',
    image: galletasImg,
    description: `Las galletas decoradas con glaseado y formas festivas son ideales para preparar con niños. Se hacen con mantequilla, harina, canela y jengibre, y se decoran con colores navideños. Son perfectas para regalar o acompañar una taza de café en las tardes de diciembre.`,
  },
];

function Recipes() {
  return (
    <div className="recipes">
      <h2>🎄 Recetas Navideñas Bolivianas 🎄</h2>
      <p className="intro">
        La Navidad en Bolivia se celebra también a través de la cocina. Cada plato cuenta una historia
        y despierta recuerdos familiares. Aquí te presentamos algunas de las recetas más tradicionales
        que llenan las mesas bolivianas en diciembre.
      </p>

      <div className="recipe-grid">
        {recipes.map((item, index) => (
          <div className="recipe-card" key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
