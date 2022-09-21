import Header from './Header';
import styles from '../styles/AboutPage.module.css';
import Image from 'next/image';
import norma from '../assets/images/children1.svg';
import Footer from './Footer';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

const AboutPage = () => {
  const [popup, setPopup] = useState(false);

  // const ref = useRef<HTMLDivElement>(null);

  const handlePopup = () => {
    setPopup(!popup);
  };

  useEffect(() => {
    const cardIndex = () => {
      const card1 = document.getElementById('card1') as HTMLDivElement;
      const card2 = document.getElementById('card2') as HTMLDivElement;
      const card3 = document.getElementById('card3') as HTMLDivElement;

      if (window.innerWidth < 650) {
        card1.addEventListener('click', () => {
          card1.style.zIndex = '10';
          card1.style.opacity = '1';
          card2.style.zIndex = '9';
          card2.style.opacity = '0.4';
          card3.style.zIndex = '8';
          card3.style.opacity = '0.1';
        });

        card2.addEventListener('click', () => {
          card1.style.zIndex = '9';
          card1.style.opacity = '0.4';
          card2.style.zIndex = '10';
          card2.style.opacity = '1';
          card3.style.zIndex = '9';
          card3.style.opacity = '0.4';
        });

        card3.addEventListener('click', () => {
          card1.style.zIndex = '9';
          card1.style.opacity = '0.4';
          card2.style.zIndex = '9';
          card2.style.opacity = '0.1';
          card3.style.zIndex = '10';
          card3.style.opacity = '1';
        });
      } else {
        return () => {
          card1.removeEventListener('click', cardIndex);
          card2.removeEventListener('click', cardIndex);
          card3.removeEventListener('click', cardIndex);
        };
      }
    };

    cardIndex();
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.wrapper}>
        <div>
          <Header />
        </div>
        <div className={styles.firstSectionBody}>
          <p>Raising Leaders with Competence and Character</p>
        </div>
      </section>
      <section className={styles.aboutUsContainer}>
        <div className={styles.aboutUs}>
          <div className={styles.textBody}>
            <h1>About Us</h1>
            <p>
              Young Rise is a{' '}
              <span className={styles.highlight}>non-profit organization</span>{' '}
              that labour on lives to help them secure a better future. Our
              mission is to raise and equip{' '}
              <span className={styles.highlight}>young people</span> no matter
              their location with technological and vocational competencies
              through agreed discipleship.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              className={styles.norma}
              src={norma}
              layout="fill"
              priority
              alt=""
            />
          </div>
        </div>
      </section>
      <section className={styles.cardsContainer}>
        <div className={styles.cards}>
          <div className={styles.card1} id="card1">
            <h1 className={styles.cardtitle}>Our Team</h1>
            <p>
              We are a team of individuals with passion for humanity. Our heart
              is to see each person &#40;regardless of their background or
              race&#41; fulfill their God-given dreams. The team is made up of
              fellows from diverse career path who are making impact in their
              workplace and communities. We want to continue doing this as long
              as we are breathing. We are open to great minds of like-passion
              and pursuit as we believe that collectively we can make the world
              a better place.
            </p>
          </div>
          <div className={styles.card2} id="card2">
            <h1 className={styles.cardtitle}>Our Blueprint</h1>
            <p>
              We aim to achieve this by admitting students with the consent of
              their parent or guardian; organizing trainings, both class
              trainings and one-on-one trainings. This process will include a
              lot of follow-ups, mentoring and character-building, all of which
              must be agreed on by the student or parent before admission is
              approved. <a onClick={handlePopup}>Learn more</a>
            </p>
          </div>
          {popup && (
            <div className={styles.moreBluePrint}>
              <p>
                Student will have to apply for a singular career path at a time.
                Students are not allowed to choose two career paths even though
                they may be interwoven. Student will afterwards be certified
                after standard examinations. Our teachers are a fan of
                practicals, so certification will be based on excelling in
                practicals. After this, student may become part of our
                community. We usually encourage that to become stronger.{' '}
                <a className={styles.link} onClick={handlePopup}>
                  Go back
                </a>
              </p>
            </div>
          )}
          <div className={styles.card3} id="card3">
            <h1 className={styles.cardtitle}>Our Focus</h1>
            <p>
              We focus on young people between the age of 10 to 25 who have
              either finished college education or still in the college, who
              want to learn any of the course on the{' '}
              <Link href="/careerpath">
                <a>career path</a>
              </Link>{' '}
              page and impact their environment.
            </p>
            <p>
              We want to help anyone acquire skill, so if you do not fall into
              the above category but have the desire and passion to learn,
              kindly let us know by sending an email to{' '}
              <Link href="mailto:info@youngrise.org">
                <a>info@youngrise.org</a>
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className={styles.thirdSection}>
        <div></div>
      </section>
      <section className={styles.fourthSection}>
        <div></div>
      </section>
      <section className={styles.aboutFooter}>
        <Footer />
      </section>
    </div>
  );
};

export default AboutPage;
