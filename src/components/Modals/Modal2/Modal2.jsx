import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header2 from "./Header2";
import Footer2 from "./Footer2";
import "./Modal2.css";

import slika from "../../../Assets/Icon.png";
import Body2 from "./Body2";

const Modal2 = ({ show, handleClose, handleBack }) => {
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);

  const handleTextareaFocus = () => {
    setIsTextareaFocused(true);
  };

  const handleTextareaBlur = () => {
    setIsTextareaFocused(false);
  };

  const handleImageClick = () => {
    // Simuliraj klik na skriveno input polje
    document.getElementById("fileInput").click();
  };

  // Funkcija koja se poziva kada korisnik prevuče fajl na sliku
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    console.log("Izabrani fajl:", file);
  };

  // Funkcija koja se poziva kada korisnik prelazi mišem preko slike
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Funkcija koja se poziva kada korisnik promeni vrednost input polja
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Izabrani fajl:", file);
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
            <Header2 />
            <Body2 slika={slika} isTextareaFocused={isTextareaFocused} handleTextareaFocus={handleTextareaFocus} handleTextareaBlur={handleTextareaBlur} handleImageClick={handleImageClick} handleDrop={handleDrop} handleDragOver={handleDragOver} handleFileChange={handleFileChange}/>
            <div className="anonimno">
              <input className="checkbox" type="checkbox" id="prijaviAnonimno" />
              <label htmlFor="prijaviAnonimno">Prijavi anonimno</label>
            </div>
            <Footer2 handleClose={handleClose} handleBack={handleBack}/>
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

export default Modal2;