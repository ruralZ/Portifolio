import type { Skill } from "../types";

interface Props {
    skill: Skill;   
}

export const SkillCard = ({skill}: Props) => {
  return (
    <div className="h-full">
        <div
          className="h-full flex flex-col justify-between bg-white p-7 rounded-2xl shadow-sm border border-transparent hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
        >
          {/* Slide effect no footer do card */}
          <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-300 group-hover:w-full"></div>

          <div>
            <h4 className="font-bold text-xl text-purple-600 mb-2">
              {skill.title}
            </h4>
            <p className="text-sm text-gray-500 mb-4">{skill.description}</p>
          </div>

          <ul className="space-y-2 pt-2 border-t border-gray-100">
            {skill.items.map((item, idx) => (
              <li key={idx} className="text-sm flex items-center gap-2 text-gray-700">
                <span className="text-green-500 font-bold">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
};
