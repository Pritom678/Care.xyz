"use client";

import Link from "next/link";
import { useEffect } from "react";

const ErrorPage = ({ error, reset }) => {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="max-w-md w-full bg-base-100 rounded-3xl shadow-xl p-8 text-center space-y-6">
        <h1 className="text-4xl font-bold text-error">Something went wrong</h1>

        <p className="text-neutral/70">
          An unexpected error occurred. Please try again or reload the page.
        </p>

        {/* Optional error message (only in dev) */}
        {process.env.NODE_ENV === "development" && (
          <pre className="text-xs bg-base-200 p-3 rounded text-left overflow-auto">
            {error?.message}
          </pre>
        )}

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="btn btn-primary rounded-full px-6"
          >
            Try Again
          </button>

          <Link href="/" className="btn btn-outline rounded-full px-6">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
