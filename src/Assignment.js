import React from "react";
import { useParams } from "react-router-dom";

export default function Assignment(props) {
  const { id } = useParams();

  const GetAssignment = () => {
    switch (id) {
      case "1":
        return "This is the content for assignment 1";
      case "2":
        return "This is the content for assignment 2";
      case "3":
        return "This is the content for assignment 3";
      default:
        return "This assignment does not exist!";
    }
  };

  return (
    <div>
      <GetAssignment />
    </div>
  );
}
