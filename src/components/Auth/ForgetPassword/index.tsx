"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

const ForgetPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Assume API call here to send a reset password email
      setSubmitted(true);
      setLoading(false);
    } catch {
      setError("An error occurred while sending the reset link.");
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center px-4 md:px-0">
      {/* Header */}
      <header className="w-full py-4">
        <div className="container flex items-center justify-between mx-auto">
          <Image
            src="/images/logo/wizam-logo.png"
            alt="Wizam Logo"
            width={160}
            height={40}
          />
          <Link
            href="/"
            className="flex items-center text-lg text-gray-700 hover:underline"
          >
            <FaHome className="mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Forgot Password Card */}
      <div className="relative mt-16 bg-white rounded-lg  shadow-2xl max-w-xl w-full mx-auto md:mx-0">
        <div className="p-6 sm:p-10 md:p-14">
          <h2 className="text-[24px] md:text-[27px] font-semibold text-left text-gray-800">
            Forgot your password?
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-500">
            Enter your email address and we will send you instructions to reset
            your password.
          </p>

          {submitted && !error && (
            <p className="text-center text-green-600 mt-4">
              A reset link has been sent to your email.
            </p>
          )}

          {error && (
            <p className="text-center text-sm text-red-600 mt-4">{error}</p>
          )}

          <form className="mt-8 space-y-8" onSubmit={handleReset}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent rounded-md border border-stroke py-[10px] px-5 text-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                required
                placeholder="you@example.com"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full px-4 py-2 text-white bg-secondary hover:bg-secondary-dark rounded-lg transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending Reset Link..." : "Send Reset Link"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
