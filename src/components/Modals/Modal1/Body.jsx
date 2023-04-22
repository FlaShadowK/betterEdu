import React from "react";

const Body = ({ selectedAnswer, handleAnswerClick }) => {
  return (
    <div className="modal-body">
      <div className="subtitle">
        <p>Odaberite jednu od opcija koja najvise odgovara vasoj prijavi</p>
      </div>
      <div className="list-group">
        <div className="gsm">
          <button
            type="button"
            className={`list-group-item list-group-item-action d-flex justify-content-between gsm ${
              selectedAnswer === 0 ? "selected" : ""
            }`}
            onClick={() => handleAnswerClick(0)}
          >
            <span className="text">Govor ili simbol mrznje</span>
            <div className="d-flex align-items-center mt-1">
              <input
                type="radio"
                className="radio-btn"
                checked={selectedAnswer === 0}
                readOnly
              />
            </div>
          </button>
        </div>
        <br />
        <div className="nasilje">
          <button
            type="button"
            className={`list-group-item list-group-item-action d-flex justify-content-between ${
              selectedAnswer === 1 ? "selected" : ""
            }`}
            onClick={() => handleAnswerClick(1)}
          >
            <span className="text">Nasilje</span>
            <div className="d-flex align-items-center mt-1">
              <input
                type="radio"
                className="radio-btn"
                checked={selectedAnswer === 1}
                readOnly
              />
            </div>
          </button>
        </div>
        <br />
        <div className="ums">
          <button
            type="button"
            className={`list-group-item list-group-item-action d-flex justify-content-between ${
              selectedAnswer === 2 ? "selected" : ""
            }`}
            onClick={() => handleAnswerClick(2)}
          >
            <span className="text">Unistavanje materijalnih stvari</span>
            <div className="d-flex align-items-center mt-1">
              <input
                type="radio"
                className="radio-btn"
                checked={selectedAnswer === 2}
                readOnly
              />
            </div>
          </button>
        </div>
        <br />
        <div className="miu">
          <button
            type="button"
            className={`list-group-item list-group-item-action d-flex justify-content-between ${
              selectedAnswer === 3 ? "selected" : ""
            }`}
            onClick={() => handleAnswerClick(3)}
          >
            <span className="text">Maltretiranje ili uznemiravanje</span>
            <div className="d-flex align-items-center mt-1">
              <input
                type="radio"
                className="radio-btn"
                checked={selectedAnswer === 3}
                readOnly
              />
            </div>
          </button>
        </div>
        <br />
        <div className="kradja">
          <button
            type="button"
            className={`list-group-item list-group-item-action d-flex justify-content-between ${
              selectedAnswer === 4 ? "selected" : ""
            }`}
            onClick={() => handleAnswerClick(4)}
          >
            <span className="text">Kradja</span>
            <div className="d-flex align-items-center mt-1">
              <input
                type="radio"
                className="radio-btn"
                checked={selectedAnswer === 4}
                readOnly
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
