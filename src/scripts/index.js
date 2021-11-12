import "../styles/styles.scss";
import "regenerator-runtime/runtime";
import weatherGrabber from "./weather_grabber.js";
import errorDisplay from "./error_display.js";
import cityDisplay from "./city_display.js";
import searchBar from "./search_bar";

const init = () => {
  document.body.appendChild(searchBar());

  const getCity = () => {
    return document.querySelector("input").value;
  };

  const displayError = (string) => {
    document.body.appendChild(errorDisplay(string));
  };

  const gatherDataFromInput = (city) => {
    if (city === "") return displayError("Please enter a city");
    // Data object is a promise
    const data = weatherGrabber(city);
    data.then((resolved) => {
      console.log(data);
      if (resolved.cod != "200") {
        return displayError("Unknown City");
      } else {
        displayCity(resolved);
      }
    });
  };

  const displayCity = (data) => {
    document.body.innerHTML = "";
    document.body.appendChild(cityDisplay(data));
  };

  const bindEvents = () => {
    const searchButton = document.querySelector(".search-button");
    searchButton.addEventListener("click", () =>
      gatherDataFromInput(getCity())
    );
  };

  bindEvents();
};

init();
