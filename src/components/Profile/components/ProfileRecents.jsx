const ProfileRecents = (props) => {
  return (
      <>
          <h5 className={"fw-bold mt-4 mb-4"}>Nedavno</h5>
          <div className="col ms-2">
              {props.children}
          </div>
      </>
  );
}

export default ProfileRecents;