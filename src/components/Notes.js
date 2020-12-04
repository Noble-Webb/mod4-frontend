import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";

const Notes = (props) => {

    return ( 
        <Switch>
        <Route component={NoteInput} path='/notes/new' />
        <Route render={() => {
            return <NoteList notes={props.notes} />
        }} path='/notes' />
        </Switch> 
    );
}
    const mapStateToProps = (state) =>{
        return{
            notes: state.notes
        }
    }
 
export default connect(mapStateToProps)(Notes);