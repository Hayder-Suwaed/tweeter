/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Convert Numbers to display the tweet time.
const date = (date) => {
  const milliseconds = Math.round(Date.now() - date);
  const millisecondsInDay = 1000 * 60 * 60 * 24;
  const millisecondsInHours = 1000 * 60 * 60;
  const millisecondsInMinutes = 1000 * 60;
  if (milliseconds < millisecondsInDay && milliseconds > millisecondsInHours) {
    return `${Math.round(milliseconds / millisecondsInHours)} hours ago`;
  } else if (
    milliseconds < millisecondsInHours &&
    milliseconds > millisecondsInMinutes
    
  ) {
    return `${Math.round(milliseconds / millisecondsInMinutes)} minutes ago`;
  } else if (milliseconds < millisecondsInMinutes) {
    return `${Math.round(milliseconds / 1000)} seconds ago`;
  } else {
    return `${Math.round(milliseconds / millisecondsInDay)} days ago`;
  }
};
