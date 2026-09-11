import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Renderiza o componente principal da aplicação
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)