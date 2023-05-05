
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
    <body className="page">

      <Header />
      <Main />
      <Footer className="footer" />



      {/* <template id="card-template">
        <li className="card">
          <button className="card__remove-button" type="button" aria-label="удалить"></button>
          <img className="card__image" src="#" alt="#" />
          <div className="card__description">
            <h2 className="card__title"></h2>
            <div className="card__like-group">
              <button className="card__like-button" type="button" aria-label="Лайк"></button>
              <span className="card__like-counter"></span>
            </div>
          </div>
        </li>
      </template> */}

    </body>
  );
}

export default App;
