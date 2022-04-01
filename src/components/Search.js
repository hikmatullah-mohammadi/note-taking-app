import Notes from './Notes'
import { searchNote } from './../actions/noteActions'
import { useDispatch, useSelector } from 'react-redux'

const Search = () => {
  const dispatch = useDispatch();
  const handleSearch = title => {
    dispatch(searchNote(title))
  }
  
  const items = useSelector(state => state.noteReducer.searchMatches)
  return (
    <div className="search-matches">
      <h1>
        <input
        autoFocus={true}
        title='Enter the title to search'
        type='search' 
        onChange={e => handleSearch(e.target.value)} 
        placeholder="Search by title" 
        maxLength='100'
        />
      </h1>
      <Notes items={items} altMessage="No matches found!!!"/>
    </div>
  )
}

export default Search
