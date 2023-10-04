import Image from "next/image";
import styles from "./styles.module.css";

const SectionSix = ({ t }) => {
  const products = t("products", { returnObjects: true });

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h3>{t("products")}</h3>
            <h3>{t("products")}</h3>
        </div>
      {products.map((product) => (
        <div className={styles.product}>
          <Image />
        </div>
      ))}
    </div>
  );
};

export default SectionSix;
