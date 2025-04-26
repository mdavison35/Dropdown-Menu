import "./styles.css";

document.getElementById("list-toggle").addEventListener("click", () => {
    const options = document.getElementsByClassName("options")[0];
    const optionsChildren = options.childNodes;

    for (let i = 3; i < optionsChildren.length; i += 2) {
        const newVisibility = optionsChildren[i].style.visibility == "hidden" ? "visible": "hidden";
        optionsChildren[i].style.visibility =  newVisibility;
    }
});