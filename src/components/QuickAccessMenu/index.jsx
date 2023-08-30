import styles from "./QuickAccessMenu.module.css"
import { CustomerService } from "@styled-icons/remix-line"
import { MoneyDollarBox } from "@styled-icons/remix-fill"
import { ArrowToBottom } from "@styled-icons/boxicons-solid"

export default function QuickAccessMenu() {
  return (
    <div className={styles.boxQuickAccessMenu}>
      <div className={styles.listIconsQuickAcess}>
        <a href="/" className={styles.itemListQuickAcess}>
          <CustomerService
            size="14"
            title="Icon service"
            className={styles.iconQuickAccess}
          />
          <p className={styles.textListQuickAcess}>Atendimento</p>
        </a>
        <a href="/" className={styles.itemListQuickAcess}>
          <MoneyDollarBox
            size="14"
            title="Icon dollar"
            className={styles.iconQuickAccess}
          />
          <p className={styles.textListQuickAcess}>Dinheiro de volta</p>
        </a>
        <a href="/" className={styles.itemListQuickAcess}>
          <ArrowToBottom
            size="14"
            title="Icon arrow"
            className={styles.iconQuickAccess}
          />
          <p className={styles.textListQuickAcess}>BAIXE O APP</p>
        </a>
      </div>
      <div className={styles.boxQuickMenu}>
        <h2 className={styles.titleQuickMenu}>Acesso Rápido</h2>
        <ul className={styles.listQuickMenu}>
          <li>
            <a href="/" className={styles.itemListQuickMenu}>
              Nossas Lojas
            </a>
          </li>
          <li>
            <a href="/" className={styles.itemListQuickMenu}>
              Cartão Decathlon
            </a>
          </li>
          <li>
            <a href="/" className={styles.itemListQuickMenu}>
              Decathlon Empresas
            </a>
          </li>
          <li>
            <a href="/" className={styles.itemListQuickMenu}>
              Clube Decathlon
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
