import type { Skill } from "../types";

interface Props {
    skill: Skill;   
}

export const SkillCard = ({skill}: Props) => {
  return (
    <div className="gap-6">
        <div
          className="bg-white p-8 rounded-2xl shadow-sm border border-transparent hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
        >
          {/* Slide effect no footer do card */}
          <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-300 group-hover:w-full"></div>

          <h4 className="font-bold text-xl text-purple-600 mb-2">
            {skill.title}
          </h4>
          <p className="text-sm text-gray-500 mb-4">{skill.description}</p>
          <ul className="space-y-2">
            {skill.items.map((item, idx) => (
              <li key={idx} className="text-sm flex items-center gap-2">
                <span className="text-green-500">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
};
