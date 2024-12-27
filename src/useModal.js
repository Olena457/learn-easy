import { useContext } from 'react';
import { ModalContext } from './contextModal/ModalContext.jsx';

export const useModal = () => {
  return useContext(ModalContext);
};
