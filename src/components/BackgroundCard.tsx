import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BackgroundCard = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700"
    >
      <h2 className="text-2xl font-bold text-slate-100 mb-8 pb-4 border-b border-slate-700">
        My Work Experience
      </h2>

      {/* First Job */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-100">
              Tech Lead
            </h3>
            <a
              href="https://www.nexusdatasolutions.com"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              neXus Data Solutions
            </a>
            <span className="text-slate-400 text-sm"> • Montclair, NJ (Remote)</span>
          </div>
          <span className="text-slate-400 text-sm mt-2 md:mt-0">
            January 2020 - Current
          </span>
        </div>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          <li>Lead and mentor a team of developers, conducting code reviews and establishing best practices.</li>
          <li>Architect scalable solutions and drive technical decisions across multiple projects.</li>
          <li>Collaborate with stakeholders to define requirements and deliver high-quality software on schedule.</li>
        </ul>
      </div>

      {/* Second Job */}
      <div>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-100">
              Lead Software Engineer
            </h3>
            <a
              href="https://www.cigna.com/"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Cigna Healthcare
            </a>
          </div>
          <span className="text-slate-400 text-sm mt-2 md:mt-0">
            March 2022 - June 2025
          </span>
        </div>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          <li>Develop REST APIs within Oracle APEX and ORDS.</li>
          <li>
            Lead the Development of the Rating Tool that supports all sales markets for
            Vision.
          </li>
          <li>
            Support Underwriters and Actuarial Analysts to mitigate problems in production.
          </li>
          <li>
            Retrieved data from external APIs using the APEX Webservice package and ETL
            processes.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BackgroundCard;
