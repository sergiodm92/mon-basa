import styles from "./styles.module.css";
// import rocket from '@/assets/images/about-us/rocket.webp';

const SectionThree = ({ t }) => {
  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <h3>{t("meetUs.whoWeAreTitle")}</h3>
        <p>{t("meetUs.largePortfolio")}</p>
      </div>

      <div className={styles.cardsWrapper}>

        <div className={styles.card}>
          <div className={styles.cardTitle}>
            {/* <img src={rocket} alt="rocket_mon-basa" /> */}
            <h4>{t("meetUs.mision.title")}</h4>
          </div>
          <p className={styles.cardContent}>{t("meetUs.mision.content")}</p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardTitle}>
            {/* <img src={rocket} alt="rocket_mon-basa" /> */}
            <h4>{t("meetUs.vision.title")}</h4>
          </div>
          <p className={styles.cardContent}>{t("meetUs.vision.content")}</p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardTitle}>
            {/* <img src={rocket} alt="rocket_mon-basa" /> */}
            <h4>{t("meetUs.values.title")}</h4>
          </div>
          <p className={styles.cardContent}>{t("meetUs.values.content")}</p>
        </div>
      </div>

    </div>
  );
};
export default SectionThree;
