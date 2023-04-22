import Header from "../UI/Header";
import ReactDOM from "react-dom";

const Home = () => {
    return (
        <>
            {ReactDOM.createPortal(<Header/>, document.getElementById('header'))}
        </>
    );
}

export default Home;