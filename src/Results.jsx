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
              key={user.userID}
              name={user.name}
              email={user.email}
              id={user.userID}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
