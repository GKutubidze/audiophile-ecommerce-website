import React from "react";
import styles from "./ FeaturesComponent.module.css";
type Item = {
  quantity: number;
  item: string;
};
interface Props {
  features: string;
  includes: Item[];
}
const FeaturesComponent = (props: Props) => {
  const { features, includes } = props;
  return (
    <div className={styles.main}>
      <div className={styles.features}>
        <p className={styles.title}>FEATURES</p>
        <p className={styles.featuresContent}>{features}</p>
      </div>

      <div className={styles.includes}>
        <p className={styles.title}>IN THE BOX </p>

        <div className={styles.boxContainer}>
          {includes.map((item, key) => {
            return (
              <div key={key} className={styles.box}>
                <span className={styles.quantity}>{`${item.quantity}x  `}</span>
                <span className={styles.item}>{`${item.item}`}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturesComponent;
