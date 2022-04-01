import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteNote, updateNote, addToOrRemoveFromFavorites } from "./../actions/noteActions";

// THE COMPONENT
const Notes = (props) => {
  const dispatch = useDispatch();
  
  // create a local state to handle updateNote
  const initialState = {
    id: '',
    noteTitle: '',
    Notebody: '',
    dateCreated: '',
    dateModified: ''
  }
  const [state, setState] = useState(initialState)
  // set either read or edit mode
  const [currentMode, setMode] = useState('read') 
  const handleEdit  = item =>  {
    setMode('edit')
    setState(item)
  }
  const handleUpdate  = () => {
    setMode('read')
    dispatch(updateNote(state)) // state is the note modified here
    setState(initialState)
  }
  const handleReset = () => {
    setMode('read')
    setState(initialState)
  }
  const handleDelete  = id => {
    dispatch(deleteNote(id))
  }
  const handleChange = e => {
    const {name, value} = e.target
    setState(prvState => ({
      ...prvState,
      [name]: value
    }))
  }
  const handleFav = id => {
    dispatch(addToOrRemoveFromFavorites(id))
  }


  // create an array of notes for UI
  const items = props.items.map(item => (
    <div key={item.id} className="note">
      {/* notes titles */}
      <input
        className="note-title"
        name='noteTitle'
        value={(currentMode === 'edit' && state.id === item.id) ? state.noteTitle : item.noteTitle}
        readOnly={(currentMode === 'edit' && state.id === item.id) ? false : true}
        onChange={(currentMode === 'edit' && state.id === item.id) ? handleChange : () => {}}
        maxLength='100'
        title="This is the note's title [less than 100 chars]"
      />
      {/* favorite icon */}
      <div className='favorite-icon'>
        <i
          style={item.isFavorite ? {color: 'red'} : {color: 'white'}} 
          className='fa fa-heart fa-lg'
          onClick={() => handleFav(item.id)}
          title="Add to/remove from your favorites"
        />
      </div>
      {/* notes bodies */}
      <textarea 
        className="note-body"
        name='noteBody'
        value={(currentMode === 'edit' && state.id === item.id) ? state.noteBody : item.noteBody}
        readOnly={(currentMode === 'read' && state.id === item.id) ? true : false}
        onChange={(currentMode === 'edit' && state.id === item.id) ? handleChange : () => {}}
        spellCheck={false}
        maxLength='5000'
        title="This is the note's body [less than 5000 chars]"
      >
      </textarea>
      
      <section className="note-date">
        Created: {item.dateCreated}
        <br />
        Modified: {item.dateModified}
      </section>

      {/* 
        in 'read' mode, EditBtn and DeleteBtn display
        in 'edit' mode, UpdateBtn and ResetBtn display
      */}
      <section className="control-btns">
        {(currentMode==='edit' && item.id === state.id) ? (
          <>
            <button
              className='btn control-btn'
              onClick={handleUpdate}
              title='Update note'
            ><i className='fa fa-wrench fa-sm'></i>Update</button>
            <button
              className='btn control-btn'
              onClick={handleReset}
              title='Reset recent changes'
            ><i className='fa fa-undo fa-sm'></i>Reset</button>
          </>
        ) : (
          <>
            <button
              className='btn control-btn'
              onClick={() => handleEdit(item)}
              title='Edit note'
            ><i className='fa fa-pencil-alt fa-sm'></i>&nbsp;&nbsp;Edit</button>
            <button
              className='btn control-btn'
              id='dl-btn'
              onClick={() => handleDelete(item.id)}
              title='Delete note'
            ><i className='fa fa-trash fa-sm'></i>Delete</button>
          </>
          )
        }
      </section>
    </div>
  ))

  return (
    <>
      {items.length !== 0 ? items : <h2 className='alt-message'>{props.altMessage}</h2>}
    </>
  );
};

export default Notes;
