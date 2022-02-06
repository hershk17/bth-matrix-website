import React from "react";
import { useParams } from "react-router-dom";
import Lab1 from "./labs/Lab1";
import Lab2 from "./labs/Lab2";
import Lab3 from "./labs/Lab3";
import Lab4 from "./labs/Lab4";
import Lab5 from "./labs/Lab5";

export default function Lab() {
  const { id } = useParams();

  const GetLab = () => {
    switch (id) {
      case "1":
        return <Lab1 />;
      case "2":
        return <Lab2 />;
      case "3":
        return <Lab3 />;
      case "4":
        return <Lab4 />;
      case "5":
        return <Lab5 />;
      default:
        return "<b>Not found!!</b> <br/>This lab does not exist!";
    }
  };

  return (
    <div>
      <GetLab />
    </div>
  );
}
