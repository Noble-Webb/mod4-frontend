import React, { Component } from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import { removeNote, upvoteNote, downvoteNote } from '../actions/notes';

class NoteList extends Component {

  render() {
    const { notes, removeNote, upvoteNote, downvoteNote } = this.props;
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Notes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
               {notes.map(note => <Note key={note.id} upvoteNote={upvoteNote} downvoteNote={downvoteNote} removeNote={removeNote} note={note} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    notes: state.notes
  })
} 

export default connect(mapStateToProps, { removeNote, upvoteNote, downvoteNote })(NoteList);
