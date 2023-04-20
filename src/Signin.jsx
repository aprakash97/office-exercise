import { useState } from "react";

const Signin = () => {
  //signin
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // function API
    console.log(email, password);
    if (email.length == 0 || password.length == 0) {
      alert("Complete all fields");
    }
  };
  return (
    <div>
      <div className="main">
        <h2>Sign in</h2>
        <form onSubmit={handleSubmit} className="center">
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
