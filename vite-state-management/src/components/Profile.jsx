import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  // Try to access the value from context
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>Please login</div>;
  } else {
    return <div>Welcome {user.userName}</div>;
  }
};

export default Profile;
