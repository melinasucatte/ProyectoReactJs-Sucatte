import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"

import ItemDetail from "./ItemDetail/ItemDetail"

import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

    const [producto,setProducto]= useState({})
    const[loading, setLoading]= useState(true)
    const {pid} = useParams()

   useEffect(() =>{

      const db =getFirestore()
      const queryDoc = doc(db,'productos',pid)

      getDoc(queryDoc)

      .then(resp => ({ id: resp.id, ...resp.data()}))
      .then(resp=> setProducto(resp))
      .finally(()=> setLoading(false))

    },[])

  return (
      <>

        <div className='row'>
          { loading ? <h2 className='loading'>LOADING...</h2> : <ItemDetail producto={producto}/> }
        </div>
        
      </>
  )
}

export default ItemDetailContainer
