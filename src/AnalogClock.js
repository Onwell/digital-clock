import React, { useEffect, useState } from "react";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Calculate rotation angles for clock hands
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDeg = (seconds / 60) * 360;
  const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourDeg = (hours % 12 / 12) * 360 + (minutes / 60) * 30;

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-40 h-40 bg-white rounded-full border-4 border-gray-800 flex items-center justify-center shadow-lg">
        {/* Clock Center Dot */}
        <div className="absolute w-3 h-3 bg-gray-800 rounded-full z-10"></div>

        {/* Hour Hand */}
        <div className="absolute w-1 bg-gray-800 h-12 origin-bottom"
             style={{ transform: `rotate(${hourDeg}deg)` }}></div>

        {/* Minute Hand */}
        <div className="absolute w-1 bg-gray-600 h-16 origin-bottom"
             style={{ transform: `rotate(${minuteDeg}deg)` }}></div>

        {/* Second Hand */}
        <div className="absolute w-0.5 bg-red-500 h-20 origin-bottom"
             style={{ transform: `rotate(${secondDeg}deg)` }}></div>

        {/* Clock Markers */}
        {[...Array(12)].map((_, i) => (
          <div key={i} className="absolute w-1 h-3 bg-gray-800 origin-center"
               style={{ transform: `rotate(${i * 30}deg) translateY(-75px)` }}></div>
        ))}
      </div>
    </div>
  );
};

export default AnalogClock;
