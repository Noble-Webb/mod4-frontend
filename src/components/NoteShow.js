import React from 'react';

const NoteShow = props => {
  return (
    <div className="App">
      <h4>{props.note.title}</h4>
      <img src={props.painting.image} />
      <h4>{props.painting.id}</h4>
    </div>
  );
};

export default NoteShow;
