import {
  ChangePreviewImage,
  CheckIfVideoOrImage,
  GetValueOfSelectedButton,
  ChangeElementDisplay,
  ChangeClassDisplay,
  MakeArrowsInvisible,
  MakeArrowsVisible,
  HideProjectsBasedOnURL,
} from "./menuFunctions.js";

import { getProjectData } from "./projects.js";

import { useProjectDataToGenerateHTML, filterProjectButton } from "./projectFunctions.js";

document.addEventListener("DOMContentLoaded", () => {
  //Show stuff based on the URL
  HideProjectsBasedOnURL();

  var projects = getProjectData();
  useProjectDataToGenerateHTML(projects);

  filterProjectButton("Featured");

  //Button click events ---------------------------------------------------------------------------------------------

  var lastMenu = "#websites";

  //Find all buttons
  document.querySelectorAll("button").forEach((button) => {
    //PROJECT BUTTON ON CLICK: Click a button to show information of a project.
    if (button.className == "btn" || button.className == "bigBtn") {
      button.onclick = () => {
        ChangeElementDisplay(button.value, "block");
        ChangeElementDisplay("websites", "none");
        ChangeElementDisplay("games", "none");
        ChangeElementDisplay("Opening", "none");
        ChangeElementDisplay("webDevSkills", "none");
        ChangeElementDisplay("gameDevSkills", "none");
        ChangeElementDisplay("contactMe", "none");
        ChangeClassDisplay("wave", "none");
        ChangeClassDisplay("bigSpace", "none");
        ChangeClassDisplay("smallSpace", "none");

        //Put up the first preview image
        document.getElementById(button.value + "_preview").click();

        //Save the last menu to redirect to it later
        lastMenu = "#" + button.parentNode.parentNode.parentNode.id;

        //Move to top of screen to see the whole thing (Usually only needed for mobile)
        window.location.href = "#top";
      };

      //PROJECT BUTTON ON HOVERED: Add a brief description when button is hovered over
      const briefDescription = document.getElementById("briefDescription");

      button.onmouseover = () => {
        briefDescription.style.visibility = "visible";
        briefDescription.innerHTML = button.getAttribute("data-brief-description");
      };
      button.onmouseleave = () => {
        briefDescription.style.visibility = "hidden";
      }

      //Analytics for when project is clicked
      button.setAttribute('data-umami-event-project-displayed', projects[button.value].name);
    }

    //Click close button to get rid of information
    else if (button.className == "close") {
      button.onclick = () => {
        ChangeElementDisplay(button.value, "none");
        ChangeElementDisplay("websites", "block");
        ChangeElementDisplay("games", "block");
        ChangeElementDisplay("Opening", "block");
        ChangeElementDisplay("webDevSkills", "block");
        ChangeElementDisplay("gameDevSkills", "block");
        ChangeElementDisplay("contactMe", "block");
        ChangeClassDisplay("wave", "block");
        ChangeClassDisplay("bigSpace", "block");
        ChangeClassDisplay("smallSpace", "block");

        //Redirect to last menu
        window.location.href = lastMenu;
      };
    }
    //Cycle through images/videos
    else if (button.className == "changePreview") {
      button.onclick = () => {
        ChangePreviewImage(button);
      };
    } //Next/previous image buttons
    else if (button.className == "nextPreview") {
      button.onclick = () => GetValueOfSelectedButton(button, 1);
    } else if (button.className == "prevPreview") {
      button.onclick = () => GetValueOfSelectedButton(button, -1);
    } else if (button.className == "filter") {
      button.onclick = () => {
        filterProjectButton(button.value);
        //Un highlight other filter buttons
        document.getElementById("FeaturedFilter").className = "filter";
        document.getElementById("GraphQLFilter").className = "filter";
        document.getElementById("ReactFilter").className = "filter";
        document.getElementById("VueFilter").className = "filter";
        document.getElementById("ReactNativeFilter").className = "filter";
        document.getElementById("AngularFilter").className = "filter";
        document.getElementById("DjangoFilter").className = "filter";
        document.getElementById("NodeJSFilter").className = "filter";
        document.getElementById("NetFilter").className = "filter";
        document.getElementById("UnrealFilter").className = "filter";
        document.getElementById("UnityFilter").className = "filter";



        //Highlight the button that was just clicked
        button.className = "filter highlighted";
      };
    }
  });

  //Highlight the default filter
  document.getElementById("FeaturedFilter").className = "filter highlighted";

  //OnMouseOver events ---------------------------------------------------------------------------------------------

  //Get all preview images, and make their arrows visible only when hovered over
  var imgs = document.getElementsByClassName("previewImage");
  [].forEach.call(imgs, function (image) {
    image.parentNode.children[0].style.opacity = 0;
    image.parentNode.children[1].style.opacity = 0;
    image.parentNode.onmouseover = () => {
      MakeArrowsVisible(image);
    };
    image.parentNode.onmouseleave = () => {
      MakeArrowsInvisible(image);
    };
  });
});
