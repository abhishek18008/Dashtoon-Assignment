import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Explore from "./pages/Explore.jsx";
import ComicPanel from "./pages/ComicPanel.jsx";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="comicpanel" element={<ComicPanel />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="explore" element={<Explore />} />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
