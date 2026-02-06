import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import ProjectShowcase from './pages/ProjectShowcase.jsx'
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import ScrollToTop from "./components/ScrollToTop.jsx";
import Services from './pages/Services.jsx';
import ServiceDetail from "./pages/ServiceDetail.jsx"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project/:id' element={<ProjectShowcase />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} /> 
          <Route path='/services' element={<Services />} />
          <Route path='/services/:service' element={<ServiceDetail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}


export default App
