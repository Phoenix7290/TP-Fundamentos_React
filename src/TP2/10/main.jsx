import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home/'
import Descricao from './Pages/Home/Descricao'
import Produtos from './Pages/Produtos'
import Contato from './Pages/Contato'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <Descricao />
    <Produtos />
    <Contato />
  </React.StrictMode>,
)
