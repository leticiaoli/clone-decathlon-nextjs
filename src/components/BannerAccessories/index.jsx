import { useState, useEffect } from "react"
import Image from "next/image"
import styles from "./BannerAccessories.module.css"
import bannerAcessoriesMock from "../../mock/bannerAcessoriesMock.json"

export default function BannerAccessories() {
  const [screenSize, setScreenSize] = useState(0)
  const isMobile = screenSize < 769
  const mockImages = isMobile ? bannerAcessoriesMock?.mobile : bannerAcessoriesMock?.desktop

  useEffect(() => {
    setScreenSize(window?.innerWidth)
    window.addEventListener('resize', () => {
      setScreenSize(window?.innerWidth)
    })
  }, [])

  return (
    <section className={styles.ContainerBannerAccessories}>
      <div className={isMobile ? styles.boxBannerSlideMobile : styles.boxBannerSlideDesktop}>
        {mockImages?.map(({ image, width, height, alt, link }, i) => (
          <a className={`${styles.imgBannerSlide} imgBannerSlide${i}`} href={link}>
            <Image
              src={`/${image}`}
              width={width}
              height={height}
              alt={alt}
            />
          </a>
        ))}
      </div>
    </section>
  );
}

