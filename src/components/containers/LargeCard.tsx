import React from "react";

interface LargeCardProps {
  children: React.ReactNode;
}

const LargeCard: React.FC<LargeCardProps> = ({ children }) => {
  return (
    <div className="max-w-lg p-6 bg-white rounded-lg shadow-md">
      {children}
    </div>
  );
};

export default LargeCard