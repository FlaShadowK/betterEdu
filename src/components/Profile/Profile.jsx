import Header from '../UI/Header';
import ProfilePicture from "./components/ProfilePicture";
import Picture from "./Profile.svg";
import ProfileDetails from "./components/ProfileDetails";
import Separator from "../UI/Separator";
import ProfileRecents from "./components/ProfileRecents";
import ProfilePost from "./components/ProfilePost";
import ProfileContainer from "./components/ProfileContainer";

const Profile = () => {
    return (
        <>
            <Header />
            <ProfileContainer>
                <div className="d-flex justify-content-between align-items-center">
                    <ProfilePicture image={Picture}/>
                    <button type="button" className="btn btn-outline-secondary">Edit</button>
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

export default Profile;