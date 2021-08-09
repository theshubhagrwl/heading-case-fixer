const inputElement = document.querySelector("#title-here");

const words = [
  "and",
  "or",
  "but",
  "nor",
  "yet",
  "so",
  "for",
  "a",
  "an",
  "the",
  "in",
  "to",
  "of",
  "at",
  "by",
  "up",
  "for",
  "off",
  "on",
];

function formatText() {
  const text = inputElement.value;

  var stringArray = text.split(/(\s+)/);
  console.log(stringArray);

  var result = stringArray.filter(
    (word) => word !== "" && !words.includes(word)
  );
  console.log(result);
}

inputElement.addEventListener("change", formatText);
