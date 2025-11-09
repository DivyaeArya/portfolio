


import { ReactNode } from 'react';

// --- SKILL ICONS ---

const BrainCircuitIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-400">
    <path d="M12 2a10 10 0 0 0-3.54 19.45"></path><path d="M12 2a10 10 0 0 1 3.54 19.45"></path><path d="M12 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path><path d="M17.5 14.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path><path d="M6.5 14.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path><path d="M12 22v-2"></path><path d="M12 14v-2"></path><path d="M16 11.5c.83.83 1.5 2.17 1.5 3.5"></path><path d="M8 11.5c-.83.83-1.5 2.17-1.5 3.5"></path><path d="M14.5 17.5c.83.83 2.17 1.5 3.5 1.5"></path><path d="M9.5 17.5c-.83.83-2.17 1.5-3.5 1.5"></path>
  </svg>
);

const CloudCogIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-400">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path><circle cx="12" cy="12" r="3"></circle><path d="M12 7v1"></path><path d="m14.8 8.2-1 1"></path><path d="M17 12h-1"></path><path d="m14.8 15.8-1-1"></path><path d="M12 17v-1"></path><path d="m9.2 15.8 1-1"></path><path d="M7 12h1"></path><path d="m9.2 8.2 1 1"></path>
  </svg>
);

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-400">
    <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const DataScienceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-400">
    <polyline points="22 12 16 12 14 15 10 9 8 12 2 12"></polyline><path d="M5 7v5"></path><path d="M19 7v5"></path>
  </svg>
);

// Example Skill Logos
const PythonIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.2 3.1C13.5 3 13 3.5 13 4.2V7H9.8C9.2 7 8.8 7.4 8.8 8V11H12V11.2C12 11.8 11.6 12.2 11 12.2H7.8C7.2 12.2 6.8 12.6 6.8 13.2V16H11V16.8C11 17.5 11.5 18 12.2 18H15C15.7 18 16.2 17.5 16.2 16.8V13H19.5C20.1 13 20.5 12.6 20.5 12V8.8C20.5 8.2 20.1 7.8 19.5 7.8H16V4.8C16 4.1 15.5 3.6 14.8 3.6C14.6 3.6 14.4 3.4 14.2 3.1Z" fill="#3776AB"/>
    <path d="M10 20.9C10.7 21 11.2 20.5 11.2 19.8V17H14.5C15.1 17 15.5 16.6 15.5 16V13H12V12.8C12 12.2 12.4 11.8 13 11.8H16.2C16.8 11.8 17.2 11.4 17.2 10.8V8H13V7.2C13 6.5 12.5 6 11.8 6H8.5C7.9 6 7.5 6.4 7.5 7V10.2C7.5 10.8 7.9 11.2 8.5 11.2H11V14.2C11 14.9 10.5 15.4 9.8 15.4C9.6 15.4 9.4 15.6 9.2 15.9C8.5 16.6 8 17.1 8 17.8V20C8 20.7 8.5 21 9.2 21C9.4 21 9.7 20.9 10 20.9Z" fill="#FFD43B"/>
  </svg>
);

const DockerIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#0db7ed" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.2 10.6c-.4-2.2-2.3-3.8-4.6-3.8h-2.2c-.2 0-.4 0-.5-.2L12.5 3c-.3-.5-.8-.8-1.4-.8H4.6C2.3 2.2 0 4.2 0 6.6v10.8C0 19.8 2.3 22 4.6 22h14.8c2.3 0 4.6-2.2 4.6-4.6v-6.8zm-4.1 2.2h-3.3v3.3H11v-3.3H7.7v-3.3H11v-3.3h3.3v3.3h3.8v3.3z"/>
  </svg>
);

