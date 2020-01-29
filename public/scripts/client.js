// Convert Numbers to display the tweet time.
const getDate = function(time) {
  //Calculates how long ago a tweet was in an appropriate unit.
  let ms = new Date() - new Date(time);
  let s = ms / 1000;
  let min = s / 60;
  let h = min / 60;
  let days = h / 24;
  let months = days / 30; // Not exact, but a good enough approximation for our purposes (users will only need a general idea of when the tweet was made)
  let years = months / 12;

  if (ms < 1000) {
    return "1 second";
  } else if (s < 60) {
    return Math.floor(s) + " seconds ago";
  } else if (min < 60) {
    return Math.floor(min) + " minutes ago";
  } else if (h < 24) {
    return Math.floor(h) + " hours ago";
  } else if (days < 30) {
    return Math.floor(days) + " days ago";
  } else if (months < 12) {
    return Math.floor(months) + " months ago";
  } else {
    return Math.floor(years) + " years ago";
  }
};

//Creating Tweet Element
const createTweetElement = function(data) {
  return `

  <article class='tweet'>
    <div class="tweet-header">
      <img src="${data.user.avatars}">
      <h3 class="tweet-name">${data.user.name}</h3>
      <h3 class="handle">${data.user.handle}</h3>
    </div>

    <div class="text">${escape(data.content.text)}</div><br />

            <span class="tweet-time">${getDate(data.created_at)}</span>
    <div class="tweet-icons">
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </div>
  </article>
   `;
};

