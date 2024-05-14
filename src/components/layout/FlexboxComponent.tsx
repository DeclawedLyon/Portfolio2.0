import React from 'react';

interface FlexboxComponentProps {
  children: React.ReactNode;
  direction?: 'row' | 'col'; // Optional prop to set the flex direction
}

const FlexboxComponent: React.FC<FlexboxComponentProps> = ({ children, direction = 'row' }) => {
  return (
    <div className={`relative flex flex-${direction} gap-4`}>
      {children}
    </div>
  );
};

export default FlexboxComponent;