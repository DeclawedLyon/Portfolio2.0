import React, { ReactNode } from "react";

interface IFullScreenWindowProps {
  children: ReactNode;
  weight?: 'left' | 'right' | 'center';
  windowStyles?: string;
  marginTopDisabled?: boolean;
  marginBottomDisabled?: boolean;
}

const FullScreenwindow: React.FC<IFullScreenWindowProps> = ({ 
  children, 
  weight = 'center',
  windowStyles,
  marginTopDisabled,
  marginBottomDisabled
}) => {
  const alignmentClass = {
    left: 'items-start pl-10',
    center: 'items-center',
    right: 'items-end pr-10'
  }[weight]
  
  return (
    <div className={`relative w-full bg-slate-600 h-screen flex flex-col justify-center ${alignmentClass} ${windowStyles} ${marginTopDisabled || 'mt-2'} ${marginBottomDisabled || 'mb-2'}`}>
      {children}
    </div>
  );
};

export default FullScreenwindow