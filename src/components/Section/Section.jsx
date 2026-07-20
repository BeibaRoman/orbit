import styles from "./Section.module.css";

function Section({ children, background = "default", size = "md", className }) {
  return (
    <section
      className={`${styles.section} ${styles[size]} ${styles[background]} ${className || ""}`}
    >
      {children}
    </section>
  );
}

export default Section;
