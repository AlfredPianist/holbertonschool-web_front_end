function changeMode(size, weight, transform, background, color) {
  return function () {
    const body = document.body;
    body.style.fontSize = size;
    body.style.fontWeight = weight;
    body.style.transform = transform;
    body.style.backgroundColor = background;
    body.style.color = color;
  };
}

function main() {
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  const paragraph = document.createElement("p");
  paragraph.innerText = "Welcome Holberton!";

  const buttonSpooky = document.createElement("button");
  const buttonDark = document.createElement("button");
  const buttonScream = document.createElement("button");

  buttonSpooky.innerText = "Spooky";
  buttonDark.innerText = "Dark mode";
  buttonScream.innerText = "Scream mode";

  buttonSpooky.onclick = function () {
    return spooky();
  };
  buttonDark.onclick = function () {
    return darkMode();
  };
  buttonScream.onclick = function () {
    return screamMode();
  };

  document.body.append(paragraph, buttonSpooky, buttonDark, buttonScream);
}
