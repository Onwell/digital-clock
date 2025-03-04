import React from "react";
import Clock from "./Clock";
import AnalogClock from "./AnalogClock";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <Clock />
      <AnalogClock />
    </div>
  );
}

export default App;
