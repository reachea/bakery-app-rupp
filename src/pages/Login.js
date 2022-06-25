import React from "react";
import axios_instance from "../libs/axiosInstance";
function Login() {
  
  const onHandleLogin = async (e) => {
    e.preventDefault();
    const x = e.target;

    const input = {
      email: x.email.value,
      password: x.password.value,
    };

    try {
      const res = await axios_instance.post('/audienceLogin', {
          ...input
      })

      localStorage.setItem('token', res.data.token)

      window.location.replace('/')
    } catch(err) {
      console.error(err)
    }
  };

  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid navbar-login">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul>
                <li>
                  <a href="/" id="list">
                    HOME
                  </a>
                </li>
                <li>
                  <a href="About" id="list">
                    ABOUT
                  </a>
                </li>
                <li>
                  <a href="Category" id="list">
                    CAKE
                  </a>
                </li>
                <li>
                  <a href="cake" id="list">
                    SHOP
                  </a>
                </li>
                <li>
                  <a href="Login" id="list">
                    LOGIN
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="form">
        <div className="img-block">
          <img src="picture/ty.jpg" />
        </div>
        <div className="form-block">
          <form className="form-controll">
            <div class="mb-3">
              <label>Email address</label>
              <input
                type="email"
                class="form-control"
                placeholder="User email"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="User password"
              />
            </div>

            <buthrefn type="submit" class="btn btn-primary btn-submit">
              Submit
            </buthrefn>
            <div className="social-log">
              <p>Login with:</p>
              <buthrefn>
                <i class="fa-brands fa-facebook-f"></i>
              </buthrefn>
              <buthrefn>
                <i class="fa-brands fa-google"></i>
              </buthrefn>
              <buthrefn>
                <i class="fa-brands fa-twitter"></i>
              </buthrefn>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
