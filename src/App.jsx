import Navbar from "./components/Navbar"
import facebook from './assets/facebook-icon.png'
import github from './assets/github-icon.png'
import linkedin from './assets/linkedin-icon.png'
import './index.css'

function App() {

  return (
    <div className="App">
      <div className="lg:h-screen">
        <div className="p-3">
        <Navbar/>
        <h1 className="font-montserrat font-bold text-9xl">Hello.</h1>
        <p className="font-lexend text-2xl">I'm David and I'm a Front End Developer.</p>
        <div className="fixed top-80 right-5">
          <div className="flex flex-col gap-5">
            <a href="#" hrefLang="" rel="" type="">
              <img src={facebook} style={{ height: 64, width: 64 }} alt="facebook-icon" width="64" height="64"/>
            </a>
            <a href="#" hrefLang="" rel="" type="">
              <img src={linkedin} style={{ height: 64, width: 64 }} alt="linkedin-icon" width="64" height="64"/>
            </a>
            <a href="#" hrefLang="" rel="" type="">
              <img src={github} style={{ height: 64, width: 64 }} alt="github-icon" width="64" height="64"/>
            </a>
          </div>
        </div>
        </div>
        <section className="absolute bottom-0 w-full">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
        </section>
      </div>
    </div>
  )
}

export default App
