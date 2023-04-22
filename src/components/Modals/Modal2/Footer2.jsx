import React from "react";

const Footer2 = ({ handleBack, handleClose }) => {
  return (
    <div className="modal-footer d-flex justify-content-between">
      <button
        type="button"
        className="btn btn-secondary nazad"
        onClick={handleBack}
      >
        Nazad
      </button>
      <button
        type="button"
        className="btn btn-primary potvrdi"
        onClick={handleClose}
      >
        Potvrdi
      </button>
    </div>
  );
};

export default Footer2;
