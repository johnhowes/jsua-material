import * as material from "../src";

import {
  createExample,
  clearExamples
} from "./util";

function createExpansionPanelExample(label, cb) {
  createExample(function (el) {
    var labelElement = document.createElement("div");
    labelElement.textContent = label;
    el.appendChild(labelElement);

    var contentElement = document.createElement("div");
    contentElement.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    el.appendChild(contentElement);
    cb(el);
  });
}

export default function motionExamples() {
  clearExamples();

  createExpansionPanelExample("Click to Show/Hide", function (el) {
    var header = el.firstElementChild;
    material.expansionPanel(el);
    material.expansionPanel.header(header);
    el.style.margin = "24px";
    material.elevation(el, {
      level: 2
    });
  });
}
