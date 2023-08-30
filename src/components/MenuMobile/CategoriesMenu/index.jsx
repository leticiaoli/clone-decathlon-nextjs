import styles from "./CategoriesMenu.module.css"
import { AccountCircle } from "@styled-icons/remix-line"
import { ArrowIosForwardOutline } from "@styled-icons/evaicons-outline"

export default function CategoriesMenu() {
    return (
        <div className={styles.boxMenuMobile}>
            <a href="/" className={styles.itemAccountMenuMobile}>
                <div className={styles.contentAccountMenu}>
                    <AccountCircle
                        size="24"
                        title="Icon account"
                        className={styles.iconAccountMenu}
                    />
                    <p className={styles.textAccountMenu}>Minha conta</p>
                </div>
                <div className={styles.arrowMenuMobile}>
                    <ArrowIosForwardOutline
                        size="22"
                        title="Icon Arrow"
                        className={styles.iconArrowMenu}
                    />
                </div>
            </a>
            <ul className={styles.listMenuMobile}>
                <li>
                    <a href="/" className={styles.itemListMenuMobile}>
                        <p className={styles.textListMenuMobile}>Navegue por Esportes</p>
                        <ArrowIosForwardOutline
                            size="22"
                            title="Icon Arrow"
                            className={styles.iconArrowMenu2}
                        />
                    </a>
                </li>
            </ul>
        </div>
    );
}