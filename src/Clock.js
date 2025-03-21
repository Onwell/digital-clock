import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [darkMode, setDarkMode] = useState(true);
  const [timeZone, setTimeZone] = useState("Africa/Harare");
    const [is24Hour, setIs24Hour] = useState(false); 

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

 // Format time based on selected time zone and format
  const formattedTime = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: !is24Hour, // Toggle between 12-hour and 24-hour format
  }).format(time);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    timeZone,
    dateStyle: "full",
  }).format(time);

  return (
    <div style={{ ...styles.clockContainer, backgroundColor: darkMode ? "#282c34" : "#f5f5f5", color: darkMode ? "white" : "black" }}>
      <div style={styles.clockContent}>
        <h2 style={styles.date}>{formattedDate}</h2>
        <h1 style={styles.time}>{formattedTime}</h1>
        
        {/* Time Zone Selector */}
        <select style={styles.select} value={timeZone} onChange={(e) => setTimeZone(e.target.value)}>
          
          <option value="Africa/Harare">Harare (CAT)</option>
          <option value="America/New_York">New York (EST)</option>
          <option value="Europe/London">London (GMT)</option>
          <option value="Asia/Tokyo">Tokyo (JST)</option>
        </select>

         {/* 12-hour / 24-hour Toggle */}
      <button style={styles.button2}
        onClick={() => setIs24Hour(!is24Hour)}
      >
        {is24Hour ? "Switch to 12-Hour Format" : "Switch to 24-Hour Format"}
      </button>

        {/* Dark/Light Mode Toggle */}
        <button style={styles.button} onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
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
    textAlign: "center",
    transition: "background-color 0.3s ease, color 0.3s ease",
  },
  clockContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  date: {
    fontSize: "1.5rem",
    marginBottom: "10px",
    fontFamily: "Arial, sans-serif",
  },
  time: {
    fontSize: "3rem",
    fontFamily: "Arial, sans-serif",
  },
  select: {
    margin: "10px 0",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    marginTop: "10px",
  },
  button2: {
    padding: "10px 20px",
    fontSize: "1rem",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "rgb(12 131 98)",
    color: "white",
    border: "none",
    marginTop: "10px",
  },
};

export default Clock;
