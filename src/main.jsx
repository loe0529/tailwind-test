import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* CSS order: tokens/global → sections (desktop) → style.css 미디어쿼리 → responsive.css */
import './styles/global.css'
import './components/Hero.css'
import './components/About.css'
import './components/Skill.css'
import './components/Project.css'
import './components/TeamProject.css'
import './components/UIUX.css'
import './components/Footer.css'
import './styles/style-media.css'
import '../responsive.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
