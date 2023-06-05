import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// const todo = "Custom JS, CSS add";
// const date = new Date();
// const currentYear = date.getFullYear();
// const dateName = date.getDate();
// const monthName = date.getMonth();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>,
)
