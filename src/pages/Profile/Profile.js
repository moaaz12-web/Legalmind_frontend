import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../Profile/Profile.css";
import axios from "axios";
import {subscriptionAction} from "../../redux/actions/subscription";
import { useDispatch } from "react-redux";
function Profile() {



  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user._id;
  const dispatch = useDispatch();
  const [subType, setSubType] = useState("None");
  const [words, setWords] = useState(0);

  axios.post('https://dull-red-lizard-belt.cyclic.app/users', { userid:userId })
  .then(response => {
    const userData = response.data;
    setSubType(userData.subscription);
    setWords(userData.wordsLeft);
    // Access the user data and perform further actions
    console.log(userData);
    // Handle the user data as needed
  })
  .catch(error => {
    console.error('Error retrieving user data:', error);
    // Handle the error or display an error message
  });


  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const subscriptionType = urlParams.get('type');
  
    if (subscriptionType) {
      axios
        .post('https://dull-red-lizard-belt.cyclic.app/subscription/subscribed', { userid: userId, subscription_type: subscriptionType })
        .then((response) => {
          console.log('POST request successful:', response.data);
          if(response.data.type){
            dispatch(subscriptionAction({type: response.data.type, wordsLeft: response.data.wordsLeft}))

            // localStorage.setItem("subType", response.data.type);
          }
          // setSubType(response.data.type)
          // Handle any further actions or display success message
        })
        .catch((error) => {
          console.error('Error sending POST request:', error);
          // Handle the error or display an error message
        });
      console.log(subscriptionType);
    }
  }, [window.location.search]);







  return (
    <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
      <div class="card p-4">
        <div class=" image d-flex flex-column justify-content-center align-items-center">
          <span class="name mt-3">{user.name}</span>{" "}
          <div class="d-flex flex-row justify-content-center align-items-center gap-2"></div>
          <div class="d-flex flex-row justify-content-center align-items-center mt-3">
            <span class="number">
              E-mail 📧 : <span class="follow">{user.email}</span>
            </span>{" "}
          </div>
          <div class="d-flex flex-row justify-content-center align-items-center mt-3">
            <span class="number">
              Subscription status : <span class="follow">{subType}</span>
            </span>{" "}
          </div>
          <div class="d-flex flex-row justify-content-center align-items-center mt-3">
            <span class="number">
              Words remaining : <span class="follow">{words}</span>
            </span>{" "}
          </div>
          <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
            <span>
              <i class="fab fa-twitter"></i>
            </span>{" "}
            <span>
              <i class="fab fa-facebook-f"></i>
            </span>
            <span>
              <i class="fab fa-instagram"></i>
            </span>{" "}
            <span>
              <i class="fab fa-linkedin"></i>
            </span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
