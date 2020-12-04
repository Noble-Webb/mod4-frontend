import React from 'react'
// import './App.css'
import { connect } from 'react-redux';
import { addNote } from '../actions/notes';
import { Form, Button } from 'semantic-ui-react'

class NoteInput extends React.Component {
  state = {
    title: '',
    content: '',
    image_url: '',
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
      title: this.state.title,
      content: this.state.content,
      image_url: this.state.image_url
    }


    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify(newNote)
    }


    fetch('http://localhost:3000/notes', reqObj)
    .then(resp => resp.json())
    .then(note => {
      this.setState({
        title: '',
        content: '',
        image_url: ''
      })

      this.props.addNote(note)
    })
  }

 render(){
   const { title, content, image_url } = this.state

   return (
    <Form className={'new-note-form'} inverted onSubmit={this.handleSubmit}>
    <Form.Group widths='equal'>
      <Form.Input
        fluid
        name='title'
        onChange={this.handleChange}
        value={title}
        id='form-subcomponent-shorthand-input-first-name'
        label='Note Title'
        placeholder='Note Title'
      />
    </Form.Group>
    <Form.Group widths='equal'>
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
    </Form.Group>
    <Button type='submit'>Submit</Button>
  </Form>
   )
 }
}

export default NoteInput