const VHDLIcon = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#6C63FF"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Chip body */}
    <rect x="3.5" y="5" width="17" height="14" rx="2.5" />

    {/* Pins left */}
    <line x1="3.5" y1="7" x2="1.5" y2="7" />
    <line x1="3.5" y1="10" x2="1.5" y2="10" />
    <line x1="3.5" y1="13" x2="1.5" y2="13" />
    <line x1="3.5" y1="16" x2="1.5" y2="16" />

    {/* Pins right */}
    <line x1="20.5" y1="7" x2="22.5" y2="7" />
    <line x1="20.5" y1="10" x2="22.5" y2="10" />
    <line x1="20.5" y1="13" x2="22.5" y2="13" />
    <line x1="20.5" y1="16" x2="22.5" y2="16" />

    {/* Stylized "V" trace */}
    <path d="M7.5 9.5 L9 13 L10.5 9.5" />

    {/* Clock/waveform trace */}
    <path d="M12 15 L14 15 L14 11 L16 11 L16 15 L18 15" />
  </svg>
);


const ReactIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#61DAFB" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="2"/>
    <g>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      <ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(120 12 12)"/>
    </g>
  </svg>
);

const CppIcon = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#00599C"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* C */}
    <path d="M16 7.5c-1.8-1.8-4.7-1.8-6.5 0-1.8 1.8-1.8 4.7 0 6.5 1.8 1.8 4.7 1.8 6.5 0" />

    {/* + signs */}
    <line x1="17.5" y1="9" x2="20.5" y2="9" />
    <line x1="19" y1="7.5" x2="19" y2="10.5" />

    <line x1="17.5" y1="13" x2="20.5" y2="13" />
    <line x1="19" y1="11.5" x2="19" y2="14.5" />
  </svg>
);



interface SkillPillProps {
  name: string;
  icon?: ReactNode;
}

interface Skill {
  name: string;
  icon?: ReactNode;
}

interface SkillCategory {
  icon: ReactNode;
  title: string;
  skills: Skill[];
}

function SkillPill({ name, icon }: SkillPillProps) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-800 text-gray-300 text-sm font-medium rounded-md transition-colors duration-200 hover:bg-neutral-700 hover:text-white">
      {icon}
      {name}
    </span>
  );
}

/**
 * A card for a category of skills, displaying them as pills.
 */


function SkillCategoryCard({ icon, title, skills }: SkillCategory) {
  return (
    <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 transition-transform duration-300 ease-in-out hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-5">
        {icon}
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillPill key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}

/**
 * The main SkillsSection container.
 */
function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      icon: <BrainCircuitIcon />,
      title: "AI & Machine Learning",
      skills: [
        { name: "Neural Networks" },
        { name: "Reinforcement Learning" },
        { name: "Deep Learning" },
        { name: "Generative AI" },
        { name: "Quantization" },
        { name: "Causal Inference" },
        { name: "LLM Fine-Tuning" },
      ]
    },
    {
      icon: <CloudCogIcon />,
      title: "Architecture & Ops",
      skills: [
        { name: "VHDL" , icon: <VHDLIcon />},
        { name: "Docker/Kubernetes", icon: <DockerIcon /> },
        { name: "CloudFormation" },
        { name: "Vector DBs" },
        { name: "Cuda and GPUs" },
        { name: "Git" },
      ]
    },
    {
      icon: <CodeIcon />,
      title: "Programming",
      skills: [
        { name: "Python", icon: <PythonIcon /> },
        { name: "C++", icon: <CppIcon /> },
        { name: "TypeScript" },
        { name: "Next.js/React", icon: <ReactIcon /> },
        { name: "PyTorch" },
        { name: "LangChain" },
      ]
    },
    {
      icon: <DataScienceIcon />,
      title: "Data Science",
      skills: [
        { name: "Feature Engineering" },
        { name: "Dimensionality Reduction" },
        { name: "Clustering" },
        { name: "Statistical Modeling" },
      ]
    }
  ];

  return (
    <section id="skills" className="container mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-5xl font-bold text-white mb-12"> <span className="text-green-400">03</span> / Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <SkillCategoryCard
            key={category.title}
            icon={category.icon}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;