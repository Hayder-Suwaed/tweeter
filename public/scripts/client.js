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

// To escape unsafe characters
const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

// Rendering the Tweets
function renderTweets(tweets) {
  $("#tweet-container").empty();
  tweets.forEach((tweet) => {
    const newtweet = createTweetElement(tweet);
    $("#tweet-container").prepend(newtweet);
  });
}

// Load the Tweets
const loadTweets = function() {
  $.ajax("/tweets/", {
    method: "GET"
  }).then((tweets) => {
    renderTweets(tweets);
  });
};

$(document).ready(function() {
  loadTweets();
  $("#form").on("submit", function(event) {
    event.preventDefault();
    loadTweets();
    const tweetForm = $(this).serialize();
    const input = $("#text").val();
    if (input.length > 140) {
      $(".alert2").css("display", "block");
      $(".alert").css("display", "none");
    } else if (input.length === 0) {
      $(".alert").css("display", "block");
      $(".alert2").css("display", "none");
    } else if (!input.trim()) {
      $(".alert").css("display", "block");
    } else {
      $.ajax({
        type: "POST",
        url: "/tweets",
        //returns "text=string"
        data: tweetForm,
        success: function(form) {
          console.log("POST request completed correctly.", form);
          loadTweets();
          $("#text").val("");
        }
      });
    }
    loadTweets();
  });
  $(".arrow").on("click", function() {
    $(".toggle").toggle();
    $("#text").focus();
  });
  $(".closebtn").on("click", function() {
    $(".alert").css("display", "none");
  });
  $(".closebtn1").on("click", function() {
    $(".alert2").css("display", "none");
  });
});

//Reveals scroll-to-top-of-page button when user scrolls down page
$(document).ready(() => {
  $(window).scroll(() => {
    if ($(window).scrollTop() > 400) {
      $(".float-button:hidden")
        .show()
        .animate({ opacity: 0.9 }, 1500);
    } else if ($(window).scrollTop() <= 400) {
      $(".float-button:visible").fadeOut(1000);
    }
  });
});

//Scrolls window to top of page when button is clicked
$(document).ready(() => {
  $(".float-button").click(() => {
    if ($(window).width() < 1024) {
      $("html, body").animate({ scrollTop: 400 }, "slow");
    } else {
      $("html, body").animate({ scrollTop: 0 }, "slow");
    }
  });
});
