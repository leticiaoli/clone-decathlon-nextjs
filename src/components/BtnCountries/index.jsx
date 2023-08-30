import React, { useState } from "react"
import styles from "./BtnCountries.module.css"
import { ArrowIosDownward } from "@styled-icons/evaicons-solid"
import ListCountries from "./ListCountries"

export default function BtnCountries() {

  const [showCountries, setShowCountries] = useState(false);

  const toggleCountries = () => {
    setShowCountries(!showCountries);
  };

  return (
    <div className={styles.boxBtnCountries}>
      {showCountries && <ListCountries />}
      <button className={styles.contentBtnCoutries} onClick={toggleCountries}>
        61 Países
        <ArrowIosDownward
          size="15"
          title="Icon arrow"
          className={`${styles.iconArrowDown} ${showCountries ? styles.iconRotated : ""}`}
        />
      </button>
    </div>
  );
}
