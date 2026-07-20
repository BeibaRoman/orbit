import styles from "./Pricing.module.css";
import Section from "../Section/Section";
import Container from "../Container/Container";
import PricingCard from "./PricingCard/PricingCard";

function Pricing({ plans }) {
  return (
    <Section background="default" size="md">
      <Container>
        <div className={styles.pricingGrid}>
          {plans.map(({ id, name, price, features, isPopular }) => (
            <PricingCard
              key={id}
              name={name}
              price={price}
              features={features}
              isPopular={isPopular}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Pricing;
