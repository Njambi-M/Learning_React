import {useState} from "react";

function MyButton(){

    const[count, setCount] = useState(0);
    function handleClick(){
        alert('Button was clicked!')
        setCount(count + 1);
    }
    return(
        <button onClick = {handleClick}>I'm a button, clicked: {count} times</button>
    );
}

export default MyButton;