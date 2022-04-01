import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNew } from "./../actions/noteActions";

const NewNote = () => {
  const [state, setState] = useState({ title: "", body: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((state) => ({ ...state, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const note = {
      noteTitle: state.title,
      noteBody: state.body,
      dateCreated: Date().slice(4, 21),
      dateModified: Date().slice(4, 21),
    };

    // dispatch the 'add new note' action
    dispatch(addNew(note));
    // reset the state
    setState({
      title: "",
      body: "",
    });
  };

  return (
    <div className="add-new">
      <h1>Add New&nbsp;&nbsp;<i className='fa fa-plus fa-sm'></i></h1>
      <form onSubmit={handleSubmit} id="addNew-form">
        <label><b>Title:</b></label> <br />
        <input
          required
          type="text"
          id="newTitle"
          name="title"
          onChange={handleChange}
          value={state.title}
          autoFocus={true}
          placeholder='Enter title here'
          title='Enter title here [less than 100 chars]'
          maxLength='100'
          />
        <br />
        <label><b>Body:</b></label> <br />
        <textarea
          required
          spellCheck="false"
          name="body"
          onChange={handleChange}
          value={state.body}
          placeholder='Enter note body here'
          title='Enter note body here [less than 5000 chars]'
          maxLength='5000'
          ></textarea>
        <br />
        <button 
          type="submit" 
          className="btn submit-btn" 
          title='Add note'  
        ><i className='fa fa-plus fa-sm' aria-hidden={true}></i>&nbsp;&nbsp;Add</button>
      </form>
    </div>
  );
};

export default NewNote;
