import ProductShelf from "../ProductShelf";

import styles from "./ListShelf.module.css";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ArrowIosBackOutline } from "@styled-icons/evaicons-outline";
import { ArrowIosForwardOutline } from "@styled-icons/evaicons-outline";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.slideArrowNext}`}
      style={{ ...style, display: "block", right: 16, color: "#057dff" }}
      onClick={onClick}
    >
      <ArrowIosForwardOutline
        className={styles.arrowNextSports}
        size="10"
        title="Icone seta direita"
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} ${styles.slideArrowPrev}`}
      style={{
        ...style,
        display: "block",
        left: -3,
        zIndex: 9,
        fontSize: "22px",
        color: "#057dff",
      }}
      onClick={onClick}
    >
      <ArrowIosBackOutline
        className={styles.arrowPrevSports}
        size="10"
        title="Icone seta esquerda"
      />
    </div>
  );
}

export default function ListShelf({ products }) {
  const productList = products?.data?.recommendations?.[0]?.productsDataList;
  const title = products?.data?.recommendations?.[0]?.title;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1026,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 4,
        },
      },
    ],

  };

  return (
    <div className={styles.containerListShelf}>
      <h2 className={styles.titleProductShelf}>{title}</h2>
      <Slider className={styles.slikSlideListShelf} {...settings}>
        {productList.map((product, i) => {
          return <ProductShelf product={product} key={`productList${i}`} />;
        })}
      </Slider>
    </div>
  );
}
