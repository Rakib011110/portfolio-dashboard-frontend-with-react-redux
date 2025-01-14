import { Player } from "@lottiefiles/react-lottie-player";
import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-scroll";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../../Provider/AuthProvider";

const Login = () => {
  const { signin, githulogin, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [error, setErr] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(password);

    signin(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate(from, { replace: true });
        if (user) {
          toast("Acount login Success");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setErr(errorMessage);
      });
  };

  const handleGooglesignIn = () => {
    googleSignIn()
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate(from, { replace: true });

        if (user) {
          toast("Acount Create Success");
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  const handlegithublogin = () => {
    githulogin()
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate(from, { replace: true });

        if (user) {
          toast("Acount Create Success");
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  return (
    <div>
      <div className="hero h-full bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* <div className="text-center lg:text-left">
            <Player
              className=" rounded-lg  sm:w-[500px] sm:h-[500px]"
              autoplay
              loop
              src=""
              // style={{ height: "500px", width: "700px" }}
            ></Player>
          </div> */}
          <div className="card p-3 h-full flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold text-indigo-600">Login now!</h1>

            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="rakib@gmail.com"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="123456"
                  required
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary bg-indigo-600"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>

            <div className="flex  flex-row w-96 mr-6 items-center justify-center lg:justify-start">
              <p className="mb-0 mr-28 text-lg"></p>

              <button
                onClick={handlegithublogin}
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="mx-1 h-9 w-9 bg-indigo-600 rounded-full\register  uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                <FaGithub className="mx-auto h-3.5 w-3.5" />
              </button>

              <button
                onClick={handleGooglesignIn}
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="mx-1 h-9 w-9 bg-indigo-600 rounded-full  uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                <FaGoogle className="mx-auto h-3.5 w-3.5" />
              </button>
            </div>
            <p className="text-danger">{error} </p>

            <p className="mt-4">
              Don't Have Account
              <Link className="text-indigo-600" to="/register">
                {" "}
                Register{" "}
              </Link>{" "}
            </p>
            <ToastContainer />
          </div>

          <div className="text-center lg:text-left">
            <Player
              className=" rounded-lg  sm:w-[500px] sm:h-[500px]"
              autoplay
              loop
              src="https://assets6.lottiefiles.com/packages/lf20_nc1bp7st.json"
              // style={{ height: "500px", width: "700px" }}
            ></Player>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
