import React, { ReactNode } from "react";

interface IFullScreenWindowProps {
  children: ReactNode;
  weight?: 'left' | 'right' | 'center';
  windowStyles?: string;
  marginTopDisabled?: boolean;
  marginBottomDisabled?: boolean;
  leftPadding?: boolean;
  rightPadding?: boolean;
}

const FullScreenwindow: React.FC<IFullScreenWindowProps> = ({ 
  children, 
  weight = 'center',
  windowStyles,
  marginTopDisabled,
  marginBottomDisabled,
  leftPadding,
  rightPadding
}) => {
  const alignmentClass = {
    left: 'items-start',
    center: 'items-center',
    right: 'items-end'
  }[weight]
  
  return (
    <div className={`relative w-full bg-slate-600 h-screen flex flex-col justify-center ${alignmentClass} ${windowStyles} ${marginTopDisabled || 'mt-2'} ${marginBottomDisabled || 'mb-2'} ${leftPadding && 'pl-10'} ${rightPadding && 'pr-10'}`}>
      {children}
    </div>
  );
};

export default FullScreenwindow