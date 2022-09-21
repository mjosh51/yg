import styles from '../styles/CoursesPage.module.css';
import Header from './Header';

const CoursesPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Header />
      </div>
      <div className={styles.secondwrapper}></div>
    </div>
  );
};

export default CoursesPage;
