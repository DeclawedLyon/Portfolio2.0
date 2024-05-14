import React, { ReactNode } from 'react';

interface FullscreenCardProps {
  children: ReactNode;
  title?: string;
}

const FullscreenCard: React.FC<FullscreenCardProps> = ({ children, title }) => {
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-white bg-opacity-90`}>
      <div className={`w-full max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-xl`}>
        {title && <h2 className="text-2xl font-bold">{title}</h2>}
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FullscreenCard;
