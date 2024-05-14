import React, { ReactNode } from "react";

interface LargeCardProps {
  children: ReactNode;
}

const LargeCard: React.FC<LargeCardProps> = ({ children }) => {
  return (
    <div className={`relative max-w-lg p-6 bg-white rounded-lg shadow-md`}>
      {children}
    </div>
  );
};

export default LargeCard