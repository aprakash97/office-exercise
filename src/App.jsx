import { createRoot } from "react-dom/client";
import Main from "./Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Signup />} /> */}
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
