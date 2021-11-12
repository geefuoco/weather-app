import "regenerator-runtime/runtime";
import key from "../../config.js";

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const weatherGrabber = async (city) => {
  const proxy = "https://infinite-shore-77401.herokuapp.com/";
  const url = `${proxy}https://api.openweathermap.org/data/2.5/weather?q=${capitalize(
    city
  )}&appid=${key.key}&units=metric`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod == "400") {
      throw "Bad input";
    }
    return data; //Always returns Promise.resolve(data)
  } catch (err) {
    console.log(err);
  }
};

export default weatherGrabber;
