import React from "react";

const Body2 =({slika, isTextareaFocused, handleTextareaFocus, handleTextareaBlur, handleImageClick, handleDrop, handleDragOver, handleFileChange}) => {
    return(
        <div className="modal-body">
        <div className="subtitle">
          <p>
            Odaberite korisnika za kojeg ste sigurni da je pocinio to djelo
          </p>
        </div>

        <div className="list-group">
          <div className={`textarea`}>
            <span>Opis*</span>
          </div>
          <textarea placeholder="Opisite prijavu" className={`message ${isTextareaFocused ? "focused" : ""}`} name="opis" id="opis" cols="30" rows="5" onFocus={handleTextareaFocus} onBlur={handleTextareaBlur}></textarea>
          <div className="foto-video">
            <span>Foto/video dokaz</span>
          </div>
          <div className="slika-container d-flex flex-column justify-content-center" onDrop={handleDrop} onDragOver={handleDragOver}>
            <div className="text-center">
              <img className="slika mt-4" src={slika} alt="" onClick={handleImageClick} onDrop={handleDrop} onDragOver={handleDragOver}/>
            </div>
            <p className="text-center mt-3">
              <span className="blue" onClick={handleImageClick}>Kliknite da bi ste objavili </span> ili prevucite
            </p>
            <input type="file" id="fileInput" className="d-none" onChange={handleFileChange} />
          </div>
        </div>
      </div>
    );
}

export default Body2;