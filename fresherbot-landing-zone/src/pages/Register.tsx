import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-lg bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 p-10 space-y-8"
        >
          {/* Logo */}
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
            <h1 className="text-3xl font-extrabold text-gray-900">
              Create Your Account
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Join{" "}
              <span className="font-semibold text-rose-600">FresherBot</span> to
              build your career with AI-powered tools.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  required
                  className="mt-1 rounded-lg border-gray-300 focus:ring-rose-600 focus:border-rose-600"
                />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  required
                  className="mt-1 rounded-lg border-gray-300 focus:ring-rose-600 focus:border-rose-600"
                />
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                className="mt-1 rounded-lg border-gray-300 focus:ring-rose-600 focus:border-rose-600"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                className="mt-1 rounded-lg border-gray-300 focus:ring-rose-600 focus:border-rose-600"
              />
              <p className="mt-1 text-xs text-gray-500">
                Use at least 8 characters, including letters and numbers.
              </p>
            </motion.div>

            {/* Role Selection */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              <span className="text-sm font-medium text-gray-700">I am a:</span>
              <RadioGroup defaultValue="candidate" className="flex space-x-6 mt-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="candidate" id="candidate" />
                  <Label htmlFor="candidate">Candidate</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="employer" id="employer" />
                  <Label htmlFor="employer">Employer</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="college" id="college" />
                  <Label htmlFor="college">College</Label>
                </div>
              </RadioGroup>
            </motion.div>

            {/* Terms */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              <div className="flex items-start space-x-3">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-sm text-gray-600 leading-5">
                  I agree to the{" "}
                  <Link to="/terms" className="text-rose-600 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-rose-600 hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button className="w-full py-3 rounded-lg bg-rose-600 text-white font-semibold text-lg shadow-md hover:bg-rose-700 transition-colors">
                Create Account
              </Button>
            </motion.div>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center my-6">
            <span className="w-full border-t border-gray-200"></span>
            <span className="px-3 text-gray-400 text-sm">OR</span>
            <span className="w-full border-t border-gray-200"></span>
          </div>

          {/* Google Login */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-3 border-gray-300 hover:bg-gray-100 rounded-lg py-3 shadow-sm"
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </Button>
          </motion.div>

          {/* Already have account */}
          <div className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-rose-600 hover:underline font-medium">
              Log in
            </Link>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Register;
