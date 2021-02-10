//Use url to determine what projects are enabled
function getEnabledProjectType() {
  var urlArgs = window.location.search;

  if (urlArgs.includes("all")) return "all";
  else if (urlArgs.includes("games")) return "games";
  else return "websites";
}

//Create a menu of projects to click on.
export function createProjectMenus(projects) {
  var projType = getEnabledProjectType();

  projects.forEach((project) => {
    if (projType == "all") {
      //Make all menu buttons
      generateProjectButton(
        project,
        project.isGame ? "gameProjectContainer" : "webProjectContainer"
      );
    } else if (projType == "websites") {
      //Make website project buttons only
      if (!project.isGame) {
        generateProjectButton(project, "webProjectContainer");
      }
    } else if (projType == "games") {
      //Make game project buttons only
      if (project.isGame) {
        generateProjectButton(project, "gameProjectContainer");
      }
    }
  });
}

function generateProjectButton(project, parentId) {
  //Get template and parent node
  var template = document.getElementById("projectButtonTemplate");
  var parent = document.getElementById(parentId);
  var newProjectBox = template.content.firstElementChild.cloneNode(true);

  //Assign image (Either the thumbnail or the first preview image)

  if (project.thumbnailString)
    newProjectBox.children[0].src = project.thumbnailString;
  else newProjectBox.children[0].src = project.imageStrings[0];

  //Assign button value and text
  newProjectBox.children[1].value = project.id;
  newProjectBox.children[1].innerHTML = project.name;

  parent.appendChild(newProjectBox);
}

export function createProjectWindows(projects) {
  var projType = getEnabledProjectType();
}

//Get id -1
//For each project window, make a copy of template -1
//Set the data accordingly using "id + projectId" or classes
//Set the display of each project window to none until one is clicked
