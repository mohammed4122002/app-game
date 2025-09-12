import React from "react";

const SectionTitle = ({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) => {
  return (
    <div className={`${className || ""}`}>
      <div className="inline-block">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-fuchsia-300 via-rose-300 to-purple-300 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
        <div className="mt-1 h-1 w-24 sm:w-28 rounded-full bg-gradient-to-r from-fuchsia-500 via-rose-500 to-purple-600" />
      </div>
      {subtitle ? (
        <p className="mt-2 text-sm text-gray-200 max-w-2xl">{subtitle}</p>
      ) : null}
    </div>
  );
};

export default SectionTitle;


