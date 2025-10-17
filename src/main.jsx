import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import ScrollTop from './assets/components/ScrollTop.jsx'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <ScrollTop/>
      <App />
    </StrictMode>
  </BrowserRouter>
);
