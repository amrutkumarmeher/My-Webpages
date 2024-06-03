// Initial values
var locationsOfEnemy = {
  first: "",
  second: "",
  third: "",
  fourth: "",
  fifth: "",
  sixth: "",
};
var gameover = false;
function initlocations() {
  for (key of Object.keys(locationsOfEnemy)) {
    while (true) {
      i = Math.floor(Math.random() * 25) + 1;
      if (!Object.values(locationsOfEnemy).includes(i)) {
        locationsOfEnemy[key] = i;
        break;
      }
    }
  }
}
initlocations();
var hits = 0;
var gueses = 0;

// Intraction functions
function checkwin() {
  stillwin = true;
  cou = 0;
  for (i of Object.values(locationsOfEnemy)) {
    if (i == "seventh") {
      continue;
    }
    if (
      document.getElementById(i).innerHTML ==
      '<img src="images/submarineD.png" class="submarine">'
    ) {
      null;
    } else {
      if (cou >= 1) {
        stillwin = false;
      } else {
        cou += 1;
      }
    }
  }
  return stillwin;
}
function resethitmation(boxno) {
  var i = document.getElementById(boxno);
  i.innerHTML = '<img src="images/cross.png" class="aim">';
}
function Gameover(win = false) {
  if (win == false) {
    for (i of Object.values(locationsOfEnemy)) {
      if (i.innerHTML != "" || i.innerHTML != null) {
        gameover = true;
        continue;
      }
      var ele = document.getElementById(i);
      ele.innerHTML =
        '<img src="images/submarine.png" class="submarine">';
    }
    document.getElementById("progress").innerHTML = "Game Over!";
  } else {
    document.getElementById("progress").innerHTML = "You Won!";
    gameover = true;
  }
}

function attackbox(boxno) {
  boxno = Number(boxno);
  if (Object.values(locationsOfEnemy).includes(boxno)) {
    Object.values(locationsOfEnemy).pop(boxno);
    hits += 1;
    gueses += 1;
    boxno = String(boxno);
    document.getElementById(boxno).innerHTML = "";
    new Audio("audios/blast.mp3").play();
    document.getElementById(boxno).innerHTML =
    '<img src="images/blast.gif" class="blast">';
    setTimeout(() => {
      document.getElementById(boxno).innerHTML =
      '<img src="images/submarineD.png" class="submarine">';
    }, 1000);
    setmissiles();
    setsubmarineli(hits);
    if (checkwin()) {
      Gameover(true);
    }
    if (gueses >= 17) {
      Gameover();
    }
  } else {
    gueses += 1;
    new Audio("audios/blast.mp3").play();
    boxno = String(boxno);
    document.getElementById(boxno).innerHTML =
    '<img src="images/blast.gif" class="blast">';
    setTimeout(() => {
      document.getElementById(boxno).innerHTML =
      '<img src="images/cross.png" class="aim">';
    }, 1000);
    setmissiles();
    setsubmarineli(hits);
    if (gueses >= 17) {
      Gameover();
    }
  }
}
function setsubmarineli(hits) {
  let noOfSubs = 6 - hits;
  let str =
    '<h3 class="submarinelihead">' +
    noOfSubs +
    " Submarines left" +
    "</h3>";
  for (let co = noOfSubs; co > 0; co--) {
    str = str + '<img src="images/submarine1.png" class="submarineside">';
  }
  document.getElementById("submarineli").innerHTML = str;
}
function setmissiles() {
  let noOfMissiles = 17 - gueses;
  let str =
    '<h2 class="subheads"> ' + noOfMissiles + " missiles left " + "</h2>";
  for (let co = noOfMissiles; co > 0; co--) {
    str = str + '<img src="images/missile.png" class="missiles">';
  }
  document.getElementById("missilebox").innerHTML = str;
}

