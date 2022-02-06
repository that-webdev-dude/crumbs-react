// react //
import reactDom from 'react-dom';

// styles //
import './AppModal.scss';

export default function AppModal({ children }) {
  return reactDom.createPortal(
    <div className='app-modal'>{children}</div>,
    document.body
  );
}
