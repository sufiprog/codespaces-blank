import Hero from '../components/Hero'
import AboutMe from "../components/AboutMe"
import Services from "../components/Services"
import Contact from "../components/Contact"

const Home = () => {
  return (
    <div className="overflow-x-hidden">
        
        <Hero />
        <AboutMe />
        <Services />
        <Contact />
    </div>
  )
}
export default Home