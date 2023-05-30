import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'
import CustomInput from "../../components/CustomInput";
import "../Signup/Signup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

function Signup() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  //add a User
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
      // .post("/user/signup", form)
      .post("https://dull-red-lizard-belt.cyclic.app/user/signup", form)
      .then((response) => {
        setTimeout(() => {
          setIsLoading(false);
          navigate("/signin");
        }, 1000);
      })
      .catch((err) => {
        setErrors(err.response.data);
        setIsLoading(false);
      });
  };
  return (
    <div className="container">
      {/* <div className="App">{isLoading ? <LoadingSpinner /> : ""}</div> */}
"
      <div className="col-lg-4 col-md-6 mt-20 col-sm-8 mx-auto ">
        <div
          className="p-6 shadow-lg mb-5 rounded-xl border-2 "
        
        >
          <form class="form-group" onSubmit={onSubmitHandler}>
            <CustomInput
              label="Name"
              placeholder="name"
              type="text"
              name="name"
              icon={<FaUser />}
              className="border rounded"
              onChange={onChangeHandler}
              errors={errors.name}
            />
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
            />
            <button className=" bg-[#F90105] text-white hover:bg-gray-600 w-full relative inline-flex items-center justify-center px-2 md:px-4 py-2 overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-xl group hover:ring-4 hover:ring-purple-500" type="submit" disabled={isLoading}>
              Register
            </button>
            <hr />
            <div className="text-sm text-center">
              Already have an account? {FaEnvelope} <Link to="/signin"><span className="font-bold no-underline">Sign in</span></Link> here
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;