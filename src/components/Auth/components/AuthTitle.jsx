import "./Auth.css";

const AuthTitle = (props) => {
  return (
    <>
      <div className="text-center fw-bold fs-2 mb-2">{props.title}</div>
      <div className="fs-6 text text-center fw-light text-secondary">{props.message}</div>
    </>
  );
}

export default AuthTitle;