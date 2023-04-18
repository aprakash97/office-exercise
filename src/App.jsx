import { createRoot } from "react-dom/client";
import Main from "./Main";

const App = () => {
  return (
    <div>
      <Main />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
