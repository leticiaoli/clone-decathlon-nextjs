import styles from "./MenuDesktop.module.css";

import { SportsBasketball } from "@styled-icons/material-outlined";

export default function MenuDesktop() {
    return (
        <nav className={styles.boxMenuDesktop}>
            <ul className={styles.listMenuDesktop}>
                <li>
                    <a href="/" className={styles.itemListMenuDesk1}> 
                        <SportsBasketball size="16" title="Icone Busca" className={styles.iconBasketball}/>Navegue por Esportes
                    </a>
                </li>
                <li><a href="/" className={styles.itemListMenuDesk}>Feminino</a></li>
                <li><a href="/" className={styles.itemListMenuDesk}>Masculino</a></li>
                <li><a href="/" className={styles.itemListMenuDesk}>Infantil</a></li>
                <li><a href="/" className={styles.itemListMenuDesk}>Acessórios</a></li>
                <li><a href="/" className={styles.itemListMenuDesk}>Esquiopamentos</a></li>
                <li><a href="/" className={styles.itemListMenuDesk}>Marcas</a></li>
                <li><a href="/" className={styles.itemListMenuDesk}>Liquidação</a></li>
            </ul>
        </nav>
    );
  }