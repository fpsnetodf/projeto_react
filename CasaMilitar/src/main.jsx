import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Nav.jsx'
import Login from './Login.jsx'
import Footer from './Footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Login />
    <Footer />
  </React.StrictMode>,
)
