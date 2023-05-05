import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Login from "../components/Login";
const Home = () => {
  const { data: session } = useSession();

  return (
    <div>
      <Login />
      <div className="items-center flex flex-col justify-center">
      </div>
    </div>
  );
};

export default Home;
