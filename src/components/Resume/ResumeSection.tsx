import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function ResumeSection({ title, children }: Props) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold border-b-2 border-gray-200 pb-1 mb-4 uppercase">
        {title}
      </h3>
      {children}
    </div>
  );
}
