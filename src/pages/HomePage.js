import styles from "./HomePage.module.css";
const HomePage = () => {
  return (
    <main className={styles.homePage}>
      <img className={styles.image16Icon} alt="" src="/image-16@2x.png" />
      <img
        className={styles.illustrationSchoolIcon}
        alt=""
        src="/-illustration-school1.svg"
      />
      <div className={styles.homePageChild} />
      <nav className={styles.navs}>
        <div className={styles.iconnav}>
          <div className={styles.navLinks}>
            <b className={styles.home}>Home</b>
            <div className={styles.productsWrapper}>
              <b className={styles.products}>Products</b>
            </div>
            <b className={styles.about}>About</b>
            <b className={styles.about}>Contact Us</b>
          </div>
          <img className={styles.iconCart} alt="" src="/-icon-cart4.svg" />
          <img className={styles.iconUser} alt="" src="/vector4.svg" />
        </div>
        <b className={styles.theIris}>THE IRIS</b>
        <img className={styles.logo2Icon} alt="" src="/logo-2@2x.png" />
      </nav>
      <div className={styles.banner}>
        <div className={styles.whoAreWeContainer}>
          <p className={styles.whoAreWe}>
            <span className={styles.who}>
              <span className={styles.who1}>{`Who `}</span>
            </span>
            <span className={styles.who}>are we?</span>
          </p>
          <p className={styles.whoAreWe}>
            <span className={styles.theIrisIs}>&nbsp;</span>
          </p>
          <p className={styles.theIrisIsAStartupThatToo}>
            <span className={styles.theIrisIs}>
              THE IRIS is a startup that took its initial steps in 2019 with the
              help of a grant from the Govt of Karnataka with a mission to
              create innovative educational products to enrich the learning
              experience of a student.
            </span>
          </p>
        </div>
        <div className={styles.bannerChild} />
        <div className={styles.missionWrite}>
          <p className={styles.whoAreWe}>
            Innovate and strive to offer educational tools that can instill
            practical knowledge to satisfy curiosity with a good learning
            experience for the ‘future’ of our world
          </p>
        </div>
        <img className={styles.bannerItem} alt="" src="/line-1.svg" />
        <div className={styles.missionLogo}>
          <img className={styles.rocketIcon} alt="" src="/rocket@2x.png" />
          <div className={styles.mission}>Mission</div>
        </div>
        <div className={styles.visionWrite}>
          To radically shift the learning culture towards positive growth that
          we believe will happen only with inspirational learning and asking
          ‘WHY’
        </div>
        <div className={styles.visionLogo}>
          <img className={styles.vectorIcon} alt="" src="/vector8.svg" />
          <div className={styles.vision}>Vision</div>
        </div>
      </div>
      <div className={styles.curiosityKeptAliveContainer}>
        <p className={styles.theIrisIsAStartupThatToo}>Curiosity</p>
        <p className={styles.theIrisIsAStartupThatToo}>Kept</p>
        <p className={styles.alive}>Alive</p>
      </div>
      <button className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.ourProducts}>Our Products</div>
        <div className={styles.image2Wrapper}>
          <img className={styles.image2Icon} alt="" src="/image-25@2x.png" />
        </div>
      </button>
      <div className={styles.thePocketMicroscopeContainer}>
        <p className={styles.whoAreWe}>The Pocket Microscope</p>
      </div>
      <video className={styles.image3} controls>
        <source src="https://youtu.be/7jSDZJr18Ak" />
      </video>
      <div className={styles.hereAreSomeContainer}>
        <span>{`Here are some `}</span>
        <span className={styles.reviews}>Reviews</span>
      </div>
      <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
      <button className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <div className={styles.details}>Details</div>
        <div className={styles.image2Container}>
          <img className={styles.image2Icon1} alt="" src="/image-26@2x.png" />
        </div>
      </button>
      <div className={styles.footer}>
        <footer className={styles.footerChild} />
        <button className={styles.documentation}>Documentation</button>
        <button
          className={styles.termsConditions}
        >{`Terms & Conditions`}</button>
        <a className={styles.a} href="tel:8050003572" target="_blank">
          <p className={styles.theIrisIsAStartupThatToo}>+91 8050003572</p>
        </a>
        <a
          className={styles.infotheiriscoin}
          href="mailto:info@theiris.co.in"
          target="_blank"
        >
          <p className={styles.theIrisIsAStartupThatToo}>info@theiris.co.in</p>
        </a>
        <div className={styles.dontMissAnyContainer}>
          <p className={styles.theIrisIsAStartupThatToo}>
            <span>{`Don’t miss any updates on our new `}</span>
            <span className={styles.products1}>products</span>
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
          src="/-icon-location-pin1.svg"
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
        <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
        <img className={styles.iconLinkedin} alt="" src="/-icon-linkedin.svg" />
        <button className={styles.supportPolicy}>Support Policy</button>
        <button className={styles.privacy}>Privacy</button>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupInner} />
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
      <img className={styles.logoWhite1} alt="" src="/logo-white-1@2x.png" />
      <div className={styles.whoAreWe1}>who are we?</div>
      <div className={styles.sMSrinivasContainer}>
        <p className={styles.theIrisIsAStartupThatToo}>
          <b>s M Srinivas</b>
        </p>
        <p className={styles.blankLine2}>
          <span className={styles.blankLine3}>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.mechanicalEngineeringGraduat}>
          <span className={styles.blankLine3}>
            <span>
              mechanical engineering graduate from cMR institute of technology,
              bangalore. batch of 2018
            </span>
          </span>
        </p>
      </div>
      <div className={styles.ananditaGhoshElectricalContainer}>
        <p className={styles.theIrisIsAStartupThatToo}>
          <b>anandita Ghosh</b>
        </p>
        <p className={styles.blankLine2}>
          <span className={styles.blankLine3}>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.mechanicalEngineeringGraduat}>
          <span className={styles.blankLine3}>
            <span>
              Electrical and Communication Engineering Graduate from CMR
              Institute of Technology, Bangalore. Batch of 2018.
            </span>
          </span>
        </p>
      </div>
      <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
      <img className={styles.image14Icon} alt="" src="/image-14@2x.png" />
      <b className={styles.whyUs}>why us</b>
      <div className={styles.theIrisEstablishedContainer}>
        <p className={styles.theIrisIsAStartupThatToo}>
          THE IRIS, established in 2019 with the help of a grant from the GOVT.
          OF KARNATAKA is into the educational segment innovating to give your
          young one a good educational experience. We believe that young minds
          can grow better when they use experience rather than words. We at THE
          IRIS are here to provide the 'clean slates' a sense of practicality
          through the innovations we bring forward.
        </p>
        <p className={styles.theIrisIsAStartupThatToo}>&nbsp;</p>
        <p className={styles.theIrisIsAStartupThatToo}>
          We aim to recognize difficulties of learning, and innovate solutions
          and provide children with a fun filled learning experience. We are
          here to enrich the educational experience of children by providing
          them with an opportunity to have hands on learning. We believe
          education is not just about academics.
        </p>
        <p className={styles.theIrisIsAStartupThatToo}>&nbsp;</p>
        <p className={styles.theIrisIsAStartupThatToo}>
          Curiosity, Education and Creativity walk hand in hand and the former
          is strongly associated with practicality.
        </p>
        <p className={styles.theIrisIsAStartupThatToo}>
          We are here to shape young minds with innovations that quench their
          curiosity through practical learning
        </p>
      </div>
      <b className={styles.recognition}>recognition</b>
      <div className={styles.winnerOfElevate1002019Parent}>
        <b className={styles.winnerOfElevate100}>WINNER OF ELEVATE100, 2019</b>
        <img
          className={styles.screenshot20230210At442}
          alt=""
          src="/screenshot-20230210-at-442-1@2x.png"
        />
        <div className={styles.recognizedByGovt}>
          Recognized by Govt. of Karnataka for being among the top 100 most
          innovative start-ups in Karnataka, an event organized by the Start-up
          cell of Karnataka’s IT and BT Dept.
        </div>
      </div>
      <img
        className={styles.illustrationTargetIcon}
        alt=""
        src="/-illustration-target1.svg"
      />
      <img
        className={styles.illustrationChecklistIcon}
        alt=""
        src="/-illustration-checklist1.svg"
      />
      <img
        className={styles.illustrationArtificalInteli}
        alt=""
        src="/-illustration-artifical-inteligence.svg"
      />
    </main>
  );
};

export default HomePage;
