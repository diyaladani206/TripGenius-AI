import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
      navigate("/dashboard", { replace: true });
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
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-10 w-full max-w-md">

        <div className="flex flex-col items-center mb-8">

          <div className="bg-blue-600 p-5 rounded-full shadow-xl">
            <FaPlaneDeparture className="text-white text-4xl" />
          </div>

          <h2 className="text-xl text-blue-200 font-semibold mt-4">
            TripGenius AI
          </h2>

          <h1 className="text-4xl text-white font-bold mt-2">
            Create Account
          </h1>

          <p className="text-gray-200 text-center mt-3">
            Join TripGenius AI and start planning smarter trips.
          </p>

        </div>

        <form onSubmit={handleRegister} className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="text-white">Full Name</label>

            <div className="relative mt-2">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full pl-12 py-3 rounded-xl outline-none"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-white">Email</label>

            <div className="relative mt-2">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full pl-12 py-3 rounded-xl outline-none"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-white">Password</label>

            <div className="relative mt-2">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create password"
                className="w-full pl-12 pr-12 py-3 rounded-xl outline-none"
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
            <label className="text-white">Confirm Password</label>

            <div className="relative mt-2">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full pl-12 pr-12 py-3 rounded-xl outline-none"
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
          <label className="flex items-center gap-2 text-white text-sm">
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
            className="w-full bg-blue-600 py-3 rounded-xl text-white font-semibold hover:bg-blue-700 transition"
          >
            {submitting ? "Creating account..." : "Create Account"}
          </button>

        </form>

        <p className="text-center text-white mt-6">
          Already have an account?

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

export default Register;