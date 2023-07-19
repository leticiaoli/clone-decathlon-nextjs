import styles from "./MenuTopDesktop.module.css";

export default function MenuTopDesktop() {
    return (
        <div className={styles.boxMenuTopDesktop}>
           <a href="/" className={styles.itemMenuTop}>Nossas lojas</a>
           <a href="/" className={styles.itemMenuTop}>Para sua empresa</a>
           <a href="/" className={styles.itemMenuTop}>Clube Decathlon</a>
           <a href="/" className={styles.itemMenuTop}>Cartão Decthlon</a>
           <a href="/" className={styles.itemMenuTopApp}>Baixe o app</a>
        </div>
    );
  }