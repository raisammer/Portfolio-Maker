import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
const Modal = ({
  children,
  className,
  backdropClassName,
  bgOnClickHandler,
}) => {
  const overlayRef = useRef(null);
  const backdropRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {

    const modals=document.getElementById("modals");
    const backdrop = document.createElement("div");
    modals.appendChild(backdrop)
    
    const overlay = document.createElement("div");
    backdrop.after(overlay)
    
    backdropRef.current = backdrop;
    overlayRef.current = overlay;

    setMounted(true);
  }, []);
  const defaultHandler = () => {};
  return (
      <>
          {mounted &&
              backdropRef.current &&
              ReactDOM.createPortal(
                  <button
                      className={`fixed left-0 top-0 z-[52] h-screen w-screen
                    items-center justify-center bg-black bg-opacity-75 ${className}`}
                      onClick={bgOnClickHandler ?? defaultHandler}
                  ></button>,
                  backdropRef.current
              )}
          {mounted &&
              overlayRef.current &&
              ReactDOM.createPortal(
                  <div
                      className={`fixed z-[55] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-scroll ${className}`}
                  >
                      {children}
                  </div>,
                  overlayRef.current
              )}
      </>
  );
};
export default Modal;
