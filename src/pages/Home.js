// components //
import AppContainer from '../components/AppContainer';

// styles //
import './Home.scss';

// hooks //
import { useFetch } from '../hooks/useFetch';

export default function Home() {
  const { data, error, loading } = useFetch(`http://localhost:3000/recipes`);

  return (
    <div className='home'>
      <AppContainer>
        {data && <div>data ok</div>}
        <h2 className='page-title'>Home</h2>
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
