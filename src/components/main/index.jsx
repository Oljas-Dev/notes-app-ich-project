import Footer from "../footer";
import Header from "../header";
import styles from "./styles.module.css";

function Main({ children }) {
  return (
    <main className={styles.container}>
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export default Main;
