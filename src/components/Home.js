import { useDispatch, useSelector } from "react-redux";
import { fetchNotes, findFavorites } from './../actions/noteActions'

const Home = () => {
  // find the number of notes and favorite notes
  const dispatch = useDispatch()
  dispatch(fetchNotes())
  dispatch(findFavorites())
  const numNotes = useSelector(state => state.noteReducer.notes.length)
  const numFavNotes = useSelector(state => state.noteReducer.favorites.length)
  
  return (
    <div className='home-page'>
      <img src='./images/home-bg.jpg' className='home-image' alt=''/>
      <div className='desc'>Free Yourself From Worrying About What Not To Forget!!!</div>
      <hr />
      <div className='info'>
        You have <span className='num-notes'>{numNotes}</span> note(s).{' '}
        <span className='num-fav-notes'>
          {numFavNotes} Favorite(s) {' '}
          <i className='fa fa-heart fa-sm' style={{color: "red"}} aria-hidden={true}></i>
        </span>
      </div>
    </div>
  )
}
export default Home
