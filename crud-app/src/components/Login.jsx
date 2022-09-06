import React, { useState } from "react";
import img from "../logo.jpg";
import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";

function Login({ setSigned }) {
  const [emailUp, setEmailUp] = useState("");
  const [pwdup, setPwdup] = useState("");
  const [emailIn, setEmailIn] = useState("");
  const [pwdIn, setPwdIn] = useState("");
  const signUp = (e) => {
    e.preventDefault();
    if (emailUp === "" || pwdup === "") {
      alert("please fill");
    } else {
      localStorage.setItem("email", emailUp);
      localStorage.setItem("pwd", pwdup);
      setEmailUp("");
      setPwdup("");
      setSigned(true);
    }
  };

  const signIn = (e) => {
    e.preventDefault();
    if (emailIn === "" || pwdIn === "") {
      alert("please fill");
    } else {
      if (
        localStorage.getItem("email") &&
        localStorage.getItem("email").trim() === emailIn.trim() &&
        localStorage.getItem("pwd") &&
        localStorage.getItem("pwd") === pwdIn
      ) {
        setSigned(true);
        setEmailIn("");
        setPwdIn("");
      } else {
        alert("You are not signed up");
      }
    }
  };
  return (
    <div className="lg:flex items-center justify-center lg:min-h-screen lg:py-5 bg-gray-100">
      <div className="lg:flex items-center justify-center w-full lg:min-h-screen lg:px-20">
        <div className="bg-white rounded-2xl shadow-2xl lg:flex lg:w-2/3 max-w-4xl">
          <img src={img} alt="" className="w-20 h-20" />
          <div className="lg:w-3/5 p-5 mt-3">
            <div className="py-10">
              <h2 className="text-3xl font-bold mb-2 text-blue">
                Sign in to Account
              </h2>
              <p className="border-2 w-10 border-blue mx-auto mb-3"></p>
            </div>
            <div className="sign-in">
              <div className="flex justify-center mb-4">
                <a
                  href="/"
                  className="rounded-full p-3 mx-1 border-2 border-gray-200"
                >
                  <FaFacebookF className="text-sm text-blue" />
                </a>
                <a
                  href="/"
                  className="rounded-full p-3 mx-1 border-2 border-gray-200"
                >
                  <FaLinkedinIn className="text-sm text-blue" />
                </a>
                <a
                  href="/"
                  className="rounded-full p-3 mx-1 border-2 border-gray-200"
                >
                  <FaGoogle className="text-sm text-blue" />
                </a>
              </div>
              <input
                type="email"
                placeholder="Email"
                value={emailIn}
                onChange={(e) => setEmailIn(e.target.value)}
                className="bg-gray-100  p-3 mb-3 w-2/3 block md:w-1/2 lg:w-2/3 m-auto focus:outline-none"
              />
              <input
                type="password"
                value={pwdIn}
                placeholder="Password"
                onChange={(e) => setPwdIn(e.target.value)}
                className="bg-gray-100 mb-6 p-3 w-2/3 block  md:w-1/2 lg:w-2/3 m-auto focus:outline-none"
              />
              <a
                href="/"
                className="rounded-full inline-block px-12 py-2  font-semibold  bg-blue text-white
              hover:bg-white hover:text-blue hover:border-blue hover:border-2"
                onClick={(e) => signIn(e)}
              >
                Sign In
              </a>
            </div>
          </div>
          <div className="lg:w-2/5 bg-blue text-white rounded-tr-2xl rounded-br-2xl py-36 lg:px-12">
            <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
            <p className="border-2 w-10 border-white mx-auto mb-2"></p>
            <p className="mb-9">
              Fill up personal information and start with us.
            </p>
            <input
              type="email"
              value={emailUp}
              placeholder="Email"
              className="bg-white text-black  p-3 mb-3 w-2/3 block md:w-1/2 lg:w-full m-auto focus:outline-none"
              onChange={(e) => setEmailUp(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={pwdup}
              className="bg-white text-black mb-6 p-3 w-2/3 block  md:w-1/2 lg:w-full m-auto focus:outline-none"
              onChange={(e) => setPwdup(e.target.value)}
            />
            <a
              href="/"
              className="rounded-full border-2 border-white px-12 py-2 inline-block font-semibold  
              hover:bg-white hover:text-blue"
              onClick={(e) => signUp(e)}
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
