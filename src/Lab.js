import React from "react";
import { useParams } from "react-router-dom";

export default function Lab() {
  const { id } = useParams();

  const GetLab = () => {
    switch (id) {
      case "1":
        return "You are here!";
      case "2":
        return "This is the content for lab 2";
      case "3":
        return "This is the content for lab 3";
      case "4":
        return "This is the content for lab 4";
      case "5":
        return "This is the content for lab 5";
      default:
        return "This lab does not exist!";
    }
  };

  return (
    <div>
      <GetLab />
    </div>
  );
}
