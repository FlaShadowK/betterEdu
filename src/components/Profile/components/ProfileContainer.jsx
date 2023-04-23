
const ProfileContainer = (props) => {
  return (
    <>
      <div className={"position-relative"} style={{width: "100%", height: 200, backgroundColor: "#D9D9D9", zIndex:1}}></div>
      <div className="container position-relative" style={{zIndex:2, bottom:36.25}}>
        {props.children}
      </div>
    </>
  );
}

export default ProfileContainer;