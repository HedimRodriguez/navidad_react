import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <h2>📬 Contacto</h2>
      <p>
        Envíanos tus saludos navideños y comparte la alegría de estas fiestas. 
        Completa el formulario y estaremos encantados de leerte.
      </p>
      <form className="contact-form">
        <label>Tu nombre</label>
        <input type="text" placeholder="Escribe tu nombre" />

        <label>Tu correo</label>
        <input type="email" placeholder="Escribe tu correo" />

        <label>Mensaje navideño</label>
        <textarea placeholder="Escribe tu mensaje festivo"></textarea>

        <button type="submit">Enviar 🎁</button>
      </form>
    </div>
  );
}

export default Contact;
