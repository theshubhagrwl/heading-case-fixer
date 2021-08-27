const inputElement = document.querySelector("#title-here");
const finalOutput = document.querySelector("#result");

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

var finalResult = "";

function convertToTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

var result = [];

function formatText() {
  const text = inputElement.value;

  var stringArray = text.split(/(\s+)/);

  console.log("Array: ", stringArray);

  stringArray.map((item) => {
    if (words.includes(item)) {
      result.push(item.toLowerCase());
    } else {
      result.push(convertToTitleCase(item));
    }
  });

  console.log("result: ", result);
  // console.log("string output: ", result.join(" "));
  finalOutput.innerHTML = result.join(" ");
}

inputElement.addEventListener("change", formatText);
