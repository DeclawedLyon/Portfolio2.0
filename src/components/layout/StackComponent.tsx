import React from 'react';

interface StackComponentProps {
  children: React.ReactNode;
  spacing?: number; 
}

const StackComponent: React.FC<StackComponentProps> = ({ children, spacing = 4 }) => {
  return (
    <div className={`relative space-y-${spacing}`}>
      {children}
    </div>
  );
};

export default StackComponent;