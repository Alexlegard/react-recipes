import { React, useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Register.css';

// Username must be one letter followed by one number, letter, dash or underscore.
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
// Password must be 8-24 characters and must include one lowercase, one uppercase,
// one number, and one special character.
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}/;

function Register() {
    // These refs are useful to put the focus on various things.
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState(); // Username
    const [validName, setValidName] = useState(false); // Username is valid
    const [userFocus, setUserFocus] = useState(false); // Focus is on username field

    const [pwd, setPwd] = useState(''); // Password
    const [validPwd, setValidPwd] = useState(false); // Password is valid
    const [pwdFocus, setPwdFocus] = useState(false); // Focus is on password field

    const [matchPwd, setMatchPwd] = useState(''); // "Confirm password" field
    const [validMatch, setValidMatch] = useState(false); // "Confirm password" field is valid
    const [matchFocus, setMatchFocus] = useState(false); // Focus is on "Confirm password"

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // useEffect hook to set the focus to the username input
    // when the component is loaded initially.
    useEffect(() => {
        userRef.current.focus();
    }, [])

    // Whenever the username field is changed, validate it.
    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log("Result: " + result);
        console.log("User: " + user);
        setValidName(result);
    }, [user])

    // Whenever the password field is changed, validate it.
    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log("Result: " + result);
        console.log("Password: " + pwd);
        setValidPwd(result);
        // We also have to make sure the password confirmation field
        // actually matches the first password field.
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    // Whenever the user changes anything, clear the error message.
    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    return (
        <section className="registration-card">
            <div className="register-header">
                <h1>Register</h1>
            </div>

            <form className="registration-form">
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive">{errMsg}</p>
                <label htmlFor="username">
                    Username:
                </label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)} required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                />
                <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon className="faInfoCircle" icon={faInfoCircle} />
                    4 to 24 characters.<br />
                    Must begin with a letter.<br />
                    Letters, numbers, underscores and hyphens are allowed.<br />
                </p>

                <label htmlFor="password">
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)} required
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                />
                <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon className="faInfoCircle" icon={faInfoCircle} />
                    8 to 24 characters.<br />
                    Must include:<br />
                    • At least one uppercase and lowercase letter<br />
                    • At least one number<br />
                    • At least one special character<br />
                    • Allowed special characters:
                    <span aria-label="exclamation mark">!</span>
                    <span aria-label="at symbol">@</span>
                    <span aria-label="hashtag">#</span>
                    <span aria-label="dollar sign">$</span>
                    <span aria-label="percent">%</span>
                </p>

                <label htmlFor="confirm_pwd">
                    Confirm password:
                </label>
                <input
                    type="password"
                    id="confirm_pwd"
                    onChange={(e) => setMatchPwd(e.target.value)} required
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                />
                <p id="confirmnote" className={matchPwd && (pwd !== matchPwd) ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon className="faInfoCircle" icon={faInfoCircle} />
                    Both passwords must match.
                </p>

                <button disabled={!validName || !validPwd || !validMatch ? true : false}>
                    Sign Up
                </button>
            </form>

            <div className="registration-footer">
                Already registered?<br /><a href="#">Sign In</a>

            </div>

        </section>
    )
}

export default Register

//TODO Make sure the form displays in the browser and looks good.