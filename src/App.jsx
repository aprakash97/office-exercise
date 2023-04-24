import { createRoot } from "react-dom/client";
import Main from "./Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Main />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
