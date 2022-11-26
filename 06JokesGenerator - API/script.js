const button = document.querySelector("#jokeBtn");
const jokeSection = document.querySelector("#joke");

//let API =
//"https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
  
button.addEventListener("click", acquireJoke);

  function acquireJoke() {
    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single')
    .then((info) => {
        return info.json();
    })
    .then((item) => {
        jokeSection.textContent = `${item.value}`;
})
  }

      


