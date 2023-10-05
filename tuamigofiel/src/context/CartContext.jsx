import { createContext, useContext, useState } from "react";

const CartContext =createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {

    const [ cartList, setCartList]= useState([])
  //console.log(cartList)
    const isProduct = (id) => cartList.findIndex(prod => prod.id === id)
    const addProduct= (newProduct) => {
      const index =isProduct(newProduct.id)
      //console.log(index)
      if(index !== -1){
        cartList[index].quantity += newProduct.quantity
        setCartList([...cartList])
      }else{
        setCartList([...cartList,newProduct])
      }
    }
   //Cantidad Productos en el cart
    const cantidadTotal = () => cartList.reduce((count,objProd) => count += objProd.quantity ,0)
    //precio total  recorrer el array y sumar el quantity
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
