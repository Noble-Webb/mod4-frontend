import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";


const Notes = (props) => {

    return ( 
        <Switch>
            <Route exact path='/notes/create' render={() => <NoteInput />} />
             <Route render={() => {
                return props.notes.map(note =>{
                    return <NoteList key={note.id} {...note} />  })
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
