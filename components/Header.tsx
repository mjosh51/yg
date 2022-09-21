import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/images/headerlogo.svg';
import MenuBar from '../assets/images/menubar.svg';
import CloseIcon from '../assets/images/closeicon.svg';
import styles from '../styles/Header.module.css';
import { useEffect, useRef, useState } from 'react';

// const style = {
//   // navWrapper: 'w-full flex py-[1rem] justify-between items-center text-white',
//   // container: 'w-[90%] flex justify-between my-[0] mx-[auto] items-center',
//   // leftNav: 'flex items-center',
//   // logo: 'object-contain cursor-pointer',
//   // middleNav: 'flex gap-[2rem] items-center',
//   // rightNav: 'flex gap-[2rem] items-center',
//   registerButton: 'bg-[#FF7978] text-white rounded-full py-[0.3rem] px-[1rem]',
//   // headerNav: 'sm:hidden',
//   // menuBarContainer: 'md:hidden',
//   menuBar: 'cursor-pointer',
//   // toggledMenuListContainer:
//   //   'top-0 right-0 absolute bg-[#000F41] overflow-y-scroll overflow-y-contain p-[2rem] z-10 w-[70%] h-[100vh] block opacity-90',
//   // toggledMenuList: 'w-full',
// };

const Header = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState(false);

  const handleHiddenMenu = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const checkOutsideClick = (e: any) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', checkOutsideClick);

    return () => {
      document.removeEventListener('mousedown', checkOutsideClick);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen === true) {
      document.body.style.overflowY = 'hidden';
    } else document.body.style.overflowY = 'scroll';
  }, [isOpen]);
  return (
    <nav className={styles.navWrapper}>
      <div className={styles.container}>
        <div className={styles.leftNav}>
          <Link href="/">
            <a>
              <Image
                className={styles.logo}
                src={logo}
                width={80}
                height={50}
                layout="fixed"
              />
            </a>
          </Link>
        </div>
        <div className={styles.menuBarContainer}>
          <Image
            onClick={handleHiddenMenu}
            className={styles.menuBar}
            src={MenuBar}
            width={25}
            height={20}
          />
        </div>

        <ul className={styles.middleNav}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>

          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/courses">
              <a>Courses</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
        <ul className={styles.rightNav}>
          <li>
            <Link href="/sign_in">
              <a>Sign In</a>
            </Link>
          </li>
          <li className={styles.registerButton}>
            <Link href="/sign_up">
              <a>Join now</a>
            </Link>
          </li>
        </ul>

        {isOpen && (
          <div className={styles.toggledMenuListContainer} ref={ref}>
            <div className={styles.closeIconContainer}>
              <Image
                onClick={handleHiddenMenu}
                src={CloseIcon}
                width={20}
                height={20}
              />
            </div>
            <ul className={styles.toggledMenuListParent}>
              <li className={styles.toggledMenuList}>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className={styles.toggledMenuList}>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li className={styles.toggledMenuList}>
                <Link href="/courses">
                  <a>Courses</a>
                </Link>
              </li>
              <li className={styles.toggledMenuList}>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li className={styles.toggledMenuList}>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
              <li className={styles.toggledMenuList}>
                <Link href="/sign_in">
                  <a>Sign In</a>
                </Link>
              </li>
              <li className={styles.toggledMenuList}>
                <Link href="/sign_up">
                  <a>Join now</a>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
