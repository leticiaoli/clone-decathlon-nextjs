import styles from "./HeaderDesktop.module.css";

import Logo from "../Logo"
import Search from "../Search"
import InstitutionalBar from "../InstitutionalBar"
import MenuTopDesktop from "../MenuTopDesktop"
import Cart from "../Cart"
import IconFavorite from "../IconFavorite"



export default function HeaderDesktop() {
    return (
        <>
            <div>
                <MenuTopDesktop/>
            </div>
            <div className={styles.headerDesk}>
                <Logo />
                <Search />
                <InstitutionalBar />
                <IconFavorite />
                <div className={styles.cartDesktop}>
                    <Cart />
                </div>
            </div>
        </>
    );
  }