import { useState } from 'react';

function useModalStatus(initialState: boolean) {
  
  const [isOpen, setIsOpen] = useState(initialState);

  const closeModal: ()=> void = () => {
    setIsOpen(false);
  }

  const openModal: ()=> void = () => {
    setIsOpen(true);
  }

  return [isOpen, closeModal, openModal] as const;
}

export default useModalStatus;


