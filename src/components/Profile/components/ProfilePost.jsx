const ProfilePost = (props) => {
  return (
      <div className="row mb-4">
          <div style={{width: 320, height: 200}} className={"bg-body-secondary rounded-3"}></div>
          <div className="col ms-3">
              <div className={"text-primary fw-bold mt-3 mb-3"}>{props.date}.</div>
              <div className={"fw-bold fs-5"}>{props.title}</div>
              {props.children}
          </div>
      </div>
  );
}

export default ProfilePost;