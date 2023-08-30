import React, { useState } from 'react'
import styles from "./MenuDesktop.module.css"
import { SportsBasketball } from "@styled-icons/material-outlined"
import menuDesktopMock from "../../mock/menuDesktopMock.json"
import Categories from "../MenuDesktop/Categories"

export default function MenuDesktop() {

  const [currentIndex, setCurrentIndex] = useState(false);

  return (
    <nav className={styles.boxMenuDesktop}>
      <ul className={styles.listMenuDesktop}>
        {menuDesktopMock?.departments?.map((departament, i) => {
          const name = departament?.title;
          const hasCategories = departament?.categories?.length > 0;

          if (i === 0) {
            return (
              <li
                key={i}
                className={styles.boxItemListMenuDesk}
                onMouseEnter={() => setCurrentIndex(i)}
                onMouseLeave={() => setCurrentIndex(false)}
              >
                <a href={departament?.url} className={styles.itemListMenuDesk1}>
                  <SportsBasketball
                    size="16"
                    title="Icon Basketball"
                    className={styles.iconBasketball}
                  />
                  {name}
                </a>
                {(hasCategories && currentIndex === i) && <Categories categories={departament?.categories} />}
              </li>
            );
          } else {
            return (
              <li
                key={i}
                className={styles.boxItemListMenuDesk}
                onMouseEnter={() => setCurrentIndex(i)}
                onMouseLeave={() => setCurrentIndex(false)}
              >
                <a href={departament?.url} className={styles.itemListMenuDesk}>
                  {name}
                </a>
                {(hasCategories && currentIndex === i) && <Categories categories={departament?.categories} />}
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
}