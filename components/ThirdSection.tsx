import Image from 'next/image';
import MasterSkill from '../assets/images/masterskill.svg';
import Arrow from '../assets/images/arrow.svg';
import Link from 'next/link';
import styles from '../styles/ThirdSection.module.css';

// const styles = {
//   registerButton:
//     'bg-[#FF7978] text-white rounded-full py-[0.3rem] px-[1rem] w-[7rem]',
//   parent: 'bg-[#F8F1F1] py-[3rem] w-full md:py-[0] w-full',
//   wrapper:
//     'flex justify-between items-center w-[90%] my-[0] mx-[auto] gap-[2rem] xl:w-[90%] my-[0] mx-[auto] lg:w-[90%] my-[0] mx-[auto] sm:grid gap-[1rem] w-[100%] xsm:grid gap-[1rem] xxl:w-[50%] xxxl:w-[30%]',
//   container:
//     'flex flex-col gap-[1rem] sm:w-[90%] my-[0] mx-[auto] md:flex-2 ml-8 xsm:w-[90%] ml-4',
//   heading: 'font-bold text-2xl text-[#3A3292]',
//   brief: 'text-[0.9rem] text-[#787878]',
//   masterSkillContainer:
//     'xsm:w-full relative sm:w-full relative md:flex relative h-[25rem] w-[61rem] xl:w-full relative',
//   masterSkill:
//     'my-2rem cursor-pointer xl:object-cover lg:object-cover smd:object-cover md:object-cover sm:object-cover xsm:object-cover',
//   arrowContainer: 'sm:hidden smd:hidden md:hidden xsm:hidden',
//   arrow: '',
// };

const ThirdSection = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2 className={styles.heading}>
            Master skills with in-depth learning
          </h2>
          <p className={styles.brief}>
            Apply what you learn in real-world projects. Get feedback from a
            global community of learners and professionals.
          </p>
          <Link href="/register">
            <a>
              <button className={styles.registerButton}>Join Us</button>
            </a>
          </Link>
        </div>

        <div className={styles.arrowContainer}>
          <Image
            className={styles.arrow}
            src={Arrow}
            width={200}
            height={200}
            alt=""
            layout="fixed"
          />
        </div>

        <div className={styles.masterSkillContainer}>
          <Image
            className={styles.masterSkill}
            src={MasterSkill}
            // width={400}
            // height={400}
            alt=""
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
