import { useEffect, useState } from 'react'
import {collection, doc, getDocs, getFirestore} from 'firebase/firestore'
import { mFetch } from '../../utils/mock'
import { useParams } from 'react-router-dom'

import ItemList from '../ItemList/ItemList'

import './ItemListContainer.css'



const ItemListContainer = ( ) => {
  const[productos, setProductos] = useState([])
  const[loading, setLoading]= useState(true)
  const {cid} = useParams()
  /*
  useEffect(()=>{
    if(cid){
      mFetch()
      .then(respuesta => setProductos(respuesta.filter(producto => cid === producto.category)))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    }else{
      mFetch()
      .then(respuesta => setProductos(respuesta))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    }
  },[cid])


  */
    useEffect(() =>{
      const db =getFirestore()
      const queryCollection = collection(db,'productos' )
      getDocs(queryCollection)
      .then(resp => setProductos(resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    },[])
 /*
  useEffect(() =>{
    const db =getFirestore()
    const queryCollection = collection(db,'productos' )
    const queryFilter = query(queryCollection, where('category', '==', cid))
    getDocs(queryFilter)
    .then(resp => setProductos(resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
  },[])
  console.log(productos)
  */
  return (
    <>
      <div className='row'>
        { loading ? <h2 className='loading'>LOADING...</h2> : <ItemList productos={productos} />    }
      </div>
    </>
  )
}

export default ItemListContainer