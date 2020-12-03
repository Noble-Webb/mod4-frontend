import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";

class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            notes: []
        };
    }

    componentDidMount(){
        fetch('http://localhost:3000/notes')
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                notes: data
            })
        })
    }

    render() { 
        return ( 
            <Switch>
            <Route component={NoteInput} path='/notes/new' />
            <Route render={() => {
              return <NoteList notes={this.state.notes} />
            }} path='/notes' />
          </Switch> 
         );
    }
}
 
export default Notes;