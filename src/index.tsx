import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/scss/index.scss'
import './assets/scss/vars.scss'
import App from './components/App/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
