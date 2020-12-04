export default function notes(state = [], action) {
    let update;
    switch (action.type){
      case 'FETCH_NOTES_WORKS':
        return action.notes 
      case "ADD_NOTE":
        return [...state, action.notes];
      case "REMOVE_NOTE":
        update = state.findIndex(note => note.update === action.update)
        return [...state.slice(0, update), ...state.slice(update +1) ];
      case "UPVOTE_NOTE":
        update = state.map(n => {
          if(n.id === action.noteId){
            return {
              ...n,
              votes: n.votes += 1
            }
          }else{
            return n 
          }
        })
  
        return update

      default:
        return state;
    }
  }