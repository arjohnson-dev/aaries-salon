import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./views/Home";
import Services from "./views/Services";
import MeetTheTeam from "./views/MeetTheTeam";
import ContactUs from "./views/ContactUs";

function App() {
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
