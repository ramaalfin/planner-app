import React, { useState } from 'react';

const SimpleGameWidget = () => {
  const [score, setScore] = useState(0);

  const handleClick = () => {
    setScore(prevScore => prevScore + 1);
  };

  return (
    <div>
      <h2>Simple Game Widget</h2>
      <p>Score: {score}</p>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
};

export default SimpleGameWidget;
