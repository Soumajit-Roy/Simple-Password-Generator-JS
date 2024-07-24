const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let pwordEl1 = document.getElementById("pword1");
let pwordEl2 = document.getElementById("pword2");

//For generating random numbers
function randomNum() {
  let num = Math.floor(Math.random() * characters.length);
  return num;
}

//main generating function
function generatePword() {
  pwordEl1.textContent = ""
  pwordEl2.textContent = ""
  for (let i = 1; i < 16; i += 1) {
    pwordEl1.textContent += characters[randomNum()];
  }
  for (let i = 1; i < 16; i += 1) {
    pwordEl2.textContent += characters[randomNum()];
  }
}

//copy to clipboard function with alert

const ctcf = () => {
  navigator.clipboard.writeText(pwordEl1.textContent);
  alert("Password Copied to Clipboard");
}
const ctcs = () => {
  navigator.clipboard.writeText(pwordEl2.textContent);
  alert("Password Copied to Clipboard");
}
