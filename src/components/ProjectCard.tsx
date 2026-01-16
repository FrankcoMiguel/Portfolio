import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import type { Tag, Tool } from '../types';

interface ProjectCardProps {
  id: number;
  logo: string;
  title: string;
  description: string;
  logoRadius?: string;
  tags: Tag[];
  icons: Tool[];
  page: string;
  source: string;
}

const ProjectCard = ({
  id,
  logo,
  title,
  description,
  logoRadius = '0px',
  tags,
  icons,
  page,
  source,
}: ProjectCardProps) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsOverlayOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={cardRef}
      data-aos="zoom-out"
      className="relative group bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10"
    >
      {/* Main Card */}
      <div
        className="cursor-pointer p-6"
        onClick={() => setIsOverlayOpen(!isOverlayOpen)}
        onKeyDown={(e) => e.key === 'Enter' && setIsOverlayOpen(!isOverlayOpen)}
        role="button"
        tabIndex={0}
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={logo}
            alt={`${title} logo`}
            className="w-24 h-24 object-contain"
            style={{ borderRadius: logoRadius }}
          />
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-slate-100 mb-2">{title}</h3>
          <p className="text-slate-400 text-sm mb-4 line-clamp-3">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className={`px-3 py-1 text-xs rounded-full ${
                  tag.highlighted
                    ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/50'
                    : 'bg-slate-700/50 text-slate-400 border border-slate-600'
                }`}
              >
                {tag.name}
              </span>
            ))}
          </div>

          {/* Tech Icons */}
          <div className="flex justify-center space-x-3">
            {icons.map((icon) => (
              <Tippy key={icon.id} content={icon.name} placement="bottom">
                <span className="text-slate-400 hover:text-indigo-400 transition-colors cursor-default">
                  <i className={icon.path}></i>
                </span>
              </Tippy>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-slate-900/95 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-300 ${
          isOverlayOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <p className="text-slate-300 text-center mb-6 px-4">
          View details, source code, or try the app
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to={`/projects/${id}`}
            className="flex items-center space-x-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors"
          >
            <FaInfoCircle />
            <span>Details</span>
          </Link>
          {page !== 'no' && (
            <a
              href={page}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors"
            >
              <FaExternalLinkAlt />
              <span>View App</span>
            </a>
          )}
          <a
            href={source}
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
          >
            <FaGithub />
            <span>Source</span>
          </a>
        </div>
        <button
          onClick={() => setIsOverlayOpen(false)}
          className="mt-6 text-slate-400 hover:text-white transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
