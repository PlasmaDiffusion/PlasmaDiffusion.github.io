//Global functions -----------------------------------------------------------------------------------------

export function ChangeElementDisplay(id, display) {
  var webElement = document.getElementById(id);
  if (webElement) webElement.style.display = display;
}

export function ChangeClassDisplay(className, display) {
  var elements = document.getElementsByClassName(className);
  for (let i = 0; i < elements.length; i++) elements[i].style.display = display;
}

//When a preview button is clicked (for images or videos), find the html elements that have said preview data.
export function ChangePreviewImage(button) {
  //Now find the hidden <p>s that contain image or video data
  let parentDiv =
    button.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
      .parentNode;
  var imageNodes = null;

  //Find the div containing the strings we need
  for (var i = 0; i < parentDiv.childNodes.length; i++) {
    if (parentDiv.childNodes[i].className == "itemStrings") {
      imageNodes = parentDiv.childNodes[i];
      break;
    }
  }

  //Failsafe if nothing is found
  if (!imageNodes) return;

  let imageSrcs = [
    imageNodes.childNodes[1].innerHTML,
    imageNodes.childNodes[3].innerHTML,
    imageNodes.childNodes[5].innerHTML,
    imageNodes.childNodes[7].innerHTML,
    imageNodes.childNodes[9].innerHTML,
  ];

  //Check for video
  let videoSrc = imageNodes.childNodes[1].innerHTML;

  let offset = 1;
  if (videoSrc) offset = 0;

  let buttonIndex = parseInt(button.value) + offset;

  //Fill in this button, but not the other ones.
  let parent = button.parentNode;

  for (let i = 1; i <= 7; i += 2) {
    parent.childNodes[i].className = "changePreview";
    //console.logconsole.log(parent.childNodes[i].innerHTML)

    //Hide buttons that don't have anything.
    if (imageNodes.childNodes[i + 2 * offset].innerHTML == "")
      parent.childNodes[i].className = "changePreviewEmpty";
  }

  button.className = "changePreviewSelected";

  //Check if showing a video
  CheckIfVideoOrImage(buttonIndex, imageSrcs);
}

export function CheckIfVideoOrImage(buttonIndex, imageSrcs) {
  if (buttonIndex > 0) {
    //Give all preview images this image. You'll only see one at a time.
    document.querySelectorAll("img").forEach((image) => {
      if (image.className == "previewImage") {
        if (imageSrcs[buttonIndex]) {
          //Make there's an actual image to show
          image.src = imageSrcs[buttonIndex];
        }
        image.style.display = "block";
      }
    });
    //Hide videos
    document.querySelectorAll("iframe").forEach((video) => {
      video.style.display = "none";
    });
  } else {
    //Hide images
    document.querySelectorAll("img").forEach((image) => {
      if (image.className == "previewImage") image.style.display = "none";
    });
    //Show videos
    document.querySelectorAll("iframe").forEach((video) => {
      video.style.display = "block";
    });
  }
}

//Toggle arrow visiblity (called when preview image is hovered)
export function MakeArrowsVisible(image) {
  image.parentNode.children[0].style.opacity = 0.5;
  image.parentNode.children[1].style.opacity = 0.5;
}
export function MakeArrowsInvisible(image) {
  image.parentNode.children[0].style.opacity = 0;
  image.parentNode.children[1].style.opacity = 0;
}

//Next/prev preview arrows call this. It moves to the next image by "clicking" the preview button for it.
export function GetValueOfSelectedButton(button, offset) {
  var previewButtons =
    button.parentNode.parentNode.parentNode.children[3].children;

  previewButtons = previewButtons[0].children;
  var totalUsedButons = 0;

  //Find how many preview buttons are USED (can be up to 4)
  for (let i = 0; i < previewButtons.length; i++) {
    if (previewButtons[i].className != "changePreviewEmpty") totalUsedButons++;
  }

  //Find the button that's selected
  for (let i = 0; i < previewButtons.length; i++) {
    if (previewButtons[i].className == "changePreviewSelected") {
      //Click the next button in line. Check to wrap around to the first and last button as well.
      if (i + offset >= totalUsedButons) previewButtons[0].click();
      else if (i + offset < 0) previewButtons[totalUsedButons - 1].click();
      else previewButtons[i + offset].click();
      break;
    }
  }
}
