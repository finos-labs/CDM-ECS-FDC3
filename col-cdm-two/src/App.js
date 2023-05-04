// import logo from './logo.svg';
import cdmlogo from './img/cdm-f-logo.jpg';
import './App.css';
import CheckEligibility from './components/CheckEligibility';

function App() {
  let fdc3 : DesktopAgent;

  return (
    <div className="App">
      <header className="App-header">
        <img src={cdmlogo} className="App-logo" alt="logo" />
        <p>
        FINOS BMO Hackathon 

        {
          window.addEventListener("fdc3Ready", () => {
            fdc3.broadcast({
              "type": "abc",
              "some": "data"
            })
          })
          
        }

        </p>
        <CheckEligibility/>
        <a
          className="App-link"
          href="https://github.com/finos/common-domain-model"
          target="_blank"
          rel="noopener noreferrer"
        >
          Common Domain Model in GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
