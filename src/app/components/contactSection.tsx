import Link from "next/link";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-4">Book a discovery call, NOW!</h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center"></div>
      <div className="text-center mt-8">
        <a
          href="https://forms.gle/4Cqa5NNd8zEoY5gw6"
          download
          className="inline-block bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-700 transition"
        >
          Fill up this Form
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
