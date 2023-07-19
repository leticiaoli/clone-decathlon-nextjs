import Image from 'next/image';

import styles from "./BannerSlide.module.css";

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
        style={{ ...style, display: "block", right: 16, color: "#057dff"}}
        onClick={onClick}
      >
       <ArrowIosForwardOutline className={styles.arrowNextBannerSlide} size="20" title="Icone seta direita"/>
        </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;

    
    return (
        <div
            className={`${className} ${styles.slideArrowPrev}`}
            style={{ ...style, display: "block", left: -3, zIndex: 9, fontSize: "22px", color: "#057dff" }}
            onClick={onClick}
        >
            <ArrowIosBackOutline className={styles.arrowPrevBannerSlide} size="20" title="Icone seta esquerda"/>
        </div>
    );
  }

export default function BannerSlide() {
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
        prevArrow: <SamplePrevArrow />
      };
    return (
        <div className={styles.boxBannerSlide}>
            <Slider className={styles.slikBannerSlide}{...settings}>
                <a className={styles.imgBannerSlide} href="/">
                <Image
                    src="/../public/bannerM1.png"
                    width={300}
                    height={500}
                    alt="Picture of the author"
                />
                </a>
                <a href="/" className={styles.imgBannerSlide}>
                <Image
                    src="/../public/bannerM2.png"
                    width={300}
                    height={500}
                    alt="Picture of the author"
                />
                </a>
                <a href="/" className={styles.imgBannerSlide}>
                <Image
                    src="/../public/bannerM3.png"
                    width={300}
                    height={500}
                    alt="Picture of the author"
                />
                </a>
                <a href="/" className={styles.imgBannerSlide}>
                <Image
                    src="/../public/bannerM4.png"
                    width={300}
                    height={500}
                    alt="Picture of the author"
                />
                </a>
                <a href="/" className={styles.imgBannerSlide}>
                <Image
                    src="/../public/bannerM5.png"
                    width={300}
                    height={500}
                    alt="Picture of the author"
                />
                </a>
                <a href="/" className={styles.imgBannerSlide}>
                <Image
                    src="/../public/bannerM6.png"
                    width={300}
                    height={500}
                    alt="Picture of the author"
                />
                </a>
                <a href="/" className={styles.imgBannerSlide}>
                <Image
                    src="/../public/bannerM7.png"
                    width={300}
                    height={500}
                    alt="Picture of the author"
                />
                </a>
                <a href="/" className={styles.imgBannerSlide}>
                <Image
                    src="/../public/bannerM8.png"
                    width={300}
                    height={500}
                    alt="Picture of the author"
                />
                </a>
                
            </Slider>
        </div>
    );
  }