import React from 'react'
import ReactDOM from 'react-dom/client'
import SobreMim from './components/SobreMim.jsx'
import Habilidades from './components/Habilidades.jsx'
import Projetos from './components/Projetos.jsx'
import Educacao from './components/Educacao.jsx'
import Contatos from './components/Contatos.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SobreMim />
    <Habilidades />
    <Projetos />
    <Educacao />
    <Contatos />	
  </React.StrictMode>,
)
