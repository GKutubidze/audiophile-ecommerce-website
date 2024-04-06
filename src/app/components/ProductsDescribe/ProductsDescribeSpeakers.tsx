import React from 'react'
import { DescribeCard } from './DescribeCard';
import styles from "./ProductsDescribe.module.css"
import Data from "../../../../public/data.json"

const ProductsDescribeSpeakers = () => {
    const reversedData = [...Data];
    return (
      <div className={styles.main}>
        <DescribeCard
          newProduct={true}
          img={`/assets/product-${reversedData[5].slug}/mobile/image-product.jpg`}
          name={reversedData[5].others[0].name}
          type="speakers"
          content={reversedData[5].description}
          slug={`speakers/${reversedData[5].slug}`}
        />
       <DescribeCard
          newProduct={false}
          img={`/assets/product-${reversedData[4].slug}/mobile/image-product.jpg`}
          name={reversedData[4].others[0].name}
          type="speakers"
          content={reversedData[4].description}
          slug={`speakers/${reversedData[4].slug}`}

        />
      </div>
    );
}

export default ProductsDescribeSpeakers