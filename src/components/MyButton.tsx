function MyButton(){
    function handleClick(){
        alert('Button was clicked!')
    }
    return(
        <button onClick = {handleClick}>I'm a button</button>
    );
}

export default MyButton;