const Rainy = () =>{
    return(<div>
        <h1>Bring your Umbrella!</h1>
    </div>)
}

const Sunny = () =>{
    return(<div>
        <h1>Bring your Sunglasses!</h1>
    </div>)
}

const ShineOrRain = (props) =>{
    const isRainy = props.isRainy

    if(isRainy){
        return(<div>
            <Rainy/>
        </div>)
    }
    else{
        return(<Sunny/>)
    }
}

export default ShineOrRain;