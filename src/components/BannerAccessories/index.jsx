import styles from "./BannerAccessories.module.css";

import Image from 'next/image';

export default function BannerAccessories() {
    return (
        <section className={styles.ContainerBannerAccessories}>
            <div className={styles.boxImg1}>
                <a className={styles.itemImgBox1}>
                <Image
                    src="/../public/bannerAccessories1.png"
                    width={300}
                    height={500}
                    alt="Picture of the author"
                />
                </a>
                <a className={styles.itemImgBox1}>
                <Image
                    src="/../public/BannerAccessories2.png"
                    width={300}
                    height={500}
                    alt="Picture of the author"
                />
                </a>
            </div>
            <div className={styles.boxImg2}>
                <a className={styles.itemImgBox2}>
                <Image
                    src="/../public/BannerAccessories3.png"
                    width={300}
                    height={500}
                    alt="Picture of the author"
                />
                </a>
                <a className={styles.itemImgBox2}>
                <Image
                    src="/../public/BannerAccessories4.png"
                    width={300}
                    height={500}
                    alt="Picture of the author"
                />
                </a>
            </div>

        </section>
    );
  }