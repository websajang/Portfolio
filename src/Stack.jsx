import Navbar from "./components/Navbar"
import Waves from "./components/Waves"
import Socials from "./components/Socials"
import { motion } from 'framer-motion'

export default function Stack() {
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
            className="max-w-screen min-h-screen bg-green-crayola absolute top-0 left-0 w-full">
            <div className="p-3">
                <Navbar/>
                <h1 className="inline titulo-stack relative font-montserrat font-bold text-7xl lg:text-9xl">Stack.</h1>
                <div className="mt-5">
                <p className="lg:pl-3 inline lg:p-stack relative font-lexend text-xl lg:text-2xl">These are the tecnologies I'm used to work with.</p>
                </div>
                <Socials/>
            </div>
            <div className="fixed bottom-0 w-full">
            <Waves/>
            </div>
        </motion.div>
    )
}