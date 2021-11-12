const errorDisplay = (string) => {
  const container = document.createElement("div");
  const message = document.createElement("p");

  container.classList.add("warning");
  message.classList.add("warning-text");

  message.innerText = string;

  container.appendChild(message);

  return container;
};

export default errorDisplay;
