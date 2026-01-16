import { useEffect } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import type { Icon } from '../types';

interface SkillProps {
  title: string;
  icons: Icon[];
}

const Skill = ({ title, icons }: SkillProps) => {
  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);

  return (
    <div
      data-aos="fade-down"
      className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-indigo-500/50 transition-colors"
    >
      <h3 className="text-lg font-semibold text-slate-100 mb-4">{title}</h3>
      
      <div className="flex flex-wrap gap-3">
        {icons.map((icon) => (
          <Tippy key={icon.id} content={icon.name}>
            <a
              href={icon.moreInfo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-slate-700/50 rounded-lg text-slate-300 hover:text-indigo-400 hover:bg-slate-700 transition-all"
              aria-label={icon.name}
            >
              <i className={`${icon.path} text-xl`}></i>
              <span className="text-sm">{icon.name}</span>
            </a>
          </Tippy>
        ))}
      </div>
    </div>
  );
};

export default Skill;
