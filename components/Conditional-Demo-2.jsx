const Rainy = () => {
    return(<div>
        <h1>Bring your Umbrella!</h1>
    </div>)
}

const RainOrShine = (props) => {
    const isRainy = props.isRainy;
    if(isRainy){
        return(<div>
            <Rainy/>
        </div>)
    }
    else{
        return(<div>
            <p>No rain today.</p>
        </div>)
    }
 
}

export default RainOrShine;