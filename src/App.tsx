//TODO: --our components shouldn't know where they're being displayed
import React from 'react';
import Left from 'components/atom/left';
import Right from 'components/atom/right';
import SplitScreen from 'components/molecules/SplitScreen';

const App = () => {
  return (
    <div>
      <SplitScreen
        leftComponent={
          <Left>
            <p>Left</p>
          </Left>
        }
        rightComponent={
          <Right>
            <p>Right</p>
          </Right>
        }
      />
    </div>
  );
};

export default App;
