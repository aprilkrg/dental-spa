import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Header from "./components/partials/Header";

const App = () => {
    return (
        <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services/*" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
    );
};
export default App;
