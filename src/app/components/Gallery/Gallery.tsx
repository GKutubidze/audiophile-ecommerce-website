'use client'
import React from "react";
import styles from "./Gallery.module.css";
import Image from "next/image";
import useWindowWidth from "@/app/hooks/useWindowWidth";
interface GalleryImage {
  mobile: string;
  tablet: string;
  desktop: string;
}
interface Props {
  first: GalleryImage;
  second: GalleryImage;
  third: GalleryImage;
}
const Gallery = (props: Props) => {
  const width=useWindowWidth();

  const { first, second, third } = props;
  const img1=url(width,first.mobile,first.tablet,first.desktop);
  const img2=url(width,second.mobile,second.tablet,second.desktop);
  const img3=url(width,third.mobile,third.tablet,third.desktop);

  if(img1 && img2 && img3)

  return (
    <div className={styles.main}>
      <div className={styles.first}>
        <Image
          src={img1.slice(1)}
          alt=""
          width={327}
          height={174}
          className={styles.firstImage}
        />
        <Image
          src={img2.slice(1)}
          alt=""
          width={327}
          height={174}
          className={styles.firstImage}
        />
      </div>

      <div className={styles.second}>
        <Image
          src={img3.slice(1)}
          alt=""
          width={327}
          height={368}
          className={styles.secondImage}
        />
      </div>
    </div>
  );
};

export default Gallery;

export function url(width:number,mobile:string,tablet:string,desktop:string){
  if(width<768){
    return mobile;
  }
  else if(width>=768 && width<1024){
    console.log(tablet);

    return tablet;

  }
  else if(width>=1024){
    return desktop;
  }
}