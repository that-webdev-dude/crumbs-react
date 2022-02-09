// react //
import { useHistory } from 'react-router-dom';

// styles //
import './AppRecipe.scss';

// components //
import AppModal from './AppModal';
import { useState } from 'react';

export default function AppRecipe({ recipe, expanded }) {
  const history = useHistory();
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const redirect = () => {
    history.push('/');
  };

  const handleEdit = () => {
    console.log('edit!');
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(` http://localhost:3000/recipes/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      if (response) {
        setError(false);
        closeModal();
        redirect();
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className='app-recipe'>
      {/* recipe delete */}
      <AppModal active={showModal} onClose={closeModal}>
        <h5>Are you sure you want to delete this recipe?</h5>
        <button onClick={() => handleDelete(recipe.id)}>Yes delete</button>
        <button onClick={closeModal}>Cancel</button>
      </AppModal>

      {/* recipe edit */}
      {/* <AppModal>edit</AppModal> */}

      {/* recipe card */}
      <div className='card'>
        <div className='card-header'>
          <div className='card-header-title'>
            <h3>{recipe.title}</h3>
            {expanded && (
              <div className='card-actions'>
                <small className='card-action-item' onClick={handleEdit}>
                  edit
                </small>
                <small className='card-action-item' onClick={openModal}>
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
    </div>
  );
}
