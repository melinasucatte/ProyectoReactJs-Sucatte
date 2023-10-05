import { Link } from "react-router-dom"
import{ useCartContext } from "../../context/CartContext"

const CartContainer = () =>{
    const {cartList,deleteCart, eliminarProducto, precioTotal} = useCartContext()
    return(
        <div className="center">
            {cartList.length > 0 ?(
                <>
                    { cartList.map(prod => <div className="card" key={prod.id}>
                               <img src={prod.imageUrl} className="w-25"/>
                               <label >{prod.name} </label>
                               <label>Cantidad: {prod.quantity}</label>
                               <label>Precio: ${prod.price}</label>
                                <button className="button-detalle" onClick={() => eliminarProducto(prod.id)}>Eliminar</button>
                            </div>)}
                            <h3 className="total">PRECIO TOTAL: ${precioTotal()}</h3>
                            <button onClick={deleteCart} className="button-detalle ">Vaciar Carrito</button>
                            <Link to={"/order"}>
                            <button type="submit" className="button-detalle">Generar Orden</button>
                            </Link>
                </>
            ):(
                <>
                    <h3 className="titulo">NO HAY PRODUCTOS EN EL CARRITO</h3>
                    <Link to={"/"} className="boton">
                        <button className="button-detalle">Ir a Inicio</button>
                    </Link>
                </>
            )
            }

        </div>
    )
}

export default CartContainer