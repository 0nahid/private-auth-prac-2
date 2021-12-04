import React from "react";
import useFirebase from "../hooks/useFirebase";

const Home = () => {
  const { user } = useFirebase();
  return (
    <>
      <h1>Welcome</h1>
      <p>{user?.displayName}</p>
    </>
  );
};

export default Home;
