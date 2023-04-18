import { useState } from 'react';


  function Main() {
    const [showSignIn, setShowSignIn] = useState(true);
    const [active, setActive] = useState(false);

    const handleClick = () => {
      setShowSignIn(!showSignIn);
      setActive(!active);
    };

    //signin 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // function API
      console.log(email, password)
    };
    
    //signup
    const [name, setName] = useState('');
    const [emailS, setEmailS] = useState('');
    const [passwordS, setPasswordS] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleEmailChangeS = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChangeS = (event) => {
      setPassword(event.target.value);
    };
  
    const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);
    };
  
    const handleSubmitS = (event) => {
      event.preventDefault();
      // function API
    };

    return (
      
      <div>
        <div class="container">
        <button onClick={handleClick} className='btn'> {active ? "SignIn ?" : "SignUp ?"}</button>
        </div>
        {showSignIn ? (
          <div>
            <div className='main'>
              <h2>Signin</h2>
              <form onSubmit={handleSubmit} className='center'>
                <label>
                  Email:
                  <input type="email" value={email} onChange={handleEmailChange} />
                </label>
                <label>
                  Password:
                  <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        ) : (
          <div>
            
            <div>
              <div className='main'>
              <h2>Signup</h2>
              <form onSubmit={handleSubmitS}>
                <label>
                  Name:
                  <input type="text" value={name} onChange={handleNameChange} />
                </label>
                <label>
                  Email:
                  <input type="email" value={email} onChange={handleEmailChangeS} />
                </label>
                <label>
                  Password:
                  <input type="password" value={password} onChange={handlePasswordChangeS} />
                </label>
                <label>
                  Confirm Password:
                  <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                </label>
                <button type="submit">Submit</button>
              </form>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  
export default Main;
