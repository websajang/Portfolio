import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion";
import Hello from "./Hello"
import Stack from "./Stack"
import Webpages from "./Webpages";

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Hello/>} />
          <Route path="/stack" element={<Stack/>} />
          <Route path="/webpages" element={<Webpages />} />
          <Route path="/resumee" element={<Hello/>} />
          <Route path="/contact" element={<Hello/>} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
