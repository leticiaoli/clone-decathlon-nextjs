import styles from "./InstitutionalBar.module.css"
import { CustomerService } from "@styled-icons/remix-fill"
import { AccountCircle } from "@styled-icons/remix-line"

export default function InstitutionalBar() {
  return (
    <div className={styles.boxItb}>
      <div className={styles.listItb}>
        <a href="/" className={styles.iconItb}>
          <CustomerService
            size="24"
            title="Icon Service"
            className={styles.iconService}
          />
        </a>
        <a href="/" className={styles.textItb}>
          <p className={styles.textItb1}>Precisa de ajuda?</p>
          <p className={styles.textItb2}>Atendimento</p>
        </a>
      </div>
      <div className={styles.listItb}>
        <a href="/" className={styles.iconItb}>
          <AccountCircle
            size="24"
            title="Icon account"
            className={styles.iconService}
          />
        </a>
        <a href="/" className={styles.textItb}>
          <p className={styles.textItb1}>Minha conta</p>
          <p className={styles.textItb2}>Acessar</p>
        </a>
      </div>
    </div>
  );
}
