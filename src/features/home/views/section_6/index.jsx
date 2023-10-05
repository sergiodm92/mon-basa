import Image from "next/image";
import styles from "./styles.module.css";

const SectionSix = ({ t }) => {
  const products = t("products.list", { returnObjects: true });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>{t("products.title")}</h3>
        <h3>{t("products.description")}</h3>
      </div>
      <div className={styles.productsList}>
        {products.map((product) => (
          <div className={styles.productCard}>
            <Image
                src={"/"}
                width={1400}
                height={900}
                alt="products_background_mon_basa"
            />
            <div className={styles.productName}>{product.title}</div>
            <p className={styles.productContent}>{product.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionSix;
