import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCalendar, FaClock, FaArrowLeft } from 'react-icons/fa';
import Layout from '../components/Layout';
import type { PublicationsCategory } from '../types';
import publicationsData from '../data/publications.json';

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
      {/* Hero Section */}
      <section className="relative">
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
    </Layout>
  );
};

export default PublicationDetail;
