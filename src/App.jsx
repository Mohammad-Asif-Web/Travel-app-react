import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Service from './components/Service/Service'
import Contact from './components/Contact/Contact'
import Signup from './components/Signup/Signup'
import Error from './components/Error/Error'
import Category from './components/Category/Category'

function App() {

  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category" element={<Category />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='*' element={<Error />} />
      </Routes> */}
      
    </div>
  )
}

export default App
