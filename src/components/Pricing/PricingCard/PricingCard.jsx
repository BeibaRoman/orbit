import styles from "./PricingCard.module.css";

function PricingCard({ name, price, features, isPopular }) {
  return (
    <div
      className={`${styles.pricingCard} ${isPopular ? styles.pricingCardPopular : ""}`}
    >
      {isPopular && <span className={styles.popularBadge}>Популярний</span>}
      <h3 className={styles.planName}>{name}</h3>
      <p className={styles.planPrice}>{price}</p>
      <ul className={styles.planFeatures}>
        {features.map((feature) => (
          <li key={feature} className={styles.planFeature}>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PricingCard;
