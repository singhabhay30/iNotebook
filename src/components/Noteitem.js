import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

export default function Noteitem(props) {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <div className="col-md-4">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{props.note.title}</h5>
            <i
              className="fa-solid fa-user-pen mx-2"
              onClick={() => updateNote(note)}
            ></i>
            <i
              className="fa-solid fa-trash"
              onClick={() => {
                deleteNote(note._id);
              }}
            ></i>
          </div>
          <p className="card-text">{props.note.description}</p>
        </div>
      </div>
    </div>
  );
}
