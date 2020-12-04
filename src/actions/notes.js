export const fetchNotesWorks = (notes) => {
  return {
    type: 'FETCH_NOTES_WORKS',
    notes 
  };
};
export const addNote = note => {
    return {
      type: 'ADD_NOTE',
      note 
    };
};
export const removeNote = noteId => {
    return {
      type: 'REMOVE_NOTE',
      noteId 
    };
};
export const upvoteNote = noteId => {
    return {
      type: 'UPVOTE_NOTE',
      noteId 
    };
};
export const downvoteNote = noteId => {
    return {
      type: 'DOWNVOTE_NOTE',
      noteId 
    };
};