import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@hirakada/ui/ui.css';
import App from '../App.jsx'

import "iconify-icon";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
