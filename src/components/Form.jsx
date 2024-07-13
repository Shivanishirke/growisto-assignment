import Input from "./Input";

const Form = () => {
  return (
    <div className="right-container">
      <div className="form-logo">
        <img src="../form-logo.png" alt="logo" />
        <h4 className="title logo-title"> UI Unicorn </h4>
      </div>

      <h4 className="title mb-4">Nice to see you again </h4>

      <div className="form">
        <Input label="Login" placeholder="Email or phone number" />

        <Input label="Password" placeholder="Enter Password" />

        <div className="remember">
          <div class="form-check form-switch switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
            />
            <label class="form-check-label" for="flexSwitchCheckChecked">
              Remember me
            </label>
          </div>

          <div className="link"> Forgot password </div>
        </div>

        <button className="btn signin-btn">Sign in</button>

        <hr />

        <button className="btn google-btn">
          <img src="./google.png" alt="google-logo" />
          or sign in with Google{" "}
        </button>
      </div>

      <div class="createNew">
        <p class="me-2">Don't have an account? </p>
        <p class="link">Sign up now </p>
      </div>
    </div>
  );
};

export default Form;
