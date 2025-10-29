import React from "react";

interface SectionHeaderProps {
  title: string;
  color?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({title,color = "bg-red-500",}) => (
  <div className="flex items-center gap-2 mb-4">
    <div className={`w-2 h-6 rounded ${color}`}></div>
    <p className="text-red-500 font-semibold text-lg">{title}</p>
  </div>
);

export default SectionHeader;
