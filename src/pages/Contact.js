import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <main className={styles.contact}>
      <header className={styles.navs}>
        <div className={styles.iconnav}>
          <div className={styles.navLinks}>
            <b className={styles.home}>Home</b>
            <div className={styles.productsWrapper}>
              <b className={styles.products}>Products</b>
            </div>
            <b className={styles.about}>About</b>
            <b className={styles.about}>Contact Us</b>
          </div>
          <img className={styles.iconCart} alt="" src="/-icon-cart3.svg" />
          <img className={styles.iconUser} alt="" src="/vector4.svg" />
        </div>
        <b className={styles.theIris}>THE IRIS</b>
        <img className={styles.logo2Icon} alt="" src="/logo-2@2x.png" />
      </header>
      <div className={styles.getInTouch}>Get in touch</div>
      <div className={styles.contactUs1}>Contact us</div>
      <div className={styles.contactChild} />
      <div className={styles.contactItem} />
      <div className={styles.contactInner} />
      <div className={styles.emailInfotheiriscoin}>
        <p className={styles.email}>
          <b>Email</b>
        </p>
        <p className={styles.email}>
          <b>&nbsp;</b>
        </p>
        <p className={styles.infotheiriscoin}>
          <a
            className={styles.a}
            href="mailto:info@theiris.co.in"
            target="_blank"
          >
            <span className={styles.span}>info@theiris.co.in</span>
          </a>
        </p>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.contactChild1} />
      <div className={styles.contactChild2} />
      <div className={styles.phone9180500Container}>
        <p className={styles.email}>
          <b>phone</b>
        </p>
        <p className={styles.email}>
          <b>&nbsp;</b>
        </p>
        <p className={styles.infotheiriscoin}>
          <a className={styles.a} href="tel:+918050003572" target="_blank">
            <span className={styles.span}>+91 80500 03572</span>
          </a>
        </p>
      </div>
      <div className={styles.oilMillRoadContainer}>
        2
        <a className={styles.a} href="tel:+918050003572" target="_blank">
          <span className={styles.span}>
            29/1, Oil Mill Road, Lingarajpuram, Bangalore - 560 084
          </span>
        </a>
      </div>
      <input className={styles.rectangleInput} type="text" />
      <input className={styles.contactChild3} type="text" />
      <input className={styles.contactChild4} type="text" />
      <div className={styles.fullName}>Full Name</div>
      <div className={styles.email1}>Email</div>
      <input className={styles.contactChild5} type="text" />
      <div className={styles.phone1}>Phone</div>
      <div className={styles.typeYourMessage}>Type your message here</div>
      <button className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.submit}>SUBMIT</div>
        <div className={styles.image2Wrapper}>
          <img className={styles.image2Icon} alt="" src="/image-24@2x.png" />
        </div>
      </button>
      <img
        className={styles.illustrationProblemSolving}
        alt=""
        src="/-illustration-problem-solving.svg"
      />
      <img
        className={styles.illustrationQuestionIcon}
        alt=""
        src="/-illustration-question.svg"
      />
      <img className={styles.iconPhone} alt="" src="/-icon-phone1.svg" />
      <img className={styles.iconMailRu} alt="" src="/-icon-mail-ru1.svg" />
      <img
        className={styles.iconLocationPin}
        alt=""
        src="/-icon-location-pin3.svg"
      />
      <div className={styles.rectangleGroup}>
        <footer className={styles.groupItem} />
        <button className={styles.documentation}>Documentation</button>
        <button
          className={styles.termsConditions}
        >{`Terms & Conditions`}</button>
        <a className={styles.a1} href="tel:8050003572" target="_blank">
          <p className={styles.email}>+91 8050003572</p>
        </a>
        <a
          className={styles.infotheiriscoin3}
          href="mailto:info@theiris.co.in"
          target="_blank"
        >
          <p className={styles.email}>info@theiris.co.in</p>
        </a>
        <div className={styles.dontMissAnyContainer}>
          <p className={styles.email}>
            <span>{`Don’t miss any updates on our new `}</span>
            <span className={styles.products1}>products</span>
            <span className={styles.and}>{` and `}</span>
            <span className={styles.releases}>releases</span>
            <span className={styles.and}>!</span>
          </p>
        </div>
        <div className={styles.helpParent}>
          <div className={styles.help}>Help</div>
          <div className={styles.getInTouch1}>get in touch</div>
          <button className={styles.faq}>FAQ</button>
          <div className={styles.connect}>Connect</div>
        </div>
        <img
          className={styles.iconLocationPin1}
          alt=""
          src="/-icon-location-pin1.svg"
        />
        <img className={styles.iconPhone1} alt="" src="/-icon-phone.svg" />
        <img className={styles.iconMailRu1} alt="" src="/-icon-mail-ru.svg" />
        <div className={styles.oilMillRoad1}>
          229/1, Oil mill road, Lingarajpuram, Bangalore
        </div>
        <img
          className={styles.iconInstagram}
          alt=""
          src="/-icon-instagram.svg"
        />
        <img className={styles.iconYoutube} alt="" src="/-icon-youtube.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img className={styles.iconLinkedin} alt="" src="/-icon-linkedin.svg" />
        <button className={styles.supportPolicy}>Support Policy</button>
        <button className={styles.privacy}>Privacy</button>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupInner} />
          <b className={styles.email2}>Email</b>
          <button className={styles.vectorParent}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle-21.svg"
            />
            <div className={styles.subscribe}>Subscribe</div>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Contact;
