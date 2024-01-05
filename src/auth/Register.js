import { React, useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Username must be one letter followed by one number, letter, dash or underscore.
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
// Password must be 8-24 characters and must include one lowercase, one uppercase,
// one number, and one special character.
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}/;

function Register() {
    // These refs are useful to put the focus on various things.
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState();
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

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
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive">{errMsg}</p>
            <h1>Register</h1>
            <form>
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
                    <FontAwesomeIcon icon={faInfoCircle} />
                    4 to 24 characters.<br />
                    Must begin with a letter.<br />
                    Letters, numbers, underscores and hyphens are allowed.<br />
                </p>

                <label htmlFor="password">
                    Password:
                    <span className={validPwd ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validPwd || !pwd ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
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
                    <FontAwesomeIcon icon={faInfoCircle} />
                    8 to 24 characters.<br />
                    Must include:<br />
                    -At least one uppercase and lowercase letter<br />
                    -At least one number<br />
                    -At least one special character<br />
                    Allowed special characters:
                    <span aria-label="exclamation mark">!</span>
                    <span aria-label="at symbol">@</span>
                    <span aria-label="hashtag">#</span>
                    <span aria-label="dollar sign">$</span>
                    <span aria-label="percent">%</span>
                </p>

                <label htmlFor="confirm_pwd">
                    Confirm password:
                    <span className={validMatch && matchPwd ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
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
                <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Both passwords must match.
                </p>

                <button disabled={!validName || !validPwd || !validMatch ? true : false}>
                    Sign Up
                </button>
            </form>

            <p>
                Already registered?<br />
                <span className="line">
                    <a href="#">Sign In</a>
                </span>
            </p>
        </section>
    )
}

export default Register

//TODO Make sure the form displays in the browser and looks good.