import { useState, useEffect } from "react"
import Image from "next/image"
import styles from "./OneBanner.module.css"
import oneBannerMock from "../../mock/oneBannerMock"


export default function OneBanner() {
  const [screenSize, setScreenSize] = useState(0)
  const isMobile = screenSize < 769
  const mockImages = isMobile ? oneBannerMock?.mobile : oneBannerMock?.desktop

  useEffect(() => {
    setScreenSize(window?.innerWidth)
    window.addEventListener('resize', () => {
      setScreenSize(window?.innerWidth)
    })
  }, [])

  return (
    <div className={isMobile ? styles.itemOneBannerMobile : styles.itemOneBannerDesktop}>
      {mockImages?.map(({ image, width, height, alt, link }) => (
        <a href={link}>
          <Image
            src={`/${image}`}
            width={width}
            height={height}
            alt={alt}
          />
        </a>
      ))}
    </div>
  )
}
