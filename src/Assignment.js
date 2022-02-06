import React from "react";
import { useParams } from "react-router-dom";
import Assignment1 from "./assignments/Assignment1";
import Assignment2 from "./assignments/Assignment2";
import Assignment3 from "./assignments/Assignment3";

export default function Assignment(props) {
  const { id } = useParams();

  const GetAssignment = () => {
    switch (id) {
      case "1":
        return <Assignment1 />;
      case "2":
        return <Assignment2 />;
      case "3":
        return <Assignment3 />;
      default:
        return "<b>Not found!!</b> This assignment does not exist!";
    }
  };

  return (
    <div>
      <GetAssignment />
    </div>
  );
}
