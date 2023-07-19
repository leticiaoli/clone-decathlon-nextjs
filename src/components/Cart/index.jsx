import styles from "./Cart.module.css";

import { ShoppingCart } from "@styled-icons/remix-line";

export default function Cart() {
    return (
        <div className={styles.boxCart}>
            <ShoppingCart size="24" title="Icone Carrinho" className={styles.iconCart}/>
            <span className={styles.qtdCart}>0</span>
        </div>
    );
  }