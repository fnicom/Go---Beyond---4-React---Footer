import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
    <footer>
      <section class="address">
        <h3>Localização</h3>
        <p>Avenida Andrômeda, 200. Bloco 6 e 8</p>
        <p>Alphaville SP</p>
        <p><a href="mailto:brasil@corebiz.ag">brasil@corebiz.ag</a></p>
        <p><a href="tel:+551130901039">+55 11 3090 1039</a></p>
      </section>
      <section class="contact">
        <ul>
          <li>
            <a href="/fale-conosco">Entre em contato</a>
          </li>
          <li>
            <a href="/chat">Fale com nosso consultor online</a>
          </li>
        </ul>
      </section>
      <section class="created">
        <div class="logo-corebiz">
          <p>Created By</p>
          <img src="/frontend/image/corebiz.png" alt="Logo Corebiz" />
        </div>
        <div class="logo-vetex">
          <p>Powered By</p>
          <img src="/frontend/image/vetex.png" alt="Logo Vtex" />
        </div>
      </section>
    </footer>
    </body>
  );

}

export default App;
