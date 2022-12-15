import Navbar from "./components/Navbar"
import Waves from "./components/Waves"
import Socials from "./components/Socials"
import { motion } from 'framer-motion'

export default function Webpages() {
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
            className="max-w-screen min-h-screen bg-red absolute top-0 left-0 w-full">
            <div className="p-3">
                <Navbar/>
                <h1 className="inline titulo-webpages relative font-montserrat font-bold text-5xl lg:text-9xl -z-50">Webpages.</h1>
                <div className="mt-5">
                <p className="lg:pl-3 inline lg:p-webpages relative font-lexend text-xl lg:text-2xl">These are the webpages I made.</p>
                </div>
                <Socials/>
            </div>
            <div className="fixed bottom-0 w-full">
            <Waves/>
            </div>
        </motion.div>
    )
}