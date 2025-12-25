import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-6">
      <div className="text-center max-w-md space-y-6">
        <h1 className="text-7xl font-extrabold text-primary">404</h1>

        <h2 className="text-2xl font-semibold">
          Page Not Found
        </h2>

        <p className="text-gray-500">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/" className="btn btn-primary rounded-full px-6">
            Go Home
          </Link>

          <Link href="/services" className="btn btn-outline rounded-full px-6">
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
}