setmissiles();
setsubmarineli(hits);
// Event listeners
// 1
no1 = document.getElementById("1");
no1.addEventListener("mouseover", function no1f() {
  if (no1.innerHTML != "" || gameover == true) {
    return;
  }
  no1.innerHTML = '<img src="images/scope.png" class="aim">';
});
no1.addEventListener("mouseout", function no1f() {
  if (
    no1.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  no1.innerHTML = "";
});
no1.addEventListener("click", () => {
  if (
    no1.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  attackbox("1");
});
// 2
no2 = document.getElementById("2");
no2.addEventListener("mouseover", function no2f() {
  if (no2.innerHTML != "" || gameover == true) {
    return;
  }
  no2.innerHTML = '<img src="images/scope.png" class="aim">';
});
no2.addEventListener("mouseout", function no2f() {
  if (
    no2.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  no2.innerHTML = "";
});
no2.addEventListener("click", () => {
  if (
    no2.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  attackbox("2");
});
// 3
no3 = document.getElementById("3");
no3.addEventListener("mouseover", function no3f() {
  if (no3.innerHTML != "" || gameover == true) {
    return;
  }
  no3.innerHTML = '<img src="images/scope.png" class="aim">';
});
no3.addEventListener("mouseout", function no3f() {
  if (
    no3.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  no3.innerHTML = "";
});
no3.addEventListener("click", () => {
  if (
    no3.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  attackbox("3");
});
// 4
no4 = document.getElementById("4");
no4.addEventListener("mouseover", function no4f() {
  if (no4.innerHTML != "" || gameover == true) {
    return;
  }
  no4.innerHTML = '<img src="images/scope.png" class="aim">';
});
no4.addEventListener("mouseout", function no4f() {
  if (
    no4.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  no4.innerHTML = "";
});
no4.addEventListener("click", () => {
  if (
    no4.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  attackbox("4");
});
// 5
no5 = document.getElementById("5");
no5.addEventListener("mouseover", function no5f() {
  if (no5.innerHTML != "" || gameover == true) {
    return;
  }
  no5.innerHTML = '<img src="images/scope.png" class="aim">';
});
no5.addEventListener("mouseout", function no5f() {
  if (
    no5.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  no5.innerHTML = "";
});
no5.addEventListener("click", () => {
  if (
    no5.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  attackbox("5");
});
// 6
no6 = document.getElementById("6");
no6.addEventListener("mouseover", function no6f() {
  if (no6.innerHTML != "" || gameover == true) {
    return;
  }
  no6.innerHTML = '<img src="images/scope.png" class="aim">';
});
no6.addEventListener("mouseout", function no6f() {
  if (
    no6.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  no6.innerHTML = "";
});
no6.addEventListener("click", () => {
  if (
    no6.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  attackbox("6");
});
// 7
no7 = document.getElementById("7");
no7.addEventListener("mouseover", function no7f() {
  if (no7.innerHTML != "" || gameover == true) {
    return;
  }
  no7.innerHTML = '<img src="images/scope.png" class="aim">';
});
no7.addEventListener("mouseout", function no7f() {
  if (
    no7.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  no7.innerHTML = "";
});
no7.addEventListener("click", () => {
  if (
    no7.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  attackbox("7");
});
// 8
no8 = document.getElementById("8");
no8.addEventListener("mouseover", function no8f() {
  if (no8.innerHTML != "" || gameover == true) {
    return;
  }
  no8.innerHTML = '<img src="images/scope.png" class="aim">';
});
no8.addEventListener("mouseout", function no8f() {
  if (
    no8.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  no8.innerHTML = "";
});
no8.addEventListener("click", () => {
  if (
    no8.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  attackbox("8");
});
// 9
no9 = document.getElementById("9");
no9.addEventListener("mouseover", function no9f() {
  if (no9.innerHTML != "" || gameover == true) {
    return;
  }
  no9.innerHTML = '<img src="images/scope.png" class="aim">';
});
no9.addEventListener("mouseout", function no9f() {
  if (
    no9.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  no9.innerHTML = "";
});
no9.addEventListener("click", () => {
  if (
    no9.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  attackbox("9");
});
// 10
no10 = document.getElementById("10");
no10.addEventListener("mouseover", function no10f() {
  if (no10.innerHTML != "" || gameover == true) {
    return;
  }
  no10.innerHTML = '<img src="images/scope.png" class="aim">';
});
no10.addEventListener("mouseout", function no10f() {
  if (
    no10.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  no10.innerHTML = "";
});
no10.addEventListener("click", () => {
  if (
    no10.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  attackbox("10");
});
// 11
no11 = document.getElementById("11");
no11.addEventListener("mouseover", function no11f() {
  if (no11.innerHTML != "" || gameover == true) {
    return;
  }
  no11.innerHTML = '<img src="images/scope.png" class="aim">';
});
no11.addEventListener("mouseout", function no11f() {
  if (
    no11.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  no11.innerHTML = "";
});
no11.addEventListener("click", () => {
  if (
    no11.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  attackbox("11");
});
// 12
no12 = document.getElementById("12");
no12.addEventListener("mouseover", function no12f() {
  if (no12.innerHTML != "" || gameover == true) {
    return;
  }
  no12.innerHTML = '<img src="images/scope.png" class="aim">';
});
no12.addEventListener("mouseout", function no12f() {
  if (
    no12.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  no12.innerHTML = "";
});
no12.addEventListener("click", () => {
  if (
    no12.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  attackbox("12");
});
// 13
no13 = document.getElementById("13");
no13.addEventListener("mouseover", function no13f() {
  if (no13.innerHTML != "" || gameover == true) {
    return;
  }
  no13.innerHTML = '<img src="images/scope.png" class="aim">';
});
no13.addEventListener("mouseout", function no13f() {
  if (
    no13.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  no13.innerHTML = "";
});
no13.addEventListener("click", () => {
  if (
    no13.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  attackbox("13");
});
// 14
no14 = document.getElementById("14");
no14.addEventListener("mouseover", function no14f() {
  if (no14.innerHTML != "" || gameover == true) {
    return;
  }
  no14.innerHTML = '<img src="images/scope.png" class="aim">';
});
no14.addEventListener("mouseout", function no14f() {
  if (
    no14.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  no14.innerHTML = "";
});
no14.addEventListener("click", () => {
  if (
    no14.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  attackbox("14");
});
// 15
no15 = document.getElementById("15");
no15.addEventListener("mouseover", function no15f() {
  if (no15.innerHTML != "" || gameover == true) {
    return;
  }
  no15.innerHTML = '<img src="images/scope.png" class="aim">';
});
no15.addEventListener("mouseout", function no15f() {
  if (
    no15.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  no15.innerHTML = "";
});
no15.addEventListener("click", () => {
  if (
    no15.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  attackbox("15");
});
// 16
no16 = document.getElementById("16");
no16.addEventListener("mouseover", function no16f() {
  if (no16.innerHTML != "" || gameover == true) {
    return;
  }
  no16.innerHTML = '<img src="images/scope.png" class="aim">';
});
no16.addEventListener("mouseout", function no16f() {
  if (
    no16.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  no16.innerHTML = "";
});
no16.addEventListener("click", () => {
  if (
    no16.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  attackbox("16");
});
// 17
no17 = document.getElementById("17");
no17.addEventListener("mouseover", function no17f() {
  if (no17.innerHTML != "" || gameover == true) {
    return;
  }
  no17.innerHTML = '<img src="images/scope.png" class="aim">';
});
no17.addEventListener("mouseout", function no17f() {
  if (
    no17.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  no17.innerHTML = "";
});
no17.addEventListener("click", () => {
  if (
    no17.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  attackbox("17");
});
// 18
no18 = document.getElementById("18");
no18.addEventListener("mouseover", function no18f() {
  if (no18.innerHTML != "" || gameover == true) {
    return;
  }
  no18.innerHTML = '<img src="images/scope.png" class="aim">';
});
no18.addEventListener("mouseout", function no18f() {
  if (
    no18.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  no18.innerHTML = "";
});
no18.addEventListener("click", () => {
  if (
    no18.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  attackbox("18");
});
// 19
no19 = document.getElementById("19");
no19.addEventListener("mouseover", function no19f() {
  if (no19.innerHTML != "" || gameover == true) {
    return;
  }
  no19.innerHTML = '<img src="images/scope.png" class="aim">';
});
no19.addEventListener("mouseout", function no19f() {
  if (
    no19.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  no19.innerHTML = "";
});
no19.addEventListener("click", () => {
  if (
    no19.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  attackbox("19");
});
// 20
no20 = document.getElementById("20");
no20.addEventListener("mouseover", function no20f() {
  if (no20.innerHTML != "" || gameover == true) {
    return;
  }
  no20.innerHTML = '<img src="images/scope.png" class="aim">';
});
no20.addEventListener("mouseout", function no20f() {
  if (
    no20.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  no20.innerHTML = "";
});
no20.addEventListener("click", () => {
  if (
    no20.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  attackbox("20");
});
// 21
no21 = document.getElementById("21");
no21.addEventListener("mouseover", function no21f() {
  if (no21.innerHTML != "" || gameover == true) {
    return;
  }
  no21.innerHTML = '<img src="images/scope.png" class="aim">';
});
no21.addEventListener("mouseout", function no21f() {
  if (
    no21.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  no21.innerHTML = "";
});
no21.addEventListener("click", () => {
  if (
    no21.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  attackbox("21");
});
// 22
no22 = document.getElementById("22");
no22.addEventListener("mouseover", function no22f() {
  if (no22.innerHTML != "" || gameover == true) {
    return;
  }
  no22.innerHTML = '<img src="images/scope.png" class="aim">';
});
no22.addEventListener("mouseout", function no22f() {
  if (
    no22.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  no22.innerHTML = "";
});
no22.addEventListener("click", () => {
  if (
    no22.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  attackbox("22");
});
// 23
no23 = document.getElementById("23");
no23.addEventListener("mouseover", function no23f() {
  if (no23.innerHTML != "" || gameover == true) {
    return;
  }
  no23.innerHTML = '<img src="images/scope.png" class="aim">';
});
no23.addEventListener("mouseout", function no23f() {
  if (
    no23.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  no23.innerHTML = "";
});
no23.addEventListener("click", () => {
  if (
    no23.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  attackbox("23");
});
// 24
no24 = document.getElementById("24");
no24.addEventListener("mouseover", function no24f() {
  if (no24.innerHTML != "" || gameover == true) {
    return;
  }
  no24.innerHTML = '<img src="images/scope.png" class="aim">';
});
no24.addEventListener("mouseout", function no24f() {
  if (
    no24.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  no24.innerHTML = "";
});
no24.addEventListener("click", () => {
  if (
    no24.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  attackbox("24");
});
// 25
no25 = document.getElementById("25");
no25.addEventListener("mouseover", function no25f() {
  if (no25.innerHTML != "" || gameover == true) {
    return;
  }
  no25.innerHTML = '<img src="images/scope.png" class="aim">';
});
no25.addEventListener("mouseout", function no25f() {
  if (
    no25.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  no25.innerHTML = "";
});
no25.addEventListener("click", () => {
  if (
    no25.innerHTML != '<img src="images/scope.png" class="aim">' ||
    gameover == true
  ) {
    return;
  }
  attackbox("25");
});