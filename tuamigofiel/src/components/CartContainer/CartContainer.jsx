import { Link } from "react-router-dom"
import{ useCartContext } from "../../context/CartContext"
import{ addDoc, collection, getFirestore } from 'firebase/firestore'


const CartContainer = () =>{
    const {cartList,deleteCart, eliminarProducto, precioTotal} = useCartContext()

    /*const handleOrder = () =>{
        const order ={}
        order.buyer ={ name: 'Melina', phone: '123456', email:'meli@gmail.com'}
        order.item =cartList.map(prod => {
            return {id: prod.id , name:prod.name , price:prod.price, quantity: prod.quantity}
        })
        order.total=precioTotal()
        const queryDB = getFirestore()
        const ordersCollection = collection(queryDB, 'orders')
        addDoc(ordersCollection, order)
        .then(resp => console.log(resp))
    }*/
    return(
        <div>
            {cartList.length > 0 ?(
                <>
                    { cartList.map(prod => <div key={prod.id}>
                               <img src={prod.imageUrl} className="w-25"/>
                               <label >{prod.name} </label>
                               <label>Cantidad: {prod.quantity}</label>
                               <label>Precio: ${prod.price}</label>
                                <button onClick={() => eliminarProducto(prod.id)}>Eliminar</button>
                            </div>)}
                            <h3>Precio Total: {precioTotal()}</h3>
                            <button onClick={deleteCart}>Vaciar Carrito</button>
                            <Link to={"/order"}>
                            <button type="submit">Generar Orden</button>
                            </Link>
                </>
            ):(
                <>
                <h3>NO HAY PRODUCTOS EN EL CARRITO</h3>
                <Link to={"/"}>
                    <button>Ir a Inicio</button>
                </Link>
                </>
            )
            }

        </div>
    )
}

export default CartContainer