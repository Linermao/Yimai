import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Foreign from './pages/Foreign'
import Teenager from './pages/Teenager'
import Information from './pages/Information'
import Product from './pages/Product'
import Nationality from './pages/Nationality/Nationality'
import Nationality_Introduce from './pages/Nationality/Nationality_Introduce'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Foreign" element={<Foreign />} />
        <Route path="/Nationality" element={<Nationality />} />
        <Route path="/Teenager" element={<Teenager />} />
        <Route path="/Information" element={<Information />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Nationality_Introduce" element={<Nationality_Introduce />} />
      </Routes>
    </Router>
  )
}

export default App
