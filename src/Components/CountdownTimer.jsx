import React, { useState, useEffect } from 'react';
import './CountdownTimer.css'; // External CSS for styling

// Main Countdown Timer component
const CountdownTimer = () => {
  // State to hold the user-selected target date and time
  const [targetTime, setTargetTime] = useState('');

  // State to hold remaining time parts: days, hours, minutes, seconds
  const [timeLeft, setTimeLeft] = useState({});

  // Flag to determine if the countdown is active
  const [isActive, setIsActive] = useState(false);

  // Message to display when the countdown ends
  const [message, setMessage] = useState('');

  // useEffect sets up and cleans up the interval for countdown updates
  useEffect(() => {
    let timer;

    // Start interval only when countdown is active and target time is set
    if (isActive && targetTime) {
      timer = setInterval(() => {
        const now = new Date().getTime(); // Current timestamp
        const distance = new Date(targetTime).getTime() - now; // Time difference

        // If target time is reached or passed
        if (distance <= 0) {
          clearInterval(timer);
          setIsActive(false);
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          setMessage("⏰ Time's up!");
        } else {
          // Calculate remaining time parts
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Update state
          setTimeLeft({ days, hours, minutes, seconds });
          setMessage('');
        }
      }, 1000); // Update every second
    }

    // Cleanup interval on component unmount or when dependencies change
    return () => clearInterval(timer);
  }, [isActive, targetTime]);

  // Called when the "Start" button is clicked
  const startCountdown = () => {
    if (!targetTime) {
      alert('Please select a valid date and time.');
      return;
    }
    setIsActive(true); // Activate the countdown
  };

  // JSX for rendering the timer UI
  return (
    <div className="countdown-container">
      <h1>Countdown Timer</h1>

      {/* Date-time input and Start button */}
      <div className="input-section">
        <input
          type="datetime-local"
          value={targetTime}
          onChange={(e) => setTargetTime(e.target.value)} // Save input value
        />
        <button onClick={startCountdown}>Start</button>
      </div>

      {/* Display remaining time parts */}
      <div className="countdown-display">
        <span>{timeLeft.days || 0}</span> Days
        <span>{timeLeft.hours || 0}</span> Hours
        <span>{timeLeft.minutes || 0}</span> Minutes
        <span>{timeLeft.seconds || 0}</span> Seconds
      </div>

      {/* Message when countdown ends */}
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default CountdownTimer;
