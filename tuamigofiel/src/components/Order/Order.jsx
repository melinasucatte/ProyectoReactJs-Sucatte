import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore"

const Order = () => {
    const [dataForm,setDataForm] = useState({
        name: '',
        phone: '',
        email: ''
        
    })
    const [id,setId]= useState('')

    const {cartList, precioTotal ,deleteCart} = useCartContext()

    const generarOrden = (evt) => {
        evt.preventDefault()

        const order = {}
        order.buyer =dataForm
        order.items = cartList.map(prod => {
            return {id: prod.id, name: prod.name, price: prod.price, quantity: prod.quantity}
        })
        order.total =precioTotal()

        const queryDB = getFirestore()
        const ordersCollection = collection(queryDB, 'orders')
        addDoc(ordersCollection, order)
        .then(({id}) => setId(id))
        .catch(err => console.log(err))
        .finally(() =>{ setDataForm({
            name: '',
            phone: '',
            email: ''
            })
            deleteCart()
        })
    }


  
    const handleOnChange = (evt) =>{
        setDataForm({
            ...dataForm,
            [evt.target.name] : evt.target.value
        })
    }
    console.log(dataForm)
  return (
        <form onSubmit={generarOrden}>
            <h1>COMPLETE SU COMPRA!</h1>

            <input 
            type="text"
             name="name" 
             placeholder="Ingresar Nombre"
             value={dataForm.name}
             onChange={handleOnChange}
             />

            <input 
            type="email" 
            name="email"
            placeholder="Ingresar Email"
            value={dataForm.email}
            onChange={handleOnChange}
            
             />

            <input 
            type="number" 
            name="phone" 
            placeholder="Ingresar Telefono"
            value={dataForm.phone}
            onChange={handleOnChange}
             />

            <button type="submit">Finalizar Compra</button>

        </form>
  )

  }
export default Order