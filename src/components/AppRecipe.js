// styles //
import './AppRecipe.scss';

export default function AppRecipe({ recipe, expandex }) {
  return (
    <div className='card'>
      <div className='card-header'>
        <h3 className='recipe-title'>{recipe.title}</h3>
      </div>
      <div className='card-body'>
        <h4>Ingredients</h4>
        <ul>
          {recipe.ingredients.map((ingredient) => (
            <li>{ingredient}</li>
          ))}
        </ul>
        <h4>Let's go</h4>
        <p>{recipe.method}</p>
      </div>
      <div className='card-footer'>
        <small>Cooking time: {recipe.cookingTime}</small>
        <small>Calories: {recipe.calories}</small>
      </div>
    </div>
  );
}
