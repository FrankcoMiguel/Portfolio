import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CgMouse } from 'react-icons/cg';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { ProjectsBackgroundIcons } from '../components/BackgroundIcons';
import type { ProjectsCategory } from '../types';
import projectsData from '../data/projects.json';

// Project logos from static folder
const projectLogos: Record<number, string> = {
  1: '/backpackpro-project.svg',
  2: '/chick4all-project.svg',
  3: '/cinemapremium-project.svg',
  4: '/daytoday-project.svg',
  5: '/covid-vaccinations.svg',
};

const Projects = () => {
  const projects = (projectsData as ProjectsCategory[])[0].items;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Layout title="Projects">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-20 text-center relative overflow-hidden">
        {/* Animated background icons */}
        <ProjectsBackgroundIcons />
        
        <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6 relative z-10">
          Personal Projects
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-12 relative z-10">
          Here are a few personal projects I have worked on since I started.
        </p>
        <div className="flex flex-col items-center text-slate-400 animate-bounce relative z-10">
          <CgMouse size={32} />
          <p className="text-sm mt-2">Scroll down to explore more</p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                logo={projectLogos[project.id]}
                title={project.name}
                description={project.description}
                logoRadius={project.borderRadius}
                tags={project.tags}
                icons={project.toolsUsed}
                page={project.page}
                source={project.source}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
