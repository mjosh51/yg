import styles from '../styles/BlogPage.module.css';
import ComingSoon from '../assets/images/comingsoon.svg';
import Image from 'next/image';
import Link from 'next/link';

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.parent}>
        <div className={styles.child}>
          <div className={styles.wrapper}>
            coming soon...
            <span>
              <Image src={ComingSoon} alt="" />
            </span>
          </div>
          <div className={styles.back}>
            <Link href="/">
              <a>Go Back to Homepage</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
