import React from "react";
import Data from "../../public/data.json";

 
// Define the structure of a product
export type Product = {
  productName: string;
  quantity: number;
  price:number;
  img:string;
};

export default function generateProductsArray(): Product[] {
  const productsArray: Product[] = Data.map((item) => ({
    productName: item.name,
    quantity: 0,
    price:item.price,
    img:item.image.mobile
  }));
  
  return productsArray;
}

