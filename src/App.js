import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AuthReset from "./components/Auth/AuthReset";
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<Home/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="forgot" element={<AuthReset/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
