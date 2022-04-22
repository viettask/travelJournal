import React from "react"
import Navbar from "./Navbar"
import Card from "./Card"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })        

             
    return (
        <div>
            <Navbar />
            <section className="">
                {cards}
            </section>

        </div>
    )
}