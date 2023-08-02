import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';


ReactDOM.render(

<BrowserRouter>
    <App/> 
</BrowserRouter>





,document.getElementById('root'));