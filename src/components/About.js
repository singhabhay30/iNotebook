import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

export default function About() {
  const a = useContext(NoteContext);
  return <div>This is About</div>;
}
