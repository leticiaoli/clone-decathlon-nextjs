import styles from "./ButtonMenu.module.css";

import { Menu } from "@styled-icons/evaicons-solid";

export default function ButtonMenu() {
    return (
        <div className={styles.wrapperIconMenu}>
            <Menu size="30" title="Icone menu" className={styles.iconMenu}/>
        </div>
    );
  }