const User = (props) => {
  const { name, email, id } = props;

  return (
    <a href={`/User/${id}`} className="pet">
      {/* <div className="image-container">
    //     <img src={hero} alt={name} />
    //   </div> */}
      <div className="info">
        <h1>{name}</h1>
        <h2>{email}</h2>
      </div>
      {/* <button className="btn-grad" onClick={handleDelete({ email })}> */}
      <button
        className="btn-grad"
        // onClick={(e) => {
        //   e.preventDefault();
        //   console.log("Deleted:", id);
        //   fetch(`http://devsaki.somee.com/api/users/deleteuserbyid/${id}`, { method: 'DELETE' })
        // }}
      >
        Delete
      </button>
    </a>
  );
};

export default User;
