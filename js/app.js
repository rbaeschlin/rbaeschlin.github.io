// Search to filter to certain images
// return search value as lower case
// loop through image's data titles
// compare search to data-title for matches
// display images matching search term
// else display no images

const searchBar = document.getElementById("searchbar");

searchBar.addEventListener("keyup", event => {
  const searchString = event.target.value.toLowerCase();
  const images = document.getElementsByTagName("a");

  for (let i = 0; i < images.length; i++) {
    const search = images[i].getAttribute("data-title");
    if (search.toLowerCase().indexOf(searchString) > -1) {
      images[i].parentNode.style.display = "";
    } else {
      images[i].parentNode.style.display = "none";
    }
  }
});