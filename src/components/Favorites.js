import Notes from './Notes'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { findFavorites } from '../actions/noteActions';

const Favorites = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findFavorites())
  }, [dispatch])
  const items = useSelector(state => state.noteReducer.favorites)
  return (
    <div className="favorites">
      <h1>Favorites&nbsp;&nbsp;<i className='fa fa-heart fa-sm' style={{color: 'red'}} aria-hidden={true}></i></h1>
      <Notes items={items} altMessage="No notes added to your Favorites"/>
    </div>
  )
}

export default Favorites
