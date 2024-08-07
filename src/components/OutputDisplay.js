// components/OutputDisplay.js
import React from 'react';

function OutputDisplay({ results }) {
  const { vdot, paces } = results;

  return (
    <div>
      <h2>Results</h2>
      <p>VDOT: {vdot.toFixed(2)}</p>
      <h3>Training Paces (minutes per km)</h3>
      <ul>
        <li>Easy/Recovery: {paces.easy.toFixed(2)}</li>
        <li>Marathon: {paces.marathon.toFixed(2)}</li>
        <li>Threshold: {paces.threshold.toFixed(2)}</li>
        <li>Interval: {paces.interval.toFixed(2)}</li>
        <li>Repetition: {paces.repetition.toFixed(2)}</li>
      </ul>
    </div>
  );
}

export default OutputDisplay;