import styles from "./Features.module.css";
import Section from "../Section/Section";
import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import FeatureCard from "./FeatureCard/FeatureCard";

function Features({ features }) {
  return (
    <Section background="default" size="md">
      <Container>
        <SectionTitle>Можливості</SectionTitle>
        <div className={styles.featuresGrid}>
          {features.map(({ title, description, id }) => (
            <FeatureCard key={id} title={title} description={description} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Features;
