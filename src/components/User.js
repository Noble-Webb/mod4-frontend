import React from 'react'
import { Card, Button } from 'semantic-ui-react'

class User extends React.Component {

  handleDeleteUser = () => {
    const { id } = this.props
    fetch(`http://localhost:3001/users/${id}`, { method: 'DELETE' })
    .then(resp => resp.json())
    .then(data => {
      this.props.handleDelete(id)
    })
  }


 render(){
   const { id, content, title, image_url } = this.props
   return (
     <Card>
       <Card.Content>
        <Card.Header>{ title }</Card.Header>
        <Card.Meta>{ image_url }</Card.Meta>
        <Card.Description>
         { content }
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={() => this.props.handleEdit({id, content, title, image_url})}>
            Edit
          </Button>
          <Button basic color='red' onClick={this.handleDeleteUser}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
   )
 }
}

export default User
// mnt/c/Users/webb.justin15/Desktop/Mod4-Project