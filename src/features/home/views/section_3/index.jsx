import Image from "next/image";
import styles from "./styles.module.css";
import rocket from 'public/assets/images/about-us/rocket.webp';
import world from 'public/assets/images/about-us/world.webp';
import lightBulb from 'public/assets/images/about-us/light_bulb.webp';
import { Inter } from 'next/font/google'
 
const inter = Inter({ subsets: ['latin'] })

const SectionThree = ({ t }) => {
  return (
    <div className={`${styles.container} ${inter.className}`}>

      <div className={styles.header}>
        <h3>{t("meetUs.whoWeAreTitle")}</h3>
        <p>{t("meetUs.largePortfolio")}</p>
      </div>

      <div className={styles.cardsWrapper}>

        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <Image src={rocket} alt="rocket_mon-basa" width={100} height={100} />
            <h4>{t("meetUs.mision.title")}</h4>
          </div>
          <p className={styles.cardContent}>{t("meetUs.mision.content")}</p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardTitle}>
          <Image src={world} alt="rocket_mon-basa" width={100} height={100} />
            <h4>{t("meetUs.vision.title")}</h4>
          </div>
          <p className={styles.cardContent}>{t("meetUs.vision.content")}</p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardTitle}>
          <Image src={lightBulb} alt="rocket_mon-basa" width={100} height={100} />
            <h4>{t("meetUs.values.title")}</h4>
          </div>
          <p className={styles.cardContent}>{t("meetUs.values.content")}</p>
        </div>
      </div>

    </div>
  );
};
export default SectionThree;
