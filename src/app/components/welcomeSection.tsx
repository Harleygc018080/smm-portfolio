import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const WelcomeSection = () => {
  return (
    <section
      id="welcome-section"
      className="flex flex-col items-center bg-blue-100 py-16 text-center"
    >
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center lg:space-x-8">
        {/* Left Side: Text */}
        <div className="lg:w-1/2">
          <h1 className="text-6xl font-bold text-gray-800">Hello, I'm Harley.</h1>
          <p className="mt-4 text-xl text-gray-600">
            I&#39;m a Web Designer and a Social Media Manager
          </p>

          {/* Social Media Icons */}
          <div className="mt-6 flex justify-center space-x-6">
            <Link href="https://www.facebook.com/NeverMindHarley/" target="_blank">
            <Image
                src="/Facebook-Logo-PNG.png" // Replace with your Meta logo path or URL
                alt="Meta Logo"
                width={32}
                height={32}
                className="hover:opacity-80"
              />
            </Link>
            <Link href="https://www.instagram.com/nevermindharley/" target="_blank">
              <FaInstagram className="text-pink-600 text-3xl hover:text-pink-800" />
            </Link>
            <Link href="https://www.linkedin.com/in/harleycarbonell/" target="_blank">
              <FaLinkedinIn className="text-blue-700 text-3xl hover:text-blue-900" />
            </Link>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <Image
            src="/IMG_5057_3.jpg"
            alt="Harley's Photo"
            className="rounded-full mx-auto"
            width={256} // 256px width for w-64 equivalent
            height={256} // 256px height for h-64 equivalent
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
