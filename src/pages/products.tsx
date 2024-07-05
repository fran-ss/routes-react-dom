import { useParams } from "react-router-dom"
import { products } from "../data/products"

export function Products() {
    const { id } = useParams()
    const product = products.find((product)=>product.id ==id)
    return (
      <div>
        <h1>{product?.id}</h1>
        <h2>{product?.name}</h2>
        <img src={product?.imageUrl} alt={product?.name} />
      </div>
    );
}
