import styles from "./MoreWanted.module.css"

export default function MoreWanted() {
  return (
    <div className={styles.boxMoreWanted}>
      <h2 className={styles.titleMoreWanted}>Mais procurados</h2>
      <ul className={styles.listWanted}>
        <li className={styles.itemListWanted}>
          <a href="/">Mochilas</a>
        </li>
        <li className={styles.itemListWanted}>
          <a href="/">Saco de dormir</a>
        </li>
        <li className={styles.itemListWanted}>
          <a href="/">Botas</a>
        </li>
        <li className={styles.itemListWanted}>
          <a href="/">Fleece</a>
        </li>
        <li className={styles.itemListWanted}>
          <a href="/">segunda pele</a>
        </li>
        <li className={styles.itemListWanted}>
          <a href="/">Shorts e calças</a>
        </li>
        <li className={styles.itemListWanted}>
          <a href="/">Biciletas</a>
        </li>
        <li className={styles.itemListWanted}>
          <a href="/">Blusas</a>
        </li>
        <li className={styles.itemListWanted}>
          <a href="/">Jaquetas e casacos</a>
        </li>
        <li className={styles.itemListWanted}>
          <a href="/">Tênis</a>
        </li>
      </ul>
    </div>
  );
}
