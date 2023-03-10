const target = document.getElementById("target");

document.addEventListener("mousemove", (e) => {
    rotateElement(e, target);
});

function rotateElement(event, element) {
    const x = event.clientX;
    const y = event.clientY;

    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    const offsetX = ((x - middleX) / middleX) * 45;
    const offsetY = ((y - middleY) / middleY) * 45;

    element.style.setProperty("--rotateX", offsetX + "deg");
    element.style.setProperty("--rotateY", offsetY + "deg");
}