import { useEffect } from "react";
import "animate.css";
import { ModalData } from "../interfaces/Modal";

interface ModalProps {
  modal: ModalData;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ modal, setIsModal }) => {
  useEffect(() => {
    const id = setTimeout(() => {
      //會使 Modal 離開（消失）
      setIsModal(false);
    }, 2000);

    return () => {
      // 離開要做的事
      clearTimeout(id);
    };
  }, [modal]);

  return (
    <div
      className={`${
        modal.status === "success"
          ? "bg-green-400 shadow-green-400 "
          : "bg-red-400 shadow-red-400 "
      }animate__animated animate__fadeIn animate__faster duration-200 shadow-normal rounded fixed bottom-10 right-10  text-black flex justify-center items-center`}
    >
      <p className="py-5 px-10 uppercase text-2x font-bold tracking-wider text-zinc-100">
        {modal.content}
      </p>
    </div>
  );
};

export default Modal;
