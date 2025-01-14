import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <Link href="#welcome-section">
            <img
              src="/initialslogo.png"
              alt="Harley's Logo"
              className="h-20 w-auto"
            />
          </Link>
        </div>
        {/* Navigation Links */}
        <ul className="flex space-x-4 ml-auto">
          <li>
            <Link href="#welcome-section" className="text-lg hover:text-blue-600 text-gray-700">
              Welcome
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-lg hover:text-blue-600 text-gray-700">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#tools" className="text-lg hover:text-blue-600 text-gray-700">
              Tools
            </Link>
          </li>
          <li>
            <Link
              href="https://forms.gle/4Cqa5NNd8zEoY5gw6"
              className="text-lg text-white bg-red-600 px-4 py-2 rounded-full hover:bg-red-700 shadow-lg transition-all duration-300 ease-in-out"
            >
              Book a Call
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
