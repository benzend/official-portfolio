import { ReactNode } from 'react';

interface ModalProps {
  children: ReactNode,
  show: boolean,
}

export const Modal = ({ children, show = false }: ModalProps) => {

  if (show)
    return (
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    );

  return <></>
}
