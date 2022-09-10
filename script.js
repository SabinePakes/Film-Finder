RadioBtns = document.getElementsByName("filter_btn");
ListMovieHere = document.getElementById("container");
document.addEventListener("DOMContentLoaded", function () {
  ListAllMovies(movies);
});

for (let i of RadioBtns) {
  i.addEventListener("change", function (event) {
    target = event.target;
    selector = target.id;
    HandleOnChangeEvent(target, selector);
  });
}

function HandleOnChangeEvent() {
  switch (selector) {
    case "latest":
      ByLatest = movies
        .filter((movies) => movies.year > "2014")
        .map((movies) => movies);
      ResetAll();
      ListAllMovies(ByLatest);
      console.log(ByLatest);
      break;
    case "avenger":
      ByAvenger = movies
        .filter((movies) => movies.title.includes("Avengers"))
        .map((movies) => movies);
      ResetAll();
      ListAllMovies(ByAvenger);
      console.log(ByAvenger);
      break;
    case "x-men":
      ByXmen = movies
        .filter((movies) => movies.title.includes("X-Men"))
        .map((movies) => movies);
      ResetAll();
      ListAllMovies(ByXmen);
      console.log(ByXmen);
      break;
    case "princess":
      ByPrincess = movies
        .filter((movies) => movies.title.includes("Princess", "princess"))
        .map((movies) => movies);
      ResetAll();
      ListAllMovies(ByPrincess);
      console.log(ByPrincess);
      break;
    case "batman":
      ByBatMan = movies
        .filter((movies) => movies.title.includes("Batman"))
        .map((movies) => movies);
      ResetAll();
      ListAllMovies(ByBatMan);
      console.log(ByBatMan);
      break;
    case "all_movies":
      ByAllmovies = movies;
      ResetAll();
      ListAllMovies(ByAllmovies);
      console.log(ByAllmovies);
      break;
    case "search_movies":
      BySearchMovies = movies
        .filter(
          (movies) =>
            movies.title.includes(value) +
            movies.year.includes(value) +
            movies.type.includes(value)
        )
        .map((movies) => movies);
      ResetAll();
      // een if statement in een switch
      if (BySearchMovies.length == 0) {
        search_movies.value = "No results found";
        console.log(search_movies.value)
        return;
      } else ListAllMovies(BySearchMovies);
      console.log(BySearchMovies);
      break;
  }
}

const ResetAll = function () {
  var nodes = document.getElementById("container").getElementsByTagName("img");
  for (var i = 0, len = nodes.length; i != len; ++i) {
    nodes[0].parentNode.removeChild(nodes[0]);
  }
};

const ListAllMovies = function (movies) {
  movies.forEach((movies) => {
    let ListA = document.createElement("a");
    let ListImg = document.createElement("img");
    ListA.href = "https://www.imdb.com/title/" + movies.imdbID ;
    ListImg.src = movies.poster;
    ListMovieHere.appendChild(ListA);
    ListA.appendChild(ListImg);
  });
};