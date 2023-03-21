import { createRoot } from "react-dom/client";
import Test from "./Test";

const App = () => {
  return (
    <div>
      <h1>Welcome To React</h1>
      <Test />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
