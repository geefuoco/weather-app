const searchBar = () => {
  const bar = document.createElement("div");
  const input = document.createElement("input");
  const button = document.createElement("button");

  bar.classList.add("search-bar");
  input.classList.add("search-input");
  button.classList.add("search-button");

  input.setAttribute("placeholder", "Enter a city");
  button.innerText = "Search";

  bar.appendChild(input);
  bar.appendChild(button);

  return bar;
};

export default searchBar;
