import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const mainlayout = ({ child }) => {
  return (
    <div className="relative">
      <Navbar />
      <div className="relative z-0">{child}</div>

      <Footer />
    </div>
  );
};

export default mainlayout;
