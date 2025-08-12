import { Experience } from "../../types/resume";

interface Props {
  exp: Experience;
}

export default function ExperienceItem({ exp }: Props) {
  return (
    <div className="mb-4">
      <h4 className="font-semibold">{exp.title}</h4>
      <div className="text-sm text-gray-500">{exp.company} — {exp.dates}</div>
      <ul className="list-disc ml-5 mt-2 text-sm">
        {exp.responsibilities.map((res, i) => (
          <li key={i}>{res}</li>
        ))}
      </ul>
    </div>
  );
}
