import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ProductMicroscope from "./pages/ProductMicroscope";
import MicroscopeMain from "./pages/MicroscopeMain";
import RegisterPage from "./pages/RegisterPage";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutPage1 from "./pages/CheckoutPage1";
import CheckoutPage2 from "./pages/CheckoutPage2";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/microscopemain":
        title = "";
        metaDescription = "";
        break;
      case "/register-page":
        title = "";
        metaDescription = "";
        break;
      case "/checkout-page":
        title = "";
        metaDescription = "";
        break;
      case "/checkout-page1":
        title = "";
        metaDescription = "";
        break;
      case "/checkout-page2":
        title = "";
        metaDescription = "";
        break;
      case "/contact":
        title = "";
        metaDescription = "";
        break;
      case "/home-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ProductMicroscope />} />
      <Route path="/microscopemain" element={<MicroscopeMain />} />
      <Route path="/register-page" element={<RegisterPage />} />
      <Route path="/checkout-page" element={<CheckoutPage />} />
      <Route path="/checkout-page1" element={<CheckoutPage1 />} />
      <Route path="/checkout-page2" element={<CheckoutPage2 />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/home-page" element={<HomePage />} />
    </Routes>
  );
}
export default App;
