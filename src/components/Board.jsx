import { useEffect, useState } from "react";
import "./board.css"
import Card from "./Card"
import { group_by } from "./utils";


function Division({title, cards}){
    return (
        <div className="division">
            <div className="division-heading">
                {title}
            </div>
            <div className="divison-cards">
                {cards.map(c => < Card task={c} />)}
            </div>
        </div>
    );
}



export function Board({option, desc = false}){

    const url = "https://api.quicksell.co/v1/internal/frontend-assignment"
    const [raw, setRaw] = useState([])

    useEffect(() => {
        fetch(url).then(b => b.json()).then(c => {return setRaw(c.tickets)})
    },[url])

    const fieldMap = group_by(raw, option, desc)

return (
        <div className="board">
            {Array.from(fieldMap.entries()).map(([title, cards], index) => (
                <Division key={index} title={title} cards={cards} />
            ))}
        </div>
    );
}
