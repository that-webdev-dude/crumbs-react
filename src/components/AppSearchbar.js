// npm
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

// styles //
import './AppSearchbar.scss';

export default function AppSearchbar() {
  // state
  const [term, setTerm] = useState('');
  const history = useHistory();

  // handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = term.trim();
    history.push(`/search?q=${keyword}`);
    setTerm('');
  };

  return (
    <div className='app-searchbar'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='search'>
          <small>Search</small>
        </label>
        <input
          id='search'
          type='text'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          autoComplete='off'
        ></input>
      </form>
    </div>
  );
}
