import { useState, useEffect } from "react"
import styles from "./SlideMarks.module.css"
import Image from "next/image"
import { ArrowIosBackOutline } from "@styled-icons/evaicons-outline"
import { ArrowIosForwardOutline } from "@styled-icons/evaicons-outline"
import slideMarksMock from "../../mock/slideMarksMock.json"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.slideArrowNext}`}
      style={{ ...style, display: "block", right: 18, color: "#057dff" }}
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
        left: 14,
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

export default function SlideMarks() {
  const [screenSize, setScreenSize] = useState(0)
  const isMobile = screenSize < 1024
  const mockImages = isMobile ? slideMarksMock?.mobile : slideMarksMock?.desktop

  useEffect(() => {
    setScreenSize(window?.innerWidth)
    window.addEventListener('resize', () => {
      setScreenSize(window?.innerWidth)
    })
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className={styles.boxSlideMarks}>
      <h2 className={styles.titleSlideMarks}>Nossas Marcas Exclusivas</h2>
      <Slider className={isMobile ? [styles.listslideMarks, styles.slikBannerSlideMobile] : [styles.listslideMarks, styles.slikBannerSlideDesktop]} {...settings}>
        {mockImages?.map(({ image, width, height, alt, link }) => (
          <a href={link}>
            <Image
              src={`/../public/${image}`}
              width={width}
              height={height}
              alt={alt}
            />
          </a>
        ))}
      </Slider>
    </section>
  );
}