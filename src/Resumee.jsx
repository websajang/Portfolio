import Navbar from "./components/Navbar"
import Waves from "./components/Waves"
import Socials from "./components/Socials"
import { motion } from 'framer-motion'

export default function Resumee() {
    return(
        <motion.div 
            initial={{y: "100%"}} 
            animate={{y: "0%"}} 
            transition={{duration: 0.75}}
            exit={{
                y: "0%",
                opacity: 1,
                transition: {duration: 1}
            }}
            className="max-w-screen min-h-screen bg-laurel absolute top-0 left-0 w-full">
            <div className="p-3">
                <Navbar/>
                <h1 className="inline titulo-resumee relative font-montserrat font-bold text-7xl lg:text-9xl">Resumee.</h1>
                <div className="mt-5">
                <p className="lg:pl-3 inline lg:p-resumee relative font-lexend text-xl lg:text-2xl">This is my career path.</p>
                </div>
                <Socials/>
            </div>
            <div className="fixed bottom-0 w-full">
            <Waves/>
            </div>
        </motion.div>
    )
}