

// Icon for the WorkItem hover state
const ViewProjectArrowIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 text-white transition-transform duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1"
  >
    <path 
      d="M5 19L19 5M19 5H5M19 5V19" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

import React from "react";

// 1. Define the interface for the project prop
interface WorkItemProject {
  title: string;
  description: string;
  imageUrl: string;
  bullets: string[];
  link: string;
}

// 2. Add the type annotation to the prop
function WorkItem({ project }: { project: WorkItemProject }) {
  const { title, description, imageUrl, bullets, link } = project;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full bg-neutral-900 overflow-hidden rounded-2xl"
    >
      {/* 1. Default State Content */}
      <div className="relative w-full transition-opacity duration-500 ease-in-out group-hover:opacity-0">
        {/* Image Area */}
        <div className="w-full h-64 bg-neutral-800 rounded-t-2xl">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fix TypeScript: cast target to HTMLImageElement
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src =
                "https://placehold.co/600x400/333/FFF?text=Project+Image";
            }}
          />
        </div>
        {/* Text Area */}
        <div className="p-6">
          <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            {bullets.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* 2. Hover State Content */}
      <div
        className="absolute inset-0 w-full h-full p-6
                  flex flex-col justify-between
                  bg-black/80 backdrop-blur-sm
                  opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
      >
        {/* Top Arrow */}
        <div className="w-full flex justify-end">
          <ViewProjectArrowIcon />
        </div>

        {/* Bottom Text */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
          <p className="text-lg text-gray-200 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}

export default WorkItem;