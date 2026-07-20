import styles from "./Header.module.css";
import Container from "../Container/Container";
import Nav from "./Nav/Nav";

function Header({ navLinks }) {
  return (
    <header className={styles.header}>
      <Container className={styles.headerInner}>
        <p className={styles.logo}>Orbit</p>
        <Nav items={navLinks} />
      </Container>
    </header>
  );
}

export default Header;
