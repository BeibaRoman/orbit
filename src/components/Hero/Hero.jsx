import styles from "./Hero.module.css";
import Section from "../Section/Section";
import Container from "../Container/Container";

function Hero({ title, subtitle, ctaText }) {
  return (
    <Section background="muted" size="lg">
      <Container className={styles.heroInner}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroSubtitle}>{subtitle}</p>
        <button className={styles.ctaButton}>{ctaText}</button>
      </Container>
    </Section>
  );
}

export default Hero;
