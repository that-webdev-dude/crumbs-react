// npm //
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

// components //
import AppContainer from './AppContainer';
import AppSearchbar from './AppSearchbar';

// styles //
import './AppNavbar.scss';

export default function AppNavbar() {
  return (
    <nav className='app-navbar'>
      <AppContainer flex>
        <Link to='/'>
          <h3 className='title'>Recipe.IO</h3>
        </Link>
        <div className='menu'>
          {/* searchbar */}
          <div className='menu-item'>
            <AppSearchbar></AppSearchbar>
          </div>
          <div className='menu-item'>
            <Link to='/create'>
              <small>Create</small>
            </Link>
          </div>
        </div>
      </AppContainer>
    </nav>
  );
}
