import React from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const onSignUpClick = () => {
        navigate("/sign-up");
    }

    const onSubmitClick = () => {
        navigate("/home");
    }

    return (
        <form>
            <h3>Sign In</h3>

            <div className="mb-3">
                <label>Email address</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                />
            </div>

            <div className="mb-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                />
            </div>

            <div className="mb-3">
                <div className="custom-control custom-checkbox">
                    <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                    />
                    <label className="custom-control-label" htmlFor="customCheck1">
                        Remember me
                    </label>
                </div>
            </div>

            <div className="d-grid">
                <button type="submit" className="btn btn-primary" onClick={onSubmitClick}>
                    Submit
                </button>
            </div>
            <p className="create text-right">
                <a onClick={onSignUpClick}>Create an account ?</a>
            </p>
        </form>
    )
}

export default Login;