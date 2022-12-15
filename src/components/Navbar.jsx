import { useState } from "react";
import Hamburger from "./Hamburger"

export default function Navbar () {

    const [opened, setOpened] = useState(false);

    return(
        <>
            <div className="lg:hidden flex flex-row justify-end w-full px-3">
                <Hamburger opened={opened} setOpened={setOpened}/>
            </div>
            <div className="hidden lg:flex flex-row justify-end w-full p-5 gap-10 -ml-10 font-lexend">
                <a href="/" className="text-xl cursor-pointer hover:underline hover:underline-offset-8">Hello</a>
                <a href="/stack" className="text-xl cursor-pointer hover:underline hover:underline-offset-8">Stack</a>
                <a href="/webpages#" className="text-xl cursor-pointer hover:underline hover:underline-offset-8">Webpages</a>
                <a href="/#" className="text-xl cursor-pointer hover:underline hover:underline-offset-8">Resumee</a>
                <a href="/#" className="text-xl cursor-pointer hover:underline hover:underline-offset-8">Contact</a>
            </div>
        </>
    )
}