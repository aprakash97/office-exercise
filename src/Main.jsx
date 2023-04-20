import { useState } from "react";
import Signup from "./Signup";
import Signin from "./Signin";

const Main = () => {
  const [showSignIn, setShowSignIn] = useState(true);
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setShowSignIn(!showSignIn);
    setActive(!active);
  };

  return (
    //CONTROLLED FORM
    <div>
      <div className="container">
        <button onClick={handleClick} className="btn">
          {active ? "Already Have an Account?" : "Don't Have an Account?"}
        </button>
      </div>
      {showSignIn ? (
        <Signin />
      ) : (
        <div>
          <Signup />
        </div>
      )}
    </div>
  );
};

export default Main;
