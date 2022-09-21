import styles from '../styles/ContactPage.module.css';
import Footer from './Footer';
import Header from './Header';
import PhoneIcon from '../assets/images/phoneicon.svg';
import LocationIcon from '../assets/images/locationicon.svg';
import MailIcon from '../assets/images/mailicon.svg';
import FacebookIcon from '../assets/images/fbicon.svg';
import TwitterIcon from '../assets/images/twittericon.svg';
import InstagramIcon from '../assets/images/instagramIcon.svg';
import LinkedInIcon from '../assets/images/linkedinicon.svg';
import Image from 'next/image';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.wrapper}>
        <div>
          <Header />
        </div>
        <div className={styles.firstSectionBody}>
          <p>contact us</p>
        </div>
      </section>
      <section className={styles.bodyParent}>
        <section className={styles.contactHeading}>
          <h1 className={styles.contactHead}>
            Let's create the future together
          </h1>
          <p className={styles.contactSubHead}>
            Any question or remarks? Just write us a message!
          </p>
        </section>
        <section className={styles.secondSectionBodyContainer}>
          <div className={styles.secondSectionBody}>
            <form className={styles.form}>
              <div className={styles.name}>
                <div className={styles.dataCollector}>
                  <p>
                    <label htmlFor="fname">First Name</label>
                  </p>
                  <input
                    className={styles.shortLengthInput}
                    type="text"
                    placeholder="Joe"
                    required
                  />
                </div>
                <div className={styles.dataCollector}>
                  <p>
                    <label htmlFor="lname">Last Name</label>
                  </p>
                  <input
                    className={styles.shortLengthInput}
                    type="text"
                    placeholder="Jack"
                    required
                  />
                </div>
              </div>
              <div className={styles.mailAndPhone}>
                <div className={styles.dataCollector}>
                  <p>
                    <label htmlFor="email">E-mail Address</label>
                  </p>
                  <input
                    className={styles.shortLengthInput}
                    type="email"
                    placeholder="info@example.com"
                  />
                </div>
                <div className={styles.dataCollector}>
                  <p>
                    <label htmlFor="phone">Phone</label>
                  </p>
                  <input
                    className={styles.shortLengthInput}
                    type="tel"
                    placeholder="234 xxx xxx xxxx"
                    pattern="[0-9]-[0-9]-[0-9]-[0-9]"
                  />
                </div>
              </div>
              <div className={styles.statusContainer}>
                <p>
                  <label htmlFor="status">Please define yourself</label>
                </p>
                <div className={styles.status}>
                  <div className={styles.status__child__element}>
                    <input type="radio" id="student" name="status" required />
                    <label htmlFor="student">Student</label>
                  </div>
                  <div className={styles.status__child__element}>
                    <input type="radio" id="volunteer" name="status" />
                    <label htmlFor="volunteer">Volunteer</label>
                  </div>
                  <div className={styles.status__child__element}>
                    <input type="radio" id="partner" name="status" />
                    <label htmlFor="partner">Partner</label>
                  </div>
                  <div className={styles.status__child__element}>
                    <input type="radio" id="other" name="status" />
                    <label htmlFor="other">Other</label>
                  </div>
                </div>
              </div>
              <div>
                <p>
                  <label>Message</label>
                </p>
                <textarea
                  className={styles.messageBox}
                  placeholder="Write a message"
                  cols={50}
                  rows={1}></textarea>
              </div>
            </form>
            <div className={styles.aside}>
              <div className={styles.asideHeader}>
                <h1>Contact Information</h1>
                <p>
                  Fill up the form and our team will get back to you within
                  24hours.
                </p>
              </div>
              <div className={styles.contactOptions}>
                <div className={styles.contactOption}>
                  <div>
                    <Image src={PhoneIcon} width={40} height={40} priority />
                  </div>
                  <p>+234 xxx xxx xxxx</p>
                </div>
                <div className={styles.contactOption}>
                  <div>
                    <Image src={MailIcon} width={40} height={40} priority />
                  </div>
                  <p>info@youngrise.com</p>
                </div>
                <div className={styles.contactOption}>
                  <Image src={LocationIcon} width={60} height={60} priority />
                  <p>
                    6, Dagunro Close, behind Total filling Station, Ojota Lagos
                  </p>
                </div>
              </div>

              <div className={styles.asideBottom}>
                <div className={styles.socialOptions}>
                  <div className={styles.socialOption}>
                    <Image src={FacebookIcon} width={25} height={25} priority />
                  </div>
                  <div className={styles.socialOption}>
                    <Image src={TwitterIcon} width={25} height={25} priority />
                  </div>
                  <div className={styles.socialOption}>
                    <Image
                      src={InstagramIcon}
                      width={25}
                      height={25}
                      priority
                    />
                  </div>
                  <div className={styles.socialOption}>
                    <Image src={LinkedInIcon} width={25} height={25} priority />
                  </div>
                </div>
                <div className={styles.shape1}></div>
                <div className={styles.shape2}>
                  <div className={styles.shape3}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className={styles.contactFooter}>
        <Footer />
      </section>
    </div>
  );
};

export default ContactPage;
