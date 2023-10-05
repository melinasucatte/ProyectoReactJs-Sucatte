import { createContext, useContext, useState } from "react";

export const useCartContext = () => useContext(CartContext)

const CartContext =createContext([])

export const CartContextProvider = ({children}) => {

    const [ cartList, setCartList]= useState([])
    const isProduct = (id) => cartList.findIndex(prod => prod.id === id)

    const addProduct= (newProduct) => {
      const index =isProduct(newProduct.id)

      if(index !== -1){
        cartList[index].quantity += newProduct.quantity
        setCartList([...cartList])
      }else{
        setCartList([...cartList,newProduct])
      }
    }
   //Cantidad Productos
    const cantidadTotal = () => cartList.reduce((count,objProd) => count += objProd.quantity ,0)

    //Precio total
    const precioTotal = () => cartList.reduce((precioTotal, objProduct)=> precioTotal += (objProduct.price * objProduct.quantity) ,0)

    //Eliminar Producto
    const eliminarProducto = (pid) => {
      const eliminar= cartList.filter(product => product.id !== pid )
      setCartList(eliminar)
    }

    //Vaciar Carrito
    const deleteCart = () =>{
      setCartList([])
    }
    
  return (
    <CartContext.Provider value={{
        cartList,
        addProduct,
        cantidadTotal,
        precioTotal,
        eliminarProducto,
        deleteCart
    }}>
        {children}
    </CartContext.Provider>
  )
}
