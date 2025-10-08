document.getElementById("calculate").addEventListener("click", (e) => {
  const inp = Number(document.getElementById("input").value);
  if (!Number(inp)) {
    document.getElementById("result").innerHTML = "Please input a number";
  } else {
    let factors = [];
    for (let index = inp; index > 1; index--) {
      factors = factors.concat(index);
    }
    let result = factors.reduce((a, b) => {
      return a * b;
    });
    document.getElementById("result").innerHTML = `Result is "${result}"`;
  }
});
