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
      "https://shopping-site-mockup.netlify.app/",
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
      "https://pizza-menu-mockup.herokuapp.com/menu/",
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
      "https://crossword-puzzle-generator.herokuapp.com/",
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
      "https://painton.herokuapp.com/",
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
      ["images/MovieRater0.png"],
      ["images/ReactLogo.png", "images/GraphQL_Logo.png"]
    )
  );

  //Games ---------------------------------------------------------------------------------------------------------------------------
  projects.push(
    new Project(
      6,
      "Robots & Things",
      false,
      "https://robotsandthingsgame.com/",
      "https://robotsandthingsgame.com/",
      "A 3D platformer game that mixes open exploration and linear levels together.",
      "I'm the programmer for this project, using the Unreal engine. I also have done a large chunk of the level design and overall game design.",
      "https://www.youtube.com/embed/pucektir9Qo",
      null,
      ["images/RobotsAndThingsLogo.png", "images/RobotsAndThings0.png", "images/RobotsAndThings1.png"],
      ["images/unrealLogo.png", null]
    )
  );

  projects.push(
    new Project(
      7,
      "Hyper Snake",
      true,
      "https://play.google.com/store/apps/details?id=com.PlasmaShadowGames.HypeSnake&hl=en_CA&gl=US",
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
