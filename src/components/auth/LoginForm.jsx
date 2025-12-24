"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import Link from "next/link";
import { SocialButtons } from "./SocialButton";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value;

    if (!email || !password) {
      Swal.fire("Error", "Please fill in all fields", "error");
      return;
    }

    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false, // Handle redirect manually for better UX
        callbackUrl,
      });

      if (result?.ok) {
        Swal.fire({
          icon: "success",
          title: "Welcome back!",
          text: "Login successful",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          router.push(callbackUrl); // Redirect to intended page
        });
      } else {
        // result.error comes from authorize() returning null
        Swal.fire("Login Failed", result?.error || "Invalid email or password", "error");
      }
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire("Error", "Something went wrong. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md bg-base-100 rounded-2xl shadow-lg p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary">Welcome Back</h2>
          <p className="text-sm text-neutral/70 mt-2">
            Login to continue caring with care.xyz
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              disabled={loading}
              className="input input-bordered w-full"
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              required
              disabled={loading}
              className="input input-bordered w-full"
            />
            <label className="label justify-end">
              <Link
                href="/forgot-password"
                className="label-text-alt text-primary hover:underline cursor-pointer"
              >
                Forgot password?
              </Link>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`btn btn-primary w-full rounded-full ${loading ? "loading" : ""}`}
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-base-300"></div>
          <span className="px-4 text-sm text-neutral/60">OR</span>
          <div className="flex-1 border-t border-base-300"></div>
        </div>

        {/* Google Sign-In */}
        <SocialButtons/>

        {/* Footer */}
        <div className="text-center mt-6 text-sm">
          <p className="text-neutral/70">
            Don’t have an account?{" "}
            <Link
              href={`/register?callbackUrl=${encodeURIComponent(callbackUrl)}`}
              className="text-primary font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;