import React from 'react';
import styles from '../../styles/Card.module.css';
import Image from 'next/image';
import {StaticImageData}  from 'next/image'
import Link from 'next/link';


interface propsType{
  name: string,
  image:StaticImageData,
  desc:string,
  url:string,
  borderColor:string
};

export default function Card({ name, image, desc, url, borderColor }:propsType) {

  return (
    <div className={styles.card} style={{ borderColor, width:300 }}  >
      <Image src={image} alt={`${name} thumbnail`} className={styles.image}  style={{width:300, height:150}} />

      <div className={styles.nameContainer}>
        <h2 className={styles.name}>{name}</h2>
      </div>

      <p className={styles.desc}>{desc}</p>

      <div className={styles.buttonContainer}>
        <button className={styles.button} >
           <Link href={url} >Read More </Link>
        </button>
      </div>
    </div>
  );
}
