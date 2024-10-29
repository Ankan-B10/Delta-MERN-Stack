function printHello(){
    console.log("Hello");
}

function printBye(){
    console.log("Bye");
}
function handleDblClick(){
    console.log("Double Clicked");
}
export default function Button(){
    return( <div>
        <button onClick={printHello}>Click me</button>
        <p onMouseOver={printBye}>This is para Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque iusto alias quasi debitis in aut pariatur repellat, quas commodi labore mollitia. Soluta tempore optio consequuntur explicabo nemo pariatur officiis rerum.</p>
        <button onDoubleClick={handleDblClick}>Double Click Me</button>
    </div>);
}