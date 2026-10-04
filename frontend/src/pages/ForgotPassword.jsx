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
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center px-4 py-10"
      style={{
        backgroundImage: `url(${loginBg})`,
      }}
    >
      <div className="absolute inset-0 bg-slate-950/45"></div>

      <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/70 bg-white/95 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur sm:p-9">

        <div className="flex flex-col items-center mb-8">

          <div className="rounded-2xl bg-blue-600 p-4 shadow-md shadow-blue-900/20">
            <FaPlaneDeparture className="text-3xl text-white"/>
          </div>

          <h2 className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
            TripGenius AI
          </h2>

          <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Forgot Password?
          </h1>

          <p className="mt-3 text-center leading-6 text-slate-600">
            Enter your registered email address and we'll send you a password reset link.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div>

            <label className="text-sm font-semibold text-slate-700">
              Email Address
            </label>

            <div className="relative mt-2">

              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-700"/>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                required
              />

            </div>

          </div>

          <button
            className="w-full rounded-xl bg-blue-600 py-3 font-bold text-white transition hover:bg-blue-700"
          >
            Send Reset Link
          </button>

        </form>

        <p className="mt-6 text-center text-slate-600">

          Remember your password?

          <Link
            to="/login"
            className="ml-2 font-bold text-blue-700 hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default ForgotPassword;