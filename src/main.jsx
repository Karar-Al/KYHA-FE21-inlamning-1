import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'

import 'normalize.css' // Normalizes CSS.
import 'minireset.css' // Gives us some nice CSS defaults.

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
