import Link from 'next/link';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-white">
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-8">
        These are my Projects
      </h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        <Link href="https://fitness-gym-ruddy.vercel.app">
          <div className="project-tile bg-gray-100 p-4 rounded-lg hover:text-blue-600 shadow hover:bg-gray-300 transition cursor-pointer">
            <img
              src="/landingpage.png"
              alt="Landing Page Fitness Gym"
              className="rounded mb-4"
            />
            <p className="text-center text-lg font-semibold">
              <span>&lt;</span>Landing Page Fitness Gym<span>/&gt;</span>
            </p>
          </div>
        </Link>

        {/* Project 2 */}
        <Link href="https://lolahh-coffee-kgb4i45ua-harleygc018080s-projects.vercel.app/">
          <div className="project-tile bg-gray-100 p-4 rounded-lg hover:text-blue-600 shadow hover:bg-gray-300 transition cursor-pointer">
            <img
              src="/lolahhweb.png"
              alt="Coffee Shop Website"
              className="rounded mb-4"
            />
            <p className="text-center text-lg font-semibold">
              <span>&lt;</span>Coffee Shop Website<span>/&gt;</span>
            </p>
          </div>
        </Link>

        {/* Project 3 */}
        <Link href="/samplegraphic-design.pdf">
          <div className="project-tile bg-gray-100 p-4 rounded-lg hover:text-blue-600 shadow hover:bg-gray-300 transition cursor-pointer">
            <img
              src="/brandkit.png"
              alt="Brand Kit Coffee Shop"
              className="rounded mb-4"
            />
            <p className="text-center text-lg font-semibold">
              <span>&lt;</span>Brand Kit Design for Coffee Shop<span>/&gt;</span>
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
