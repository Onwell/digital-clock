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
      <div style={styles.clockContent}>
        <h2 style={styles.date}>{time.toDateString()}</h2>
        <h1 style={styles.time}>{time.toLocaleTimeString()}</h1>
      </div>
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
    fontSize: "2rem",
    textAlign: "center",
  },
  clockContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  date: {
    fontSize: "2rem",
    marginBottom: "10px",
    fontFamily: "Arial, sans-serif",
  },
  time: {
    fontSize: "5rem",
    fontFamily: "Arial, sans-serif",
  },
};

export default Clock;
