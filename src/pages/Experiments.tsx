import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CgMouse } from 'react-icons/cg';
import Layout from '../components/Layout';
import ExperimentCard from '../components/ExperimentCard';
import { ExperimentsBackgroundIcons } from '../components/BackgroundIcons';
import type { ExperimentsCategory } from '../types';
import experimentsData from '../data/experiments.json';

// Experiment logos from static folder
const experimentLogos: Record<number, string> = {
  1: '/backpackpro-project.svg',
  2: '/chick4all-project.svg',
  3: '/cinemapremium-project.svg',
  4: '/efinance.png',
  5: '/covid-vaccinations.svg',
};

const Experiments = () => {
  const experiments = (experimentsData as ExperimentsCategory[])[0].items;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Layout title="Experiments">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-20 text-center relative overflow-hidden">
        {/* Animated background icons */}
        <ExperimentsBackgroundIcons />
        
        <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6 relative z-10">
          Experiments
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-12 relative z-10">
          A collection of experiments crafted in the lab — from concept to deployment
        </p>
        <div className="flex flex-col items-center text-slate-400 animate-bounce relative z-10">
          <CgMouse size={32} />
          <p className="text-sm mt-2">Scroll down to explore more</p>
        </div>
      </section>

      {/* Experiments Grid */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiments.map((experiment) => (
              <ExperimentCard
                key={experiment.id}
                logo={experimentLogos[experiment.id]}
                title={experiment.name}
                description={experiment.description}
                logoRadius={experiment.borderRadius}
                tags={experiment.tags}
                icons={experiment.toolsUsed}
                page={experiment.page}
                source={experiment.source}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experiments;
