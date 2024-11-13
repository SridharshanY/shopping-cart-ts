import axios from "axios";
import { Product } from "../context/ProductsProvider";

const base_url: string = "https://fakestoreapi.com/products/"

export const getAllProducts = async():Promise<Product[]> => {
    const {data} = await axios(base_url)
    return data
}

export const getSingleProduct = async(id:number):Promise<Product[]> => {
    const {data} = await axios(`${base_url}${id}`)
    return data
}