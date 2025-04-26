import { movies } from "./data.js";

console.log(movies);

let dom_container = document.querySelector(".dom_container");

let all = document.querySelector("#all");
let action = document.querySelector("#action");
let thriller = document.querySelector("#thriller");
let animation = document.querySelector("#animation");
let horror = document.querySelector("#horror");
let drama = document.querySelector("#drama");
let scifi = document.querySelector("#sci-fi");

let showData = (movies) => {
  dom_container.innerHTML = movies
    .map(
      (movie) => `
<div class="main">
<div class="hover_effect">
<img src=${movie.poster_path} class="img"/>
</div>
<h5>${movie.title}</h5>
<p>${movie.release_date}</p>
</div>
`
    )
    .join("");
};

showData(movies)

action.addEventListener('click',()=>{
    let newMoview = movies.filter((movie)=>movie.category === 'Action')
    showData(newMoview)
})
thriller.addEventListener('click',()=>{
    let newMoview = movies.filter((movie) => movie.category === "Thriller");
    showData(newMoview)
})
horror.addEventListener('click',()=>{
    let newMoview = movies.filter((movie)=>movie.category === 'Horror')
    showData(newMoview)
})
drama.addEventListener('click',()=>{
    let newMoview = movies.filter((movie)=>movie.category === 'Drama')
    showData(newMoview)
})
scifi.addEventListener('click',()=>{
    let newMoview = movies.filter((movie) => movie.category === "Sci-Fi");
    showData(newMoview)
})
animation.addEventListener('click',()=>{
    let newMoview = movies.filter((movie) => movie.category === "Animation");
    showData(newMoview)
})
all.addEventListener('click',()=>{
    showData(movies)
})