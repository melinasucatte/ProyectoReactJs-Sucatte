import { useState } from 'react'
import { useCartContext } from '../../../context/CartContext'
import ItemCount from '../../ItemCount/ItemCount'
import { Link } from 'react-router-dom';


const ItemDetail = ({producto}) => {
    const [isCounter,setIsCounter] =useState(true)
    const {addProduct}= useCartContext()
    const onAdd = (count) =>{
       addProduct({...producto, quantity:count})
       setIsCounter(false)
    }
  return (
    <div className="detalle">
        <h2 className='titulo'>DETALLE DEL PRODUCTO</h2>
        <div className="col cuerpo">
            <img src={producto.imageUrl} alt={producto.description} />
            <div className='texto'>
                <p>Nombre: {producto.name}</p>
                <p>Precio: {producto.price}</p>
                <p>Stock: {producto.stock}</p>
                <p>Descripcion: {producto.description}</p>
            </div>
        </div>
        <div className="col agregar">
            {
                isCounter ?
                    <ItemCount inicial={1} stock={5} onAdd={onAdd}/>
                :
                <>
                     <Link to='/cart'>
                        <button>Ir al Carrito</button>
                    </Link>
                    <Link to='/'>
                        <button>Seguir Comprando</button>
                    </Link>
                </>

            }
            
        </div>
        
    </div>
  )
}

export default ItemDetail