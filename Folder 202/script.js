console.log("Script running");

const APILINK =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w185";

const main = document.getElementById("section");
console.log("SECTION:", main);

fetch(APILINK)
  .then(res => {
    console.log("Response status:", res.status);
    return res.json();
  })
  .then(data => {
    console.log("Movies received:", data.results.length);

    data.results.forEach(movie => {
      const img = document.createElement("img");
      img.src = IMGPATH + movie.poster_path;
      img.style.border = "2px solid red";
      img.style.margin = "10px";
      main.appendChild(img);
    });
  })
  .catch(err => console.error("FETCH ERROR:", err));
