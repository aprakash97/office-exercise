import User from "./User";

const Results = ({ users }) => {
  return (
    <div className="main2">
      {!users.length ? (
        <h1>No Users Found</h1>
      ) : (
        users.map((user) => {
          return (
            <User
              key={user.id}
              name={user.name}
              images={user.images}
              email={user.email}
              city={user.city}
              id={user.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
