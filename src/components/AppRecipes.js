// styles //
import './AppRecipes.scss';

export default function AppReripes({ recipes }) {
  return (
    <div className='app-recipes'>
      {recipes.map((recipe) => (
        <div key={recipe.id} className='card'>
          <div className='card-header'>
            <h2 className='recipe-title'>{recipe.title}</h2>
          </div>
          <div className='card-body'>
            <div className='recipe-info'>
              <small>Cooking time: {recipe.cookingTime}</small>
              <small>Cal: {recipe.calories}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
