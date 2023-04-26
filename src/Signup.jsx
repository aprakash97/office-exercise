import { useState } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const enabled = password.length > 0;

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
      swal("Complete all fields");
    } else if (password !== confirmPassword) {
      swal("Passwords don't match");
    } else {
      fetch(
        "https://f354-112-134-209-22.ngrok-free.app/api/users/RegisterUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          }),
        }
      )
        .then((response) => response.text())
        .then((data) => {
          if (data === "Success") {
            swal("Signup successful");
            navigate("/home"); // Navigate to new home component
          } else {
            swal("Signup failed");
          }
        })
        .catch((error) => {
          console.log(error);
          swal("Signup failed catch");
        });
    }
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
              disabled={!enabled}
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
