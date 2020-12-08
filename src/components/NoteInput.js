import React from 'react'
import { connect } from 'react-redux';
import { addNote } from '../actions/notes';
import { currentUser } from "../actions/auth";
import { Form } from 'semantic-ui-react'

class NoteInput extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      content: '',
      image_url: ''
    }
  }
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      author: this.props.users.username,
      title: this.state.title,
      content: this.state.content,
      image_url: this.state.image_url,
      votes: 0,
      user_id: this.props.users.id 
    }

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify(newNote)
    }

    fetch('http://localhost:3001/notes', reqObj)
    .then(resp => resp.json())
    .then(note => {
      this.setState({
        title: '',
        content: '',
        image_url: '',
         
      })
      this.props.addNote(note)
      this.props.history.push('/notes')
    })
  }

 render(){
   const { title, content, image_url } = this.state
  // console.log(this.props.users.id)
   return (
    <form className={'new-note-form'} inverted onSubmit={this.handleSubmit}>
    <form widths='equal'>
      <Form.Input
        fluid
        name='title'
        onChange={this.handleChange}
        value={title}
        id='form-subcomponent-shorthand-input-first-name'
        label='Note Title'
        placeholder='Note Title'
      />
    </form>
    <form widths='equal'>
      <Form.Input
        fluid
        name='content'
        onChange={this.handleChange}
        value={content}
        id='form-subcomponent-shorthand-input-first-name'
        label='content'
        placeholder='content'
      />
      <Form.Input
        fluid
        name='image_url'
        onChange={this.handleChange}
        value={image_url}
        id='form-subcomponent-shorthand-input-last-name'
        label='image_url'
        placeholder='image_url'
      />
    </form>
    <button type='submit'>Submit</button>
  </form>
   )
 }
}
const mapStateToProps = (state) => {

  return {users: state.users}
}

export default connect(mapStateToProps, {addNote, currentUser})(NoteInput);
