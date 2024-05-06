import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Login.jsx'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Login /> 
    <Footer />
  </React.StrictMode>
)
