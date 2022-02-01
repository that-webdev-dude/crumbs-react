import { BrowserRouter, Switch, Route } from 'react-router-dom';

// pages //
import Home from './pages/Home';
import Create from './pages/Create';
import Recipe from './pages/Recipe';
import Search from './pages/Search';

// styles //
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/create'>
            <Create></Create>
          </Route>
          <Route path='/recipe'>
            <Recipe></Recipe>
          </Route>
          <Route path='/search'>
            <Search></Search>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
