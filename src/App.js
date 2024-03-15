import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./about";

function App() {
  console.log("stri");
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
    </Routes>
  );
}

export default App;
