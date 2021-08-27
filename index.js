const inputElement = document.querySelector("#title-here");
const finalOutput = document.querySelector("#result");
const copyButton = document.querySelector(".copy");
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");

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

function showAnswer() {
  answer.classList.toggle("show");
}

function copyText() {
  var text = inputElement;

  /* Select the text field */
  text.select();
  text.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(text.value);

  /* Alert the copied text */
  console.log("Copied the text: " + text.value);
}

inputElement.addEventListener("change", formatText);
question.addEventListener("click", showAnswer);
copyButton.addEventListener("click", copyText);
