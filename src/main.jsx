import { createRoot } from 'react-dom/client'
import './index.css'
import App from './AllRoutes.jsx'
import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
