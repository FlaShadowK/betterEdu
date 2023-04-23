import "./Auth.css";

const AuthButton = (props) => {
    return (
        <button className="btn btn-primary" type="submit" name="submit">{props.text}</button>
    );
}

export default AuthButton;