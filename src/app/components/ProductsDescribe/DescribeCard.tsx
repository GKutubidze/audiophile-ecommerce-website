'use client'
import React from 'react'
import styles from "./DescribeCard.module.css"
import Image from 'next/image';
import Button from '../Buttons/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
interface Props {
  img:string;
  name:string;
  type:string;
  content:string;
  newProduct:boolean;
  slug:string;
}
export const DescribeCard = (props:Props) => {
  const {img,name,type,content,newProduct,slug}=props;
  const router=useRouter();
  return (
    <div className={styles.main} onClick={()=>{
      router.push(slug);
    }}>
      <Image src={img} alt='' width={1000} height={1000} className={styles.img}/>
      <div className={styles.body}>
        <div className={styles.header}>
          {newProduct && <p className={styles.new}>NEW PRODUCT</p>}
          <p className={styles.name}>{name}</p>
          <p className={styles.type}>{type}</p>
        </div>
        <p className={styles.content}>
          {content}
        </p>
        <Link href={slug} className={styles.link}>
        <Button title='see product'/>
        </Link>
      </div>
     </div>
  )
}
