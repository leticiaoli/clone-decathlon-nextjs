import { useState, useEffect } from "react"
import Image from "next/image"
import styles from "./ServicesBanner.module.css"
import servicesBannerMock from "../../mock/servicesBannerMock.json"

export default function ServicesBanner() {
  const [screenSize, setScreenSize] = useState(0)
  const isMobile = screenSize < 1024
  const mockImages = isMobile ? servicesBannerMock?.mobile : servicesBannerMock?.desktop

  useEffect(() => {
    setScreenSize(window?.innerWidth)
    window.addEventListener('resize', () => {
      setScreenSize(window?.innerWidth)
    })
  }, [])

  return (
    <div className={styles.boxServicesBanner}>
      <h2 className={styles.titleServicesBanner}>Nossos Serviços</h2>
      <ul className={styles.listServicesBanner}>
        <li className={isMobile ? styles.itemServicesBannerMobile : styles.itemServicesBannerDesktop}>
          {mockImages?.map(({ image, width, height, alt, link }) => (
            <a href={link}>
              <Image
                className={styles.imageZoomServicesBanner}
                src={`/${image}`}
                width={width}
                height={height}
                alt={alt}
              />
            </a>
          ))}
        </li>
      </ul>
    </div>
  );
}