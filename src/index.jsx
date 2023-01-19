import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'

import './utils/Style/globalStyle.css';
import './utils/Style/main.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);