"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

export const SocialButtons = () => {
  const params = useSearchParams();

  const handleSignIn = async () => {
    await signIn("google", {
      callbackUrl: params.get("callbackUrl") || "/",
    });
  };

  return (
    <div className="mt-6">
      

      {/* Google Button */}
      <button
        onClick={handleSignIn}
        className="
          btn w-full rounded-full
          bg-base-100 text-neutral
          border border-base-300
          hover:bg-base-200 hover:border-primary
          transition-all duration-300
          flex items-center justify-center gap-3
        "
      >
        <FaGoogle className="text-lg text-primary" />
        <span className="font-medium">Continue with Google</span>
      </button>
    </div>
  );
};
