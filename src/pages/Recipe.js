// react //
import { useParams } from 'react-router-dom';

// hooks //
import { useFetch } from '../hooks/useFetch';

// components //
import AppContainer from '../components/AppContainer';

// styles //
import './Recipe.scss';

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
        {recipe && (
          <div className='card'>
            <div className='card-header'>
              <h2 className='recipe-title'>{recipe.title}</h2>
            </div>
            <div className='card-body'>
              <div>ingredients</div>
              <div>method</div>
            </div>
            <div className='card-footer'>
              <small>Cooking time: {recipe.cookingTime}</small>
              <small>Cal: {recipe.calories}</small>
            </div>
          </div>
        )}
        {error && <div>{error}</div>}
      </AppContainer>
    </div>
  );
}
