import styles from "./ShelfSports.module.css"
import Image from "next/image"
import { ArrowIosBackOutline } from "@styled-icons/evaicons-outline"
import { ArrowIosForwardOutline } from "@styled-icons/evaicons-outline"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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

export default function ShelfSports() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1242,
        settings: {
          slidesToShow: 8,
        },
      },
    ],
  };

  return (
    <div className={styles.boxShelfSports}>
      <Slider className={styles.slikSlideSports} {...settings}>
        <div className={styles.wrapContentSports}>
          <a href="/" className={styles.contentSposts}>
            <Image
              className={styles.imageZoomShelfSports}
              src="/../public/ss1.png"
              width={80}
              height={80}
              alt="sale off"
            />
            <p className={styles.textSports}>Liquidação</p>
          </a>
        </div>
        <div className={styles.wrapContentSports}>
          <a href="/" className={styles.contentSposts}>
            <Image
              className={styles.imageZoomShelfSports}
              src="/../public/ss2.png"
              width={80}
              height={80}
              alt="Product camping bar"
            />
            <p className={styles.textSports}>Camping, Trilha e Neve</p>
          </a>
        </div>
        <div className={styles.wrapContentSports}>
          <a href="/" className={styles.contentSposts}>
            <Image
              className={styles.imageZoomShelfSports}
              src="/../public/ss3.png"
              width={80}
              height={80}
              alt="Products run and walk"
            />
            <p className={styles.textSports}>Corrida e caminhada</p>
          </a>
        </div>
        <div className={styles.wrapContentSports}>
          <a href="/" className={styles.contentSposts}>
            <Image
              className={styles.imageZoomShelfSports}
              src="/../public/ss4.png"
              width={80}
              height={80}
              alt="Products academy"
            />
            <p className={styles.textSports}>Academia e Fitness</p>
          </a>
        </div>
        <div className={styles.wrapContentSports}>
          <a href="/" className={styles.contentSposts}>
            <Image
              className={styles.imageZoomShelfSports}
              src="/../public/ss5.png"
              width={80}
              height={80}
              alt="Products cycling"
            />
            <p className={styles.textSports}>Ciclismo</p>
          </a>
        </div>
        <div className={styles.wrapContentSports}>
          <a href="/" className={styles.contentSposts}>
            <Image
              className={styles.imageZoomShelfSports}
              src="/../public/ss6.png"
              width={80}
              height={80}
              alt="Products swimming"
            />
            <p className={styles.textSports}>Natação</p>
          </a>
        </div>
        <div className={styles.wrapContentSports}>
          <a href="/" className={styles.contentSposts}>
            <Image
              className={styles.imageZoomShelfSports}
              src="/../public/ss7.png"
              width={80}
              height={80}
              alt="Products soccer, volleyball and basketball"
            />
            <p className={styles.textSports}>Futebol, Volei e basquete</p>
          </a>
        </div>
        <div className={styles.wrapContentSports}>
          <a href="/" className={styles.contentSposts}>
            <Image
              className={styles.imageZoomShelfSports}
              src="/../public/ss8.png"
              width={80}
              height={80}
              alt="Products beach tennis"
            />
            <p className={styles.textSports}>Beach tenis</p>
          </a>
        </div>
        <div className={styles.wrapContentSports}>
          <a href="/" className={styles.contentSposts}>
            <Image
              className={styles.imageZoomShelfSports}
              src="/../public/ss9.png"
              width={80}
              height={80}
              alt="Products surf and beachwear"
            />
            <p className={styles.textSports}>Surf e moda praia</p>
          </a>
        </div>
        <div className={styles.wrapContentSports}>
          <a href="/" className={styles.contentSposts}>
            <Image
              className={styles.imageZoomShelfSports}
              src="/../public/ss10.png"
              width={80}
              height={80}
              alt="Products boxing and soft arts"
            />
            <p className={styles.textSports}>Box e artes marciais</p>
          </a>
        </div>
        <div className={styles.wrapContentSports}>
          <a href="/" className={styles.contentSposts}>
            <Image
              className={styles.imageZoomShelfSports}
              src="/../public/ss11.png"
              width={80}
              height={80}
              alt="Products racket sports"
            />
            <p className={styles.textSports}>Esport de raquetes</p>
          </a>
        </div>
        <div className={styles.wrapContentSports}>
          <a href="/" className={styles.contentSposts}>
            <Image
              className={styles.imageZoomShelfSports}
              src="/../public/ss12.png"
              width={80}
              height={80}
              alt="Products pilates"
            />
            <p className={styles.textSports}>Pilates</p>
          </a>
        </div>
      </Slider>
    </div>
  );
}
