import Image from 'next/image';
import Slide1 from '../assets/images/slide1.svg';
import Slide2 from '../assets/images/slide2.svg';
import Slide3 from '../assets/images/slide3.svg';
import NextArrow from '../assets/images/nextarrow.svg';
import BackArrow from '../assets/images/backarrow.svg';
import styles from '../styles/FifthSection.module.css';

// const styles = {
//   wrapper:
//     'my-[0] mx-[auto] w-[90%] text-center pt-[3rem] pb-[1rem] flex flex-col gap-[2rem] xxl:w-[50%] xxxl:w-[30%]',
//   heading:
//     'font-bold text-[1.5rem] w-[30rem] my-[0] mx-[auto] md:text-[1.5rem] sm:w-[20rem] xsm:w-[15rem] text-[1rem] xxxl:text-[1.5rem]',
//   container: 'flex gap-[2rem] w-full my-[0] mx-[auto] items-center',
//   imagesContainer:
//     'flex gap-[2rem] border-b mt-[-1rem] pb-[1rem] xsm:pb-[3rem]',
//   next: 'h-[5rem]',
// };

const FifthSection = () => {
  return (
    <div className={styles.fifthWrapper}>
      <h2 className={styles.fifthHeading}>
        Let&apos;s walk together on the path to fulfill those beautiful dreams
      </h2>
      <div className={styles.fifthContainer}>
        <div className={styles.next}>
          <Image src={BackArrow} alt="" />
        </div>

        <div className={styles.fifthImagesContainer}>
          <Image src={Slide2} width={190} height={190} alt="" />
          <Image src={Slide1} width={600} height={500} alt="" />
          <Image src={Slide3} width={190} height={190} alt="" />
        </div>

        <div className={styles.next}>
          <Image src={NextArrow} alt="" />
        </div>
      </div>

      <div></div>
      <div></div>
    </div>
  );
};

export default FifthSection;
