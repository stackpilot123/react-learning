import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user || user.username === "") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-xl font-medium text-gray-800 bg-white p-6 rounded-lg shadow-md">
          Please Login
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-xl font-medium text-gray-800 bg-white p-6 rounded-lg shadow-md">
        Welcome to the page {user.username}
      </div>
    </div>
  );
};

export default Profile;
