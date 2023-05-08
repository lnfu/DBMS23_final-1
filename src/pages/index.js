import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Login from "../components/Login";
import axios from "axios";
import LiftsData from "../components/LiftsData";
import AddFollows from "../components/AddFollows";
const Home = () => {
  const { data: session } = useSession();

  return (
    <div>
      <Login />
      <div className="items-center flex flex-col justify-center">
      </div>
      <LiftsData type="bench" />
      <LiftsData type="deadlift" />
      <LiftsData type="squat" />
      <AddFollows />
    </div>
  );
};

export default Home;
