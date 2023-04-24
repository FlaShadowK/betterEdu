import Header from "../Modals/Modal1/Header";
import Body from "../Modals/Modal1/Body";
import Footer from "../Modals/Modal1/Footer";
import React, {useState} from "react";
import ModalCheckboxItem from "./ModalCheckboxItem";

const Modal = (props) => {
    const show = props.showModal;

    const [selected, setSelected] = useState(0);

    const clickReasonHandler = (evt) => {
        evt.preventDefault();
        if (parseInt(evt.target.value) === selected || !evt.target.value) {

        } else {
            setSelected(parseInt(evt.target.value));
        }
    }

    return (
        <div className="modal fade" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
             aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content px-2 py-1">
                    <div className="modal-header d-block border-0">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Šta želite da prijavite?</h1>
                        <br/>
                        <p className={'text-secondary'}>Odaberite jednu od opcija koja najviše odgovara vašoj
                            prijavi</p>
                    </div>
                    <div className={"modal-body pt-0"}>
                        <div className={"list-group"}>
                            <ModalCheckboxItem clickHandler={clickReasonHandler} id={1} checked={selected === 1}
                                               title={'Govor ili simbol mržnje'}/>
                            <ModalCheckboxItem clickHandler={clickReasonHandler} id={2} checked={selected === 2}
                                               title={'Nasilje'}/>
                            <ModalCheckboxItem clickHandler={clickReasonHandler} id={3} checked={selected === 3}
                                               title={'Uništavanje materijalnih stvari'}/>
                            <ModalCheckboxItem clickHandler={clickReasonHandler} id={4} checked={selected === 4}
                                               title={'Maltretiranje ili uznemiravanje'}/>
                            <ModalCheckboxItem clickHandler={clickReasonHandler} id={5} checked={selected === 5}
                                               title={'Krađa'}/>
                        </div>
                    </div>
                    <div className="modal-footer justify-content-between border-0">
                        <button onClick={() => {
                            setSelected(0)
                        }} type="button" style={{height: '50px'}} className="btn btn-outline-secondary col-12 col-md-5"
                                data-bs-dismiss="modal">Otkaži
                        </button>
                        <button type="button" style={{height: '50px'}}
                                className="btn btn-primary col-12 col-md-5">Dalje
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;