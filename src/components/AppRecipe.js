// styles //
import './AppRecipe.scss';

export default function AppRecipe({ recipe, expanded }) {
  const handleEdit = () => {
    console.log('edit!');
  };

  const handleDelete = () => {
    console.log('delete!');
  };

  return (
    <div className='card'>
      <div className='card-header'>
        <div className='card-header-title'>
          <h3>{recipe.title}</h3>
          {expanded && (
            <div className='card-actions'>
              <small className='card-action-item' onClick={handleEdit}>
                edit
              </small>
              <small className='card-action-item' onClick={handleDelete}>
                delete
              </small>
            </div>
          )}
        </div>
      </div>
      {expanded && (
        <div className='card-body'>
          <h4>Ingredients</h4>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <h4>Let's go</h4>
          <p>{recipe.method}</p>
        </div>
      )}
      <div className='card-footer'>
        <small>Cooking time: {recipe.cookingTime}</small>
        <small>Calories: {recipe.calories}</small>
      </div>
    </div>
  );
}
