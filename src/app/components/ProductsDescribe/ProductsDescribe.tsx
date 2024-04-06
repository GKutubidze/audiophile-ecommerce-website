import React from "react";
import styles from "./ProductsDescribe.module.css";
import { DescribeCard } from "./DescribeCard";
import Data from "./Data.json";
import Link from "next/link";
 
const ProductsDescribe = () => {
   const reversedData = [...Data].reverse();
  return (
    <div className={styles.main}>
       <DescribeCard
        newProduct={true}
        img={`/assets/product-${reversedData[0].slug}/mobile/image-product.jpg`}
        name={reversedData[0].others[0].name}
        type="headphones"
        content={reversedData[0].description}
        slug={`headphones/${reversedData[0].slug}`}
      />
      
      {reversedData.slice(1,3).map((item, key) => {
        return (
           <DescribeCard
            key={key}
            newProduct={false}
            img={`/assets/product-${item.slug}/mobile/image-product.jpg`}
            name={item.others[0].name}
            type={item.category}
            content={item.description}
            slug={`${item.category}/${item.slug}`}

          />
         );
      })}
    </div>
  );
};

export default ProductsDescribe;


interface ImagePaths {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface IncludeItem {
  quantity: number;
  item: string;
}

interface GalleryImages {
  first: ImagePaths;
  second: ImagePaths;
  third: ImagePaths;
}

interface Product {
  id: number;
  slug: string;
  name: string;
  image: ImagePaths;
  category: string;
  categoryImage: ImagePaths;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludeItem[];
  gallery: GalleryImages;
  others: {
    slug: string;
    name: string;
    image: ImagePaths;
  }[];
}

 
