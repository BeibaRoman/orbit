import styles from "./Nav.module.css";
import NavLink from "./NavLink/NavLink";

function Nav({ items }) {
  return (
    <nav className={styles.nav}>
      {items.map((item) => (
        <NavLink key={item} item={item} />
      ))}
    </nav>
  );
}

export default Nav;
