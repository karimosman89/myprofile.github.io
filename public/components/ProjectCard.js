// components/ProjectCard.js

import Link from 'next/link';

const ProjectCard = ({ title, description, link, image }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <Link href={link}
         className="text-blue-400 hover:text-blue-600 transition-colors duration-300 font-bold">
          View Project
        
      </Link>
    </div>
  </div>
);

export default ProjectCard;

