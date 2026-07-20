import styles from "./Testimonials.module.css";
import Section from "../Section/Section";
import Container from "../Container/Container";
import TestimonialCard from "./TestimonialCard/TestimonialCard";

function Testimonials({ testimonials }) {
  return (
    <Section background="muted" size="md">
      <Container>
        <div className={styles.testimonialsGrid}>
          {testimonials.map(({ id, text, author, role, avatar }) => (
            <TestimonialCard
              key={id}
              text={text}
              author={author}
              role={role}
              avatar={avatar}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Testimonials;
