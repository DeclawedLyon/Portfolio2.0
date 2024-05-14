import React, { FunctionComponent, ReactElement } from 'react'

interface SplitScreenProps {
  children: ReactElement[];
  topWeight?: number;
  bottomWeight?: number;
  topCentered?: boolean;
  bottomCentered?: boolean;
}

const Column: FunctionComponent<SplitScreenProps> = ({
  children,
  topWeight = 1,
  bottomWeight = 1,
  topCentered,
  bottomCentered
}): ReactElement => {
  const topStyle = { flexGrow: topWeight };
  const bottomStyle = { flexGrow: bottomWeight };

  const [top, bottom] = children;

  return (
    <div className="flex flex-col w-full h-full">
      <div style={topStyle} className={`border-r w-full h-full border-b flex flex-col ${topCentered && 'items-center'}`}>
        {top}
      </div>
      <div style={bottomStyle} className={`w-full h-full flex flex-col ${bottomCentered && 'items-center'}`}>
        {bottom}
      </div>
    </div>
  );
};

export default Column