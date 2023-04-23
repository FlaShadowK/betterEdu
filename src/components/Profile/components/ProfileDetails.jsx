
const ProfileDetails = (props) => {
  return (
      <div className="row">
          <div className={"col"}>
              <div className={"pb-4 pt-2"}>
                  <div className={"fw-bold fs-3"}>{props.ime + " " + props.prezime}</div>
                  <div className={"text-secondary"}>{props.email}</div>
              </div>
              <div>Učenik/ca {props.razred}. razreda</div>
              <div><b>{props.likes}</b> zahvalnica</div>
          </div>
          <div className={"col-7"}>
              <div><b>Bio</b></div>
              {props.children}
          </div>
      </div>
  );
}

export default ProfileDetails;