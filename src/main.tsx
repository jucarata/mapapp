import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Map/config/leaflet-fix.ts'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
