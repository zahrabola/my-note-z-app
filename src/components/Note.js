import { FaTimes } from "react-icons/fa";

const Note = ({ id, text, date, handledeleteNote }) => {
  return (
    <div className="note">
      <span> {text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <FaTimes
          onClick={() => handledeleteNote(id)}
          className="exit-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};
export default Note;
