// App.js
import React, { useState } from 'react';
import InputForm from './components/InputForm.js';
import OutputDisplay from './components/OutputDisplay';
import WeeklyPlan from './components/WeeklyPlan';

function App() {
  const [results, setResults] = useState(null);

  const calculateResults = (distance, time, unit) => {
    // Convert distance to meters
    const distanceInMeters = unit === 'km' ? distance * 1000 : distance * 1609.34;
    
    // Convert time to seconds
    const [hours, minutes, seconds] = time.split(':').map(Number);
    const timeInSeconds = hours * 3600 + minutes * 60 + seconds;

    // Calculate VDOT
    const vdot = Math.sqrt(distanceInMeters / timeInSeconds) * 1.067;

    // Calculate race pace in minutes per km
    const racePace = timeInSeconds / (distanceInMeters / 1000) / 60;

    // Calculate training paces
    const paces = {
      easy: racePace * 1.3,
      marathon: racePace * 1.18,
      threshold: racePace * 1.08,
      interval: racePace * 0.95,
      repetition: racePace * 0.87
    };

    setResults({ vdot, paces });
  };

  return (
    <div className="App">
      <h1>Running Calculator</h1>
      <InputForm onCalculate={calculateResults} />
      {results && <OutputDisplay results={results} />}
      <WeeklyPlan />
    </div>
  );
}

export default App;