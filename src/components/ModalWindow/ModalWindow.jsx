import ReactModal from 'react-modal';
import useModal from '../../useModal.js';
import style from './ModalWindow.module.css';
import Icon from '../Icon/Icon.jsx';

const ModalWindow = ({
  name,
  children,
  customStyles = {},
  customClasses = {},
}) => {
  const { modals, closeModal } = useModal();

  return (
    <ReactModal
      isOpen={!!modals[name]}
      overlayClassName={`${style.overlay} ${customClasses.overlay || ''}`}
      className={`${style.modalWindow} ${customClasses.modal || ''}`}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => closeModal(name)}
      ariaHideApp={false}
      onAfterOpen={() => (document.body.style.overflow = 'hidden')}
      onAfterClose={() => (document.body.style.overflow = 'unset')}
      // style={{
      //   overlay: {
      //     backgroundColor: 'rgba(17, 18, 19, 0.4)',
      //   },
      // }}
      style={{ ...customStyles }}
    >
      <div className={`${style.modalContainer} ${customClasses.content || ''}`}>
        <button
          className={style.btnClose}
          type="button"
          onClick={() => closeModal(name)}
          aria-label="close modal button"
        >
          <Icon id="close" width="32" height="32" />
        </button>
        {children}
      </div>
    </ReactModal>
  );
};

export default ModalWindow;
