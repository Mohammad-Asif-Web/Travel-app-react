import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Service from './components/Service/Service'
import Contact from './components/Contact/Contact'
import Signup from './components/Signup/Signup'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      
    </div>
  )
}

export default App
