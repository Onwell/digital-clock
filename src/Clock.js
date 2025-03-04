import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div style={styles.clockContainer}>
      <h1 style={styles.time}>{time.toLocaleTimeString()}</h1>
    </div>
  );
};

const styles = {
  clockContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#282c34",
    color: "white",
    fontSize: "3rem",
  },
  time: {
    fontFamily: "Arial, sans-serif",
  },
};

export default Clock;
