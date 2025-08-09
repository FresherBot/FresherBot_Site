import React from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow pt-20 flex items-center justify-center px-4 pb-20">
        <div className="w-full max-w-lg min-h-[500px] bg-white rounded-2xl shadow-lg border border-gray-200 p-10 space-y-8">
          {/* FresherBot Logo / Homepage Navigation */}
          <div className="flex justify-center">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/Images/fresherbotlogo.png"
                alt="FresherBot"
                className="h-10"
              />
              <span className="text-xl font-bold text-rose-600">
                FresherBot
              </span>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
            <p className="mt-2 text-sm text-gray-600">
              Log in to your{" "}
              <span className="font-semibold text-rose-600">FresherBot</span>{" "}
              account
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                className="mt-1 rounded-lg border-gray-300 focus:ring-rose-600 focus:border-rose-600"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-rose-600 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                className="mt-1 rounded-lg border-gray-300 focus:ring-rose-600 focus:border-rose-600"
              />
            </div>

            {/* CTA Button */}
            <Button className="w-full py-3 rounded-lg bg-rose-600 text-white font-semibold text-lg shadow-md hover:bg-rose-700 transition-colors">
              Sign in
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center my-6">
            <span className="w-full border-t border-gray-200"></span>
            <span className="px-3 text-gray-400 text-sm">OR</span>
            <span className="w-full border-t border-gray-200"></span>
          </div>

          {/* Google Login */}
          <div>
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-3 border-gray-300 hover:bg-gray-50 rounded-lg py-3"
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </Button>
          </div>

          {/* Register Link */}
          <div className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-rose-600 hover:underline font-medium"
            >
              Register
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
