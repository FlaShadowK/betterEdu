import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthReset from "./components/Auth/components/AuthReset";
import Home from './components/Home/Home';
import Profile from "./components/Profile/Profile";
import './assets/bootstrap/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<Home/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="forgot" element={<AuthReset/>}/>
                <Route path="profile" element={<Profile/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
