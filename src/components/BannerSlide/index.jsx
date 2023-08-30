import { useState, useEffect } from "react"
import Image from "next/image"
import styles from "./BannerSlide.module.css"
import mainSlideMock from "../../mock/mainSlideMock.json"
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
        className={styles.arrowNextBannerSlide}
        size="20"
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
        className={styles.arrowPrevBannerSlide}
        size="20"
        title="Icone seta esquerda"
      />
    </div>
  );
}

export default function BannerSlide() {
  const [screenSize, setScreenSize] = useState(0)
  const isMobile = screenSize < 769
  const mockImages = isMobile ? mainSlideMock?.mobile : mainSlideMock?.desktop
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  useEffect(() => {
    setScreenSize(window?.innerWidth)
    window.addEventListener('resize', () => {
      setScreenSize(window?.innerWidth)
    })
  }, [])

  return (
    <>
      <div className={styles.boxBannerSlide}>
        <Slider className={isMobile ? [styles.slikBannerSlide, styles.slikBannerSlideMobile] : [styles.slikBannerSlide, styles.slikBannerSlideDesktop]} {...settings}>
          {mockImages?.map(({ image, width, height, alt, link }) => (
            <a className={styles.imgBannerSlide} href={link}>
              <Image
                src={`/${image}`}
                width={width}
                height={height}
                alt={alt}
              />
            </a>
          ))}
        </Slider>
      </div>
      <span className={styles.textBannerSlide}>Decathlon: a maior loja de artigos esportivos do mundo!</span>
    </>
  );
}
