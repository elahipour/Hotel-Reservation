let showHideSwitch = true;
const menuItems = document.querySelector("#items_container");

document.body.addEventListener("click", (e) => {
  const element = e.target.dataset.name;
  if (element === "burger") {
    if (showHideSwitch) {
      handleShow();
    } else {
      handleHide();
    }
  } else {
    handleHide();
  }
});

function handleHide() {
  menuItems.style.display = "none";
  showHideSwitch = !showHideSwitch;
}
function handleShow() {
  menuItems.style.display = "flex";
  showHideSwitch = !showHideSwitch;
}
