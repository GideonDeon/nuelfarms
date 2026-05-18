import BodyOne from "../components/BodyOne";
import Bodythree from "../components/Bodythree";
import BodyTwo from "../components/BodyTwo";
import Header from "../components/Header";
import Footer from "../layout/Footer";
import InvestPromptModal from "../components/InvestPromptModal";

function Home() {
  return (
    <div className="font-raleway">
      <InvestPromptModal />
      <Header />
      <BodyOne />
      <BodyTwo />
      <Bodythree />
      <Footer />
    </div>
  );
}

export default Home;
