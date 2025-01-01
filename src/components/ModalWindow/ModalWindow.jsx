import Modal from 'react-modal';
import style from './ModalWindow.module.css';
import Icon from '../Icon/Icon.jsx';
import { useEffect } from 'react';

const ModalWindow = ({ modalIsOpen, onCloseModal, children }) => {
  useEffect(() => {
    document.body.classList.add(style.modalOpen);

    return () => {
      document.body.classList.remove(style.modalOpen);
    };
  }, []);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onCloseModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={style.modalWindow}
      style={{
        overlay: {
          backgroundColor: 'rgba(17, 18, 19, 0.4)',
        },
      }}
    >
      <div className={style.modalContainer}>
        <button type="button" onClick={onCloseModal} className={style.btnClose}>
          <Icon id="close" width="32" height="32" />
        </button>
        {children}
      </div>
    </Modal>
  );
};

export default ModalWindow;
// import Modal from 'react-modal';
// import style from './ModalWindow.module.css';
// import Icon from '../Icon/Icon.jsx';
// import { useEffect, useState } from 'react';

// const ModalWindow = ({ modalIsOpen, onCloseModal, children }) => {
//   const [isOpen, setIsOpen] = useState(modalIsOpen);

//   useEffect(() => {
//     document.body.classList.add(style.modalOpen);

//     return () => {
//       document.body.classList.remove(style.modalOpen);
//     };
//   }, []);

//   useEffect(() => {
//     if (modalIsOpen && !isOpen) {
//       setIsOpen(true);
//     } else if (!modalIsOpen && isOpen) {
//       setIsOpen(false);
//     }
//   }, [modalIsOpen, isOpen]);

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={() => {
//         setIsOpen(false);
//         onCloseModal();
//       }}
//       shouldCloseOnOverlayClick={true}
//       shouldCloseOnEsc={true}
//       className={style.modalWindow}
//       style={{
//         overlay: {
//           backgroundColor: 'rgba(17, 18, 19, 0.4)',
//         },
//       }}
//     >
//       <div className={style.modalContainer}>
//         <button type="button" onClick={onCloseModal} className={style.btnClose}>
//           <Icon id="close" width="32" height="32" />
//         </button>
//         {children}
//       </div>
//     </Modal>
//   );
// };

// export default ModalWindow;
