import {BrowserRouter, Routes, Route} from "react-router-dom";
import './assets/bootstrap/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Home from './components/Home/Home';

import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import AuthReset from "./components/Auth/components/AuthReset";

import Profile from "./components/Profile/Profile";
import EditProfile from "./components/Profile/EditProfile";
import User from "./components/Profile/User";

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
                </Route>
                <Route path="/profile/">
                    <Route index element={<Profile/>}/>
                    <Route path="edit" element={<EditProfile/>}/>
                </Route>
                <Route path="/user/">
                    <Route path=":username" element={<User/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
