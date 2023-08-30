import styles from "./Search.module.css"
import { SearchOutline } from "@styled-icons/evaicons-outline"

export default function Search() {
  return (
    <div className={styles.boxSearch}>
      <form className={styles.searchInput}>
        <input
          type="text"
          placeholder="O que você vai praticar hoje?"
          className={styles.inputSearch}
        />
        <button type="submit" className={styles.searchBtn}>
          <SearchOutline
            size="26"
            title="Icone Busca"
            className={styles.iconSearch}
          />
        </button>
      </form>
    </div>
  );
}
