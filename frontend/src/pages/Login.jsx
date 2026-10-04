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
      navigate(location.state?.from?.pathname || "/dashboard", { replace: true });
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center relative"
      style={{
        backgroundImage: `url(${loginBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Login Card */}
      <div className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-10 w-full max-w-md">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">

          <div className="bg-blue-600 p-5 rounded-full shadow-xl">
            <FaPlaneDeparture className="text-white text-4xl" />
          </div>

          <h2 className="text-xl font-semibold text-blue-200 mt-4">
            TripGenius AI
          </h2>

          <h1 className="text-4xl font-bold text-white mt-2">
            Welcome Back 👋
          </h1>

          <p className="text-center text-gray-200 mt-3">
            Sign in to continue planning your next adventure.
          </p>

        </div>

        <form onSubmit={handleLogin} className="space-y-6">

          {/* Email */}
          <div>

            <label className="text-white">
              Email Address
            </label>

            <div className="relative mt-2">

              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-12 py-3 rounded-xl outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>

          </div>

          {/* Password */}
          <div>

            <label className="text-white">
              Password
            </label>

            <div className="relative mt-2">

              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full pl-12 pr-12 py-3 rounded-xl outline-none"
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
          <div className="flex justify-between items-center text-white text-sm">

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember Me
            </label>

            <Link
              to="/forgot-password"
              className="hover:text-blue-300"
            >
              Forgot Password?
            </Link>

          </div>

          {error && <p role="alert" className="text-red-200 text-sm">{error}</p>}

          {/* Login Button */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-blue-600 py-3 rounded-xl text-white font-semibold hover:bg-blue-700 transition"
          >
            {submitting ? "Signing in..." : "Login"}
          </button>

        </form>

        {/* Register */}
        <p className="text-center text-white mt-6">

          Don't have an account?

          <Link
            to="/register"
            className="text-blue-300 ml-2 hover:underline"
          >
            Sign Up
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;