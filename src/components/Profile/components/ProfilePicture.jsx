
const ProfilePicture = (props) => {
  return (
      <img style={{height: props.height || 145, borderRadius: "50%"}} src={props.image} alt=""/>
  );
}

export default ProfilePicture;