import axios from "axios";
import React, { useState } from "react";
import { FaLock, FaEnvelope } from 'react-icons/fa'
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import GoogleAuth from "../../components/GoogleAuth/GoogleAuth";
import "../Signin/Signin.css";
// import FacebookAuth from "../../components/FacebookAuth/FacebookAuth";
// import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
// import GoogleOAuth from "../../components/GoogleAuth/GoogleOAuth";

function Signin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", name: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  //User signin
  const onChangeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    setIsLoading(true);
    event.preventDefault();
    axios
      // .post("/user/signin", form)
      .post("https://dull-red-lizard-belt.cyclic.app/user/signin", form)
      .then((response) => {
        const token = response.data.token;
        // Save token to localStorage
        localStorage.setItem("user-token", JSON.stringify(token));
        localStorage.setItem("user", JSON.stringify(response.data.user));

        window.location.reload(false);
        setTimeout(() => {
          navigate("/home");
          setIsLoading(false);
        }, 1000);
      })
      .catch((err) => {
        setErrors(err.response.data);
        setIsLoading(false);
      });
  };
  const informParent = (response) => {
    setIsLoading(true);
    const token = response.data.token;
    // Save token to localStorage
    localStorage.setItem("user-token", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(response.data.user));
    window.location.reload(false);
    setTimeout(() => {
      navigate("/home");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="container" onSubmit={onSubmitHandler}>
      
      <div className="col-lg-4 col-md-6 col-sm-8 mx-auto">
        <div
          className="p-6 shadow-lg mt-20 mb-5 rounded-xl border-2"

        >
          <form className="form-group ">
            <CustomInput
              label="Email"
              placeholder="name@exemple.com"
              type="text"
              name="email"
              icon={<FaEnvelope />}
              onChange={onChangeHandler}
              errors={errors.email}
            />
            <CustomInput
              label="Password"
              placeholder="password"
              type="password"
              name="password"
              icon={<FaLock />}
              onChange={onChangeHandler}
              errors={errors.password}
              password
            />
                      <button
            type="submit"
            className=" bg-[#F90105] hover:bg-gray-600 text-white w-full relative inline-flex items-center justify-center px-2 md:px-4 py-2 overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-xl group hover:ring-4 hover:ring-purple-500"
          >Sign in
          </button>
       
            <div className="flex flex-col items-center px-3 mb-4">
              <div className="line"></div>
              <p><span className="or text-center text-lg">OR</span></p>
              {/* <div className="line"></div> */}
            </div>

            <div className="flex flex-col mb-3 gap-2 items-center text-sm social-media">
              <GoogleAuth informParent={informParent} />
              {/* <GoogleOAuth/> */}
              {/* <FacebookAuth informParent={informParent} /> */}
            </div>
            <div className="text-sm text-center">
              If you dont have an account yet,{" "}
              <Link to="/signup"><span className="font-bold underline">Create One</span></Link> here!
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className="App">{isLoading ? <LoadingSpinner /> : renderSignin}</div>
  // );
}

export default Signin;