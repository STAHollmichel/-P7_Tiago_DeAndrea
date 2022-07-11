// Boootstrap 5
import 'bootstrap/dist/css/bootstrap.min.css';

// Framework React
import React from 'react';

// React Dom & Router
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import './index.css';

//Application
import App from './App';

// Outil de mesure des performances réelles de l'application
import reportWebVitals from './reportWebVitals';



// Render des dom & Routes vers l'app 

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
