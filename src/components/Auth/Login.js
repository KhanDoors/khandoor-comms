import React from "react";
import useFormValidation from "./useFormValidation";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: ""
};

function Login(props) {
  const { handleSubmit, handleChange, values } = useFormValidation(
    INITIAL_STATE
  );
  const [login, setLogin] = React.useState(true);

  return (
    <div>
      <h2 className="mv3">{login ? "Login" : "Create Account"}</h2>
      <form onSubmit={handleSubmit} className="flex flex-column">
        {!login && (
          <input
            onChange={handleChange}
            value={values.name}
            name="name"
            type="text"
            placeholder="Your Name"
            autoComplete="off"
          />
        )}
        <input
          onChange={handleChange}
          value={values.email}
          name="email"
          type="email"
          placeholder="Email Address"
          autoComplete="off"
        />
        <input
          onChange={handleChange}
          value={values.password}
          name="password"
          type="password"
          placeholder="Secure Password Please"
        />
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
