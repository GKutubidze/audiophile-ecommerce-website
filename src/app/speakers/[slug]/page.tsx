"use client";
import { usePathname } from "next/navigation";
import React, { useCallback, useContext } from "react";
import Data from "../../../../public/data.json";
import AudioGearCenter from "@/app/components/HomeComponent/AudioGear/AudioGearCenter";
import Footer from "@/app/components/Footer/Footer";
import BuyProduct from "@/app/components/Buy/BuyProduct";
import FeaturesComponent from "@/app/components/Features/FeaturesComponent";
import styles from "./page.module.css";
import Gallery from "@/app/components/Gallery/Gallery";
import AlsoLike from "@/app/components/Products/AlsoLike";
import ProductCard from "@/app/components/Products/ProductCard";
import Header from "@/app/components/Header/Header";
const Page = () => {
  const path = usePathname();
  const parts = path.split("/");
  const lastPart = parts[parts.length - 1];
  const data = Data.find((item) => item.slug === lastPart);
  const dataForAlso = Data.filter(
    (item) =>
      item.slug !== lastPart &&
      item.slug != "yx1-earphones" &&
      item.slug!="zx9-speaker"
  );

  if (data) {
    return (
      <div className={styles.main}>
        <Header />
        <BuyProduct
          img={data.image.mobile}
          name={data.name}
          description={data.description}
          price={data.price}
        />
        <FeaturesComponent features={data.features} includes={data.includes} />
        <Gallery
          first={data.gallery.first}
          second={data.gallery.second}
          third={data.gallery.third}
        />
        <AlsoLike data={dataForAlso} />
        <ProductCard/>
        <AudioGearCenter />
        <Footer />
      </div>
    );
  } else {
    return null;
  }
};

export default Page;

function randomChoice(string1: string, string2: string) {
  let randomIndex = Math.random() < 0.5 ? 0 : 1;
  return [string1, string2][randomIndex];
}
