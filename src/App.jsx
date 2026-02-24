import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./views/Home";
import Services from "./views/Services";
import MeetTheTeam from "./views/MeetTheTeam";
import ContactUs from "./views/ContactUs";
import { preloadImageUrls } from "./assets/preloadImages";

function App() {
  useEffect(() => {
    const preloaders = preloadImageUrls.map((url) => {
      const image = new Image();
      image.decoding = "async";
      image.src = url;
      return image;
    });

    return () => {
      preloaders.forEach((image) => {
        image.src = "";
      });
    };
  }, []);

  return (
    <div className="site-layout">
      <ScrollToTop />
      <Header />

      <main className="site-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/meet-the-team" element={<MeetTheTeam />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
