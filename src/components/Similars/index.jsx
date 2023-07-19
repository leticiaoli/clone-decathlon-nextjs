import styles from "./Similars.module.css";

export default function Similars({ product }) {
  const similars = product?.customData?.items;

  const unicSimilars = similars.filter((item, index, array) => {
    const color = item.color[0];
    return array.findIndex((i) => i.color[0] === color) === index;
  });

  return (
    <div>
      <ul className={styles.listProductShelf}>
        {unicSimilars?.map((similar, i) => {
          const image = similar?.images?.[0]?.imageUrl;
          const name = similar?.name;
          const color = similar?.color;
          const similarsTotal = unicSimilars?.length;

          if (i <= 2) {
            return (
              <li className={styles.itemsListProductShelf} key={name + i}>
                <button className={styles.btnProductShelf}>
                  <img
                    src={image}
                    width={24.6}
                    height={24.6}
                    alt={name}
                    title={color}
                  />
                </button>
              </li>
            );
          } else if (i === 3) {
            return (
              <li className={styles.itemNumberProductShelf} key={"others" + i}>
                <button className={styles.btnNumberProductShelf}>
                  +{similarsTotal - 3}
                </button>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
