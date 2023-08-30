import styles from "./HeaderMobile.module.css"
import ButtonMenu from "../ButtonMenu"
import Logo from "../Logo"
import Cart from "../Cart"
import Search from "../Search"
import MenuMobile from "../MenuMobile"

export default function HeaderMobile() {
  return (
    <>
      <div className={styles.headerMobile}>
        <div className={styles.headerMobileTop}>
          <Logo />
          <span className={styles.boxCartMenu}>
            <Cart />
            <ButtonMenu />
          </span>
        </div>
        <div className={styles.searchButton}>
          <Search />
        </div>
      </div>
      <div>
        <MenuMobile />
      </div>
    </>
  );
}
