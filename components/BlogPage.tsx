import styles from '../styles/BlogPage.module.css';
import ComingSoon from '../assets/images/comingsoon.svg';
import Image from 'next/image';

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.parent}>
        <div className={styles.child}>
          <div className={styles.wrapper}>
            coming soon...
            <span>
              <Image src={ComingSoon} />
            </span>
          </div>
          <div className={styles.back}>
            <a href="/">Go Back to Homepage</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
