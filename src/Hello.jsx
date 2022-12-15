import Navbar from "./components/Navbar"
import Waves from "./components/Waves"
import Socials from "./components/Socials"
import { motion } from 'framer-motion'

export default function Hello() {
    return(
        <motion.div 
            initial={{y: "100%"}} 
            animate={{y: "0%"}} 
            transition={{duration: 0.75}}
            exit={{
                y: "0%",
                opacity: 1,
                transition: {duration: 5}
            }}
            className="lg:h-screen min-h-screen max-w-screen overflow-hidden w-full">
            <div className="p-3">
                <Navbar/>
                <h1 className="inline titulo-hello relative font-montserrat font-bold text-7xl lg:text-9xl -z-50">Hello.</h1>
                <div className="mt-5">
                <p className="lg:pl-3 inline lg:p-hello relative font-lexend text-xl lg:text-2xl">I'm David and I'm a Front End Developer.</p>
                </div>
                <Socials/>
            </div>
            <div className="fixed bottom-0 w-full">
            <Waves/>
            </div>
        </motion.div>
    )
}