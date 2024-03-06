import  { useState} from "react";
import "./Notes.css";

const Notes = () => {
  const [note, setNote] = useState(() => {
    const storedNote = localStorage.getItem("note");
    return storedNote ? JSON.parse(storedNote) : "";
  });
  const handleChange = (e) => {
    setNote(e.target.value);
    localStorage.setItem("notes", JSON.stringify(note));
  };

  return (
    <div className="note-box">
      <h2>All Notes</h2>
      <textarea
        className="note-textarea"
        onChange={handleChange}
        value={note}
        placeholder="Write your notes here..."
      />
    </div>
  );
};

export default Notes;
