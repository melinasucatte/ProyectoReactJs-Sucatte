import { createContext, useContext, useState } from "react";

const CartContext =createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {

    const [ cartList, setCartList]= useState([])

    const isProduct = (id) => cartList.findIndex(prod => prod.id === id)

    const addProduct=(newProduct)=>{
      const index =isProduct(newProduct.id)
      console.log(index)
      if(index !== -1){
        cartList[index].quantity += newProduct.quantity
        setCartList([...cartList])
      }else{
        setCartList([...cartList,newProduct])
      }
    }
    //Eliminar Producto
    const eliminarProducto = (pid) => setCartList(cartList.filter(product => product.id !== pid ))
    //Cantidad Productos en el cart
    const cantidadTotal = () => cartList.reduce((count,objProd) => count += objProd.quantity ,0)
    //precio total  recorrer el array y sumar el quantity
    const precioTotal =() => cartList.reduce((count, objProd) => count += (objProd.quantity * objProd.price, 0))
    const deleteCart = () =>{
      setCartList([])
    }
  return (
    <CartContext.Provider value={{cartList,addProduct,deleteCart,eliminarProducto,cantidadTotal,precioTotal}}>
        {children}
    </CartContext.Provider>
  )
}
