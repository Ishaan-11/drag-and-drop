const COLORS = [
  "#800000", // Maroon
  "#f58231", // Orange
  "#808000", // Olive
  "#469990", // Teal
  "#0000FF", // Blue
  "#ffe119", // Yellow
  "#00FFFF", // Cyan
  "#e6194B", // Red
  "#3cb44b", // Green
];

const parentEle = document.getElementById("parent");
let dragindex = 0;
let clone = "";

// set colors of boxes
for (let i = 0; i < COLORS.length; i++) {
  const div = document.createElement("div");
  const attributes = {
    id: `box${i}`,
    class: "empty",
    draggable: "true",
    ondragstart: "drag(event)",
    ondrop: "drop(event)",
    ondragover: "allowDrop(event)",
    style: `background-color: ${COLORS[i]};`,
  };

  setAttributes(div, attributes);
  div.innerHTML = `${i + 1}00`;
  parentEle.append(div);
}

function setAttributes(element, attributes) {
  Object.keys(attributes).forEach((attr) => {
    element.setAttribute(attr, attributes[attr]);
  });
}

function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
}

function allowDrop(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  clone = e.target.cloneNode(true);
  let data = e.dataTransfer.getData("text");
  if (clone.id !== data) {
    let nodelist = document.getElementById("parent").childNodes;
    for (let i = 0; i < nodelist.length; i++) {
      if (nodelist[i].id == data) {
        dragindex = i;
      }
    }

    document
      .getElementById("parent")
      .replaceChild(document.getElementById(data), e.target);

    document
      .getElementById("parent")
      .insertBefore(
        clone,
        document.getElementById("parent").childNodes[dragindex]
      );
  }
}
