/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
// console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the steps in the TODO 🚧
*/
// const btn = document.querySelector("button"); // Get the button from the page
// if (btn) { // Detect clicks on the button
//   btn.onclick = function () {
//     // The 'dipped' class in style.css changes the appearance on click
//     btn.classList.toggle("dipped");
//   };
// }

document.addEventListener("DOMContentLoaded", function () {
    const circle = document.querySelector(".gradient_circle");
    let dx = (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 3 + 0.5); // Change in position along X-axis
    let dy = (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 3 + 0.5); // Change in position along Y-axis
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    function move() {
        if (x + dx > window.innerWidth - 200 || x + dx < 0) {
            // Check horizontal boundaries
            dx = -dx;
        }
        if (y + dy > window.innerHeight - 200 || y + dy < 0) {
            // Check vertical boundaries
            dy = -dy;
        }
        x += dx;
        y += dy;

        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;

        requestAnimationFrame(move);
    }

    move();
});

document.addEventListener("mousemove", function (event) {
    const circle = document.querySelector(".gradient_circle_pointer");
    circle.style.transform = `translate3d(${event.clientX - 50}px, ${event.clientY - 50
        }px, 0)`;
    const pointerColor = this.style.getPropertyValue("--pointer-color");
    circle.style.setProperty("--pointer-color", pointerColor);
    // Adjust the translate3d values by subtracting half the size of the circle to center it on the cursor
});

window.addEventListener('DOMContentLoaded', function () {
    const projectContainers = document.querySelectorAll('.project_container');

    projectContainers.forEach(container => {
        container.addEventListener('touchstart', function (event) {
            event.preventDefault(); // Prevent default touch behavior
            const touchTimer = setTimeout(function () {
                // Simulate tap and hold action
                container.classList.add('hovered');
            }, 500); // Adjust the duration as needed

            container.addEventListener('touchend', function () {
                clearTimeout(touchTimer); // Cancel tap and hold action if touch is released
            });
        });
    });
});

function navToProject(url) {
    window.location.href = url;
}

// document.querySelectorAll('.project_container').forEach(container => {
//     const imageUrl = container.getAttribute('data-image-url');
//     const image = container.querySelector('.hover_image');
//     image.src = imageUrl;
// });

// document.querySelectorAll('.project_container').forEach(container => {
//     container.addEventListener('mouseover', () => {
//         container.querySelector('.hover_image').style.display = 'block';
//     });
//     container.addEventListener('mouseout', () => {
//         container.querySelector('.hover_image').style.display = 'none';
//     });
// });

// ----- GLITCH STARTER PROJECT HELPER CODE -----

// Open file when the link in the preview is clicked
let goto = (file, line) => {
    window.parent.postMessage(
        { type: "glitch/go-to-line", payload: { filePath: file, line: line } },
        "*"
    );
};
// Get the file opening button from its class name
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
    f.onclick = () => {
        goto(f.dataset.file, f.dataset.line);
    };
})