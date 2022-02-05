// components //
import AppContainer from '../components/AppContainer';
import AppRecipes from '../components/AppRecipes';

// styles //
import './Home.scss';

// hooks //
import { useFetch } from '../hooks/useFetch';

export default function Home() {
  const { data, error, loading } = useFetch(`http://localhost:3000/recipes`);

  return (
    <div className='page home'>
      <AppContainer>
        {loading && <p>loading...</p>}
        {data && <AppRecipes recipes={data}></AppRecipes>}
        {error && <p>{error}</p>}
      </AppContainer>
    </div>
  );
}
