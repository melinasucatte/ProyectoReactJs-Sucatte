import { useState } from 'react'
import { useCartContext } from '../../../context/CartContext'
import { Link } from 'react-router-dom';

import ItemCount from '../../ItemCount/ItemCount'


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
                <p>NOMBRE: {producto.name}</p>
                <p>PRECIO: {producto.price}</p>
                <p>STOCK: {producto.stock}</p>
                <p>DESCRIPCION: {producto.description}</p>
            </div>
        </div>
        <div className="col agregar">
            {
                isCounter ?
                    <ItemCount inicial={1} stock={5} onAdd={onAdd}/>
                :
                <>
                    <Link to='/cart' className='boton'>
                        <button className='button-detalle'>Ir al Carrito</button>
                    </Link>
                    <Link to='/' className='boton'>
                        <button className='button-detalle'>Seguir Comprando</button>
                    </Link>
                </>

            }
            
        </div>
        
    </div>
  )
}

export default ItemDetail