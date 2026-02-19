
'use client';

import css from './Modal.module.css';
import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

const Modal = ({ children, onClose }: Props) => {

    useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const router = useRouter();
  
  const close = () => router.back();

  return (
    <div  className={css.backdrop}
      role="dialog"
      aria-modal="true">
      <div className={css.modal}>
        {children}
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
