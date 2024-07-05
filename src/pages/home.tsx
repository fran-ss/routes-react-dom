import { Link } from "react-router-dom";
import { products } from "../data/products";

export  function Home() {
    return (
        <div>
            { products.map((product => (
                    <Link to ={`/products/${product.id}`}>
                    <h1>{product.id}</h1>
                    <h2>{product.name}</h2>
                        <img src={product.imageUrl} alt={product.name} />
                        </Link>
                )))
            }
      </div>
    )
}