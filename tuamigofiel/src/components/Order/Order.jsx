import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore"

import Swal from 'sweetalert2'

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

       if(!dataForm.name || !dataForm.phone || !dataForm.email)
       {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: '¡Verifique que los campos hayan sido completados correctamente!',
                confirmButtonColor: '#d2691e',
            })
        }else{
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
            Swal.fire({
                icon: 'success',
                title: `¡Orden creada con éxito ${id}! `,
                showConfirmButton: false,
                timer: 3500,
                timerProgressBar: true,
                allowOutsideClick: false,
                allowEscapeClick: false
            })
        }
    }


  
    const handleOnChange = (evt) =>{
        setDataForm({
            ...dataForm,
            [evt.target.name] : evt.target.value
        })
    }

  return (
        <form className="center" onSubmit={generarOrden}>
            <h1 className="titulo">COMPLETE SU COMPRA!</h1>

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

            <button type="submit" className="button-detalle">Finalizar Compra</button>

        </form>
  )

}

export default Order