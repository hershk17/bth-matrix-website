import React from "react";
import { useParams } from "react-router-dom";

export default function Lab() {
  const { id } = useParams();
  return <div>this is lab {id}</div>;
}
