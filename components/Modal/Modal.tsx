
'use client';

import css from './Modal.module.css';

import { useRouter } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

const ModalParalel = ({ children }: Props) => {
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

export default ModalParalel;
