import React from "react";
import styles from "./ProductItem.module.css";
import Image from "next/image";
import Button from "../Buttons/Button";
import { url } from "../Gallery/Gallery";
import useWindowWidth from "@/app/hooks/useWindowWidth";
import { useRouter } from "next/navigation";
interface Props {
  mobile: string;
  tablet: string;
  desktop: string;
  name: string;
  slug:string;
  category:string;
}
const ProductItem = (props: Props) => {
  const width = useWindowWidth();
  const router=useRouter();
  const { mobile, tablet, desktop, name,slug,category } = props;

  console.log(name)

  const img = url(width, mobile, tablet, desktop);

  return (
    <div className={styles.main} onClick={()=>{
      router.push(`/${category}/${slug}`)
    }}>
      <div className={styles.imgContainer}>
        <Image
          src={img?.slice(1) || ""}
          alt=""
          className={styles.img}
          width={1000}
          height={600}
        />
      </div>

      <p className={styles.name}>{removeLastWord(name)}</p>
      <Button title="see product" />
    </div>
  );
};

export default ProductItem;

function removeLastWord(sentence: string) {
  // Split the sentence into an array of words
  const words = sentence.split(" ");

  // Remove the last word
  words.pop();

  // Join the remaining words back into a sentence
  const newSentence = words.join(" ");

  return newSentence;
}
