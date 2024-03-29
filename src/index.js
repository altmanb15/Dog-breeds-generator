function generateBreed(event) {
  event.preventDefault();

  new Typewriter("#breed", {
    strings: [""],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
  breedElement.innerHTML = "";
}

let breedFormElement = document.querySelector("#breed-generator-form");
breedFormElement.addEventListener("submit", generateBreed);
