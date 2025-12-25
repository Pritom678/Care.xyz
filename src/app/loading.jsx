export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="flex flex-col items-center gap-6">
        {/* Spinner */}
        <span className="loading loading-spinner loading-lg text-primary"></span>

        {/* Animated dots */}
        <p className="text-lg font-medium text-gray-600 animate-pulse">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
}
