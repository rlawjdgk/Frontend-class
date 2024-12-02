"use client";
import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }: { children: ReactNode }) => {
  return createPortal(
    <dialog>{children}</dialog>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
