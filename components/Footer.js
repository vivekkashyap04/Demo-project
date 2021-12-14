import styles from "../styles/Footer.module.scss";
export default function Footer({ theme }) {
  return (
    <footer className={styles.footer}>
      <span className={theme === "light" ? null : styles.darkmode}>
        Drag and drop to reorder list
      </span>
    
    </footer>
  );
}
