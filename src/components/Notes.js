import React, { Component } from 'react';
import { connect } from "react-redux";
import NoteList from "./NoteList";


class Notes extends Component {
    

    render(){
    return ( 
       <div>
           <NoteList />
       </div>
    );
    }
}
    const mapStateToProps = (state) =>{
        return{
            notes: state.notes
        }
    }
 
export default connect(mapStateToProps)(Notes);
