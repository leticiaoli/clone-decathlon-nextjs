import styles from "./Footer.module.css";

import Image from "next/image";

import BtnCountries from "../BtnCountries";

export default function Footer() {
  return (
    <footer className={styles.containerFooter}>
      <div className={styles.columnOneFooter}>
        <div className={styles.boxListFooter}>
          <p className={styles.titleBoxListFooter}>Sobre a Decathlon</p>
          <ul className={styles.listFooter}>
            <li className={styles.itemListFooter}>
              <a href="/">Quem somos</a>
            </li>
            <li className={styles.itemListFooter}>
              <a href="/">Fundação Decathlon</a>
            </li>
            <li className={styles.itemListFooter}>
              <a href="/">Assessoria de imprensa</a>
            </li>
            <li className={styles.itemListFooter}>
              <a href="/">Atendimento corporativo</a>
            </li>
            <li className={styles.itemListFooter}>
              <a href="/">Decathlon United(English)</a>
            </li>
            <li className={styles.itemListFooter}>
              <a href="/">Conheça o APP Decathlon</a>
            </li>
            <li className={styles.itemListFooter}>
              <a href="/">Garantia Vitalícia</a>
            </li>
            <li className={styles.itemListFooter}>
              <a href="/">Recall de produtos</a>
            </li>
            <li className={styles.itemListFooter}>
              <a href="/">Torne-se um afiliado</a>
            </li>
            <li className={styles.itemListFooter}>
              <a href="/">Trabalhe conosco</a>
            </li>
          </ul>
        </div>
        <div className={styles.boxListFooter}>
          <p className={styles.titleBoxListFooter}>Serviços online</p>
          <ul className={styles.listFooter}>
            <li className={styles.itemListFooter}>
              <a href="/">Encontre nossas lojas</a>
            </li>
            <li className={styles.itemListFooter}>
              <a href="/">Guia de tamanhos</a>
            </li>
            <li className={styles.itemListFooter}>
              <a href="/">Política de privacidade</a>
            </li>
            <li className={styles.itemListFooter}>
              <a href="/">Saldo cartão presente/ vale troca</a>
            </li>
            <li className={styles.itemListFooter}>
              <a href="/">Serviço retire na loja</a>
            </li>
            <li className={styles.itemListFooter}>
              <a href="/">Mapa do site</a>
            </li>
            <li className={styles.itemListFooter}>
              <a href="/">Mapa de categorias</a>
            </li>
          </ul>
        </div>
        <div className={styles.boxListFooter}>
          <p className={styles.titleBoxListFooter}>Precisa de ajuda</p>
          <ul className={styles.listFooter}>
            <li className={styles.itemListFooter}>
              <a href="/">Central de atendimento</a>
            </li>
            <li className={styles.itemListFooter}>
              <a href="/">Condições de entrega</a>
            </li>
            <li className={styles.itemListFooter}>
              <a href="/">Cupom de desconto</a>
            </li>
            <li className={styles.itemListFooter}>
              <a href="/">Rastreio de pedidos</a>
            </li>
            <li className={styles.itemListFooter}>
              <a href="/">Trocas e devoluções</a>
            </li>
            <li className={styles.itemListFooter}>
              <a href="/">Regras de promoções</a>
            </li>
          </ul>
        </div>
        <div className={styles.boxListFooter}>
          <p className={styles.titleBoxListFooter}>Redes sociais</p>
          <ul className={styles.listFooter}>
            <li className={styles.itemListFooter}>
              <a href="/">Blog #SouEsportista</a>
            </li>
            <li className={styles.itemListFooter}>
              <a href="/">Facebook</a>
            </li>
            <li className={styles.itemListFooter}>
              <a href="/">Instagram</a>
            </li>
            <li className={styles.itemListFooter}>
              <a href="/">Linkedin</a>
            </li>
            <li className={styles.itemListFooter}>
              <a href="/">Youtube</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.columnTwoFooter}>
        <div className={styles.boxListFooterPayment}>
          <p className={styles.titleBoxListFooter}>Formas de Pagamento</p>
          <ul className={styles.listFooter}>
            <li className={styles.itemStampsListFooter}>
              Parcele em até 10x sem juros
            </li>
          </ul>
          <Image
            className={styles.imgPayFooter}
            src="/../public/cartaoVisa.jpg"
            width={40}
            height={20}
            alt="Picture of the author"
          />
          <Image
            className={styles.imgPayFooter}
            src="/../public/cartaoMaster.jpg"
            width={40}
            height={20}
            alt="Picture of the author"
          />
          <Image
            className={styles.imgPayFooter}
            src="/../public/cartaoElo.jpg"
            width={40}
            height={20}
            alt="Picture of the author"
          />
          <Image
            className={styles.imgPayFooter}
            src="/../public/cartaoClub.jpg"
            width={40}
            height={20}
            alt="Picture of the author"
          />
          <Image
            className={styles.imgPayFooter}
            src="/../public/cartaoAmex.jpg"
            width={40}
            height={20}
            alt="Picture of the author"
          />
          <Image
            className={styles.imgPayFooter}
            src="/../public/boleto.jpg"
            width={40}
            height={20}
            alt="Picture of the author"
          />
          <Image
            className={styles.imgPayFooter}
            src="/../public/payPal.jpg"
            width={40}
            height={20}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.boxListFooterDown}>
          <p className={styles.titleBoxListFooter}>Transição segura</p>
          <ul className={styles.listFooter}>
            <li className={styles.itemStampsListFooter}>Certificados SSL</li>
          </ul>
          <Image
            className={styles.imgSslFooter}
            src="/../public/seloSeguranca.jpg"
            width={62}
            height={44}
            alt="Picture of the author"
          />
          <Image
            className={styles.imgSslFooter}
            src="/../public/seloSeguranca2.jpg"
            width={47}
            height={44}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.boxListFooterDown}>
          <p className={styles.titleBoxListFooter}>Premiação</p>
          <ul className={styles.listFooter}>
            <li className={styles.itemStampsListFooter}>Selos e-bit</li>
          </ul>
          <Image
            className={styles.imgEbitFooter}
            src="/../public/premiacao.jpg"
            width={50}
            height={67}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.boxListFooterDown}>
          <p className={styles.titleBoxListFooter}>Site protegido</p>
          <ul className={styles.listFooter}>
            <li className={styles.itemStampsListFooter}>Contra fraudes</li>
          </ul>
          <Image
            className={styles.imgKondutotFooter}
            src="/../public/contraFraudes.png"
            width={91}
            height={21}
            alt="Picture of the author"
          />
        </div>
      </div>
      <spam className={styles.borderSeparateFooter}></spam>
      <div className={styles.boxTextEndFooter}>
        <p className={styles.textEndFooter}>
          Os preços e condições de pagamento são exclusivas para o site e podem
          divergir das lojas físicas. Os artigos disponibilizados no site tem
          estoque limitado, sujeito á disponibilidade no momento da confirmação
          do pagamento. O site www.decathlon.com.br é administrado por:
          IGUASPORT LTDA CNPJ 02.314.041/0021-21. Rua Pataxós, 1650 - Embu das
          Artes/SP CEP: 06833-900. Todos os Direitos Reservados. Copyright -
          2020 - www.decathlon.com.br.
        </p>
        <BtnCountries />
      </div>
    </footer>
  );
}
