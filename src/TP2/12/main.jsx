import React from 'react'
import ReactDOM from 'react-dom/client'
import SobreMim from './components/SobreMim.jsx'
import Habilidades from './components/Habilidades.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SobreMim />
    <Habilidades />
  </React.StrictMode>,
)
