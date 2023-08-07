const text =document.getElementById("content");
const button =document.getElementById("btn");

const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount=10";

let getjoke = () =>{
    fetch(url)
    .then(data=> data.json())
  
    .then(item => 
        {
            const jokes = item.jokes;
            if (jokes.length > 0) {
                // Generate a random index within the range of the number of jokes
                const randomIndex = Math.floor(Math.random() * jokes.length);
                
                // Get the random joke using the random index
                const randomJoke = jokes[randomIndex].joke;
                
                // Display the random joke
                text.textContent = randomJoke   ;
              } else {
                console.log("No jokes found.");
              }
        }
    )
}

button.addEventListener("click",getjoke)
