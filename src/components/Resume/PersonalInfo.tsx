import React from "react";
import { Resume } from "../../types/resume";

interface Props {
  personalInfo: Resume["personalInfo"];
}

export default function PersonalInfo({ personalInfo }: Props) {
  return (
    <div className="p-4 border-b">
      <h1 className="text-2xl font-bold">{personalInfo.name}</h1>
      <h2 className="text-lg text-gray-600">{personalInfo.title}</h2>
      <p>{personalInfo.email} | {personalInfo.phone} | {personalInfo.location}</p>
      <p className="mt-2 text-sm">{personalInfo.summary}</p>
    </div>
  );
}
