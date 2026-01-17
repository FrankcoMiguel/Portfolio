import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaCheckCircle, FaTimes } from 'react-icons/fa';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Layout from '../components/Layout';
import { ProjectDetailBackgroundIcons } from '../components/BackgroundIcons';
import type { ProjectsCategory } from '../types';
import projectsData from '../data/projects.json';

const projectLogos: Record<string, string> = {
  'backpackpro': '/backpackpro-project.svg',
  'chick-4-all': '/chick4all-project.svg',
  'cinema-premium': '/cinemapremium-project.svg',
  'daytoday': '/daytoday-project.svg',
  'covid-vaccinations': '/covid-vaccinations.svg',
};

// Helper function to create URL-friendly slugs
const createSlug = (name: string): string => {
  return name.toLowerCase().replace(/\s+/g, '-');
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const projects = (projectsData as ProjectsCategory[])[0].items;
  const project = projects.find((p) => createSlug(p.name) === slug);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'Remaking':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'In Progress':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Completed':
      default:
        return 'bg-green-500/20 text-green-400 border-green-500/30';
    }
  };

  return (
    <Layout title={project.name}>
      {/* Animated background icons */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <ProjectDetailBackgroundIcons />
      </div>

      {/* Hero Section */}
      <section className="py-12 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-400 mb-8 transition-colors"
          >
            <FaArrowLeft />
            Back to Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Project Info */}
            <div className="lg:col-span-2">
              <div className="flex items-start gap-6 mb-6">
                <img
                  src={projectLogos[createSlug(project.name)]}
                  alt={`${project.name} logo`}
                  className="w-20 h-20 object-contain"
                  style={{ borderRadius: project.borderRadius }}
                />
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h1 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-slate-100">
                      {project.name}
                    </h1>
                    {project.status && (
                      <span className={`px-3 py-1 text-sm rounded-full border ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-400 text-lg">{project.description}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className={`px-3 py-1 text-sm rounded-full border ${
                      tag.highlighted
                        ? 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30'
                        : 'bg-slate-700/50 text-slate-300 border-slate-600'
                    }`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>

              {/* Full Description */}
              <div data-aos="fade-up" className="prose prose-invert max-w-none mb-8">
                {project.fullDescription?.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-slate-300 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div data-aos="fade-up" className="mb-8">
                  <h2 className="text-xl font-bold text-slate-100 mb-4">Key Features</h2>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-300">
                        <FaCheckCircle className="text-indigo-400 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 sticky top-24">
                {/* Tech Stack */}
                <h3 className="text-lg font-semibold text-slate-100 mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.toolsUsed.map((tool) => (
                    <Tippy key={tool.id} content={tool.name}>
                      <span className="flex items-center gap-2 px-3 py-2 bg-slate-700/50 rounded-lg text-slate-300">
                        <i className={`${tool.path} text-xl`}></i>
                        <span className="text-sm">{tool.name}</span>
                      </span>
                    </Tippy>
                  ))}
                </div>

                {/* Links */}
                <h3 className="text-lg font-semibold text-slate-100 mb-4">Links</h3>
                <div className="space-y-3">
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-colors"
                  >
                    <FaGithub className="text-xl" />
                    <span>View Source Code</span>
                  </a>
                  {project.page !== 'no' && (
                    <a
                      href={project.page}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 px-4 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-white transition-colors"
                    >
                      <FaExternalLinkAlt />
                      <span>View Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      {project.screenshots && project.screenshots.length > 0 && (
        <section className="py-12 px-4 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <h2 data-aos="fade-up" className="text-2xl font-bold text-slate-100 mb-8">
              Screenshots
            </h2>
            <div className={`grid gap-6 ${project.isMobile ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
              {project.screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(screenshot)}
                >
                  {project.isMobile ? (
                    <div className="relative mx-auto" style={{ maxWidth: '200px' }}>
                      {/* Phone frame */}
                      <div className="relative bg-slate-900 rounded-[2rem] p-2 border-4 border-slate-700 hover:border-indigo-500/50 transition-all shadow-xl">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-900 rounded-b-xl z-10"></div>
                        {/* Screen */}
                        <div className="aspect-[9/19.5] rounded-[1.5rem] overflow-hidden bg-slate-800">
                          <img
                            src={screenshot}
                            alt={`${project.name} screenshot ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-video rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500/50 transition-all">
                      <img
                        src={screenshot}
                        alt={`${project.name} screenshot ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-indigo-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <FaTimes size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Screenshot preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Back to Projects */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-lg transition-colors"
          >
            <FaArrowLeft />
            Back to all projects
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
