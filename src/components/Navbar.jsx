import { useState } from "react";
import Hamburger from "./Hamburger"
import heart from '../assets/heart.png'

export default function Navbar () {

    const [opened, setOpened] = useState(false);
    const [likesCount, setLikesCount] = useState(0)

    return(
        <>
            <div className="lg:hidden flex flex-row justify-end w-full px-3">
                <Hamburger opened={opened} setOpened={setOpened}/>
            </div>
            <div className="hidden lg:flex flex-row justify-end w-full p-5 gap-10 -ml-10 font-lexend">
                <div 
                    className="flex justify-around items-center gap-4 mr-20 cursor-pointer likes-container"
                    onClick={()=> setLikesCount(likesCount+1)}>
                    <p className="font-press select-none">Give me like!</p>
                    <div className="heart select-none">
                    </div>
                    <img src={heart} style={{ height: 32, width: 32 }} alt="heart" width="32" height="32" className="hearticon select-none"/>
                    <div className="flex flex-wrap w-10">
                    <p className="select-none">{likesCount}</p>
                    </div>
                </div>
                <a href="/" className="text-xl cursor-pointer hover:underline hover:underline-offset-8">Hello</a>
                <a href="/stack" className="text-xl cursor-pointer hover:underline hover:underline-offset-8">Stack</a>
                <a href="/webpages#" className="text-xl cursor-pointer hover:underline hover:underline-offset-8">Webpages</a>
                <a href="/resumee" className="text-xl cursor-pointer hover:underline hover:underline-offset-8">Resumee</a>
                <a href="/contact" className="text-xl cursor-pointer hover:underline hover:underline-offset-8">Contact</a>
            </div>
        </>
    )
}