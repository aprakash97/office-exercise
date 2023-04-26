import { useState, useEffect } from "react";
// import Results from "./Results";
// import User from "./User";

const Home = () => {
  const [users, setUsers] = useState([]);
  // const [users, setUsers] = useState();  no cors error

  useEffect(() => {
    requestUsers();
  }, []); //renders only at the beginning

  async function requestUsers() {
    const res = await fetch(
      "https://f354-112-134-209-22.ngrok-free.app/api/users/GetUsers"
      // "http://pets-v2.dev-apis.com/pets"
    );
    const json = await res.json();

    setUsers(json); //to set
    // setUsers(json.pets);
  }

  // useEffect(() => {
  //   // fetch data from your API endpoint
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       "https://c3f0-112-134-209-193.ngrok-free.app/api/users/GetUsers"
  //     );
  //     const data = await response.json();
  //     setUsers(data);
  //   };
  //   fetchData();
  // }, []);

  console.log(users.length);

  return (
    <div>
      <h2>Welcome to the home!</h2>
      {users.map((user) => {
        <h1>{user.name}</h1>;
        // <User name={user.name} email={user.email} />;
      })}
      {/* <Results users={users} /> */}
    </div>
  );
};

export default Home;
