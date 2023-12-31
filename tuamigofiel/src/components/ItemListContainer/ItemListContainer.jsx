import { useEffect, useState } from 'react'
import {collection , getDocs, getFirestore, query, where} from 'firebase/firestore'
import { useParams } from 'react-router-dom'

import ItemList from '../ItemList/ItemList'

import './ItemListContainer.css'

const ItemListContainer = ( ) => {

  const[productos, setProductos] = useState([])
  const[loading, setLoading]= useState(true)
  const {cid} = useParams()
  
  useEffect(()=>{
    const db =getFirestore()
    const queryCollection = collection(db,'productos' )
    const queryFilter = cid ? query(queryCollection, where('category','==', cid)) : queryCollection

    getDocs(queryFilter)
    .then(resp => setProductos(resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
    
  },[cid])

  return (
    <>
      <div className='row'>
        { loading ? <h2 className='loading'>LOADING...</h2> : <ItemList productos={productos} /> }
      </div>
    </>
  )
}

export default ItemListContainer