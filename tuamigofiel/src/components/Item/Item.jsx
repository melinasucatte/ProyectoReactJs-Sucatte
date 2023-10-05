import { Link } from "react-router-dom"


const Item = ({prod}) => {
  return (
    <div className="card w-25">
                <div className="card-body bg-">
                    <img className="card-img-top" src={prod.imageUrl} alt={prod.name}></img>
                    <p>Nombre: {prod.name}</p>
                    <p>Descripcion:{prod.description}</p>
                    <p>Precio: {prod.price}</p>
                </div>
                <div className="card-footer">
                  <Link to={`/detalle/${prod.id}`}>
                    <button className="button-detalle">Detalle</button>
                  </Link>
                </div>                
     </div>
  )
}

export default Item