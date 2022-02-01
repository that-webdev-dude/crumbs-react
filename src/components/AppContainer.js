// styles //
import './AppContainer.scss';

export default function AppContainer({ children, flex = false }) {
  return (
    <div className={`app-container ${flex ? 'flex' : ''}`}>{children}</div>
  );
}
