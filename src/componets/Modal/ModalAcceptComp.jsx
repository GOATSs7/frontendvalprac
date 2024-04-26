import "./MOdalAcceptComp.css";

const ModalAcceptComp = ({ handleClose, handleOfferAccept }) => {
  //function for out side click and close modal
  const handleOutsideClick = (e) => {
    console.log(e.target.className);

    if (e.target.className === "modal") {
      handleClose();
    }
  };

  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal-container">
        <button onClick={handleClose} className="close-btn">
          X
        </button>
        <div className="content">
          Click the button below to accept our amazing offer!
        </div>

        <button className="accept-btn" onClick={handleOfferAccept}>
          Accept Offer
        </button>
      </div>
    </div>
  );
};

export default ModalAcceptComp;
