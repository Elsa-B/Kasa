import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home/Home'
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
  document.getElementById("root")
);