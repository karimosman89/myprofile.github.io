// components/SkillBar.js

const SkillBar = ({ skill, level }) => (
  <div className="mt-2 w-full">
    <div className="flex justify-between mb-1">
      <span className="text-gray-300">{skill}</span>
      <span className="text-gray-300">{level}</span>
    </div>
    <div className="bg-gray-700 rounded h-2">
      <div
        className="bg-blue-500 rounded h-full transition-width duration-500 ease-in-out"
        style={{ width: level }}  // level is passed as width percentage
      />
    </div>
  </div>
);

export default SkillBar;
