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
  //Get template and parent node
  var template = document.getElementById("projectButtonTemplate");
  var parent = document.getElementById(parentId);
  var newProjectImageButton = template.content.firstElementChild.cloneNode(
    true
  );

  //Assign image (Either the thumbnail or the first preview image)

  if (project.thumbnailString)
    newProjectImageButton.children[0].src = project.thumbnailString;
  else newProjectImageButton.children[0].src = project.imageStrings[0];

  //Assign button value and text
  newProjectImageButton.children[1].value = project.id;
  newProjectImageButton.children[1].innerHTML = project.name;

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

  parent.appendChild(newProjectWindow);
}

//Functions for dynamically setting information on a project -----------------------------------------------------------
function setHeading(newProjectWindow, project) {
  var closeBtn = newProjectWindow.getElementsByTagName("button")[0];
  closeBtn.value = project.id;
  var name = newProjectWindow.getElementsByTagName("H2")[0];
  name.innerHTML = project.name;
  name.appendChild(closeBtn);
  name.id = "name" + project.id;
}
