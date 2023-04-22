import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import "./Modal.css";

const Modal = ({ show, handleClose, handleNext }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer((prevAnswer) => {
      if(prevAnswer === answer) {
        return null;
      } else {
        return answer;
      }
    });
  };

  return (
    <div>
      <div
        className={`modal fade ${show ? "show" : ""}`}
        id="myModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden={!show}
        style={{ display: show ? "block" : "none" }}
      >
        <div className="modal-dialog d-flex align-items-center justify-content-center" role="document" style={{ minHeight: "92vh" }}>
          {" "}
          <div className="modal-content">
            <Header />
            <Body selectedAnswer={selectedAnswer} handleAnswerClick={handleAnswerClick}/>
            <Footer handleClose={handleClose} handleNext={handleNext}/>
          </div>
        </div>
      </div>
      {show && (
        <div
          className="modal-backdrop fade show"
          onClick={handleClose}
          style={{ display: show ? "block" : "none" }}
        />
      )}
    </div>
  );
};

export default Modal;
