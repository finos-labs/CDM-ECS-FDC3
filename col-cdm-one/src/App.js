// import logo from './logo.svg';
import React, { Component } from 'react';
import cdmlogo from './img/cdm-f-logo.jpg';
import './App.css';
// import SendRequest from './components/SendRequest';
import {DesktopAgent} from  '@finos/fdc3'


function App() {

  function setupFDC3() {
    console.log("loading");

    while (window.fdc3==null) {
      // wait;
      console.log("not ready")
    }

    window.fdc3.getSystemChannels().then(channels => {
      window.fdc3.joinChannel(channels[0].id);
      window.fdc3.addContextListener("abc", async (context) => {
        console.log("received context");
      })

      window.setTimeout(() => {

        console.log("is working")
      
        window.fdc3.broadcast({
          "type": "fdc3.instrument",
          "name": "Microsoft",
          "id.ticker" :"MSFT"
        })
        window.fdc3.broadcast({
          "type": "abc",
          "some": "data"
        })
  
      },5000)
    })

    

   

   
    
    return "hello";

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={cdmlogo} className="App-logo" alt="logo" />
        <p>
          FINOS BMO Hackathon App
        </p>
        {
          setupFDC3()
        }
        <a
          className="App-link"
          href="https://github.com/finos/community/discussions/251"
          target="_blank"
          rel="noopener noreferrer"
        >
          CDM Collateral Use Case
        </a>
      </header>
    </div>
  );
}

export default App;