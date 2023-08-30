import styles from "./BtnDownloadApp.module.css"
import { ArrowIosForwardOutline } from "@styled-icons/evaicons-outline"

export default function BtnDownloadApp() {
  return (
    <section className={styles.boxBtnDownloadApp}>
      <a href="/" className={styles.titleBtnDownloadApp}>Baixe nosso Aplicativo</a>
      <a href="/" className={styles.itemBtnDownloadApp}>
        <p className={styles.textBtnDownloadApp}>Download</p>
        <ArrowIosForwardOutline
          size="14"
          title="Icon account"
          className={styles.iconArrownBtnDownloadApp}
        />
      </a>
    </section>
  );
}
