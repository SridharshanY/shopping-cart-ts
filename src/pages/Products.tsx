import { useEffect, useState } from "react"
import { Product } from "../context/ProductsProvider"
import { getAllProducts } from "../data/apiProducts"

const Products:React.FC = () => {
    
  const [products, setProducts] = useState<Product[]>([])

  useEffect(()=>{
    const fetchAll = async() =>{
      try{
        const data:Product[] = await getAllProducts()
        setProducts(data)
        console.log(products)
      }
      catch(error){
        console.log(error)
      }
    }
    fetchAll()
  },[])


  return (
    <div>
        {products.map((product, id)=>{
        return(
          <p key={id}>{product.title}</p>
        )
      })}

    </div>
  )
}

export default Products
