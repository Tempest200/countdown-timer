# ⏳ React Countdown Timer

A fully functional and customizable **countdown timer** built with **React.js**, allowing users to set a future date/time and see the remaining time in days, hours, minutes, and seconds. The timer updates in real time and displays a message when the countdown ends.

---

## 🚀 Live Demo

[🔗 View the Live Demo](https://Tempest200.github.io/countdown-timer)  


---

## 🎯 Features

✅ Select a future date and time using a datetime picker  
✅ Live countdown updates every second  
✅ Displays time left in days, hours, minutes, and seconds  
✅ Message shown when countdown reaches zero  
✅ Simple, responsive UI using pure CSS  
✅ Clean, well-commented code structure

---

## 🧠 How It Works

1. User picks a date/time via the `datetime-local` input field.
2. Clicking **Start** triggers `setInterval()` which:
   - Calculates the difference between now and the target time.
   - Converts milliseconds into days, hours, minutes, and seconds.
   - Updates the UI every second using React state.
3. When the timer hits zero, the countdown stops and shows `"Time's up!"`.

---

## 🛠️ Technologies Used

- **React** – front-end library for building UI
- **JavaScript** – countdown logic and state management
- **HTML5** – semantic structure
- **CSS3** – custom styling

---

## 🧩 File Structure

react-countdown-timer/

├── public/
| |
│ └── index.html
|
├── src/
| |
│ ├── CountdownTimer.jsx # Main countdown component with logic
| |
│ ├── CountdownTimer.css # Styling for the timer
| |
│ └── App.js # Renders the countdown component
|
├── package.json
|
└── README.md


## 💻 Run Locally

```bash
# Clone the project
git clone https://github.com/Tempest200/countdown-timer.git
cd countdown-timer

# Install dependencies
npm install

# Start development server
npm start