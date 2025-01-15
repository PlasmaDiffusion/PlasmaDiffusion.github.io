export class Project {
  constructor(
    id,
    name,
    isGame, //Boolean to hide if not the proper project
    url, //Site url
    repoLink, //Github link
    description0,
    description1,
    videoString,
    thumbnailString, //Image you'll see on the menu (defaults to first image string otherwise)
    imageStrings, //Array of image strings
    frameworkStrings //Array of up to two framework image strings
  ) {
    this.id = id;
    this.name = name;
    this.isGame = isGame;
    this.url = url;
    this.repoLink = repoLink;
    this.description0 = description0;
    this.description1 = description1;
    this.videoString = videoString;
    this.thumbnailString = thumbnailString;
    this.imageStrings = imageStrings;
    this.frameworkStrings = frameworkStrings;
  }
}

export function makeProjects() {
  var projects = new Array();

  //Websites ------------------------------------------------------------------------------------------------------------------------
  projects.push(
    new Project(
      0,
      "Shopping Site",
      false,
      null,//"https://shopping-site-mockup.netlify.app/",
      "https://github.com/PlasmaDiffusion/Shopping-Site",
      "A mockup for a shopping/ecommerce website. Users can search for products, add them to their cart and place an order. (Signing up is optional.)",
      "The project uses React at the frontend. It also uses NodeJS at the backend, using Sequelize to manage a MySQL database. TDD is additionally present, with Mocha and Testing Library.",
      null,
      "images/ShoppingSiteThumbnail.png",
      [
        "images/ShoppingSite0.png",
        "images/ShoppingSite1.png",
        "images/ShoppingSite2.png",
        "images/ShoppingSite3.png",
      ],
      ["images/ReactLogo.png", "images/NodeJSLogo.png"]
    )
  );

  projects.push(
    new Project(
      1,
      "Pizza Menu",
      false,
      null,
      "https://github.com/PlasmaDiffusion/PizzaMenu",
      "A mockup website for ordering a pizza. Users can either browse the menu or login and add pizzas with toppings and additional items to their cart.",
      "This was made with the Django framework in python. The site also makes use of jQuery Mobile.",
      null,
      "images/pizzaMenuThumbnail.png",
      [
        "images/pizzaMenu0.png",
        "images/pizzaMenu1.png",
        "images/pizzaMenu2.png",
        "images/pizzaMenu3.png",
      ],
      ["images/djangoLogo.png", null]
    )
  );

  projects.push(
    new Project(
      2,
      "Crossword Generator",
      false,
      null,
      "https://github.com/PlasmaDiffusion/Crossword-Generator",
      "A simple yet fun crossword puzzle generator. You can select how many words you want the crossword to have, and also only have specific categories. You can even add more words to the database it pulls from!",
      "NodeJS (with Express) and MongoDB is used to generate a crossword layout, that the user can then interact with at the front-end.",
      null,
      null,
      [
        "images/CrosswordGenerator0.png",
        "images/CrosswordGenerator1.png",
        "images/CrosswordGenerator2.png",
        "images/CrosswordGenerator3.png",
      ],
      ["images/NodeJSLogo.png", null]
    )
  );

  projects.push(
    new Project(
      3,
      "My Family Tree",
      false,
      "https://genealogy-site.netlify.app/",
      "https://github.com/PlasmaDiffusion/Genealogy-Site",
      "A genealogy based website made for a client. Admins can submit data on families and individual people through forms. On the home page you can select family names, then you select a sub family to see information about it and its family members.",
      "This project was made primarily to get acquainted with React. It also makes use of MongoDB with NodeJS. TDD is used too, with Mocha and Testing Library.",
      null,
      "images/GenealogySiteThumbnail.png",
      [
        "images/GenealogySite0.png",
        "images/GenealogySite2.png",
        "images/GenealogySite1.png",
        "images/GenealogySite3.png",
      ],
      ["images/ReactLogo.png", "images/NodeJSLogo.png"]
    )
  );

  projects.push(
    new Project(
      4,
      "PaintOn",
      false,
      null,
      "https://github.com/PlasmaDiffusion/PaintOn",
      "A browser based paint program. Users can try the paint tool out from the main page. They can login to save their drawings and check out other user's drawings as well.",
      "This project focuses a lot on javascript and the HTML5 canvas. The Django framework is used with an SQL database to share drawings as well.",
      null,
      "images/PaintOnThumbnail.png",
      ["images/PaintOn1.png", "images/PaintOn0.png"],
      ["images/djangoLogo.png", null]
    )
  );

  projects.push(
    new Project(
      5,
      "Movie Rater",
      false,
      "https://movie-rater-ts.netlify.app/",
      "https://github.com/PlasmaDiffusion/Movie-Rater",
      "A site for you to review movies. It used an external API to get actual movies and descriptions, but the site also uses GraphQL for its own movie reviews data.",
      "The project was made with React in the frontend (in Typescript), and NodeJS in the backend. Both ends use GraphQL (the front end uses Apollo).",

      null,
      "images/MovieRaterThumbnail.png",
      ["images/MovieRater0.png", "images/MovieRater1.png", "images/MovieRater2.png"],
      ["images/ReactLogo.png", "images/GraphQL_Logo.png"]
    )
  );

  projects.push(
    new Project(
      6,
      "Stretch List",
      false,
      null,
      "https://github.com/PlasmaDiffusion/StretchesV2",
      "A React Native app that serves as a list and timer for stretch routines. You can edit this list, change the timer per stretch, and link references to stretches.",
      "(Currently this only is for iOS and Android. The screenshots are more vertical to showcase what it would look like on a phone.)",

      null,
      "images/stretchAppThumbnail.png",
      ["images/StretchApp0.jpg","images/StretchApp1.jpg","images/StretchApp2.jpg"],
      ["images/ReactNativeLogo.png"]
    )
  );

  projects.push(
    new Project(
      7,
      "Battle Clicker",
      false,
      "https://battle-clicker.netlify.app/",
      "https://github.com/PlasmaDiffusion/battle-clicker",
      "A clicker idle game made in Angular using 8 bit rpgs as a baseline. Similar to other idle games you click a chest to generate gold and buy stuff that generates gold faster. The extra twist is you hire fighters to battle monsters for you, who have their own advantages against certain foes in battle. The game will ask to use your browser's cookies in order to save and load data.",
      "The purpose of the project was to get familiar with Angular and its components, mainly to get a feel of how the framework differs from React. A lot of the game is based around asynchronous setInterval events alongside click events.",
      null,
      "images/BattleClickerThumbnail.png",
      [
        "images/BattleClicker0.png",
      ],
      ["images/AngularLogo.png", null]
    )
  );

  projects.push(
    new Project(
      8,
      "Streamlined Job Searcher",
      false,
      "https://main.d2eaxfihz5qfr0.amplifyapp.com/",
      "https://github.com/PlasmaDiffusion/streamlined-dev-job-search",
      "A site to track job applications and links. It displays a table of jobs you've applied for, auto fills data from job descriptions, allows you to save links and order them by click frequency, and also shows a graph for analytics of posted applications.",
      "This was made in Vue at the front end with D3.js to show graphs. At the back end it uses .NET and DynamoDB. (Usernames and dates are used as the primary and sort keys for job applications.) For the sake of demoing it, you can use this app as a guest to use the data publicly.",
      null,
      "images/StreamlinedJobSearcherThumbnail.png",
      [
        "images/StreamlinedJobSearch0.png",
        "images/StreamlinedJobSearch1.png",
        "images/StreamlinedJobSearch2.png",
      ],
      ["images/VueLogo.png", "images/NetLogo.png"]
    )
  );

  //Games ---------------------------------------------------------------------------------------------------------------------------
  projects.push(
    new Project(
      9,
      "Robots & Things",
      false,
      "https://plasmashadowstudios.github.io/Robots-And-Things",
      "https://github.com/PlasmaShadowStudios/Robots-And-Things",
      "A 3D platformer game that mixes open exploration and linear score attack based levels together. I'm the programmer for this project, using the Unreal engine. I also have done a large chunk of the level design and overall game design.",
      "Additionally I developed a website about the game in Next.js, which posts updates based on messages gotten from the game's discord server, using discord's API. (The game's repo is private but you can look at the website's repo.)",
      "https://www.youtube.com/embed/pucektir9Qo",
      null,
      ["images/RobotsAndThingsLogo.png", "images/RobotsAndThings0.png", "images/RobotsAndThings1.png"],
      ["images/unrealLogo.png", null]
    )
  );

  projects.push(
    new Project(
      10,
      "Hyper Snake",
      false,
      null,//"https://play.google.com/store/apps/details?id=com.PlasmaShadowGames.HypeSnake&hl=en_CA&gl=US",
      "https://github.com/PlasmaDiffusion/Snake-Adventure",
      "A different take on the classic snake game. Hyper Snake has you take the snake across various levels that require you to grow a certain size to reach the next one. You can unlock different level themes that alter the gameplay, as well as skins for the snake.",
      "This was made almost exclusively in Unity, save for a few assets. It makes use of a basic micro-transaction that disables ads.",
      "https://www.youtube.com/embed/j5O9KC4_5Q0",
      null,
      [
        "images/hyperSnake1.png",
        "images/hyperSnake2.png",
        "images/hyperSnake3.png",
      ],
      ["images/unityLogo.png", null]
    )
  );

  return projects;
}
