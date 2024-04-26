import { useState } from "react";
import "./Modalmain.css";
import ModalAcceptComp from "./ModalAcceptComp";

const Modalmain = () => {
  //states
  const [isShow, setIsShow] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  //function for opening the modal
  const handleOpenMOdal = () => {
    setIsShow(true);
  };
  // function to close the modal
  const handleClose = () => {
    setIsShow(false);
  };

  //function for offer accepted
  const handleOfferAccept = () => {
    setIsAccepted(true);
    setIsShow(false);
  };

  return (
    <div>
      <div className="show-offer">
        {!isAccepted && (
          <button className="show-btn" onClick={handleOpenMOdal}>
            Show Offer
          </button>
        )}
        {isAccepted && <div style={{ fontSize: 50 }}>Offer Accepted</div>}
      </div>

      {isShow && (
        <ModalAcceptComp
          handleClose={handleClose}
          handleOfferAccept={handleOfferAccept}
        />
      )}
    </div>
  );
};

export default Modalmain;
