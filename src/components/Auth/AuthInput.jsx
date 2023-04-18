import "./Auth.css";

const AuthInput = (props) => {
    return (
        <>
            <br/>
            <label className="form-label" htmlFor={props.name}>{props.title}</label>
            <input className="form-control" type={props.type} name={props.name} placeholder={props.placeholder}/>
        </>
    );
}

export default AuthInput;