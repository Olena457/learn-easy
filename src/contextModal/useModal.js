import { useContext } from 'react';
import { ModalContext } from './ModalContext.jsx';

const useModal = () => {
  return useContext(ModalContext);
};
export default useModal;
