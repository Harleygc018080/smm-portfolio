import { useRouter } from 'next/router';
import Link from 'next/link';
import projectsData from '../../data/projectsData';
import Head from 'next/head';

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const project = projectsData[id];

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <>
      {/* SEO with dynamic meta tags */}
      <Head>
        <title>{project.title} | My Portfolio</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.image} />
        <meta property="og:url" content={`https://yourdomain.com/projects/${id}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="container mx-auto py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-700 mb-4">{project.title}</h1>
        <p className="text-lg text-gray-600 mb-8">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Visit Project
        </a>
        <div className="mt-8">
          <Link href="/#projects">
            <a className="text-blue-600 hover:underline">Back to Projects</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
