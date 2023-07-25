import React from "react";

export default function Sidebar(props) {
  const noteElements = props.notes.map((note, index) => (
    <div key={note.id}>
      <div
        className={`title ${
          note.id === props.currentNote.id ? "selected-note" : ""
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
        <button
          className="delete-btn"
          onClick={() => props.deleteNote(note.id)}
        >
          <i className="gg-trash trash-icon"></i>
        </button>
      </div>
    </div>
  ));

  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3>Notes</h3>
        <button className="new-note" onClick={props.newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}

/*   {   
        
  *******        MY WAY SORTING ITEMS BY UPDATED TIME   ******* 



          const allNotes = props.notes;
    
          const sortedNotes = () => {
          let p = true;
          let k = allNotes.length - 2;
    
          while (p === true) {
          p = false;
          let r = k;
          for (let j = 0; j <= r; j++) {
            if (allNotes[j].updatedAt < allNotes[j + 1].updatedAt) {
              console.log("Inside: ", allNotes);
              const xNumb = allNotes[j];
              allNotes[j] = allNotes[j + 1];
              allNotes[j + 1] = xNumb;
              p = true;
              k = j;
            }
          }
          }
          return allNotes;
          };
          sortedNotes();
    }
    */
