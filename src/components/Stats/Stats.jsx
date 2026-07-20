import styles from "./Stats.module.css";
import Section from "../Section/Section";
import Container from "../Container/Container";

function Stats({ stats }) {
  return (
    <Section background="accent" size="md">
      <Container className={styles.statsInner}>
        {stats.map(({ id, label, quantity }) => (
          <div className={styles.statItem} key={id}>
            <span className={styles.statQuantity}>{quantity}</span>
            <span className={styles.statLabel}>{label}</span>
          </div>
        ))}
      </Container>
    </Section>
  );
}

export default Stats;
