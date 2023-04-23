import Separator from "../../UI/Separator";
import ProfilePicture from "./ProfilePicture";

import './EditProfileForm.css'
import {useState} from "react";

const EditProfileForm = (props) => {

    const [userInfo, setUserInfo] = useState({
        ime: props.ime,
        prezime: props.prezime,
        email: props.email,
        bio: props.bio,
        photo: props.photo
    });
    const [charLeft, setCharLeft] = useState(400 - props.bio.toString().length);

    // console.log(userInfo);

    const formChangeHandler = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        setUserInfo((prevState) => {
            return {...prevState, [name]: value}
        })
    }

    const textAreaChangeHandler = evt => {
        setCharLeft(400 - evt.target.value.toString().length)
    }

    const openPrompt = evt => {
        if (evt.target.id.toString() !== 'removePhoto') {
            document.getElementById('fileinput').click();
        }
    }

    const inputFileHandler = evt => {
        let filename = evt.target.value.toString().replace('C:\\fakepath\\', '');
        console.log(filename)
        if (filename) {
            document.getElementById('fileinputspan').children[0].hidden = true;
            document.getElementById('fileinputspan').children[1].hidden = false;
            document.getElementById('fileinputspan').children[2].hidden = false;
            document.getElementById('fileinputspan').children[1].innerHTML = filename;
        } else {
            document.getElementById('fileinputspan').children[0].hidden = false;
            document.getElementById('fileinputspan').children[1].hidden = true;
            document.getElementById('fileinputspan').children[2].hidden = true;
        }
    }

    const removePhoto = evt => {
        evt.preventDefault();
        document.getElementById('fileinput').value = null;
        document.getElementById('fileinputspan').children[0].hidden = false;
        document.getElementById('fileinputspan').children[1].hidden = true;
        document.getElementById('fileinputspan').children[2].hidden = true;
        setUserInfo((prevState) => {
            return {...prevState, photo: props.photo}
        })
    }

    return (
        <>
            <div className={'row'}>
                <div className={'mb-3 col-12 col-md-6'}>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" onChange={formChangeHandler} value={userInfo.ime} name={'ime'}
                           className={'form-control'}/>
                </div>
                <div className={'mb-3 col-12 col-md-6'}>
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" onChange={formChangeHandler} value={userInfo.prezime} name={'prezime'}
                           className={'form-control'}/>
                </div>
            </div>

            <Separator/>

            <div className={"row"}>
                <div className={'mb-3 col-12 col-md-8'}>
                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={formChangeHandler} value={userInfo.email} name={'email'}
                           className={'form-control'}/>
                </div>
            </div>

            <Separator/>

            <div className={"row"}>
                <div className={'mb-3 col-2'}>
                    <ProfilePicture height={64} image={props.photo}/>
                </div>
                <div className={'mb-3 col'}>
                    <input id={'fileinput'} onChange={(evt) => {
                        inputFileHandler(evt);
                        formChangeHandler(evt)
                    }} type="file" name={'photo'} hidden={true}
                           className={'form-control h-100'}/>
                    <span id={'fileinputspan'}
                          className={'form-control h-100 d-flex align-items-center justify-content-between'}
                          onClick={openPrompt}>
                        <p className={'fw-bold text-primary m-auto'}>Click to upload</p>
                        <p className={'fw-bold m-0'} hidden={true}></p>
                        <p id={'removePhoto'} className={'fw-bold m-0'} onClick={removePhoto} hidden={true}>&#10006;</p>
                    </span>
                </div>
            </div>

            <Separator/>

            <div className={"row"}>
                <div className={'mb-3 col'}>
                    <label htmlFor="email">Biografija</label>
                    <textarea name="bio" onChange={(evt) => {
                        formChangeHandler(evt);
                        textAreaChangeHandler(evt)
                    }} value={userInfo.bio} id="bio" rows="10"
                              className={'form-control'}>

                    </textarea>
                    <p className={'text-secondary py-2'}>{charLeft} characters left</p>
                </div>
            </div>

        </>
    )
}

export default EditProfileForm;