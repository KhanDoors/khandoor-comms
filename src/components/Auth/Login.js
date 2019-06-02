import React from "react";

function Login(props) {
  const [login, setLogin] = React.useState(true);

  return (
    <div>
      <h2 className="mv3">{login ? "Login" : "Create Account"}</h2>
      <form className="flex flex-column">
        {!login && (
          <input type="text" placeholder="Your Name" autoComplete="off" />
        )}
        <input type="email" placeholder="Email Address" autoComplete="off" />
        <input type="password" placeholder="Secure Password Please" />
        <div className="flex mt3">
          <button type="submit" className="button pointer mr2">
            Submit
          </button>
          <button
            type="button"
            className="button pointer"
            onClick={() => setLogin(prevLogin => !prevLogin)}
          >
            {login ? "Create an Account" : "Login Page"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
