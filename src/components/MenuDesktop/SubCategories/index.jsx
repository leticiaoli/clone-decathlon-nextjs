import React, { memo } from 'react'
import styles from "./SubCategories.module.css"

const SubCategories = ({ subCategories, show }) => {
  console.log('show -> ', show)
  const showSubCategories = show ? "block" : "none"

  return (
    <ul className={styles.listSubCategories}>
      {subCategories?.map((subCategory, index) => {
        const title = subCategory?.title
        return (
          <li key={index} className={styles.itemListSubCategories}>
            <a href="/" className={styles.titleSubCategories}> {title} </a>
          </li>
        );
      })}
    </ul>
  );
}

export default memo(SubCategories)