import React from 'react';
import { connect } from 'react-redux';
import  { removeNote, upvoteNote, downvoteNote } from '../actions/notes'
import notes from '../reducers/notes';

class Note extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: props.note.title,
      content: props.note.content,
      image_url: props.note.image_url,
      votes: props.note.votes
    }
  }

  handleDelete = (e) => {
    const target = e.target.id 

    fetch(`http://localhost:3001/notes/${target}`, {method: 'DELETE'})
    .then(resp => resp.json())
    .then(data => {
      this.props.removeNote(target)
    })
  }
  
  handleUpVotes = (e) => { 
    const target = e.target.id 
    
    this.setState(prevState => {
        return {...prevState,
        votes: prevState.votes += 1}
    })

    const reqObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({...this.state})
    }

    fetch(`http://localhost:3001/notes/${target}`, reqObj)
    .then(resp => resp.json())
    .then(updatedNote => {
      this.props.upvoteNote(updatedNote)
    })
  }

  handleDownVotes = (e) => { 
    const target = e.target.id 
    
    this.setState(prevState => {
        return {...prevState,
        votes: prevState.votes -= 1}
    })

    const reqObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({...this.state})
    }

    fetch(`http://localhost:3001/notes/${target}`, reqObj)
    .then(resp => resp.json())
    .then(updatedNote => {
      this.props.downvoteNote(updatedNote)
    })
  }
  
  render(){
    const cardStyle = { border: '1px solid white',  padding: '2%', width: '400px', height: '150px'}
    const {title, content, image_url, id, votes} = this.props.note
    return(
        <div className="card-block">
          <div className="card-block">
              <p>{title}</p>
              <img src={image_url} className="image"  alt="a picture says a thousand words, but i really coulnd't tell you what they were."/>
              <p>{content}</p>
          </div>
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