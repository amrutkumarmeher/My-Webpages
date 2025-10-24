const lines = [
  "Initializing Hacking",
  "Reading your Files",
  "Password files Detected",
  "Sending all passwords and personal files to server",
  "Cleaning up",
];
const maxdots = 3;
var currLine = -1;
function charMultiplyer(char, times) {
  let str = "";
  for (let i = times; i > 0; i -= 1) {
    str = str.concat(char);
  }
  return str;
}
function change() {
  let currNum = document.querySelector(".dots").innerHTML.length;
  if (currNum >= maxdots) {
    currNum = 0;
  } else {
    currNum += 1;
  }
  document.querySelectorAll(".dots").forEach((e) => {
    if (e.parentElement.querySelector(".line").innerHTML) {
      e.innerHTML = charMultiplyer(".", currNum);
    }
  });
}
async function blink(gap) {
  setInterval(change, gap);
}
function putLine() {
  currLine += 1;
  document.querySelectorAll(".line")[currLine].innerHTML = lines[currLine];
}
blink(700);
for (let i = lines.length; i > 0; i--) {
  console.log(Math.round(Math.random() * 7) * 1000);
  setTimeout(putLine, Math.round(Math.random() * 7) * 1000);
}
