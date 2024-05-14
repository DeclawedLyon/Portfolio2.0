import React from 'react';

interface GridComponentProps {
  children: React.ReactNode;
  columns?: number; // Optional prop to set the number of columns
}

const GridComponent: React.FC<GridComponentProps> = ({ children, columns = 3 }) => {
  return (
    <div className={`grid grid-cols-${columns} gap-4`}>
      {children}
    </div>
  );
};

export default GridComponent;