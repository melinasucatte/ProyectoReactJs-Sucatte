import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { mFetchOne } from "../../utils/mock"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import ItemDetail from "./ItemDetail/ItemDetail"

import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const [producto,setProducto]= useState({})
    const {pid} = useParams()
   useEffect(() =>{
      const db =getFirestore()
      const queryDoc = doc(db,'productos',pid)
      getDoc(queryDoc)
      .then(resp => ({ id: resp.id, ...resp.data()}))
      .then(resp=> setProducto(resp))
    },[])
  return (
    <div>
        <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer
