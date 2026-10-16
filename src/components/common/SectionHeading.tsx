import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  highlight?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  highlight,
  centered = true,
  dark = false,
  className = '',
}) => {
  return (
    <div className={`space-y-2 mb-8 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className={`text-2xl md:text-4xl font-bold ${dark ? 'text-white' : 'text-[var(--color-dark)]'}`}>
        {title}{' '}
        {highlight && <span className="text-[var(--color-primary)]">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={`text-sm md:text-base max-w-3xl ${centered ? 'mx-auto' : ''} ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
