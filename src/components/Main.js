import { useSelector } from 'react-redux';
import NewNote from './NewNote'
import Home from './Home'
import Favorites from './Favorites'
import Search from './Search'
import AllNotes from './AllNotes';

const Main = () => {
  const activeTab = useSelector(state => state.navReducer.activeTab)
  return (
    <main>
      {activeTab === 'home' && <Home />}
      {activeTab === 'allNotes' && <AllNotes />}
      {activeTab === 'newNote' && <NewNote />}
      {activeTab === 'search' && <Search />}
      {activeTab === 'favorites' && <Favorites />}
    </main>
  );
};

export default Main;
