"use client";

import css from "./Modal.module.css";
import { useEffect } from "react";

import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  const router = useRouter();

  const close = () => router.back();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        router.back();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [router]);

  return createPortal(
    <div
      className={css.backdrop}
      role="dialog"
      aria-modal="true"
      onClick={close}
    >
      <div className={css.modal} 
      onClick={(e) => e.stopPropagation()}>
        {children}
        <button className={css.backBtn} onClick={close}>Close</button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
