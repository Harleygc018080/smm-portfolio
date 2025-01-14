import Link from 'next/link';
import projectsData from '../data/projectsData';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-white">
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-8">
        These are my Projects
      </h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(projectsData).map(([id, project]) => (
          <Link href={`/projects/${id}`} key={id}>
            <div className="project-tile bg-gray-100 p-4 rounded-lg text-blue-600 shadow hover:bg-gray-300 transition cursor-pointer">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="rounded mb-4"
              />
              <p className="text-center text-lg font-semibold">{project.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
