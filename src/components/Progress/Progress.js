import React from 'react';

const Progress = ({ value }) => {
  const percent = `${value}%`;

  return (
      <div className="ui progress" data-percent={value}>
        <div className="bar" style={`width:${percent}`}>
          <div className="progress">{percent}</div>
        </div>
      </div>
  );
};

export default Progress;
