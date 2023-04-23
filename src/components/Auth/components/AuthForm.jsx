import "./Auth.css";

const AuthForm = (props) => {
    return (
        <form className="d-flex flex-column">{props.children}</form>
    );
}

export default AuthForm;