import React from 'react';
import { useParams } from "react-router-dom";

export default function Assignment(props) {
  const { id } = useParams();
  return <div>this is assignment {id}</div>;
}
