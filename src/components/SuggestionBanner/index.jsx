import { useState, useEffect } from "react"
import Image from "next/image"
import styles from "./SuggestionBanner.module.css"
import suggestionBannerMock from "../../mock/suggestionBannerMock.json"

export default function SuggestionBanner() {
  const [screenSize, setScreenSize] = useState(0)
  const isMobile = screenSize < 1023
  const mockImages = isMobile ? suggestionBannerMock?.mobile : suggestionBannerMock?.desktop

  useEffect(() => {
    setScreenSize(window?.innerWidth)
    window.addEventListener('resize', () => {
      setScreenSize(window?.innerWidth)
    })
  }, [])

  return (
    <section className={styles.boxSuggestionBanner}>
      <h2 className={styles.titleSuggestionBanner}>Nossas susgestões</h2>
      <div className={isMobile ? styles.boxSuggestionsBannerMobile : styles.boxSuggestionsBannerDesktop}>
        {mockImages?.map(({ image, width, height, alt, link }) => (
          <a href={link}>
            <Image
              className={styles.imageZoomSuggestionBanner}
              src={`/../public/${image}`}
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