// styles //
import './AppRecipes.scss';

export default function AppReripes({ recipes }) {
  return recipes.map((recipe) => (
    <div key={recipe.id}>
      <h3>{recipe.title}</h3>
      <div>
        <p>Cooking time: {recipe.cookingTime}</p>
        <p>Cal: {recipe.calories}</p>
      </div>
    </div>
  ));
}
