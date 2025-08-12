import { SkillCategory } from "../../types/resume";

interface Props {
  skillCategory: SkillCategory;
}

export default function SkillList({ skillCategory }: Props) {
  return (
    <div className="mb-4">
      <h4 className="font-semibold">{skillCategory.category}</h4>
      <ul className="flex flex-wrap gap-2 mt-1">
        {skillCategory.skills.map((skill, i) => (
          <li key={i} className="px-2 py-1 bg-gray-100 text-xs rounded">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
