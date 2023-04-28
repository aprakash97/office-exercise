const User = (props) => {
  const { name, email, id } = props;

  // let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  // const handleDelete = ({ email }) => {
  //  // e.preventDefault();
  //   console.log("deleted " + email);
  // };

  return (
    // <a href={`/User/${id}`} className="pet">
    //   {/* <div className="image-container">
    //     <img src={hero} alt={name} />
    //   </div> */}
    //   <div className="info">
    //     <h1>{name}</h1>
    //     <h2>{email}</h2>
    //   </div>
    //   {/* <button className="btn-grad" onClick={handleDelete({ email })}> */}
    //   <button className="btn-grad" onClick={(e) => console.log(e.target.value)}>
    //     Delete
    //   </button>
    // </a>

    <div className="pet">
      {/* <div className="image-container">
        <img src={hero} alt={name} />
      </div> */}
      <div className="info">
        <h1>{name}</h1>
        <h2>{email}</h2>
      </div>
      {/* <button className="btn-grad" onClick={handleDelete({ email })}> */}
      <button
        className="btn-grad"
        onClick={(e) => {
          e.preventDefault();
          console.log({ email });
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default User;
