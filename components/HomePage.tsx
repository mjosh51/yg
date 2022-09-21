import type { NextPage } from 'next';
import Divider from '../components/Divider';
import FifthSection from '../components/FifthSection';
import FirstSection from '../components/FirstSection';
import Footer from '../components/Footer';
import FourthSection from '../components/FourthSection';
import Header from '../components/Header';
import SecondSection from '../components/SecondSection';
import ThirdSection from '../components/ThirdSection';
import styles from '../styles/Home.module.css';

// const styles = {
//   // wrapper: `bg-[#000F41] text-white`,
//   wrapper: 'bg-[url("../assets/images/classroom.svg")] bg-[#000F41] text-black',
// };

const HomePage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.wrapper}>
        <div className={styles.headerContainer}>
          <Header />
        </div>
        <div className={styles.firstSectionContainer}>
          <FirstSection />
        </div>
      </section>
      <section className={styles.section}>
        <SecondSection />
      </section>
      <section className={styles.section}>
        <ThirdSection />
      </section>
      <section className={styles.section}>
        <Divider />
      </section>
      <section className={styles.section}>
        <FourthSection />
      </section>
      <section className={styles.section}>
        <FifthSection />
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
