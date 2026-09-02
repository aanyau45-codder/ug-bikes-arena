import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { TypographyProvider } from './context/TypographyContext.tsx'
import { CountryProvider } from './context/CountryContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <TypographyProvider>
        <CountryProvider>
          <App />
        </CountryProvider>
      </TypographyProvider>
    </BrowserRouter>
  </StrictMode>,
)
