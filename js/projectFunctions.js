//Use url to determine what projects are enabled
function getEnabledProjectType() {
  var urlArgs = window.location.search;

  if (urlArgs.includes("all")) return "all";
  else if (urlArgs.includes("games")) return "games";
  else return "websites";
}

//Create a menu of projects to click on. Also create <div>s of "windows" for each project.
export function loadProjectData(projects) {
  var projType = getEnabledProjectType();

  projects.forEach((project) => {
    if (projType == "all") {
      //Make all menu buttons
      generateProjectButton(
        project,
        project.isGame ? "gameProjectContainer" : "webProjectContainer"
      );
      generateProjectWindow(project);
    } else if (projType == "websites") {
      //Make website project buttons only
      if (!project.isGame) {
        generateProjectButton(project, "webProjectContainer");
        generateProjectWindow(project);
      }
    } else if (projType == "games") {
      //Make game project buttons only
      if (project.isGame) {
        generateProjectButton(project, "gameProjectContainer");
        generateProjectWindow(project);
      }
    }
  });
}

function generateProjectButton(project, parentId) {
  //Clone template and get parent node
  var template = document.getElementById("projectButtonTemplate");
  var parent = document.getElementById(parentId);
  var newProjectImageButton =
    template.content.firstElementChild.cloneNode(true);

  //Assign image (Either the thumbnail or the first preview image)

  if (project.thumbnailString)
    newProjectImageButton.children[0].src = project.thumbnailString;
  else newProjectImageButton.children[0].src = project.imageStrings[0];

  //Assign button value and text
  newProjectImageButton.children[1].value = project.id;
  newProjectImageButton.children[1].innerHTML = project.name;

  //Show framework icon over the button
  var frameworkIcon0 = newProjectImageButton.children[2];
  var frameworkIcon1 = newProjectImageButton.children[3];
  frameworkIcon0.src = project.frameworkStrings[0];
  frameworkIcon1.src = project.frameworkStrings[1];

  //Framework icon to attach to button
  newProjectImageButton.children[1].appendChild(frameworkIcon0);

  //The second framework icon is optional
  if (project.frameworkStrings[1])
    newProjectImageButton.children[1].appendChild(frameworkIcon1);
  else frameworkIcon1.style.display = "none";

  parent.appendChild(newProjectImageButton);
}

//Create a <div> of a project with images, links and descriptions.
function generateProjectWindow(project) {
  var template = document.getElementById("projectWindowTemplate");
  var parent = document.getElementById("body");

  //Clone
  var newProjectWindow = template.content.firstElementChild.cloneNode(true);
  newProjectWindow.id = project.id;

  //Change elements to data they need to be
  setHeading(newProjectWindow, project);
  setLinks(newProjectWindow, project);
  setDescriptions(newProjectWindow, project);
  setImages(newProjectWindow, project);

  parent.appendChild(newProjectWindow);
}

//Functions for dynamically setting information on a project -----------------------------------------------------------
function setHeading(newProjectWindow, project) {
  //Set the close button value
  var closeBtn = newProjectWindow.getElementsByTagName("button")[0];
  closeBtn.value = project.id;
  //Set the title
  var name = newProjectWindow.getElementsByTagName("H2")[0];
  name.innerHTML = project.name;
  name.appendChild(closeBtn);
  name.id = "name" + project.id;
}

function setLinks(newProjectWindow, project) {
  //Set the url link
  var links = newProjectWindow.getElementsByTagName("a");

  //Hide site/repository link if not there
  if (project.url) {
    links[0].href = project.url;
  } else {
    links[0].style = "display:none;";
  }
  if (project.repoLink) {
    links[1].href = project.repoLink;
  } else {
    links[1].style = "display:none;";
  }
}

function setDescriptions(newProjectWindow, project) {
  //Set the project descriptions (These should always exist.)
  var descriptionTags = newProjectWindow.getElementsByTagName("span");
  //The second and third span is the actual description
  descriptionTags[1].innerHTML = project.description0;
  descriptionTags[2].innerHTML = project.description1;
}

function setImages(newProjectWindow, project) {
  var images = newProjectWindow.getElementsByTagName("img");

  //First image is the preview image
  images[0].src = project.imageStrings[0];

  //Second and third images are the framework ones. There will always be one framework image, but not always two.
  images[1].src = project.frameworkStrings[0];
  if (project.frameworkStrings[1]) images[2].src = project.frameworkStrings[1];
  else images[2].style.display = "none";

  //Store the other image strings in <p> tags to be used later when image preview buttons are clicked
  var imageStringSpots = newProjectWindow.getElementsByTagName("p");

  //Index 0 is for a video string
  if (project.videoString) imageStringSpots[0].innerHTML = project.videoString;
  else imageStringSpots[0].innerHTML = "";

  //Index 1-4 is for images of the project.
  for (let i = 1; i < 5; i++) {
    if (project.imageStrings[i - 1])
      imageStringSpots[i].innerHTML = project.imageStrings[i - 1];
  }

  //Manage preview buttons (Note that there's two buttons prior)

  //Give the first preview button the appropriate id
  var previewBtns = newProjectWindow.getElementsByTagName("button");
  previewBtns[3].id = project.id.toString() + "_preview";

  //Remove preview buttons that don't need to be there
  for (let i = 3; i < previewBtns.length; i++) {
    if (!project.imageStrings[i - 3]) {
      //Offset index by 1 if there's a video project
      let index = project.videoString ? i + 1 : i;
      if (previewBtns[index]) {
        previewBtns[index].className = "changePreviewEmpty";
        previewBtns[index].style.display = "none";
      }
    }
  }

  //Put the video url in if it exists
  if (project.videoString) {
    var video = newProjectWindow.getElementsByTagName("iframe")[0];
    video.src = project.videoString;
  }
}

//Functions for only showing certain projects of a certain framework -----------------------------------------------------------
export function filterProjectButton(frameworkImageToFilterBy) {
  var projects = document.getElementsByClassName("projectBox");
  for (const project of projects) {
    var images = project.children[1].getElementsByTagName("img");

    if (
      checkIfFrameworkIsUsed(images, frameworkImageToFilterBy) ||
      checkIfProjectIsFeatured(frameworkImageToFilterBy, project.children[1].innerHTML)
    ) {
      //Make the project button visible
      project.style.display = "block";
    } else {
      //Hide the project button
      project.style.display = "none";
    }
  }
}

//Check framework icons to filter by particular frameworks
function checkIfFrameworkIsUsed(images, frameworkImageToFilterBy) {
  return (
    (images[0] && images[0].src.includes(frameworkImageToFilterBy)) ||
    (images[1] && images[1].src.includes(frameworkImageToFilterBy))
  );
}

//Hardcoded set of featured projects
function checkIfProjectIsFeatured(featuredFilter, projectHTML) {
  if (featuredFilter === "Featured") {
    console.log("*", projectHTML);
    if (projectHTML.includes("Movie Rater")) return true;
    if (projectHTML.includes("Battle Clicker")) return true;
    if (projectHTML.includes("Robots &amp; Things")) return true;
    return false;
  }

  return false;
}
