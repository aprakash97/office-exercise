const User = (props) => {
  const { name, email, id } = props;

  // let hero = "http://pets-images.dev-apis.com/pets/none.jpg";

  return (
    <a href={`/User/${id}`} className="pet">
      {/* <div className="image-container">
        <img src={hero} alt={name} />
      </div> */}
      <div className="info">
        <h1>{name}</h1>
        <h2>{email}</h2>
      </div>
    </a>
  );
};

export default User;
