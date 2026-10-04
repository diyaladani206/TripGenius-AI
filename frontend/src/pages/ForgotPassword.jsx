import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPlaneDeparture,
} from "react-icons/fa";
import loginBg from "../assets/images/login-bg.jpg";

function ForgotPassword() {

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Password reset link will be sent after backend integration.");
    console.log(email);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center relative"
      style={{
        backgroundImage: `url(${loginBg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-10 w-full max-w-md">

        <div className="flex flex-col items-center mb-8">

          <div className="bg-blue-600 p-5 rounded-full shadow-xl">
            <FaPlaneDeparture className="text-white text-4xl"/>
          </div>

          <h2 className="text-xl text-blue-200 mt-4">
            TripGenius AI
          </h2>

          <h1 className="text-4xl font-bold text-white mt-2">
            Forgot Password?
          </h1>

          <p className="text-center text-gray-200 mt-3">
            Enter your registered email address and we'll send you a password reset link.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div>

            <label className="text-white">
              Email Address
            </label>

            <div className="relative mt-2">

              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"/>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full pl-12 py-3 rounded-xl outline-none"
                required
              />

            </div>

          </div>

          <button
            className="w-full bg-blue-600 py-3 rounded-xl text-white font-semibold hover:bg-blue-700 transition"
          >
            Send Reset Link
          </button>

        </form>

        <p className="text-center text-white mt-6">

          Remember your password?

          <Link
            to="/login"
            className="text-blue-300 ml-2 hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default ForgotPassword;