import React, { useState } from "react"
import styles from "./Categories.module.css"
import SubCategories from "../../MenuDesktop/SubCategories"
import { ArrowIosForwardOutline } from "@styled-icons/evaicons-outline"

export default function Categories({ categories }) {

  const [indexcurrent, setIndexcurrent] = useState(false);

  return (
    <div className={styles.boxFullCategories}>
      <div className={styles.boxCenterCategories}>
        <ul className={styles.listCategories}>
          {categories?.map((category, i) => {
            const title = category?.title;

            return (
              <li
                key={i}
                className={styles.itemListCategories}
                onMouseEnter={() => {
                  setIndexcurrent(i)
                }}
                onMouseLeave={() => {
                  setIndexcurrent(false)
                }}
              >
                {title}{" "}
                <ArrowIosForwardOutline
                  size="22"
                  title="Icon account"
                  className={styles.iconArrownCategories}
                />
                {indexcurrent === i &&
                  <SubCategories
                    subCategories={categories?.[i]?.subcategories}
                    show={indexcurrent}
                  />}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}