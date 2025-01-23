export default function Home() {
  return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-600">Welcome to Next.js!</h1>
          <p className="mt-4 text-lg text-gray-700">
            This project is powered by Next.js, Tailwind CSS, and Sanity Studio.
          </p>
          <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-6 py-2 text-lg font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Learn More
          </a>
        </div>
      </div>
  );
}
