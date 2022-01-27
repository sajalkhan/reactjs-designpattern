import React from 'react';
import './index.scss';

interface splitScreenProps {
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
}

const SplitScreen: React.FC<splitScreenProps> = ({ leftComponent, rightComponent }) => {
  return (
    <div className="m-split-screen">
      {leftComponent && <div className="m-split-screen--left">{leftComponent}</div>}
      {rightComponent && <div className="m-split-screen--right">{rightComponent}</div>}
    </div>
  );
};

export default SplitScreen;
