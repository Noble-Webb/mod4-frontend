import React from 'react';
import { connect } from 'react-redux';
import  { removeNote, upvoteNote, downvoteNote } from '../actions/notes'

class Note extends React.Component{
 
  handleDelete = (e) => {
    const target = this.props.note.id 

    fetch(`http://localhost:3001/notes/${target}`, {method: 'DELETE'})
    .then(resp => resp.json())
    .then(data => {
      this.props.removeNote(data.id)
    })
  }
  
  handleUpVotes = (e) => { 
    const target = this.props.note.id  
    
    const reqObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify(this.props.note)
    }

    fetch(`http://localhost:3001/notes/${target}`, reqObj)
    .then(resp => resp.json())
    .then(updatedNote => {
      this.props.upvoteNote(updatedNote.id)
    })
  }

  handleDownVotes = (e) => { 
    const target = this.props.note.id  

    const reqObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify(this.props.note)
    }

    fetch(`http://localhost:3001/notes/${target}`, reqObj)
    .then(resp => resp.json())
    .then(updatedNote => {
      this.props.downvoteNote(updatedNote.id)
    })
  }
  
  render(){

    const {title, content, image_url, id, votes} = this.props.note
    return(
        <div className="card" >
              <p>{title}</p>
              <img src={image_url} className="image"  alt="a picture says a thousand words, but i really coulnd't tell you what they were."/>
              <p>{content}</p>
              <form>
                  <textarea placeholder="Got Some Quality Content?"/>
                </form>
          <div className="float-right"> 
            <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
              <button 
                type="button" 
                id={id}
                name='up'
                value={votes}
                onClick={this.handleUpVotes} 
                className="btn btn-primary"
              >
                Upvote
              </button>
              <button 
                id={id}
                name='down'
                value={votes}
                type="button" 
                onClick={this.handleDownVotes} 
                className="btn btn-secondary"
              >
                Downvote
              </button>
              <button 
                id={id}
                type="button" 
                onClick={this.handleDelete} 
                className="btn btn-danger"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div>Votes: {votes}</div>
          </div>
        </div>
    )
  }
}


export default connect(null, { removeNote, upvoteNote, downvoteNote })(Note);