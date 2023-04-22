import "./Auth.css";


const AuthFormContainer = (props) => {
  return (
      <>
          <div className="c-outline c-form-width position-absolute top-50 start-50 translate-middle d-flex flex-column">
              {props.children}
          </div>

      </>
  );
}

export default AuthFormContainer;