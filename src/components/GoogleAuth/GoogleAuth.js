import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import { gapi } from "gapi-script";
import "../GoogleAuth/GoogleAuth.css";
import { GrGooglePlus } from "react-icons/gr";

const GoogleAuth = ({ informParent }) => {
  useEffect(() => {
    function initClient() {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: "",
      });
    }
    gapi.load("client:auth2", initClient);
  });

  const responseGoogle = async (response) => {
    try {
      const result = await axios.post(
        "https://dull-red-lizard-belt.cyclic.app/user/google-login",
        // "/user/google-login",
        { idToken: response.tokenId },
        { withCredentials: true }
      );

      informParent(result);
      // console.log(result);
      // console.log("hehe")
    } catch (error) {
      console.log("GOOGLE SIGNIN ERROR", error);
    }
  };

  return (
    <div className="w-full">
      <GoogleLogin
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
        buttonText="Continue with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        render={(renderProps) => (
          <button
            className=" bg-[#F90105] hover:bg-gray-600 text-white inline-flex items-center justify-center w-full px-2 md:px-4 py-2  font-medium transition duration-300 ease-out rounded-full shadow-xl group hover:ring-4 hover:ring-purple-500"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >

{/* 
<button
            type="submit"
            className=" bg-[#F90105] hover:bg-gray-600 w-full relative inline-flex items-center justify-center px-2 md:px-4 py-2 overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-xl group hover:ring-4 hover:ring-purple-500"
          >
            <span className="relative text-white font-bold px-4">Sign in</span>
          </button> */}


            <GrGooglePlus
              style={{
                fontSize: "26px",
                fontWeight: "900",
                marginRight: '8px',
                marginLeft: '8px'
              }}
            /> Sign in with Google
          </button>
        )}
      />
    </div>
  );
};

export default GoogleAuth;
