// npm //
import { Link } from 'react-router-dom';

// styles //
import './AppRecipes.scss';

export default function AppReripes({ recipes }) {
  return (
    <div className='app-recipes'>
      {recipes.map((recipe) => (
        <Link key={recipe.id} className='card' to={`/recipes/${recipe.id}`}>
          <h2 className='card-header'>{recipe.title}</h2>
          <div className='card-body'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt iste
            repellat omnis. Voluptatem dolores perspiciatis repudiandae
            doloribus amet dolorum voluptatibus quos placeat, quisquam at quo!
            Quas deserunt libero aut vel!
          </div>
          <div className='card-footer'>
            <small>Cooking time: {recipe.cookingTime}</small>
            <small>Cal: {recipe.calories}</small>
          </div>
        </Link>
      ))}
    </div>
  );
}
