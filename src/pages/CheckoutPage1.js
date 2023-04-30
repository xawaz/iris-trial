import styles from "./CheckoutPage1.module.css";
const CheckoutPage1 = () => {
  return (
    <main className={styles.checkoutPage}>
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
      <b className={styles.checkoutPage1}>Checkout Page</b>
      <div className={styles.checkoutPageChild} />
      <div className={styles.accountDetails}>
        <div className={styles.accountDetailsChild} />
        <div className={styles.accountSummary}>
          <div className={styles.password}>Password</div>
          <div className={styles.emailAddress}>Email address</div>
          <input className={styles.accountSummaryChild} type="text" />
          <div className={styles.accountSummaryItem} />
          <div className={styles.div}>********</div>
          <img
            className={styles.checkboxCircleFill1Icon}
            alt=""
            src="/checkboxcirclefill-1.svg"
          />
          <div className={styles.emailmyemailcom}>Email@myemail.com</div>
          <img
            className={styles.checkboxCircleFill2Icon}
            alt=""
            src="/checkboxcirclefill-2.svg"
          />
          <button className={styles.groupParent}>
            <button className={styles.rectangleWrapper}>
              <div className={styles.groupChild} />
            </button>
            <div className={styles.next}>Next</div>
          </button>
          <div className={styles.groupContainer}>
            <button className={styles.rectangleContainer}>
              <div className={styles.groupChild} />
            </button>
            <div className={styles.login}>Login</div>
            <div className={styles.registerForAccount}>
              Register for account
            </div>
          </div>
          <div className={styles.cancelOrder}>Cancel order</div>
          <div className={styles.accountSummaryInner} />
          <div className={styles.accountDetails1}>Account details</div>
          <div className={styles.account}>Account</div>
          <div className={styles.shipping}>Shipping</div>
          <div className={styles.payment}>Payment</div>
          <img className={styles.groupIcon} alt="" src="/group-6.svg" />
          <img
            className={styles.accountSummaryChild1}
            alt=""
            src="/group-5.svg"
          />
        </div>
      </div>
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
          <img className={styles.iconCart} alt="" src="/-icon-cart2.svg" />
          <img className={styles.iconUser} alt="" src="/vector4.svg" />
        </div>
        <b className={styles.theIris}>THE IRIS</b>
        <img className={styles.logo2Icon} alt="" src="/logo-2@2x.png" />
      </header>
      <div className={styles.checkoutPage2}>Checkout Page</div>
      <div className={styles.checkoutPageChild} />
      <div className={styles.accountDetails2}>
        <div className={styles.accountDetailsChild} />
      </div>
      <div className={styles.orderSummary}>
        <div className={styles.orderSummaryChild} />
        <div className={styles.orderSummary1}>
          <div className={styles.orderSummary2}>Order Summary</div>
          <div className={styles.pocketMicroscope}>Pocket Microscope</div>
          <b className={styles.rs699}>Rs 699</b>
          <div className={styles.div1}>1</div>
          <button className={styles.rectangleParent}>
            <div className={styles.groupInner} />
            <img
              className={styles.subtractFill1Icon}
              alt=""
              src="/subtractfill-1.svg"
            />
          </button>
          <div className={styles.subTotal}>Sub total</div>
          <div className={styles.tax}>Tax</div>
          <div className={styles.shipping1}>Shipping</div>
          <b className={styles.total}>Total</b>
          <div className={styles.rs704}>Rs 704</div>
          <div className={styles.free}>Free</div>
          <div className={styles.rs5}>Rs 5</div>
          <div className={styles.rs6991}>Rs 699</div>
          <button className={styles.rectangleGroup}>
            <div className={styles.groupInner} />
            <img className={styles.addLine1Icon} alt="" src="/addline-1.svg" />
          </button>
          <img className={styles.image11Icon} alt="" src="/image-111@2x.png" />
        </div>
      </div>
      <form className={styles.shippingSummary} method="post">
        <div className={styles.shippingDetails}>Shipping details</div>
        <div className={styles.secondLineOf}>Second line of address</div>
        <div className={styles.streetName}>Street name</div>
        <div className={styles.postcode}>Postcode</div>
        <input className={styles.shippingSummaryChild} type="text" />
        <input className={styles.shippingSummaryItem} type="text" />
        <input className={styles.shippingSummaryInner} type="text" />
        <div className={styles.div2}>123</div>
        <div className={styles.electricAvenue}>Electric avenue</div>
        <div className={styles.abc123}>ABC - 123</div>
        <button className={styles.groupButton}>
          <div className={styles.rectangleFrame}>
            <div className={styles.groupChild} />
          </div>
          <div className={styles.payment1}>Payment</div>
        </button>
        <button className={styles.cancelOrder1}>Cancel order</button>
        <div className={styles.lineDiv} />
        <div className={styles.account1}>Account</div>
        <div className={styles.shipping2}>Shipping</div>
        <div className={styles.payment2}>Payment</div>
        <img
          className={styles.shippingSummaryChild1}
          alt=""
          src="/group-4.svg"
        />
        <img
          className={styles.shippingSummaryChild2}
          alt=""
          src="/group-4.svg"
        />
        <div className={styles.firstLineOf}>First line of address</div>
        <input className={styles.rectangleInput} type="text" />
        <div className={styles.abc1231}>ABC - 123</div>
        <div className={styles.phoneNumber}>Phone number</div>
        <input className={styles.shippingSummaryChild3} type="text" />
        <div className={styles.div3}>7767857485</div>
        <div className={styles.groupDiv}>
          <footer className={styles.rectangleFooter} />
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
              <span
                className={styles.dontMissAny}
              >{`Don’t miss any updates on our new `}</span>
              <span className={styles.products2}>products</span>
              <span className={styles.dontMissAny}>{` and `}</span>
              <span className={styles.releases}>releases</span>
              <span className={styles.dontMissAny}>!</span>
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
          <img
            className={styles.iconLinkedin}
            alt=""
            src="/-icon-linkedin.svg"
          />
          <button className={styles.supportPolicy}>Support Policy</button>
          <button className={styles.privacy}>Privacy</button>
          <div className={styles.rectangleParent1}>
            <div className={styles.groupChild2} />
            <b className={styles.email}>Email</b>
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
      </form>
    </main>
  );
};

export default CheckoutPage1;
