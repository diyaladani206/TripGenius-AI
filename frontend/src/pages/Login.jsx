import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaLock,
  FaPlaneDeparture,
} from "react-icons/fa";

import loginBg from "../assets/images/login-bg.jpg";
import { useAuth } from "../hooks/useAuth";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await login({ email, password });
      navigate(location.state?.from?.pathname || "/dashboard", {
        replace: true,
        state: location.state?.from?.state,
      });
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center px-4 py-10"
      style={{
        backgroundImage: `url(${loginBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/45"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/70 bg-white/95 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur sm:p-9">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">

          <div className="rounded-2xl bg-blue-600 p-4 shadow-md shadow-blue-900/20">
            <FaPlaneDeparture className="text-3xl text-white" />
          </div>

          <h2 className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
            TripGenius AI
          </h2>

          <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Welcome Back
          </h1>

          <p className="mt-3 text-center leading-6 text-slate-600">
            Sign in to continue planning your next adventure.
          </p>

        </div>

        <form onSubmit={handleLogin} className="space-y-6">

          {/* Email */}
          <div>

            <label className="text-sm font-semibold text-slate-700">
              Email Address
            </label>

            <div className="relative mt-2">

              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-700" />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>

          </div>

          {/* Password */}
          <div>

            <label className="text-sm font-semibold text-slate-700">
              Password
            </label>

            <div className="relative mt-2">

              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-700" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-12 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

            </div>

          </div>

          {/* Remember & Forgot Password */}
            <div className="flex items-center justify-between text-sm text-slate-600">

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember Me
            </label>

            <Link
              to="/forgot-password"
              className="font-semibold text-blue-700 transition hover:text-teal-700"
            >
              Forgot Password?
            </Link>

          </div>

          {error && <p role="alert" className="text-red-200 text-sm">{error}</p>}

          {/* Login Button */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-xl bg-blue-600 py-3 font-bold text-white transition hover:bg-blue-700"
          >
            {submitting ? "Signing in..." : "Login"}
          </button>

        </form>

        {/* Register */}
        <p className="mt-6 text-center text-slate-600">

          Don't have an account?

          <Link
            to="/register"
            className="ml-2 font-bold text-blue-700 hover:underline"
          >
            Sign Up
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;