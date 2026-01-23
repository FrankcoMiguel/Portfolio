import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaCheckCircle, FaTimes, FaBookOpen } from 'react-icons/fa';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Layout from '../components/Layout';
import { ProjectDetailBackgroundIcons } from '../components/BackgroundIcons';
import type { ProjectsCategory, PublicationsCategory } from '../types';
import projectsData from '../data/projects.json';
import publicationsData from '../data/publications.json';

const projectLogos: Record<string, string> = {
  'backpack-pro': '/backpackpro-project.svg',
  'chick-4-all': '/chick4all-project.svg',
  'cinema-premium': '/cinemapremium-project.svg',
  'efinance': '/efinance.png',
  'vaccinations-dashboard': '/covid-vaccinations.svg',
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
                  {project.source && project.source !== 'no' && (
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 px-4 py-3 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-colors"
                    >
                      <FaGithub className="text-xl" />
                      <span>View Source Code</span>
                    </a>
                  )}
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

                {/* App Store Links */}
                {project.isMobile && (project.appStoreUrl || project.playStoreUrl) && (
                  <>
                    {/* <h3 className="text-lg font-semibold text-slate-100 mb-4 mt-6">Available On</h3> */}
                    <div className="space-y-3">
                      {project.appStoreUrl && (
                        <a
                          href={project.appStoreUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-3 px-4 py-3 bg-black hover:bg-gray-900 rounded-xl text-white transition-colors border border-slate-600"
                        >
                          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                          </svg>
                          <div className="flex flex-col">
                            <span className="text-xs text-slate-300">Download on the</span>
                            <span className="text-lg font-semibold -mt-1">App Store</span>
                          </div>
                        </a>
                      )}
                      {project.playStoreUrl && (
                        <a
                          href={project.playStoreUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-3 px-4 py-3 bg-black hover:bg-gray-900 rounded-xl text-white transition-colors border border-slate-600"
                        >
                          <svg className="w-7 h-7" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594z"/>
                            <path fill="#34A853" d="M5.255 21.75c.167.161.403.244.693.204a2.07 2.07 0 0 0 .678-.247l9.95-5.632-3.493-3.47-7.828 9.145z"/>
                            <path fill="#FBBC04" d="M3.287 3.692C3.1 4.025 3 4.42 3 4.865v14.27c0 .445.1.84.287 1.173l8.213-8.213-8.213-8.403z"/>
                            <path fill="#EA4335" d="M14.584 8.605l-8.01-4.538a2.07 2.07 0 0 0-.678-.247.78.78 0 0 0-.641.18l8.196 8.179 3.133-3.094z"/>
                          </svg>
                          <div className="flex flex-col">
                            <span className="text-xs text-slate-300">GET IT ON</span>
                            <span className="text-lg font-semibold -mt-1">Google Play</span>
                          </div>
                        </a>
                      )}
                    </div>
                  </>
                )}
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
                        {/* Dynamic Island */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-full z-10"></div>
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

      {/* Other Projects */}
      {(() => {
        const currentTags = project.tags.map(t => t.name.toLowerCase());
        const otherProjects = projects
          .filter(p => p.id !== project.id)
          .map(p => ({
            ...p,
            matchCount: p.tags.filter(t => currentTags.includes(t.name.toLowerCase())).length
          }))
          .sort((a, b) => b.matchCount - a.matchCount)
          .slice(0, 3);
        
        if (otherProjects.length === 0) return null;
        
        return (
          <section className="py-12 px-4 bg-gradient-to-b from-transparent to-slate-900/50">
            <div className="max-w-6xl mx-auto">
              <h2 data-aos="fade-up" className="text-2xl font-bold text-slate-100 mb-8 text-center">
                Check Out These Other Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((otherProject, index) => (
                  <Link
                    key={otherProject.id}
                    to={`/projects/${createSlug(otherProject.name)}`}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-indigo-500/50 transition-all hover:bg-slate-800/80"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <img
                        src={projectLogos[createSlug(otherProject.name)]}
                        alt={`${otherProject.name} logo`}
                        className="w-12 h-12 object-contain"
                        style={{ borderRadius: otherProject.borderRadius }}
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-slate-100 group-hover:text-indigo-400 transition-colors truncate">
                          {otherProject.name}
                        </h3>
                        {otherProject.status && (
                          <span className={`inline-block px-2 py-0.5 text-xs rounded-full border mt-1 ${getStatusColor(otherProject.status)}`}>
                            {otherProject.status}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm line-clamp-2 mb-4">
                      {otherProject.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {otherProject.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag.id}
                          className={`px-2 py-0.5 text-xs rounded-full border ${
                            currentTags.includes(tag.name.toLowerCase())
                              ? 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30'
                              : 'bg-slate-700/50 text-slate-400 border-slate-600'
                          }`}
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* Related Publications */}
      {(() => {
        const publications = (publicationsData as PublicationsCategory[])[0].items;
        const projectTags = project.tags.map(t => t.name.toLowerCase());
        const projectName = project.name.toLowerCase();
        const projectWords = projectName.split(/[\s-]+/).filter(w => w.length > 2);
        
        const relatedPublications = publications.filter(pub => {
          const pubTags = pub.tags.map(t => t.toLowerCase());
          const pubText = (pub.title + ' ' + pub.content).toLowerCase();
          
          // Check if publication tags match project tags
          const hasMatchingTag = pubTags.some(tag => 
            projectTags.some(pTag => tag.includes(pTag) || pTag.includes(tag))
          );
          
          // Check if publication mentions any significant word from the project name
          const mentionsProjectWord = projectWords.some(word => pubText.includes(word));
          
          // Check if project is mobile and publication is about mobile
          const isMobileRelated = project.isMobile && pubTags.some(tag => 
            tag.includes('mobile') || tag.includes('react native') || tag.includes('ios') || tag.includes('android')
          );
          
          return hasMatchingTag || mentionsProjectWord || isMobileRelated;
        });
        
        if (relatedPublications.length === 0) return null;
        
        return (
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 data-aos="fade-up" className="text-2xl font-bold text-slate-100 mb-8 text-center">
                Related Publications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPublications.slice(0, 3).map((publication, index) => (
                  <Link
                    key={publication.id}
                    to={`/publications/${publication.id}`}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="group bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500/50 transition-all hover:bg-slate-800/80"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={publication.image}
                        alt={publication.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                        <FaBookOpen className="text-indigo-400" />
                        <span>{publication.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-100 group-hover:text-indigo-400 transition-colors line-clamp-2 mb-2">
                        {publication.title}
                      </h3>
                      <p className="text-slate-400 text-sm line-clamp-2">
                        {publication.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

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
