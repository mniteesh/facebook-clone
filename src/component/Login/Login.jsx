import { Button } from "@mui/material";
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase/firebase";
import "./Login.css";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";

const Login = () => {

    const [state, dispatch] = useStateValue() ;

  const signIn = () => {
      
    signInWithPopup(auth,provider)
      .then((result) => {

        dispatch({
            type:actionTypes.SET_USER,
            user:result.user,
        })
        console.log(result);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://i.pinimg.com/564x/da/3c/91/da3c9115cac7dd3487a52565f760897d.jpg"
          alt=""
        />
        <img
          src="https://logo-logos.com/wp-content/uploads/2016/10/Facebook_logo_text_wordmark.png"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
