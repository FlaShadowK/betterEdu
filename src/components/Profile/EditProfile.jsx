import Header from '../UI/Header';
import ProfilePicture from "./components/ProfilePicture";
import Picture from "./Profile.svg";
import ProfileContainer from "./components/ProfileContainer";
import EditProfileForm from "./components/EditProfileForm";

const EditProfile = () => {

    const formSubmitHandler = (evt) => {
        evt.preventDefault();
        //     send request to backend
        window.location.href = '/profile';
    }

    return (
        <>
            <Header/>
            <ProfileContainer>
                <form onSubmit={formSubmitHandler}>
                    <div className="d-flex justify-content-between align-items-center">
                        <ProfilePicture image={Picture}/>
                        <div>
                            <a href={'/profile'} className="btn btn-outline-secondary">Otkaži</a>
                            <span style={{paddingLeft: '12px'}}></span>
                            <button type={"submit"} className="btn btn-primary">Sačuvaj</button>
                        </div>
                    </div>
                    <div style={{paddingBottom: '48px'}}></div>
                    <EditProfileForm
                        ime={"Marko"}
                        prezime={"Marković"}
                        email={"markomarkovic@ees-bp.edu.me"}
                        bio={"Lorem Ipsum"}
                        photo={Picture}
                    />
                </form>
            </ProfileContainer>
        </>
    );
}

export default EditProfile;