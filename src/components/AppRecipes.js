// npm //
import { Link } from 'react-router-dom';

// styles //
import './AppRecipes.scss';

// components //
import AppRecipe from '../components/AppRecipe';

export default function AppReripes({ recipes }) {
  return (
    <div className='app-recipes'>
      {recipes.map((recipe) => (
        <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
          <AppRecipe recipe={recipe}></AppRecipe>
        </Link>
      ))}
    </div>
  );
}
