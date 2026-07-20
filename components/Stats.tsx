import React from "react";

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col text-left gap-[12px]">
      <span className="text-[12px] font-medium text-[#FFF] leading-[16px] tracking-normal">
        {value}
      </span>
      <span className="text-[12px] font-normal text-[#FFF] leading-[16px] uppercase whitespace-nowrap">
        {label}
      </span>
    </div>
  );
};

export default function Stats() {
  const stats = [
    { value: "95%", label: "Client Satisfaction" },
    { value: "2015", label: "Founded" },
    { value: "24h", label: "Response" },
    { value: "40+", label: "Countries Served" },
  ];

  return (
    <div className="grid grid-cols-2 md:flex md:flex-row items-start md:items-center gap-x-6 md:gap-x-12 gap-y-4 md:gap-y-0 select-none">
      {stats.map((stat, index) => (
        <React.Fragment key={stat.label}>
          <div className="hidden md:block h-8 w-[1px] bg-white/20 self-center" aria-hidden="true" style={{ display: index === 0 ? 'none' : undefined }} />
          <StatItem value={stat.value} label={stat.label} />
        </React.Fragment>
      ))}
    </div>
  );
}
