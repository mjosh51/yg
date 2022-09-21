import Image from 'next/image';
import logo from '../assets/images/footerlogo.svg';
import footergraphic from '../assets/images/footergraphic4.svg';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

// const styles = {
//   // wrapper:
//   //   'bg-[#F8F1F1] pt-[3rem] pl-[3rem] gap-[3rem] sm:py-[1.5rem] pl-[0] md:pt-[2rem] pb-[0.7rem] xsm:w-[100%] pt-[2rem] pb-[3rem]',
//   firstColumn: 'w-[30rem] xsm:w-[16rem]',
//   beliefText: 'w-[20rem] xsm:w-[16rem]',
//   footerNavList: 'flex flex-col gap-[1.4rem] justify-center',
//   footerGraphicContainer: 'ml-[0.1rem] sm:hidden xsm:hidden',
// };

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        <div className={styles.firstColumn}>
          <Link href="/">
            <a>
              <Image src={logo} width={80} height={50} alt="" layout="fixed" />
            </a>
          </Link>
          <p className={styles.beliefText}>
            We believe investing in young people is the best way for a better
            world.
          </p>
        </div>
        <div className={styles.footerOtherColumnsContainer}>
          <ul className={styles.footerNavList}>
            <li>
              <Link href="/">
                <a>Courses</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Community</a>
              </Link>
            </li>
          </ul>

          <ul className={styles.footerNavList}>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a>Volunteer</a>
              </Link>
            </li>

            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
          <ul className={styles.footerNavList}>
            <li>
              <Link href="/policy">
                <a>Privacy</a>
              </Link>
            </li>

            <li>
              <Link href="/twitter/youngrise">
                <a>Twitter</a>
              </Link>
            </li>

            <li>
              <Link href="/facebook/youngrise">
                <a>Facebook</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerGraphicContainer}>
          <Image
            src={footergraphic}
            width={150}
            height={200}
            alt=""
            layout="fixed"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
