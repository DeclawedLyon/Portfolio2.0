import React, { ReactNode } from "react";

interface IFullScreenWindowProps {
  children: ReactNode;
  weight?: 'left' | 'right' | 'center';
  windowStyles?: string;
}

const FullScreenwindow: React.FC<IFullScreenWindowProps> = ({ children, weight = 'center' }) => {
  const alignmentClass = {
    left: 'items-start pl-10',
    center: 'items-center',
    right: 'items-end pr-10'
  }[weight]
  
  return (
    <div className={`w-full h-screen flex flex-col justify-center ${alignmentClass}`}>
      {children}
    </div>
  );
};

export default FullScreenwindow