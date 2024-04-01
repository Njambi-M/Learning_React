import {useState} from "react";

function MyButton({count, onClick}: {count: number, onClick: () => void}){

    // const[count, setCount] = useState(0);
    // function handleClick(){
    //     alert('Button was clicked!')
    //     setCount(count + 1);
    // }
    return(
        <button onClick = {onClick}>I'm a button, clicked: {count} times</button>
    );
}

export default MyButton;