import styles from "./Footer.module.css";
import Container from "../Container/Container";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerInner}>
        <p className={styles.footerLogo}>Orbit</p>
        <p className={styles.footerCopyright}>
          © 2026 Orbit. Всі права захищені.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
