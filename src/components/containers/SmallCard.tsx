import React from 'react';

interface SmallCardProps {
  children: React.ReactNode;
}

const SmallCard: React.FC<SmallCardProps> = ({ children }) => {
  return (
    <div className="max-w-sm p-4 bg-white rounded-lg shadow-md">
      {children}
    </div>
  );
};

export default SmallCard;