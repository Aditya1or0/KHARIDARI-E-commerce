import axios from "axios";
import React, { useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });
      if (response.data.success) {
        toast.success("Login successful!");
        setToken(response.data.token);
        navigate("/admin");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Admin Portal
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Sign in to your account
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg px-8 py-10">
          <form onSubmit={onSubmitHandler} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                           focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                           dark:bg-gray-700 dark:text-white transition-colors
                           placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                           focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                           dark:bg-gray-700 dark:text-white transition-colors
                           placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-4 text-white bg-black rounded-lg
                          hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 
                          dark:bg-black dark:hover:bg-gray-700
                          transition-all duration-200 flex justify-center items-center
                          ${isLoading ? "opacity-75 cursor-not-allowed" : ""}`}
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "Sign In"
                )}
              </button>
            </div>
          </form>

          {/* Additional Links */}
          <div className="mt-6 text-center text-sm">
            <a
              href="#"
              className="text-gray-800 hover:text-blue-500 dark:text-gray-400 dark:hover:text-gray-300"
              onClick={(e) => {
                e.preventDefault();
                toast.info(
                  "Please contact your administrator for password reset."
                );
              }}
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          Need help? Contact admin@kharidari.com
        </div>
      </div>
    </div>
  );
};

export default Login;
