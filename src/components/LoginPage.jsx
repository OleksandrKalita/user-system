import { Link } from "react-router-dom";

export const LoginPage = () => {
    return (
        <div className="main">
            <div className="form-container">
                <form action="" className="form">
                    <div className="form-headline">Login</div>
                    <input type="text" />
                    <input type="text" />
                    <Link to={"/registration"} className="form-link">If you don't have accoount, click here</Link>
                    <button>submit</button>
                </form>
            </div>
        </div>
    );
}