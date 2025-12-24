"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { postUser } from "@/actions/server/auth";
import { SocialButtons } from "./SocialButton";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [form, setForm] = useState({
    nid: "",
    name: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.nid.trim()) newErrors.nid = "NID No is required";
    if (!form.name.trim()) newErrors.name = "Full Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email is invalid";

    if (!form.contact.trim()) newErrors.contact = "Contact number is required";
    else if (!/^\d{10,15}$/.test(form.contact.replace(/\D/g, "")))
      newErrors.contact = "Invalid phone number";

    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(form.password))
      newErrors.password =
        "Password must contain uppercase, lowercase, number & special char";

    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (!form.role) newErrors.role = "Please select a role";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const registerResult = await postUser({
        nid: form.nid.trim(),
        name: form.name.trim(),
        email: form.email.toLowerCase().trim(),
        contact: form.contact.trim(),
        password: form.password,
        role: form.role,
      });

      if (!registerResult.success) {
        Swal.fire("Error", registerResult.message || "Registration failed", "error");
        return;
      }

      // Auto login after registration
      const signInResult = await signIn("credentials", {
        email: form.email.toLowerCase().trim(),
        password: form.password,
        redirect: false,
      });

      if (signInResult?.ok) {
        Swal.fire({
          icon: "success",
          title: "Welcome!",
          text: "Account created successfully",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          router.push("/booking"); // Always redirect to booking page
        });
      } else {
        Swal.fire("Error", signInResult?.error || "Auto-login failed", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Something went wrong. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-8">
      <div className="w-full max-w-lg bg-base-100 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary">Create an Account</h2>
          <p className="text-sm text-neutral/70 mt-2">
            Join care.xyz and start your caring journey
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* NID No */}
          <div>
            <label className="label">
              <span className="label-text">NID No</span>
            </label>
            <input
              type="text"
              name="nid"
              value={form.nid}
              onChange={handleChange}
              placeholder="Enter your NID number"
              className={`input input-bordered w-full ${errors.nid ? "input-error" : ""}`}
              required
            />
            {errors.nid && <p className="text-error text-sm mt-1">{errors.nid}</p>}
          </div>

          {/* Name */}
          <div>
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`input input-bordered w-full ${errors.name ? "input-error" : ""}`}
              required
            />
            {errors.name && <p className="text-error text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`input input-bordered w-full ${errors.email ? "input-error" : ""}`}
              required
            />
            {errors.email && <p className="text-error text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Contact */}
          <div>
            <label className="label">
              <span className="label-text">Contact Number</span>
            </label>
            <input
              type="text"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              placeholder="e.g. +88017xxxxxxxx"
              className={`input input-bordered w-full ${errors.contact ? "input-error" : ""}`}
              required
            />
            {errors.contact && <p className="text-error text-sm mt-1">{errors.contact}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create a strong password"
              className={`input input-bordered w-full ${errors.password ? "input-error" : ""}`}
              required
            />
            {errors.password && <p className="text-error text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Re-type your password"
              className={`input input-bordered w-full ${errors.confirmPassword ? "input-error" : ""}`}
              required
            />
            {errors.confirmPassword && (
              <p className="text-error text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Role */}
          <div>
            <label className="label">
              <span className="label-text">Register As</span>
            </label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className={`select select-bordered w-full ${errors.role ? "select-error" : ""}`}
              required
            >
              <option value="">Select role</option>
              <option value="family">Family / Client</option>
              <option value="caregiver">Caregiver</option>
            </select>
            {errors.role && <p className="text-error text-sm mt-1">{errors.role}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`btn btn-primary w-full rounded-full mt-6 ${
              loading ? "loading" : ""
            }`}
          >
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-base-300"></div>
          <span className="px-4 text-sm text-neutral/60">OR</span>
          <div className="flex-1 border-t border-base-300"></div>
        </div>

        <SocialButtons />

        <p className="text-center text-sm text-neutral/70 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-primary font-medium hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;