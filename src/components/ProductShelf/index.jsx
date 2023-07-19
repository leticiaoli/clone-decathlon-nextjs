import styles from "./ProductShelf.module.css";

import Similars from "../Similars";

import { Heart } from "@styled-icons/octicons";

export default function ProductShelf({ product }) {
  const price = product?.offers?.lowPrice;
  const listPrice = product?.offers?.listPrice;
  const discount = price < listPrice && ((listPrice - price) / listPrice) * 100;

  return (
    <div className={styles.contentProductShelf}>
      <a href="/" className={styles.mainImgProductShelf}>
        <img
          src={product?.image?.[0]?.url}
          width={163}
          height={170}
          alt="Picture of the author"
        />
        <span className={styles.btnFavorite}>
          <Heart size="16" title="Icone Busca" className={styles.iconBasketball}/>
        </span>
      </a>
      <div>
        <Similars product={product} />
      </div>
      <div>
        <div className={styles.flagProductShelf}>
          <p className={styles.textFlagPs}>Liquidação</p>
        </div>
        <div className={styles.nameProductsShelf}>
          <p>{product?.brand?.name}</p>
        </div>
        <div className={styles.descriptionProductsShelf}>
          <p>{product?.isVariantOf?.name}</p>
        </div>
        <div className={styles.priceProductsShelf}>
          <p className={styles.price1}>R$ {price}</p>
          {listPrice && <p className={styles.price2}>R${listPrice}</p>}
          {discount && (
            <p className={styles.price3}>{Math.round(discount)}% OFF</p>
          )}
        </div>
      </div>
    </div>
  );
}
