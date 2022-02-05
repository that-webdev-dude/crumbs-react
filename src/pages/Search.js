// npm
import { useLocation } from 'react-router-dom';

// components //
import AppContainer from '../components/AppContainer';

// styles //
import './Search.scss';

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const keyword = queryParams.get('q');

  return (
    <div className='page search'>
      <AppContainer>
        <h2 className='page-title'>{`search ${keyword}`}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          modi rerum quae, voluptatum doloremque enim? Nemo consequuntur,
          provident nobis ipsam eum maiores possimus ea, mollitia laboriosam vel
          molestiae, cumque aliquam.
        </p>
      </AppContainer>
    </div>
  );
}
