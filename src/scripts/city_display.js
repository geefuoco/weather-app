const cityDisplay = (weatherObject) => {
  const card = document.createElement("div");
  const cardTitle = document.createElement("h1");
  const cardBody = document.createElement("div");
  const description = document.createElement("p");
  const temperature = document.createElement("h2");
  const airPressure = document.createElement("h3");
  const toggleFahrenheit = document.createElement("button");

  card.classList.add("card");
  cardTitle.classList.add("card-title");
  cardBody.classList.add("card-body");
  temperature.classList.add("temperature");
  airPressure.classList.add("air-pressure");
  toggleFahrenheit.classList.add("toggle-button");
  description.classList.add("description");

  cardTitle.innerText = weatherObject.name;
  temperature.innerText = weatherObject.main.feels_like;
  airPressure.innerText = weatherObject.main.pressure;
  description.innerText = weatherObject.weather[0].description;
  toggleFahrenheit.innerHTML = "&deg; / F";

  cardBody.appendChild(temperature);
  cardBody.appendChild(airPressure);
  cardBody.appendChild(description);
  cardBody.appendChild(toggleFahrenheit);
  card.appendChild(cardTitle);
  card.appendChild(cardBody);

  return card;
};

export default cityDisplay;
