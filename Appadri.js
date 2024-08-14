import logo from './download.png';
import './Appadri.css';

function Appadri() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /><br></br>


        {/* <p>
          Edit <code>src/Appadri.js</code> and save to reload.
        </p> */}

        <a
          className="Appadri-link"
          href="https://www.youtube.com/@ABatcaverna/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Industrias Wayne
        </a>
        <footer>
        <a
          className="Appadri-link"
          href="https://www.youtube.com/@AdrianaFernandesCotrimDrica"
          target="_blank"
          rel="noopener noreferrer"
        >
           Adri Cotrim
        </a><br></br>
        </footer>
      </header>
    </div>
  );
}

export default Appadri;