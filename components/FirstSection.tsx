import Image from 'next/image';
import Line from '../assets/images/line.svg';
import JoinUs from '../assets/images/student.svg';
import Discord from '../assets/images/discord.svg';
import Slack from '../assets/images/slack.svg';
import Telegram from '../assets/images/telegram.svg';
import Link from 'next/link';
import styles from '../styles/FirstSection.module.css';
import StudentLearning from '../assets/images/studentlearning.svg';
import { useEffect, useState } from 'react';

// const styles = {
//   container:
//     'flex flex-col gap-[1rem] justify-start mt-[1rem] text-white pb-[2rem] md:w-[90%] mb-[3rem] sm:w-[90%] my-[0] mx-[auto] md:pr-7 smd:w-[90%] xsm:w-[90%]',
//   imageContainer: 'mt-[0]',
//   bigText: 'font-bold text-2xl w-[25rem] sm:w-full xsm:w-full',
//   bigTag: 'text-[#FF7978]',
//   smallText: 'text-[1rem]',
//   actionButtons: 'flex gap-[2rem] mt-[2rem]',
//   registerButton: 'bg-[#FF7978] text-white rounded-full py-3 px-[1.5rem]',
//   learnMoreButton: 'text-[0.9rem]',
//   secondIllustration: '',
//   socialTools:
//     'flex gap-[5rem] mt-[3rem] md:gap-[2rem] sm:gap-[1.5rem] xsm:grid grid-cols-2 gap-[0]',
// };

const FirstSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.parent}>
        <div className={styles.illustration__container}>
          <Image
            className={styles.illustration}
            src={JoinUs}
            alt=""
            layout="fill"
            priority
          />

          {/* <Image
            className={styles.secondIllustration}
            src={StudentLearning}
            layout="fill"
            priority
          /> */}
        </div>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <Image src={Line} width={270} height={0} alt="" />
          </div>
          <p className={styles.bigText}>
            <span className={styles.bigTag}>Learn </span>New Skill &amp; Start{' '}
            <span className={styles.bigTag}>Creating </span>a better world
          </p>
          <p className={styles.smallText}>
            We help individuals and communities learn new skills through
            discipleship and invite them to create a better world together.
          </p>
          <ul className={styles.actionButtons}>
            <Link href="/register">
              <a>
                <li className={styles.registerButton}>Get Started</li>
              </a>
            </Link>
            <Link href="/about">
              <a>
                <li className={styles.learnMoreButton}>Learn More</li>
              </a>
            </Link>
          </ul>

          <div className={styles.socialTools}>
            <span>
              <Link href="/">
                <a>
                  <Image
                    src={Discord}
                    width={90}
                    height={30}
                    alt=""
                    layout="fixed"
                  />
                </a>
              </Link>
            </span>

            <Link href="/">
              <a>
                <Image
                  src={Slack}
                  width={90}
                  height={30}
                  alt=""
                  layout="fixed"
                />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Image
                  src={Telegram}
                  width={90}
                  height={30}
                  alt=""
                  layout="fixed"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
