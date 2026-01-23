import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCalendar, FaClock, FaArrowLeft, FaBookOpen } from 'react-icons/fa';
import Layout from '../components/Layout';
import { PublicationDetailBackgroundIcons } from '../components/BackgroundIcons';
import type { PublicationsCategory, ProjectsCategory } from '../types';
import publicationsData from '../data/publications.json';
import projectsData from '../data/projects.json';

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

const PublicationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const publications = (publicationsData as PublicationsCategory[])[0].items;
  const publication = publications.find((p) => p.id === Number(id));

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  if (!publication) {
    return <Navigate to="/publications" replace />;
  }

  return (
    <Layout title={publication.title}>
      {/* Animated background icons */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <PublicationDetailBackgroundIcons />
      </div>

      {/* Hero Section */}
      <section className="relative z-10">
        <div className="aspect-[21/9] max-h-[400px] overflow-hidden">
          <img
            src={publication.image}
            alt={publication.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-8">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/publications"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-400 mb-4 transition-colors"
            >
              <FaArrowLeft />
              Back to Publications
            </Link>
            <h1 data-aos="fade-up" className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">
              {publication.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1">
                <FaCalendar className="text-indigo-400" />
                {new Date(publication.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1">
                <FaClock className="text-indigo-400" />
                {publication.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {publication.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-indigo-500/20 text-indigo-400 rounded-full border border-indigo-500/30"
              >
                {tag}
              </span>
            ))}
          </div>

          <article 
            data-aos="fade-up"
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-slate-100 
              prose-p:text-slate-300 
              prose-a:text-indigo-400 
              prose-strong:text-slate-100
              prose-code:text-indigo-300
              prose-code:bg-slate-800
              prose-code:px-1
              prose-code:rounded
              prose-pre:bg-slate-800
              prose-pre:border
              prose-pre:border-slate-700
              prose-ul:text-slate-300
              prose-ol:text-slate-300
              prose-li:text-slate-300"
          >
            {publication.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-slate-100 mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-bold text-slate-100 mt-6 mb-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('```')) {
                return null; // Skip code block markers
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <li key={index} className="text-slate-300 ml-4">
                    {paragraph.replace('- ', '')}
                  </li>
                );
              }
              if (paragraph.trim() === '') {
                return <br key={index} />;
              }
              return (
                <p key={index} className="text-slate-300 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </article>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-slate-700">
            <Link
              to="/publications"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-lg transition-colors"
            >
              <FaArrowLeft />
              Back to all publications
            </Link>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {(() => {
        const projects = (projectsData as ProjectsCategory[])[0].items;
        const pubTags = publication.tags.map(t => t.toLowerCase());
        const pubText = (publication.title + ' ' + publication.content).toLowerCase();
        
        const relatedProjects = projects.filter(proj => {
          const projectTags = proj.tags.map(t => t.name.toLowerCase());
          const projectName = proj.name.toLowerCase();
          const projectWords = projectName.split(/[\s-]+/).filter(w => w.length > 2);
          
          // Check if project tags match publication tags
          const hasMatchingTag = projectTags.some(tag => 
            pubTags.some(pTag => tag.includes(pTag) || pTag.includes(tag))
          );
          
          // Check if publication mentions any significant word from the project name
          const mentionsProjectWord = projectWords.some(word => pubText.includes(word));
          
          // Check if project is mobile and publication is about mobile
          const isMobileRelated = proj.isMobile && pubTags.some(tag => 
            tag.includes('mobile') || tag.includes('react native') || tag.includes('ios') || tag.includes('android')
          );
          
          return hasMatchingTag || mentionsProjectWord || isMobileRelated;
        });
        
        if (relatedProjects.length === 0) return null;
        
        return (
          <section className="py-12 px-4 bg-slate-800/30">
            <div className="max-w-6xl mx-auto">
              <h2 data-aos="fade-up" className="text-2xl font-bold text-slate-100 mb-8 text-center">
                Related Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProjects.slice(0, 3).map((project, index) => (
                  <Link
                    key={project.id}
                    to={`/projects/${createSlug(project.name)}`}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-indigo-500/50 transition-all hover:bg-slate-800/80"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <img
                        src={projectLogos[createSlug(project.name)]}
                        alt={`${project.name} logo`}
                        className="w-12 h-12 object-contain"
                        style={{ borderRadius: project.borderRadius }}
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-slate-100 group-hover:text-indigo-400 transition-colors truncate">
                          {project.name}
                        </h3>
                        {project.status && (
                          <span className={`inline-block px-2 py-0.5 text-xs rounded-full border mt-1 ${getStatusColor(project.status)}`}>
                            {project.status}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm line-clamp-2 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag.id}
                          className={`px-2 py-0.5 text-xs rounded-full border ${
                            pubTags.some(pTag => tag.name.toLowerCase().includes(pTag) || pTag.includes(tag.name.toLowerCase()))
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

      {/* Other Publications */}
      {(() => {
        const currentTags = publication.tags.map(t => t.toLowerCase());
        const otherPublications = publications
          .filter(p => p.id !== publication.id)
          .map(p => ({
            ...p,
            matchCount: p.tags.filter(t => currentTags.includes(t.toLowerCase())).length
          }))
          .sort((a, b) => b.matchCount - a.matchCount)
          .slice(0, 3);
        
        if (otherPublications.length === 0) return null;
        
        return (
          <section className="py-12 px-4 bg-gradient-to-b from-transparent to-slate-900/50">
            <div className="max-w-6xl mx-auto">
              <h2 data-aos="fade-up" className="text-2xl font-bold text-slate-100 mb-8 text-center">
                Check Out These Other Publications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherPublications.map((otherPub, index) => (
                  <Link
                    key={otherPub.id}
                    to={`/publications/${otherPub.id}`}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="group bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500/50 transition-all hover:bg-slate-800/80"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={otherPub.image}
                        alt={otherPub.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                        <FaBookOpen className="text-indigo-400" />
                        <span>{otherPub.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-100 group-hover:text-indigo-400 transition-colors line-clamp-2 mb-2">
                        {otherPub.title}
                      </h3>
                      <p className="text-slate-400 text-sm line-clamp-2 mb-3">
                        {otherPub.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {otherPub.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className={`px-2 py-0.5 text-xs rounded-full border ${
                              currentTags.includes(tag.toLowerCase())
                                ? 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30'
                                : 'bg-slate-700/50 text-slate-400 border-slate-600'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* Back to Publications */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Link
            to="/publications"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-lg transition-colors"
          >
            <FaArrowLeft />
            Back to all publications
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default PublicationDetail;
