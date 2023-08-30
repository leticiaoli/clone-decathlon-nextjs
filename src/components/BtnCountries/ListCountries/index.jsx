import styles from "./ListCountries.module.css"
import coutries from "../../../mock/coutries.json"

export default function ListCountries() {
  return (
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
  );
}
