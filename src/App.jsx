import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import NavigationBar from './components/NavigationBar'; 
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <NavigationBar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
