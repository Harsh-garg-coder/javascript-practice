const shiftInput = document.querySelector("#shift-input");
const blurInput = document.querySelector("#blur-input");
const backgroundColorInput = document.querySelector("#background-color-input");
const imageInnerContainer = document.querySelector(".image-inner-container");
const root = document.querySelector(":root");

function getVariableValue(variableName) {
    return getComputedStyle(root).getPropertyValue(variableName);
}

function setVariableValue(variableName, newValue) {
    root.style.setProperty(variableName, newValue);
}

backgroundColorInput.value = getVariableValue("--image-background-color");

shiftInput.addEventListener("input", (e) => {
    setVariableValue("--shift", e.target.value + "px");
})

blurInput.addEventListener("input", (e) => {
    setVariableValue("--blur-percentage", e.target.value + "px");
})

backgroundColorInput.addEventListener("input", (e) => {
    setVariableValue("--image-background-color", e.target.value);
})