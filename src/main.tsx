import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// Tags só precisam de fechamento tradicional quando els recebem elementos filhos, como ocorre com a tag <StrictMode></StrictMode>. Caso contrário, elas podem ser fechadas na própria abertura, como ocorre com a tag <App />.