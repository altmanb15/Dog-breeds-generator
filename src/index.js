function displayBreed(response) {
  new Typewriter("#breed", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateBreed(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "f5o451fb0d10a278db1ta3c93af21731";
  let prompt = `User instructions are: Generate information on dog breed that ${instructionsInput.value}`;
  let context =
    "You are an expert about dog breeds and you love to give short and direct information about each breed. Make sure to follow the user instructions.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let breedElement = document.querySelector("#breed");
  breedElement.classList.remove("hidden");
  breedElement.innerHTML = `<div class="blink"> ⏳ Generating the ${instructionsInput.value} information.<div>`;

  axios.get(apiURL).then(displayBreed);
}

let breedFormElement = document.querySelector("#breed-generator-form");
breedFormElement.addEventListener("submit", generateBreed);
