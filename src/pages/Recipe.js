// components //
import AppContainer from '../components/AppContainer';

// styles //
import './Recipe.scss';

export default function Recipe() {
  return (
    <div className='recipe'>
      <AppContainer>
        <h2 className='page-title'>Recipe</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          modi rerum quae, voluptatum doloremque enim? Nemo consequuntur,
          provident nobis ipsam eum maiores possimus ea, mollitia laboriosam vel
          molestiae, cumque aliquam.
        </p>
      </AppContainer>
    </div>
  );
}
