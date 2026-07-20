import styles from "./NavLink.module.css";

function NavLink({ item }) {
  return (
    <a className={styles.navLink} href="#">
      {item}
    </a>
  );
}

export default NavLink;
