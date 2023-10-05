import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"

const CartContainer = () =>{
    const {cartList,deleteCart,eliminarProducto,precioTotal} = useCartContext()
    return(
        <div>
            {cartList.length > 0 ?(
                <>
                    { cartList.map((prod) => (
                            <div key={prod.id}>
                               <img src={prod.imageUrl} className="w-25"/>
                               <label >{prod.name} </label>
                               <label>Cantidad: {prod.quantity}</label>
                               <label>Precio: ${prod.price}</label>
                                <button onClick={() => eliminarProducto(prod.id)}>Eliminar</button>
                            </div>))
                            }
                            {precioTotal()!== 0 && (
                                 <h3>PRECIO TOTAL: $ {precioTotal()}</h3>
                            )}
                            <button onClick={deleteCart}>Vaciar Carrito</button>
                </>
            ):(
                <>
                <h3>NO HAY PRODUCTOS EN EL CARRITO</h3>
                <Link to={"/"}>
                    <button>Seguir comprando</button>
                </Link>
                </>
            )
            }

        </div>
    )
}
export default CartContainer