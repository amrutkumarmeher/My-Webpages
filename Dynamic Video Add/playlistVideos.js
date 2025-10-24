var currCount = 0;
var maxCount = 139
const playlistVideos = {
  1: {
    title:
      "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
    channel: "CodeWithHarry",
    views: 6236217,
    time: "2 years ago",
    duration: "31:20",
  },
  2: {
    title:
      "Your First HTML Website | Sigma Web Development Course - Tutorial #2",
    channel: "CodeWithHarry",
    views: 2225783,
    time: "2 years ago",
    duration: "28:31",
  },
  3: {
    title:
      "Basic Structure of an HTML Website | Sigma Web Development Course - Tutorial #3",
    channel: "CodeWithHarry",
    views: 1409184,
    time: "2 years ago",
    duration: "11:12",
  },
  4: {
    title:
      "Heading, Paragraphs and Links | Sigma Web Development Course - Tutorial #4",
    channel: "CodeWithHarry",
    views: 1290966,
    time: "2 years ago",
    duration: "19:34",
  },
  5: {
    title:
      "Image, Lists, and Tables in HTML | Sigma Web Development Course - Tutorial #5",
    channel: "CodeWithHarry",
    views: 1283967,
    time: "2 years ago",
    duration: "18:20",
  },
  6: {
    title:
      "SEO and Core Web Vitals in HTML | Sigma Web Development Course - Tutorial #6",
    channel: "CodeWithHarry",
    views: 946526,
    time: "2 years ago",
    duration: "13:16",
  },
  7: {
    title:
      "Forms and input tags in HTML | Sigma Web Development Course - Tutorial #7",
    channel: "CodeWithHarry",
    views: 965599,
    time: "2 years ago",
    duration: "14:53",
  },
  8: {
    title:
      "Inline & Block Elements in HTML | Sigma Web Development Course - Tutorial #8",
    channel: "CodeWithHarry",
    views: 674942,
    time: "2 years ago",
    duration: "10:52",
  },
  9: {
    title: "Id & Classes in HTML | Sigma Web Development Course - Tutorial #9",
    channel: "CodeWithHarry",
    views: 578922,
    time: "2 years ago",
    duration: "10:57",
  },
  10: {
    title:
      "Video, Audio & Media in HTML | Sigma Web Development Course - Tutorial #10",
    channel: "CodeWithHarry",
    views: 769578,
    time: "2 years ago",
    duration: "14:48",
  },
  11: {
    title:
      "Semantic Tags[translate:  ]in HTML | Sigma Web Development Course - Tutorial #11",
    channel: "CodeWithHarry",
    views: 563870,
    time: "2 years ago",
    duration: "10:42",
  },
  12: {
    title:
      "Exercise 1 - Pure HTML Media Player | Sigma Web Development Course - Tutorial #12",
    channel: "CodeWithHarry",
    views: 488811,
    time: "2 years ago",
    duration: "3:41",
  },
  13: {
    title:
      "Entities, Code tag and more on HTML | Sigma Web Development Course - Tutorial #13",
    channel: "CodeWithHarry",
    views: 491300,
    time: "2 years ago",
    duration: "9:21",
  },
  14: {
    title: "Introduction to CSS | Sigma Web Development Course - Tutorial #14",
    channel: "CodeWithHarry",
    views: 543711,
    time: "2 years ago",
    duration: "9:14",
  },
  15: {
    title:
      "Inline, Internal & External CSS | Sigma Web Development Course - Tutorial #15",
    channel: "CodeWithHarry",
    views: 462916,
    time: "2 years ago",
    duration: "11:04",
  },
  16: {
    title:
      "Exercise 1 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #16",
    channel: "CodeWithHarry",
    views: 415258,
    time: "2 years ago",
    duration: "7:19",
  },
  17: {
    title:
      "CSS Selectors MasterClass | Sigma Web Development Course - Tutorial #17",
    channel: "CodeWithHarry",
    views: 644736,
    time: "2 years ago",
    duration: "14:00",
  },
  18: {
    title:
      "CSS Box Model - Margin, Padding & Borders | Sigma Web Development Course - Tutorial #18",
    channel: "CodeWithHarry",
    views: 634801,
    time: "2 years ago",
    duration: "17:41",
  },
  19: {
    title:
      "CSS Fonts, Text & Color Properties | Sigma Web Development Course - Tutorial #19",
    channel: "CodeWithHarry",
    views: 643711,
    time: "2 years ago",
    duration: "32:08",
  },
  20: {
    title:
      "Exercise 2 - CSS Challenge | Sigma Web Development Course - Tutorial #20",
    channel: "CodeWithHarry",
    views: 402991,
    time: "2 years ago",
    duration: "4:19",
  },
  21: {
    title:
      "CSS Specificity & Cascade | Sigma Web Development Course - Tutorial #21",
    channel: "CodeWithHarry",
    views: 519883,
    time: "2 years ago",
    duration: "20:07",
  },
  22: {
    title:
      "CSS Sizing Units - px, rem, em, vh, vw, % & more | Sigma Web Development Course - Tutorial #22",
    channel: "CodeWithHarry",
    views: 547821,
    time: "2 years ago",
    duration: "26:24",
  },
  23: {
    title: "CSS Display Property | Sigma Web Development Course - Tutorial #23",
    channel: "CodeWithHarry",
    views: 437606,
    time: "2 years ago",
    duration: "12:08",
  },
  24: {
    title:
      "CSS Shadows and Outlines | Sigma Web Development Course - Tutorial #24",
    channel: "CodeWithHarry",
    views: 367636,
    time: "1 years ago",
    duration: "13:10",
  },
  25: {
    title:
      "Styling Lists using CSS | Sigma Web Development Course - Tutorial #25",
    channel: "CodeWithHarry",
    views: 334819,
    time: "1 years ago",
    duration: "9:52",
  },
  26: {
    title:
      "CSS Overflow Property | Sigma Web Development Course - Tutorial #26",
    channel: "CodeWithHarry",
    views: 320263,
    time: "1 years ago",
    duration: "8:21",
  },
  27: {
    title:
      "Exercise 2 - Solutions and Shoutouts | Sigma Web Development Course - Tutorial #27",
    channel: "CodeWithHarry",
    views: 268328,
    time: "1 years ago",
    duration: "10:16",
  },
  28: {
    title:
      "CSS Position Property | Sigma Web Development Course - Tutorial #28",
    channel: "CodeWithHarry",
    views: 497167,
    time: "1 years ago",
    duration: "24:05",
  },
  29: {
    title:
      "Exercise 3 - Design this Card[translate:  ]| Sigma Web Development Course - Tutorial #29",
    channel: "CodeWithHarry",
    views: 355303,
    time: "1 years ago",
    duration: "6:18",
  },
  30: {
    title: "CSS Variables | Sigma Web Development Course - Tutorial #30",
    channel: "CodeWithHarry",
    views: 361761,
    time: "1 years ago",
    duration: "13:20",
  },
  31: {
    title: "CSS Media Queries | Sigma Web Development Course - Tutorial #31",
    channel: "CodeWithHarry",
    views: 441113,
    time: "1 years ago",
    duration: "11:37",
  },
  32: {
    title:
      "Exercise 3 - Solution | Sigma Web Development Course - Tutorial #32",
    channel: "CodeWithHarry",
    views: 316941,
    time: "1 years ago",
    duration: "19:48",
  },
  33: {
    title:
      "Exercise 4 - Multi Color Website | Sigma Web Development Course - Tutorial #33",
    channel: "CodeWithHarry",
    views: 264050,
    time: "1 years ago",
    duration: "2:33",
  },
  34: {
    title: "CSS Float & Clear | Sigma Web Development Course - Tutorial #34",
    channel: "CodeWithHarry",
    views: 290506,
    time: "1 years ago",
    duration: "10:42",
  },
  35: {
    title:
      "More on CSS Selectors | Sigma Web Development Course - Tutorial #35",
    channel: "CodeWithHarry",
    views: 263334,
    time: "1 years ago",
    duration: "13:24",
  },
  36: {
    title:
      "Exercise 4 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #36",
    channel: "CodeWithHarry",
    views: 235377,
    time: "1 years ago",
    duration: "13:45",
  },
  37: {
    title:
      "CSS Exercise 5 - Design this Layout | Sigma Web Development Course - Tutorial #37",
    channel: "CodeWithHarry",
    views: 257157,
    time: "1 years ago",
    duration: "7:16",
  },
  38: {
    title:
      "CSS Flexbox - Ultimate MasterClass | Sigma Web Development Course - Tutorial #38",
    channel: "CodeWithHarry",
    views: 524745,
    time: "1 years ago",
    duration: "27:58",
  },
  39: {
    title:
      "CSS Grid - Ultimate MasterClass | Sigma Web Development Course - Tutorial #39",
    channel: "CodeWithHarry",
    views: 512921,
    time: "1 years ago",
    duration: "32:12",
  },
  40: {
    title:
      "Exercise 5 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #40",
    channel: "CodeWithHarry",
    views: 228821,
    time: "1 years ago",
    duration: "15:50",
  },
  41: {
    title:
      "Exercise 6 - Navbar using Flexbox | Sigma Web Development Course - Tutorial #41",
    channel: "CodeWithHarry",
    views: 235967,
    time: "1 years ago",
    duration: "3:21",
  },
  42: {
    title:
      "CSS Transforms MasterClass | Sigma Web Development Course - Tutorial #42",
    channel: "CodeWithHarry",
    views: 266285,
    time: "1 years ago",
    duration: "11:22",
  },
  43: {
    title:
      "Exercise 6 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #43",
    channel: "CodeWithHarry",
    views: 238807,
    time: "1 years ago",
    duration: "20:27",
  },
  44: {
    title:
      "Exercise 7 - Design the Grid | Sigma Web Development Course - Tutorial #44",
    channel: "CodeWithHarry",
    views: 203073,
    time: "1 years ago",
    duration: "5:41",
  },
  45: {
    title:
      "CSS Transition Property | Sigma Web Development Course - Tutorial #45",
    channel: "CodeWithHarry",
    views: 283909,
    time: "1 years ago",
    duration: "13:33",
  },
  46: {
    title: "CSS Animations | Sigma Web Development Course - Tutorial #46",
    channel: "CodeWithHarry",
    views: 289059,
    time: "1 years ago",
    duration: "17:57",
  },
  47: {
    title:
      "Exercise 7 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #47",
    channel: "CodeWithHarry",
    views: 233634,
    time: "1 years ago",
    duration: "38:39",
  },
  48: {
    title:
      "Exercise 8 - Bounce Animation | Sigma Web Development Course - Tutorial #48",
    channel: "CodeWithHarry",
    views: 166059,
    time: "1 years ago",
    duration: "4:44",
  },
  49: {
    title:
      "CSS Object-fit and Object-cover | Sigma Web Development Course - Tutorial #49",
    channel: "CodeWithHarry",
    views: 209850,
    time: "1 years ago",
    duration: "15:25",
  },
  50: {
    title: "CSS Filters | Sigma Web Development Course - Tutorial #50",
    channel: "CodeWithHarry",
    views: 169655,
    time: "1 years ago",
    duration: "9:06",
  },
  51: {
    title:
      "Exercise 8: Solution & Shoutouts | Sigma Web Development Course - Tutorial #51",
    channel: "CodeWithHarry",
    views: 148630,
    time: "1 years ago",
    duration: "7:20",
  },
  52: {
    title:
      "Figma Basics in One Video | Sigma Web Development Course - Tutorial #52",
    channel: "CodeWithHarry",
    views: 545337,
    time: "1 years ago",
    duration: "27:20",
  },
  53: {
    title:
      "Netflix Clone Using HTML & CSS | Sigma Web Development Course - Tutorial #53",
    channel: "CodeWithHarry",
    views: 1292825,
    time: "1 years ago",
    duration: "1:57:23",
  },
  54: {
    title:
      "Introduction to JavaScript & Installing Node.js | Sigma Web Development Course - Tutorial #54",
    channel: "CodeWithHarry",
    views: 625726,
    time: "1 years ago",
    duration: "20:23",
  },
  55: {
    title:
      "JavaScript Variables, Data Types & Objects | Sigma Web Development Course - Tutorial #55",
    channel: "CodeWithHarry",
    views: 466507,
    time: "1 years ago",
    duration: "20:20",
  },
  56: {
    title:
      "JavaScript Conditionals: if, else if,[translate:  ]else ladder | Sigma Web Development Course - Tutorial #56",
    channel: "CodeWithHarry",
    views: 375336,
    time: "1 years ago",
    duration: "24:24",
  },
  57: {
    title: "JavaScript Loops | Sigma Web Development Course - Tutorial #57",
    channel: "CodeWithHarry",
    views: 329974,
    time: "1 years ago",
    duration: "16:01",
  },
  58: {
    title: "JavaScript Functions | Sigma Web Development Course - Tutorial #58",
    channel: "CodeWithHarry",
    views: 295723,
    time: "1 years ago",
    duration: "12:26",
  },
  59: {
    title:
      "Exercise 9 - Faulty Calculator | Sigma Web Development Course - Tutorial #59",
    channel: "CodeWithHarry",
    views: 243071,
    time: "1 years ago",
    duration: "5:31",
  },
  60: {
    title: "JavaScript Strings | Sigma Web Development Course - Tutorial #60",
    channel: "CodeWithHarry",
    views: 275418,
    time: "1 years ago",
    duration: "18:02",
  },
  61: {
    title:
      "JavaScript Exercise 9 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #61",
    channel: "CodeWithHarry",
    views: 231024,
    time: "1 years ago",
    duration: "10:54",
  },
  62: {
    title:
      "JavaScript Exercise 10 - Business Name Generator | Sigma Web Development Course - Tutorial #62",
    channel: "CodeWithHarry",
    views: 193864,
    time: "1 years ago",
    duration: "3:58",
  },
  63: {
    title: "JavaScript Arrays | Sigma Web Development Course - Tutorial #63",
    channel: "CodeWithHarry",
    views: 354733,
    time: "1 years ago",
    duration: "30:52",
  },
  64: {
    title:
      "JavaScript Exercise 10 - Solution | Sigma Web Development Course - Tutorial #64",
    channel: "CodeWithHarry",
    views: 187016,
    time: "1 years ago",
    duration: "11:28",
  },
  65: {
    title:
      "JavaScript Exercise 11 - Calculate the Factorial | Sigma Web Development Course - Tutorial #65",
    channel: "CodeWithHarry",
    views: 155308,
    time: "1 years ago",
    duration: "3:23",
  },
  66: {
    title:
      "Document Object Model in JavaScript | Sigma Web Development Course - Tutorial #66",
    channel: "CodeWithHarry",
    views: 269394,
    time: "1 years ago",
    duration: "8:51",
  },
  67: {
    title:
      "JavaScript DOM - Children, Parent & Sibling Nodes | Sigma Web Development Course - Tutorial #67",
    channel: "CodeWithHarry",
    views: 272953,
    time: "1 years ago",
    duration: "18:56",
  },
  68: {
    title:
      "JavaScript -[translate:  ]Selecting by Ids, Classes, and More | Sigma Web Development Course - Tutorial #68",
    channel: "CodeWithHarry",
    views: 238208,
    time: "1 years ago",
    duration: "18:15",
  },
  69: {
    title:
      "JavaScript Exercise 11 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #69",
    channel: "CodeWithHarry",
    views: 160724,
    time: "1 years ago",
    duration: "11:52",
  },
  70: {
    title:
      "JavaScript Exercise 12 - Color the Boxes | Sigma Web Development Course - Tutorial #70",
    channel: "CodeWithHarry",
    views: 150274,
    time: "1 years ago",
    duration: "3:54",
  },
  71: {
    title:
      "Inserting and Removing Elements using JavaScript | Sigma Web Development Course - Tutorial #71",
    channel: "CodeWithHarry",
    views: 269197,
    time: "1 years ago",
    duration: "23:48",
  },
  72: {
    title:
      "JavaScript Exercise 12 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #72",
    channel: "CodeWithHarry",
    views: 152263,
    time: "1 years ago",
    duration: "17:27",
  },
  73: {
    title:
      "JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73",
    channel: "CodeWithHarry",
    views: 170703,
    time: "1 years ago",
    duration: "6:14",
  },
  74: {
    title:
      "Events, Event Bubbling, setInterval & setTimeout | Sigma Web Development Course - Tutorial #74",
    channel: "CodeWithHarry",
    views: 264403,
    time: "1 years ago",
    duration: "27:51",
  },
  75: {
    title:
      "JavaScript Callbacks & Promises | Sigma Web Development Course - Tutorial #75",
    channel: "CodeWithHarry",
    views: 309061,
    time: "1 years ago",
    duration: "32:24",
  },
  76: {
    title:
      "Async/Await & Fetch API in JavaScript with Examples | Sigma Web Development Course - Tutorial #76",
    channel: "CodeWithHarry",
    views: 255511,
    time: "1 years ago",
    duration: "23:41",
  },
  77: {
    title:
      "JavaScript Exercise 13 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #77",
    channel: "CodeWithHarry",
    views: 148470,
    time: "1 years ago",
    duration: "24:13",
  },
  78: {
    title:
      "JavaScript Exercise 14 - Hacker's Terminal | Sigma Web Development Course - Tutorial #78",
    channel: "CodeWithHarry",
    views: 108466,
    time: "1 years ago",
    duration: "3:58",
  },
  79: {
    title:
      "JavaScript try catch & Error Handling | Sigma Web Development Course - Tutorial #79",
    channel: "CodeWithHarry",
    views: 135912,
    time: "1 years ago",
    duration: "15:59",
  },
  80: {
    title:
      "Classes & Objects - Object Oriented Programming in Js | Sigma Web Development Course - Tutorial #80",
    channel: "CodeWithHarry",
    views: 158013,
    time: "1 years ago",
    duration: "20:43",
  },
  81: {
    title:
      "JavaScript Exercise 14 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #81",
    channel: "CodeWithHarry",
    views: 109465,
    time: "1 years ago",
    duration: "18:41",
  },
  82: {
    title: "Advanced JavaScript | Sigma Web Development Course - Tutorial #82",
    channel: "CodeWithHarry",
    views: 149499,
    time: "1 years ago",
    duration: "14:23",
  },
  83: {
    title:
      "JavaScript Interview Questions | Sigma Web Development Course - Tutorial #83",
    channel: "CodeWithHarry",
    views: 158671,
    time: "1 years ago",
    duration: "21:08",
  },
  84: {
    title:
      "Spotify Clone using HTML, CSS & JavaScript | Sigma Web Development Course - Tutorial #84",
    channel: "CodeWithHarry",
    views: 1051939,
    time: "1 years ago",
    duration: "5:35:39",
  },
  85: {
    title:
      "Backend, Node.js & npm | Sigma Web Development Course - Tutorial #85",
    channel: "CodeWithHarry",
    views: 335901,
    time: "1 years ago",
    duration: "17:20",
  },
  86: {
    title:
      "CommonJs Vs EcmaScript Modules | Sigma Web Development Course - Tutorial #86",
    channel: "CodeWithHarry",
    views: 192328,
    time: "1 years ago",
    duration: "17:46",
  },
  87: {
    title:
      "Working with Files: fs and path Modules | Sigma Web Development Course - Tutorial #87",
    channel: "CodeWithHarry",
    views: 140946,
    time: "1 years ago",
    duration: "17:32",
  },
  88: {
    title:
      "Introduction to Express Js | Sigma Web Development Course - Tutorial #88",
    channel: "CodeWithHarry",
    views: 185246,
    time: "1 years ago",
    duration: "20:39",
  },
  89: {
    title:
      "Response, Request and Routers in Express | Sigma Web Development Course - Tutorial #89",
    channel: "CodeWithHarry",
    views: 161722,
    time: "1 years ago",
    duration: "27:55",
  },
  90: {
    title:
      "Middlewares in Express Js | Sigma Web Development Course - Tutorial #90",
    channel: "CodeWithHarry",
    views: 130301,
    time: "1 years ago",
    duration: "19:05",
  },
  91: {
    title:
      "Exercise 15 - Clear the Clutter | Sigma Web Development Course - Tutorial #91",
    channel: "CodeWithHarry",
    views: 68306,
    time: "1 years ago",
    duration: "4:53",
  },
  92: {
    title:
      "ejs Template Engine in Express | Sigma Web Development Course - Tutorial #92",
    channel: "CodeWithHarry",
    views: 122680,
    time: "1 years ago",
    duration: "21:28",
  },
  93: {
    title:
      "Exercise 15 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #93",
    channel: "CodeWithHarry",
    views: 68115,
    time: "1 years ago",
    duration: "17:33",
  },
  94: {
    title:
      "Installing MongoDB & MongoDB Compass | Sigma Web Development Course - Tutorial #94",
    channel: "CodeWithHarry",
    views: 244174,
    time: "1 years ago",
    duration: "24:33",
  },
  95: {
    title:
      "CRUD Operations in MongoDB | Sigma Web Development Course - Tutorial #95",
    channel: "CodeWithHarry",
    views: 118104,
    time: "1 years ago",
    duration: "17:21",
  },
  96: {
    title:
      "Installing Mongoose & Using it with Express | Sigma Web Development Course - Tutorial #96",
    channel: "CodeWithHarry",
    views: 118317,
    time: "1 years ago",
    duration: "23:19",
  },
  97: {
    title:
      "Exercise 16 - Dummy Data Generator | Sigma Web Development Course - Tutorial #97",
    channel: "CodeWithHarry",
    views: 53469,
    time: "1 years ago",
    duration: "5:42",
  },
  98: {
    title:
      "Tailwind CSS in one Video | Sigma Web Development Course - Tutorial #98",
    channel: "CodeWithHarry",
    views: 331255,
    time: "1 years ago",
    duration: "33:58",
  },
  99: {
    title:
      "Exercise 16 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #99",
    channel: "CodeWithHarry",
    views: 64325,
    time: "1 years ago",
    duration: "22:44",
  },
  100: {
    title:
      "Exercise 17 - Design This Layout | Sigma Web Development Course - Tutorial #100",
    channel: "CodeWithHarry",
    views: 58510,
    time: "1 years ago",
    duration: "3:14",
  },
  101: {
    title:
      "X.com (Twitter) Clone using Tailwind CSS | Sigma Web Development Course - Tutorial #101",
    channel: "CodeWithHarry",
    views: 240797,
    time: "1 years ago",
    duration: "2:27:49",
  },
  102: {
    title:
      "Exercise 17 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #102",
    channel: "CodeWithHarry",
    views: 40950,
    time: "1 years ago",
    duration: "11:49",
  },
  103: {
    title:
      "What is Hosting? Where to Host? Which Hosting? | Sigma Web Development Course - Tutorial #103",
    channel: "CodeWithHarry",
    views: 111430,
    time: "1 years ago",
    duration: "38:08",
  },
  104: {
    title:
      "Hosting an Express App on Ubuntu VPS using Hostinger | Sigma Web Development Course - Tutorial #104",
    channel: "CodeWithHarry",
    views: 70220,
    time: "1 years ago",
    duration: "24:06",
  },
  105: {
    title:
      "Introduction to React & Why use React? | Sigma Web Development Course - Tutorial #105",
    channel: "CodeWithHarry",
    views: 241756,
    time: "1 years ago",
    duration: "40:38",
  },
  106: {
    title:
      "Components, Props and JSX in React | Sigma Web Development Course - Tutorial #106",
    channel: "CodeWithHarry",
    views: 186919,
    time: "1 years ago",
    duration: "26:53",
  },
  107: {
    title:
      "Hooks & State in React | Sigma Web Development Course - Tutorial #107",
    channel: "CodeWithHarry",
    views: 143548,
    time: "1 years ago",
    duration: "11:19",
  },
  108: {
    title:
      "The useEffect Hook in React | Sigma Web Development Course - Tutorial #108",
    channel: "CodeWithHarry",
    views: 189499,
    time: "1 years ago",
    duration: "26:06",
  },
  109: {
    title:
      "The useRef Hook in React | Sigma Web Development Course - Tutorial #109",
    channel: "CodeWithHarry",
    views: 158866,
    time: "1 years ago",
    duration: "14:44",
  },
  110: {
    title:
      "Conditional Rendering[translate:  ]& Rendering Lists in React | Sigma Web Development Course - Tutorial #110",
    channel: "CodeWithHarry",
    views: 114797,
    time: "1 years ago",
    duration: "19:06",
  },
  111: {
    title:
      "Exercise 18 - Display the Cards | Sigma Web Development Course - Tutorial #111",
    channel: "CodeWithHarry",
    views: 69849,
    time: "1 years ago",
    duration: "6:11",
  },
  112: {
    title:
      "Handling Events in React | Sigma Web Development Course - Tutorial #112",
    channel: "CodeWithHarry",
    views: 98171,
    time: "1 years ago",
    duration: "16:35",
  },
  113: {
    title:
      "Exercise 18 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #113",
    channel: "CodeWithHarry",
    views: 68333,
    time: "1 years ago",
    duration: "13:19",
  },
  114: {
    title:
      "TodoList App using React, Tailwind & React Icons | Sigma Web Development Course - Tutorial #114",
    channel: "CodeWithHarry",
    views: 215633,
    time: "1 years ago",
    duration: "1:21:55",
  },
  115: {
    title:
      "React Router: Routing in React | Sigma Web Development Course - Tutorial #115",
    channel: "CodeWithHarry",
    views: 239900,
    time: "1 years ago",
    duration: "17:00",
  },
  116: {
    title:
      "The useContext hook in React | Sigma Web Development Course - Tutorial #116",
    channel: "CodeWithHarry",
    views: 134405,
    time: "1 years ago",
    duration: "16:17",
  },
  117: {
    title:
      "The useMemo hook in React | Sigma Web Development Course - Tutorial #117",
    channel: "CodeWithHarry",
    views: 90294,
    time: "1 years ago",
    duration: "14:49",
  },
  118: {
    title:
      "The useCallback hook in React | Sigma Web Development Course - Tutorial #118",
    channel: "CodeWithHarry",
    views: 96721,
    time: "1 years ago",
    duration: "14:00",
  },
  119: {
    title:
      "Handling Forms + Connecting React to Express Backend | Sigma Web Development Course - Tutorial #119",
    channel: "CodeWithHarry",
    views: 115266,
    time: "1 years ago",
    duration: "31:29",
  },
  120: {
    title:
      "Learn Redux in One video | Sigma Web Development Course - Tutorial #120",
    channel: "CodeWithHarry",
    views: 153947,
    time: "1 years ago",
    duration: "19:37",
  },
  121: {
    title:
      "Introduction to Next.js & File based routing | Sigma Web Development Course - Tutorial #121",
    channel: "CodeWithHarry",
    views: 105836,
    time: "1 years ago",
    duration: "12:25",
  },
  122: {
    title:
      "Server Components in Next.js | Sigma Web Development Course - Tutorial #122",
    channel: "CodeWithHarry",
    views: 57993,
    time: "1 years ago",
    duration: "11:12",
  },
  123: {
    title:
      "Script, Link & Image components in Next.js | Sigma Web Development Course - Tutorial #123",
    channel: "CodeWithHarry",
    views: 62304,
    time: "1 years ago",
    duration: "20:37",
  },
  124: {
    title:
      "Creating APIs in Next.js | Sigma Web Development Course - Tutorial #124",
    channel: "CodeWithHarry",
    views: 67871,
    time: "1 years ago",
    duration: "7:48",
  },
  125: {
    title:
      "Server Actions in Next.js | Sigma Web Development Course - Tutorial #125",
    channel: "CodeWithHarry",
    views: 56605,
    time: "1 years ago",
    duration: "13:16",
  },
  126: {
    title:
      "Middleware in Next.js | Sigma Web Development Course - Tutorial #126",
    channel: "CodeWithHarry",
    views: 48161,
    time: "1 years ago",
    duration: "10:18",
  },
  127: {
    title:
      "Auth.js - Authentication in Next.js | Sigma Web Development Course - Tutorial #127",
    channel: "CodeWithHarry",
    views: 80799,
    time: "1 years ago",
    duration: "14:04",
  },
  128: {
    title:
      "Dynamic Routes in Next.js | Sigma Web Development Course - Tutorial #128",
    channel: "CodeWithHarry",
    views: 59181,
    time: "1 years ago",
    duration: "9:51",
  },
  129: {
    title: "Layouts in Next.js | Sigma Web Development Course - Tutorial #129",
    channel: "CodeWithHarry",
    views: 69873,
    time: "1 years ago",
    duration: "12:34",
  },
  130: {
    title:
      "React Project: Password Manager using React, Tailwind, MongoDB & Express | Sigma WebD Tutorial #130",
    channel: "CodeWithHarry",
    views: 262757,
    time: "1 years ago",
    duration: "2:28:15",
  },
  131: {
    title:
      "Project GetMeAChai - Patreon Clone in Next.js | Sigma Web Development Course - Tutorial #131",
    channel: "CodeWithHarry",
    views: 295708,
    time: "1 years ago",
    duration: "4:49:02",
  },
  132: {
    title:
      "Understanding next/navigation module in Next.js | Sigma Web Development Course - Tutorial #132",
    channel: "CodeWithHarry",
    views: 27205,
    time: "1 years ago",
    duration: "12:50",
  },
  133: {
    title:
      "SSR, SSG & ISR in Next.js | Sigma Web Development Course - Tutorial #133",
    channel: "CodeWithHarry",
    views: 35673,
    time: "1 years ago",
    duration: "14:18",
  },
  134: {
    title:
      "Environment Variables in Next.js | Sigma Web Development Course - Tutorial #134",
    channel: "CodeWithHarry",
    views: 25529,
    time: "12 months ago",
    duration: "11:15",
  },
  135: {
    title:
      "Styled JSX and other ways to Style in Next.js | Sigma Web Development Course - Tutorial #135",
    channel: "CodeWithHarry",
    views: 32514,
    time: "12 months ago",
    duration: "8:34",
  },
  136: {
    title:
      "[Project] Let's Build a Url Shortener in Next.js 15 | Sigma Web Development Course - Tutorial #136",
    channel: "CodeWithHarry",
    views: 70534,
    time: "11 months ago",
    duration: "56:16",
  },
  137: {
    title:
      "[Project] Let's Build a LinkTree Clone in Next.js 15 | Sigma Web Development Course - Tutorial #137",
    channel: "CodeWithHarry",
    views: 83887,
    time: "11 months ago",
    duration: "1:53:49",
  },
  138: {
    title:
      "Deploying our Next.js App to Vercel | Sigma Web Development Course - Tutorial #138",
    channel: "CodeWithHarry",
    views: 90523,
    time: "11 months ago",
    duration: "18:58",
  },
  139: {
    title: "My Last Video | Sigma Web Development Course - Tutorial #139",
    channel: "CodeWithHarry",
    views: 565886,
    time: "11 months ago",
    duration: "8:27",
  },
};
