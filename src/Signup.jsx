import { useState } from "react";

const Signup = () => {
  //signup
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmitS = (event) => {
    event.preventDefault();
    if (
      name.length == 0 ||
      email.length == 0 ||
      password.length == 0 ||
      setConfirmPassword.length == 0
    ) {
      alert("Complete all fields");
    }
    // function API
  };

  return (
    <div>
      <div className="main">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmitS}>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
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
          <label>
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
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

export default Signup;
