import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";  
import Invest from "./pages/Invest";
library.add(fas, far, fab)


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invest" element={<Invest />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
