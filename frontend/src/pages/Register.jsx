import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaPlaneDeparture,
} from "react-icons/fa";
import loginBg from "../assets/images/login-bg.jpg";
import { useAuth } from "../hooks/useAuth";

function Register() {
  const navigate = useNavigate();
  const location = useLocation();
  const { register } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setSubmitting(true);
    try {
      await register(formData);
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
      <div className="absolute inset-0 bg-slate-950/45"></div>

      <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/70 bg-white/95 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur sm:p-9">

        <div className="flex flex-col items-center mb-8">

          <div className="rounded-2xl bg-blue-600 p-4 shadow-md shadow-blue-900/20">
            <FaPlaneDeparture className="text-3xl text-white" />
          </div>

          <h2 className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
            TripGenius AI
          </h2>

          <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Create Account
          </h1>

          <p className="mt-3 text-center leading-6 text-slate-600">
            Join TripGenius AI and start planning smarter trips.
          </p>

        </div>

        <form onSubmit={handleRegister} className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="text-sm font-semibold text-slate-700">Full Name</label>

            <div className="relative mt-2">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-700" />

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-semibold text-slate-700">Email</label>

            <div className="relative mt-2">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-700" />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-semibold text-slate-700">Password</label>

            <div className="relative mt-2">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-700" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create password"
                className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-12 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm font-semibold text-slate-700">Confirm Password</label>

            <div className="relative mt-2">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-700" />

              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-12 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
              >
                {showConfirmPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>
            </div>
          </div>

          {/* Terms */}
          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              required
            />
            I agree to the Terms & Conditions
          </label>

          {error && <p role="alert" className="text-red-200 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-xl bg-blue-600 py-3 font-bold text-white transition hover:bg-blue-700"
          >
            {submitting ? "Creating account..." : "Create Account"}
          </button>

        </form>

        <p className="mt-6 text-center text-slate-600">
          Already have an account?

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

export default Register;