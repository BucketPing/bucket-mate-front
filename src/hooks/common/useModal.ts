import { useEffect, useState } from 'react';

//
export const useModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [portalElement, setPortalElement] = useState<Element | null>(null);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    setPortalElement(document.getElementById('portal'));
  }, [showModal]);

  return { showModal, setShowModal, portalElement, toggleModal };
};
