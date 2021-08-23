import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'

import LoginIcon from "../../assets/loginIcon.svg"

export const LoginScreen = () => {

    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        email: "",
        password: ""
    })
    const { email, password } = formValues

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(startLoginEmailPassword(email, password))
    }
    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin())
    }

    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <div>
                    <img src={LoginIcon} alt="Login Image" width="300px" />
                </div>
                <div className="auth_boxLogin">
                    <div className="auth_boxTitle">
                        <h1 className="auth__titleMain">Journal Notes Page</h1>
                        <p>Create an account or log in to start creating your notes! </p>
                    </div>

                    <h4 className="auth__title">Login</h4>
                    <form
                        onSubmit={handleLogin}
                        className="animate__animated animate__fadeIn animate__faster"
                    >
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            className="auth__input"
                            autoComplete="off"
                            value={email}
                            onChange={handleInputChange}
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            className="auth__input"
                            value={password}
                            onChange={handleInputChange}
                        />

                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            disabled={loading}
                        >
                            Login
                        </button>

                        <div className="auth__social-networks">
                            <p>Login with social networks</p>

                            <div
                                className="google-btn"
                                onClick={handleGoogleLogin}
                            >
                                <div className="google-icon-wrapper">
                                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                </div>
                                <p className="btn-text">
                                    <b>Sign in with google</b>
                                </p>
                            </div>
                        </div>

                        <Link
                            to="/auth/register"
                            className="link"
                        >
                            Create new account
                        </Link>

                    </form>
                </div>
            </div>
        </div >
    )
}
