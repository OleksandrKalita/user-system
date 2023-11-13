import { Routes, Route, Navigate, Link } from "react-router-dom"
import { MainComponents } from "./components/MainComponents";
import { useSelector } from "react-redux";
import { LoginPage } from "./components/LoginPage";
import { RegistrationPage } from "./components/RegistrationPage";

function App() {
  const isAuth = useSelector(state => state.user.isAuth);

  return (
    <div className="wrapper">
      <header className="header">
        <div className="header_container">
          <div className="logo">U-System</div>
          <nav className="menu">
            { isAuth && 
            <ul>
              <li></li>
            </ul> }
            { !isAuth && 
            <ul>
              <li><Link to="/" className="menu-link">Main Page</Link></li>
              <li><Link to="/login" className="menu-link">Login</Link></li>
            </ul> }
          </nav>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<MainComponents/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/registration" element={<RegistrationPage/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </div>
  );
}

export default App;
