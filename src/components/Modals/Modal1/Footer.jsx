import React from "react";

const Footer = ({ handleClose, handleNext }) => {
  return (
    <div className="modal-footer d-flex justify-content-between">
      <button
        type="button"
        className="btn btn-secondary zatvori"
        onClick={handleClose}
      >
        Otkazi
      </button>
      <button
        type="button"
        className="btn btn-primary dalje"
        onClick={handleNext}
      >
        Dalje
      </button>
    </div>
  );
};

export default Footer;
