import { useEffect } from 'react';
import Notes from './Notes'
import { fetchNotes } from './../actions/noteActions'
import { useDispatch, useSelector } from 'react-redux'

const AllNotes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNotes())
  }, [dispatch])
  const notes = useSelector((state) => state.noteReducer.notes)
  return (
    <div className="all-notes">
      <h1>All Notes&nbsp;<i className='fa fa-globe fa-sm' aria-hidden={true}></i></h1>
      <Notes items={notes} altMessage="No notes added yet!"/>
    </div>
  )
}

export default AllNotes