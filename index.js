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

function setAttributes(element, attributes) {
  Object.keys(attributes).forEach((attr) => {
    element.setAttribute(attr, attributes[attr]);
  });
}

// set colors of boxes
for (let i = 0; i < COLORS.length; i++) {
  const div = document.createElement("div");
  const attributes = {
    id: `box${i}`,
    class: "empty",
    style: `background-color: ${COLORS[i]};`,
  };

  setAttributes(div, attributes);
  div.innerHTML = `${i + 1}00`;
  parentEle.append(div);
}

