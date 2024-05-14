import React, { FunctionComponent, ReactElement } from 'react'

interface SplitScreenProps {
  children: ReactElement[];
  leftWeight?: number;
  rightWeight?: number;
}

const SplitScreen: FunctionComponent<SplitScreenProps> = ({
  children,
  leftWeight = 1,
  rightWeight = 1
}): ReactElement => {
  const leftStyle = { flexGrow: leftWeight };
  const rightStyle = { flexGrow: rightWeight };

  const [left, right] = children;

  return (
    <div className="flex flex-row border w-full h-full">
      <div style={leftStyle} className="border-r w-full h-full">
        {left}
      </div>
      <div style={rightStyle} className="w-full h-full">
        {right}
      </div>
    </div>
  );
};

export default SplitScreen