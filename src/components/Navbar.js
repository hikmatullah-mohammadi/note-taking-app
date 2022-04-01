import { useDispatch, useSelector } from "react-redux";
import { openHome, openAllNotes, openNewNote, openFavorites, openSearch } from './../actions/navActions'
import { TOGGLE_MENU } from './../actions/types'

const OpenMenu = (props) => (
  <i
    href='#'
    className='btn-toggle-menu'
    onClick={props.eventHandler}
    title="Open the menu bar">
    <i className={'fa fa-bars fa-sm'} aria-hidden={true}></i>
  </i>
);

const CloseMenu = (props) => (
  <i
    href='#'
    className='btn-toggle-menu'
    onClick={props.eventHandler}
    title="Close the menu bar"
  >
  <i className={'fa fa-times fa-sm'} aria-hidden={true}></i>
  </i>
);

const Navbar = () => {
  const dispatch = useDispatch()
  const activeTab = useSelector(state => state.navReducer.activeTab)
  const isMenuOpen = useSelector(state => state.navReducer.isMenuOpen)
  
  const toggleMenu = () => {
    dispatch({type: TOGGLE_MENU});
  };
  return (
    <div>
      {isMenuOpen ?
        <>
          <CloseMenu eventHandler={toggleMenu} />
          <ul className="navbar">
            <li className="navlink">
              <button
              className={activeTab === 'home' ? 'active' : 'none'} 
              onClick={() => dispatch(openHome())}
              ><i className='fa fa-home fa-sm'  aria-hidden={true}></i>&nbsp;&nbsp;Home</button>
            </li>
            <li className="navlink">
              <button 
              className={activeTab === 'allNotes' ? 'active' : 'none'} 
              onClick={() => dispatch(openAllNotes())}
              ><i className='fa fa-globe fa-sm'  aria-hidden={true}></i>&nbsp;&nbsp;All notes</button>
            </li>
            <li className="navlink">
              <button 
              className={activeTab === 'newNote' ? 'active' : 'none'} 
              onClick={() => dispatch(openNewNote())} 
              ><i className='fa fa-plus fa-sm' aria-hidden={true}></i>&nbsp;&nbsp;Add new</button>
            </li>
            <li className="navlink">
              <button 
              className={activeTab === 'search' ? 'active' : 'none'} 
              onClick={() => dispatch(openSearch())} 
              ><i className='fa fa-search fa-sm' aria-hidden={true}></i>&nbsp;&nbsp;Search</button>
            </li>
            <li className="navlink">
              <button 
              className={activeTab === 'favorites' ? 'active' : 'none'} 
              onClick={() => dispatch(openFavorites())}
               ><i className='fa fa-heart fa-sm' style={{color: "red"}} aria-hidden={true}></i>&nbsp;&nbsp;Favorites</button>
            </li>
            <li className="navlink">
              <button ><i className='fa fa-magic fa-sm' aria-hidden={true}></i>&nbsp;&nbsp;Themes</button>
            </li>
            <li className="navlink">
              <button ><i className='fa fa-question fa-sm' aria-hidden={true}></i>&nbsp;&nbsp;Help</button>
            </li>
            <li className="navlink">
              <button ><i className='fa fa-info fa-sm' aria-hidden={true}></i>&nbsp;&nbsp;About us</button>
            </li>
            <li className="navlink">
              <button ><i className='fa fa-phone fa-sm' aria-hidden={true}></i>&nbsp;&nbsp;Contact us</button>
            </li>
          </ul>
        </> :
        <OpenMenu eventHandler={toggleMenu} />
      }
      
    </div>
  );
};
export default Navbar;
