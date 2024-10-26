import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import HireMe from "./pages/HireMe"
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hire-me" element={<HireMe />} />
      </Routes>
      <Footer />
    </div>
  )
}
export default App