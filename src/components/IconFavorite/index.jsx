import styles from "./IconFavorite.module.css"
import { Heart } from "@styled-icons/octicons"

export default function IconFavorite() {
  return (
    <div>
      <a href="/" className={styles.IconFav}>
        <Heart size="22" title="Icon heart" className={styles.iconSearch} />
      </a>
    </div>
  );
}
