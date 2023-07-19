import styles from "./BtnCountries.module.css";

import { ArrowIosDownward } from "@styled-icons/evaicons-solid";

import coutries from "./../../mock/coutries.json";
console.log("coutries -> ", coutries);

export default function BtnCountries() {
  return (
    <div className={styles.boxBtnCountries}>
      <div className={styles.listCoutries}>
        {coutries?.map((coutry) => {
          const name = coutry?.name;
          const link = coutry?.link;
          return (
            <a href={link} className={styles.itemListCoutries}>
              {name}
            </a>
          );
        })}
      </div>
      <button className={styles.contentBtnCoutries}>
        61 Países
        <ArrowIosDownward
          size="15"
          title="Icone Carrinho"
          className={styles.iconArrowDown}
        />
      </button>
    </div>
  );
}
