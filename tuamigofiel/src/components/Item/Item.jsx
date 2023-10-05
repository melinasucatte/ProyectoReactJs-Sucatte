import { Link } from "react-router-dom"

const Item = ({prod}) => {

  return (
    <div className="card w-25">
        <div>
          <img className="card-img-top" src={prod.imageUrl} alt={prod.name}></img>
          <p>{prod.name}</p>
          <p>{prod.description}</p>
          <p>${prod.price}</p>
        </div>
        <div>
            <Link to={`/detalle/${prod.id}`}>
              <button className="button-detalle">Detalle</button>
            </Link>
        </div>                
     </div>
  )
}

export default Item