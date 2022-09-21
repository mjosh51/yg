import Link from 'next/link';
import styles from '../styles/FourthSection.module.css';

// const styles = {
//   wrapper: 'bg-black py-[3rem]',
//   container:
//     'flex my-[0] mx-[auto] w-[90%] gap-[5rem] justify-between text-white md:gap-[2rem] sm:block gap-[0] xsm:block xxl:w-[50%] gap-[6rem] xxxl:w-[30%]',
//   videoContainer: 'sm:float-right',
//   textContainer: 'flex flex-col gap-3 justify-center',
//   textHeading: 'font-bold text-2xl text-[#FF7978]',
//   registerButton:
//     'bg-[#FF7978] text-white rounded-full py-3 px-[1rem] w-[10rem] mt-10 md:mt-7',
//   frame: '',
// };

const FourthSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.videoContainer}>
          <iframe
            className={styles.frame}
            width="500vw"
            height="400vh"
            src="https://www.youtube.com/embed/48kWeg-oM5o"
            title="Creative Leadership"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.textHeading}>BUILDING EXCELLENT LEADERS</h2>
          <p>
            Our call is to equip you with the necessary skills to boost your
            employability, entrepreneurship, leadership ability by learning to
            use technology, craftmanship to profer solutions to world problems
            through determined discipleship.
          </p>
          <Link href="/course">
            <a>
              <button className={styles.registerButton}>Choose a Path</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
