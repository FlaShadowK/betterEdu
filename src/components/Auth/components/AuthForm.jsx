import "./Auth.css";

const AuthForm = (props) => {

    const formSubmitHandler = (evt) => {
      evt.preventDefault();
      window.location.href = '/profile'
    }

    return (
        <form onClick={formSubmitHandler} className="d-flex flex-column">{props.children}</form>
    );
}

export default AuthForm;