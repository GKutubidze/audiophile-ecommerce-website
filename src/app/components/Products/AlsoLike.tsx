import React from "react";
import styles from "./AlsoLike.module.css";
import ProductItem from "./ProductItem";
interface Props {
  data: Product[];
}
const AlsoLike = (props: Props) => {
  const { data } = props;

  return (
    <div className={styles.main}>
      <p className={styles.title}>You may also like</p>
      <div className={styles.container}>
        {data.map((item, key) => (
          <ProductItem
            key={key}
            mobile={item.image.mobile}
            tablet={item.image.tablet}
            desktop={item.image.desktop}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default AlsoLike;

type Product = {
  [x: string]: any;
  id: number;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  others: {
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }[];
};
