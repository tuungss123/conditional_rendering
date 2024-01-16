const Rainy = () => {
    return(<div>
        <h1>Bring your Umbrella!</h1>
    </div>)
}

const Sunny = () => {
    return(<div>
        <h1>Bring your Sunglasses!</h1>
    </div>)
}


const IsItRaining = (props) =>{
    const isRainy = props.isRainyy
    return isRainy ? <Rainy/> : <Sunny/>
}

export default IsItRaining