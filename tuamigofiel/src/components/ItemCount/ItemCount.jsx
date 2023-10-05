import { useState } from "react"

const ItemCount = ({inicial,stock,onAdd})=>{

    const[counter, setCounter]= useState(inicial)

    const handleAdd = ()=>{

        if(counter < stock){
            setCounter(counter+1)
        }

    }
    const handleSubstract = ()=>{

        if(counter > inicial){

            setCounter(counter-1)

        }
    }
    const handleOnAdd= ()=>{
        onAdd(counter)
    }

    return <center>
                <button className="button-count" onClick={handleAdd}> + </button>
                <label> <strong>{ counter }</strong></label>
                <button className="button-count" onClick={handleSubstract}> - </button>
                <button className="button-count" onClick={handleOnAdd}>Agregar al carrito</button>
            </center>
}

export default ItemCount  