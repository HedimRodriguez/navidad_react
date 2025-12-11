import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>🎄 ¡Bienvenido a la Navidad! 🎄</h1>
      <p>
        La Navidad es mucho más que una fecha en el calendario: es un tiempo de unión, esperanza y alegría.
        En cada rincón del mundo, las familias se reúnen para compartir momentos únicos, decorar sus hogares
        con luces brillantes y recordar el verdadero significado de estas fiestas.
      </p>
      <p>
        En este sitio encontrarás un recorrido por las tradiciones bolivianas y universales, recetas que
        despiertan recuerdos de infancia, música que acompaña las celebraciones, cuentos que inspiran y
        manualidades que llenan de color cada espacio. Es un espacio pensado para que vivas la Navidad
        como si hojeases una revista festiva, llena de detalles y sorpresas.
      </p>
      <div className="home-highlights">
        <div className="highlight">✨ Tradiciones únicas</div>
        <div className="highlight">🍲 Recetas festivas</div>
        <div className="highlight">🎶 Villancicos</div>
        <div className="highlight">📖 Cuentos mágicos</div>
      </div>
    </div>
  );
}
export default Home;
