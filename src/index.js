/* eslint-disable import/no-extraneous-dependencies */
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/lib/animate/animate.min.css';
import './assets/lib/flaticon/font/flaticon.css';
import './assets/lib/slick/slick.css';
import './assets/lib/slick/slick-theme.css';
import './assets/lib/owlcarousel/assets/owl.carousel.min.css';
import './assets/styles/main.css';
import App from './App';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
