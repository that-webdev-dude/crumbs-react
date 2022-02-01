// components //
import AppContainer from './AppContainer';

// styles //
import './AppNavbar.scss';

export default function AppNavbar() {
  return (
    <div className='app-navbar'>
      <AppContainer flex>
        <h1 className='title'>Recipe.IO</h1>
        <div className='menu'>
          <div className='menu-item'>searchBar</div>
          <div className='menu-item'>createLink</div>
        </div>
      </AppContainer>
    </div>
  );
}
