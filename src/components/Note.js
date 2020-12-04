import React from 'react';

const Note = ({ note, removeNote, upvoteNote, downvoteQuote }) => 
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{note.title}</p>
          <img src={note.image_url} className="image"  alt="a picture says a thousand words, but i really coulnd't tell you what they were."/>
          <footer>- content <cite title="Source Title">{note.content}</cite></footer>
        </blockquote> 
      </div>
      <div className="float-right"> 
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button 
            type="button" 
            onClick={() => upvoteNote(note.id)} 
            className="btn btn-primary"
          >
            Upvote
          </button>
          <button 
            type="button" 
            onClick={() => downvoteQuote(note.id)} 
            className="btn btn-secondary"
          >
            Downvote
          </button>
          <button 
            type="button" 
            onClick={() => removeNote(note.id)} 
            className="btn btn-danger"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div>Votes: {note.votes}</div>
      </div>
    </div>
  </div>;

export default Note;