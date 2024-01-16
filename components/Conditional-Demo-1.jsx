const ShinyButton = () =>{
    const handleClick = () =>{
        alert("You clicked me!");
    }
    return(<div className="flex border-black ">
        <button className="bg-blue-500 rounded text-white" onClick={handleClick}> Click this button! </button>
    </div>)
}

export default ShinyButton;