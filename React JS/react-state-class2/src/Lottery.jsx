import { useState } from "react";
import "./Lottery.css";
import { generateTicket, sum} from "./helper";  
import Ticket from "./Ticket";
export default function Lottery({n=3, winCondition}) { // by default we give value 3 and 15
    let [ticket, setTicket] = useState(generateTicket(n));
    let isWinning = winCondition(ticket);
    
    let buyTicket = () => {
        setTicket(generateTicket(n)); 
    };

    return (
        <div>
            <h1>Lottery Game</h1>
            {/* <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div> */}
            <Ticket ticket={ticket}/> {/* passing prop{ticket } */}
            <button onClick={buyTicket}>Buy New Ticket</button>
            <br />
            <h3>{isWinning && "Congratulations, you won!"}</h3>
        </div>
    );
}