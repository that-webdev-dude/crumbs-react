// react //
import { useParams } from 'react-router-dom';

// hooks //
import { useFetch } from '../hooks/useFetch';

// components //
import AppContainer from '../components/AppContainer';

// styles //
import './Recipe.scss';
import AppRecipe from '../components/AppRecipe';

export default function Recipe() {
  const { id } = useParams();
  const {
    data: recipe,
    error,
    loading,
  } = useFetch(`http://localhost:3000/recipes/${id}`);

  return (
    <div className='page recipe'>
      <AppContainer>
        {loading && <div>loading...</div>}
        {recipe && <AppRecipe recipe={recipe}></AppRecipe>}
        {error && <div>{error}</div>}
      </AppContainer>
    </div>
  );
}
