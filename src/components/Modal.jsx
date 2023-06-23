import React, {useState} from 'react';
import { AiFillQuestionCircle } from "react-icons/ai";
import MyModal from './Popup';


const Modal = () => {
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);
  return (
    <>
      <div>
        <button className="open-btn" onClick={() => setShowModal(true)}>
          <AiFillQuestionCircle />
        </button>

        {showModal && <MyModal closeModal={closeModal} />}
      </div>
    </>
  );
};

export default Modal