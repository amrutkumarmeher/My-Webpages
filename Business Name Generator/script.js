/*
Business name generator using an adjective, shop name & another word.
*/
function GenerateBusinessName() {
  function anAdj() {
    let choice = Math.round(Math.random() * 22 + 1);
    if (choice == 1) {
      return "Crazy";
    } else if (choice == 2) {
      return "Amazing";
    } else if (choice == 3) {
      return "Fire";
    } else if (choice == 4) {
      return "Bold";
    } else if (choice == 5) {
      return "Swift";
    } else if (choice == 6) {
      return "Smart";
    } else if (choice == 7) {
      return "Elegant";
    } else if (choice == 8) {
      return "Prime";
    } else if (choice == 9) {
      return "Sharp";
    } else if (choice == 10) {
      return "Glowing";
    } else if (choice == 11) {
      return "Dynamic";
    } else if (choice == 12) {
      return "Royal";
    } else if (choice == 13) {
      return "Supreme";
    } else if (choice == 14) {
      return "Stellar";
    } else if (choice == 15) {
      return "Modern";
    } else if (choice == 16) {
      return "Rapid";
    } else if (choice == 17) {
      return "Urban";
    } else if (choice == 18) {
      return "Bright";
    } else if (choice == 19) {
      return "Golden";
    } else if (choice == 20) {
      return "Fierce";
    } else if (choice == 21) {
      return "Electric";
    } else if (choice == 22) {
      return "Mighty";
    } else if (choice == 23) {
      return "Infinite";
    }
  }
  function aShopName() {
    let choice = Math.round(Math.random() * 19 + 1);
    if (choice == 1) {
      return "Engine";
    } else if (choice == 2) {
      return "Foods";
    } else if (choice == 3) {
      return "Garments";
    } else if (choice == 4) {
      return "Creations";
    } else if (choice == 5) {
      return "Designs";
    } else if (choice == 6) {
      return "Works";
    } else if (choice == 7) {
      return "Threads";
    } else if (choice == 8) {
      return "Market";
    } else if (choice == 9) {
      return "Studio";
    } else if (choice == 10) {
      return "Empire";
    } else if (choice == 11) {
      return "Factory";
    } else if (choice == 12) {
      return "Kitchen";
    } else if (choice == 13) {
      return "Tech";
    } else if (choice == 14) {
      return "Supplies";
    } else if (choice == 15) {
      return "Outfitters";
    } else if (choice == 16) {
      return "Essentials";
    } else if (choice == 17) {
      return "Station";
    } else if (choice == 18) {
      return "World";
    } else if (choice == 19) {
      return "Corner";
    } else if (choice == 20) {
      return "Store";
    }
  }
  function anAnoWord() {
    let choice = Math.round(Math.random() * 19 + 1);
    if (choice == 1) {
      return "Bros";
    } else if (choice == 2) {
      return "Limited";
    } else if (choice == 3) {
      return "Hub";
    } else if (choice == 4) {
      return "Works";
    } else if (choice == 5) {
      return "Co.";
    } else if (choice == 6) {
      return "Enterprises";
    } else if (choice == 7) {
      return "Labs";
    } else if (choice == 8) {
      return "Group";
    } else if (choice == 9) {
      return "House";
    } else if (choice == 10) {
      return "Point";
    } else if (choice == 11) {
      return "Line";
    } else if (choice == 12) {
      return "Depot";
    } else if (choice == 13) {
      return "World";
    } else if (choice == 14) {
      return "Arena";
    } else if (choice == 15) {
      return "Zone";
    } else if (choice == 16) {
      return "Collective";
    } else if (choice == 17) {
      return "Studio";
    } else if (choice == 18) {
      return "Factory";
    } else if (choice == 19) {
      return "Partners";
    } else if (choice == 20) {
      return "Network";
    }
  }

  function ColorGen() {
    let choice = Math.round(Math.random() * 22 + 1);
    if (choice == 1) {
      return "color: rgb(30, 30, 30);";
    } else if (choice == 2) {
      return "color: rgb(25, 25, 112);";
    } else if (choice == 3) {
      return "color: rgb(15, 15, 15);";
    } else if (choice == 4) {
      return "color: rgb(0, 38, 38);";
    } else if (choice == 5) {
      return "color: rgb(19, 24, 45);";
    } else if (choice == 6) {
      return "color: rgb(29, 58, 22);";
    } else if (choice == 7) {
      return "color: darkred;";
    } else if (choice == 8) {
      return "color: darkgreen;";
    } else if (choice == 9) {
      return "color: darkblue;";
    } else if (choice == 10) {
      return "color: darkcyan;";
    } else if (choice == 11) {
      return "color: darkmagenta;";
    } else if (choice == 12) {
      return "color: darkorange;";
    } else if (choice == 13) {
      return "color: darkslateblue;";
    } else if (choice == 14) {
      return "color: darkslategray;";
    } else if (choice == 15) {
      return "color: darkolivegreen;";
    } else if (choice == 16) {
      return "color: darkgoldenrod;";
    } else if (choice == 17) {
      return "color: darkturquoise;";
    } else if (choice == 18) {
      return "color: darkviolet;";
    } else if (choice == 19) {
      return "color: darkkhaki;";
    } else if (choice == 20) {
      return "color: darkseagreen;";
    } else if (choice == 21) {
      return "color: darkorchid;";
    } else if (choice == 22) {
      return "color: darksalmon;";
    } else if (choice == 23) {
      return "color: black";
    }
  }
  function fontGen() {
    let choice = Math.round(Math.random() * 24 + 1);
    if (choice == 1) {
      return "font-family: Arial;";
    } else if (choice == 2) {
      return "font-family: Helvetica;";
    } else if (choice == 3) {
      return "font-family: Verdana;";
    } else if (choice == 4) {
      return "font-family: Tahoma;";
    } else if (choice == 5) {
      return 'font-family: "Trebuchet MS";';
    } else if (choice == 6) {
      return "font-family: Geneva;";
    } else if (choice == 7) {
      return 'font-family: "Segoe UI";';
    } else if (choice == 8) {
      return 'font-family: "Gill Sans";';
    } else if (choice == 9) {
      return "font-family: Calibri;";
    } else if (choice == 10) {
      return "font-family: Candara;";
    } else if (choice == 11) {
      return 'font-family: "Times New Roman";';
    } else if (choice == 12) {
      return "font-family: Georgia;";
    } else if (choice == 13) {
      return "font-family: Garamond;";
    } else if (choice == 14) {
      return "font-family: Palatino;";
    } else if (choice == 15) {
      return "font-family: Baskerville;";
    } else if (choice == 16) {
      return 'font-family: "Book Antiqua";';
    } else if (choice == 17) {
      return "font-family: Cambria;";
    } else if (choice == 18) {
      return "font-family: Constantia;";
    } else if (choice == 19) {
      return 'font-family: "Courier New";';
    } else if (choice == 20) {
      return 'font-family: "Brush Script MT";';
    } else if (choice == 21) {
      return 'font-family: "Comic Sans MS";';
    } else if (choice == 22) {
      return 'font-family: "Lucida Handwriting";';
    } else if (choice == 23) {
      return "font-family: Pacifico;";
    } else if (choice == 24) {
      return 'font-family: "Dancing Script";';
    } else if (choice == 25) {
      return "font-family: Impact;";
    }
  }
  function fontWeightGen() {
    let choice = Math.round(Math.random() * 6 + 1);
    if (choice == 1) {
      return "font-weight: 300;";
    } else if (choice == 2) {
      return "font-weight: 400;";
    } else if (choice == 3) {
      return "font-weight: 500;";
    } else if (choice == 4) {
      return "font-weight: 600;";
    } else if (choice == 5) {
      return "font-weight: 700;";
    } else if (choice == 6) {
      return "font-weight: 800;";
    } else if (choice == 7) {
      return "font-weight: 900;";
    }
  }
  document.getElementById(
    "result"
  ).innerHTML = `<div id="adj" style="${ColorGen()} ${fontGen()} ${fontWeightGen()}">${anAdj()} </div> <div id="shop" style="${ColorGen()} ${fontGen()} ${fontWeightGen()}">${aShopName()}</div> <div id="word" style="${ColorGen()} ${fontGen()} ${fontWeightGen()}"> ${anAnoWord()}</div>`;
}
GenerateBusinessName();
document.getElementById("retry").addEventListener("click", (event) => {
  GenerateBusinessName();
});
