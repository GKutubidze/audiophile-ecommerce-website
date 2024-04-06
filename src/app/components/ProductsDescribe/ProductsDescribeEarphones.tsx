import React from 'react'
import styles from "./ProductsDescribe.module.css"
import { DescribeCard } from './DescribeCard';
import Data from "../../../../public/data.json"
const ProductsDescribeEarphones = () => {
    const reversedData = [...Data];
    return (
      <div className={styles.main}>
        <DescribeCard
          newProduct={true}
          img={`/assets/product-${reversedData[0].slug}/mobile/image-product.jpg`}
          name={reversedData[0].others[0].name}
          type="earphones"
          content={reversedData[0].description}
          slug={`earphones/${reversedData[0].slug}`}
        />
       
      </div>
    );
}

export default ProductsDescribeEarphones