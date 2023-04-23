import "./Auth.css";

const AuthOther = (props) => {
  return (
      <>
          <br/>
          <div className="text-center">{props.message}
              <a className="text-decoration-none fw-bold" href={props.link}>{props.linkText}</a>
          </div>
      </>
  );
}

export default AuthOther;