import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserForm from './component/UserForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserForm />
  </StrictMode>,
)
