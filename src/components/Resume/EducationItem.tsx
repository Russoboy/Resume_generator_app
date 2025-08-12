import { Education } from "../../types/resume";

interface Props {
  edu: Education;
}

export default function EducationItem({ edu }: Props) {
  return (
    <div className="mb-3">
      <h4 className="font-semibold">{edu.degree}</h4>
      <div className="text-sm text-gray-500">{edu.institution} — {edu.dates}</div>
    </div>
  );
}
