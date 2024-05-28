const UserDetails = ({ user }) => {
  return (
    <div>
      Details
      <h4> {user.username}</h4>
      <p>{user.createdAt}</p>
    </div>
  );
};

export default UserDetails;
