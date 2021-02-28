import styles from "../styles/components/LoadingPage.module.css";

export function LoadingPage() {
  console.log("funcionou");
  return (
    <div className={styles.container}>
      <i className="fas fa-spinner"></i>
    </div>
  );
}
