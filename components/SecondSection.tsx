import Image from 'next/image';
import Coding from '../assets/images/coding.svg';
import Cybersec from '../assets/images/cybersec.svg';
import Graphics from '../assets/images/graphicdesign.svg';
import Art from '../assets/images/artandcraft.svg';
import Link from 'next/link';
import styles from '../styles/SecondSection.module.css';

// const styles = {
//   wrapper: 'w-[100%]',
//   parent:
//     'w-[90%] my-[0] mx-[auto] flex flex-col gap-[3rem] mt-[2rem] mb-[2rem] xxl:w-[50%] xxxl:w-[30%] xsm:my-[2rem]',
//   categoriesHeading: 'text-center font-bold text-2xl',
//   // categories: 'flex gap-[1rem] sm:grid grid-cols-1 md:grid grid-cols-2 gap-6',
//   categoryContainer: 'bg-[#F8F1F1] rounded-[1rem] p-[2rem] cursor-pointer',
//   categoryTitle: 'font-bold text-center text-[#FF7978]',
//   categoryBrief: 'text-center',
//   categoryImageContainer: 'flex justify-center items-center',
//   learnMoreButton:
//     'bg-black rounded-full text-white py-2 px-4 w-[10rem] my-[0] mx-[auto] mt-[3rem] mb-[2rem] sm:mt-[1rem] xsm:my-[1rem]',
// };

const SecondSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.parent}>
        <h2 className={styles.categories__heading}>Top categories</h2>
        <div className={styles.categories}>
          <Link href="/coding">
            <div className={styles.category__container}>
              <div className={styles.category__image__container}>
                <Image width={70} height={90} src={Coding} layout="fixed" />
              </div>

              <h4 className={styles.category__title}>Coding and Web</h4>
              <p className={styles.category__brief}>
                This course will teach you how to develop a professional quality
                website and make a career out of it.
              </p>
            </div>
          </Link>
          <Link href="/">
            <div className={styles.category__container}>
              <div className={styles.category__image__container}>
                <Image width={80} height={80} src={Cybersec} layout="fixed" />
              </div>
              <h4 className={styles.category__title}>Cybersecurity</h4>
              <p className={styles.category__brief}>
                During this course you will learn various career paths in
                Cybersecurity. You will be equipped with ethical hacking skills,
                networking, and defence skills.
              </p>
            </div>
          </Link>
          <Link href="/">
            <div className={styles.category__container}>
              <div className={styles.category__image__container}>
                <Image width={80} height={80} src={Graphics} layout="fixed" />
              </div>
              <h4 className={styles.category__title}>Graphics Design</h4>
              <p className={styles.category__brief}>
                This course exposes student to fundamentals skills required to
                make quality graphic designs.
              </p>
            </div>
          </Link>
          <Link href="/">
            <div className={styles.category__container}>
              <div className={styles.category__image__container}>
                <Image width={70} height={70} src={Art} layout="fixed" />
              </div>
              <h4 className={styles.category__title}>Art and Craft</h4>
              <p className={styles.category__brief}>
                This is for students who want to learn physical art works like
                bag craft, shoe-making, fashion designing, etc.
              </p>
            </div>
          </Link>
        </div>
        <Link href="/register">
          <button className={styles.learnMoreButton}>Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default SecondSection;
