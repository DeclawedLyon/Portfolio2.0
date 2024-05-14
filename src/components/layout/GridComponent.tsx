import React from 'react';

interface GridComponentProps {
  children: React.ReactNode;
  columns?: number; // Optional prop to set the number of columns
  padding?: 1 | 2 | 4 | 6 | 8 | 10
}

const GridComponent: React.FC<GridComponentProps> = ({ 
  children, 
  columns = 3,
  padding
}) => {
  return (
    <div className={`relative grid grid-cols-${columns} gap-4 justify-stretch w-full h-full ${padding && `p-${padding}`}`}>
      {children}
    </div>
  );
};

export default GridComponent;