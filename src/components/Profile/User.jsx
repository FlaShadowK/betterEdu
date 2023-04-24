import Header from '../UI/Header';
import ProfilePicture from "./components/ProfilePicture";
import Picture from "./Profile.svg";
import ProfileDetails from "./components/ProfileDetails";
import Separator from "../UI/Separator";
import ProfileRecents from "./components/ProfileRecents";
import ProfilePost from "./components/ProfilePost";
import ProfileContainer from "./components/ProfileContainer";
import {useParams} from "react-router-dom";
import {useState} from "react";
import Modal from "../UI/Modal";

const User = () => {
    let params = useParams();
    const username = params.username;

    const [showModal, setShowModal] = useState(0);

    return (
        <>
            <Header />
            <Modal/>
            <ProfileContainer>
                <div className="d-flex justify-content-between align-items-center">
                    <ProfilePicture image={Picture}/>
                    <button data-bs-toggle="modal" data-bs-target="#myModal1" className="btn btn-outline-danger">Report</button>
                </div>
                <ProfileDetails
                    ime={"Marko"}
                    prezime={"Marković"}
                    email={"markomarkovic@ees-bp.edu.me"}
                    razred={"3"}
                    likes={"25"}
                >
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet ante ut felis luctus ullamcorper. Integer in ipsum mattis massa placerat viverra. Donec elementum metus turpis, id pretium neque ultricies vitae. Vivamus pharetra justo non quam pretium bibendum. Donec a rutrum odio. Maecenas tincidunt sodales semper. </div>
                </ProfileDetails>

                <Separator/>

                <ProfileRecents>
                    <ProfilePost
                        date={"19 April 2023"}
                        title={"Pomoć oko matematike"}
                    >
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet ante ut felis luctus ullamcorper. Integer in ipsum mattis massa placerat viverra.</div>
                    </ProfilePost>
                </ProfileRecents>
            </ProfileContainer>
        </>
    );
}

export default User;