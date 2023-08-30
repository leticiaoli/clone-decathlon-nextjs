import styles from "./MenuTopDesktop.module.css"

export default function MenuTopDesktop() {
  return (
    <ul className={styles.boxMenuTopDesktop}>
      <li><a href="/" className={styles.itemMenuTop}>Nossas lojas</a></li>
      <li><a href="/" className={styles.itemMenuTop}>Para sua empresa</a></li>
      <li><a href="/" className={styles.itemMenuTop}>Clube Decathlon</a></li>
      <li><a href="/" className={styles.itemMenuTop}>Cartão Decthlon</a></li>
      <li><a href="/" className={styles.itemMenuTopApp}>Baixe o app</a></li>
    </ul>
  );
}