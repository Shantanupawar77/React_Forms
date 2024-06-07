import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"
import "./MemeStyle.css"

export default function AppMeme() {
    return (
        <div>
            <Header />
            <Meme />
        </div>
    )
}