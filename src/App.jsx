import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Pagnav from "./layout/Pagnav";
import Header from "./components/Header";
import BodyOne from "./components/BodyOne";
import BodyTwo from "./components/BodyTwo";
import Bodythree from "./components/Bodythree";
import Footer from "./layout/Footer";

library.add(fas, far, fab)


function App() {
  return (
    <div className="font-raleway">
      <Pagnav />
      <Header />
      <BodyOne />
      <BodyTwo />
      <Bodythree />
      <Footer />
    </div>
  );
}

export default App;
