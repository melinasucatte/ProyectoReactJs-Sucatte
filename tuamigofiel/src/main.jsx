import { initFirebase } from './firebase/config.js'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

initFirebase()

ReactDOM.createRoot(document.getElementById('root')).render( <App />)
