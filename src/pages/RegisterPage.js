import styles from "./RegisterPage.module.css";
const RegisterPage = () => {
  return (
    <div className={styles.registerPage}>
      <div className={styles.navs}>
        <div className={styles.navLinks}>
          <b className={styles.home}>Home</b>
          <div className={styles.productsWrapper}>
            <b className={styles.products}>Products</b>
          </div>
          <b className={styles.products}>About</b>
          <b className={styles.products}>Contact Us</b>
        </div>
        <b className={styles.theIris}>THE IRIS</b>
        <img className={styles.logo2Icon} alt="" src="/logo-2@2x.png" />
      </div>
      <div className={styles.registerForNew}>Register For New Account</div>
      <div className={styles.registerPageChild} />
      <form className={styles.accountDetails} method="post">
        <div className={styles.accountDetailsChild} />
        <div className={styles.fillInThe}>Fill in the following Details:</div>
        <div className={styles.accountSummary}>
          <div className={styles.password}>Password</div>
          <input className={styles.accountSummaryChild} type="text" />
          <div className={styles.div}>********</div>
          <input
            className={styles.accountSummaryItem}
            type="text"
            defaultValue="Email@myemail.com"
            placeholder="Email address"
          />
          <button className={styles.groupParent}>
            <div className={styles.rectangleWrapper}>
              <button className={styles.groupChild} />
            </div>
            <div className={styles.registerForAccount}>
              Register for account
            </div>
          </button>
          <div className={styles.reEnterPassword}>Re-enter Password</div>
          <input className={styles.accountSummaryInner} type="text" />
          <div className={styles.div1}>********</div>
          <div className={styles.nameParent}>
            <div className={styles.name}>Name</div>
            <input className={styles.groupItem} type="text" />
            <div className={styles.xyz}>XYZ</div>
          </div>
        </div>
      </form>
      <header className={styles.navs1}>
        <div className={styles.iconnav}>
          <div className={styles.navLinks1}>
            <b className={styles.home}>Home</b>
            <div className={styles.productsWrapper}>
              <b className={styles.products1}>Products</b>
            </div>
            <b className={styles.products}>About</b>
            <b className={styles.products}>Contact Us</b>
          </div>
          <img className={styles.iconCart} alt="" src="/-icon-cart.svg" />
          <img className={styles.iconUser} alt="" src="/vector4.svg" />
        </div>
        <b className={styles.theIris}>THE IRIS</b>
        <img className={styles.logo2Icon} alt="" src="/logo-2@2x.png" />
      </header>
      <div className={styles.registerPageChild} />
      <img
        className={styles.illustrationRocketLaunch}
        alt=""
        src="/-illustration-rocket-launch.svg"
      />
      <img
        className={styles.illustrationWorldConnection}
        alt=""
        src="/-illustration-world-connection1.svg"
      />
      <div className={styles.rectangleParent}>
        <footer className={styles.groupInner} />
        <button className={styles.documentation}>Documentation</button>
        <button
          className={styles.termsConditions}
        >{`Terms & Conditions`}</button>
        <a className={styles.a} href="tel:8050003572" target="_blank">
          <p className={styles.p}>+91 8050003572</p>
        </a>
        <a
          className={styles.infotheiriscoin}
          href="mailto:info@theiris.co.in"
          target="_blank"
        >
          <p className={styles.p}>info@theiris.co.in</p>
        </a>
        <div className={styles.dontMissAnyContainer}>
          <p className={styles.p}>
            <span>{`Don’t miss any updates on our new `}</span>
            <span className={styles.products2}>products</span>
            <span className={styles.and}>{` and `}</span>
            <span className={styles.releases}>releases</span>
            <span className={styles.and}>!</span>
          </p>
        </div>
        <div className={styles.helpParent}>
          <div className={styles.help}>Help</div>
          <div className={styles.getInTouch}>get in touch</div>
          <button className={styles.faq}>FAQ</button>
          <div className={styles.connect}>Connect</div>
        </div>
        <img
          className={styles.iconLocationPin}
          alt=""
          src="/-icon-location-pin2.svg"
        />
        <img className={styles.iconPhone} alt="" src="/-icon-phone.svg" />
        <img className={styles.iconMailRu} alt="" src="/-icon-mail-ru.svg" />
        <div className={styles.oilMillRoad}>
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
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <b className={styles.email}>Email</b>
          <button className={styles.vectorParent}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle-2.svg"
            />
            <div className={styles.subscribe}>Subscribe</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
