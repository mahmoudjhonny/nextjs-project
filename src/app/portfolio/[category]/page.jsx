import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/component/button/Button";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>Creative Portfolio</h1>
            <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              sizes={500}
              src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
              alt=""
            />
          </div>
        </div>
    </div>
  );
};

export default Category;