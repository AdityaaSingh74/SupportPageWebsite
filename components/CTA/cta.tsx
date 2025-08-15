import React from 'react';

interface CTAProps {
  text?: string;
  href?: string;
  title?: string;
  onClick?: () => void;
  className?: string;
}

const CTA: React.FC<CTAProps> = ({ 
  text = "!! TEST !!", 
  href = "#", 
  title = "Premade Button",
  onClick,
  className = ""
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center gap-4 group ${className}`}>
      <div className="absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
      <a
        role="button"
        className="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
        title={title}
        href={href}
        onClick={onClick}
      >
        {text}
        <svg
          aria-hidden="true"
          viewBox="0 0 10 10"
          height="10"
          width="10"
          fill="none"
          className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
        >
          <path
            d="M0 5h7"
            className="transition opacity-0 group-hover:opacity-100"
          ></path>
          <path
            d="M1 1l4 4-4 4"
            className="transition group-hover:translate-x-[3px]"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default CTA;