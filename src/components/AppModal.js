// react //
import reactDom from 'react-dom';

// styles //
import './AppModal.scss';

export default function AppModal({ active, children, onClose }) {
  if (!active) return null;
  return reactDom.createPortal(
    <div className='app-modal'>
      <div className='app-modal-overlay' onClick={onClose}>
        <div className='app-modal-content' onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
