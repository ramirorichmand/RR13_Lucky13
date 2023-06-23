import { ImCross } from "react-icons/im";
import "../popup.css";

const MyModal = ({ closeModal }) => {
    return (
      <>
        <div className="modal-wrapper" onClick={closeModal}></div>
        <div className="modal-container">
          <button className="close-btn" onClick={closeModal}>
            <ImCross />
          </button>
          <h2> How To Play</h2>
          <hr />
          <p>
            Combine tiles of the same number in an attempt to create a tile with
            the value 2048. <br />
            <br />
            Pressing the arrow keys or swiping across the game board will move all
            tiles in the direction of the key pressed/swipe. After all the tiles
            are done moving a new tile with the value of 2 or 4 will be created in
            a random empty cell. <br />
            <br /> Two tiles with the same number will merge when they collide to
            create a single tile with double the value. <br />
            <br />
            The game is over when there are no valid ways for you to move the
            tiles.
          </p>
          <hr />
        </div>
      </>
    );
  };
  
  export default MyModal;