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
    // Check if the current page is 'index.html'
    if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
        const circle = document.querySelector(".gradient_circle");

        if (!circle) return; // Make sure the circle element exists

        const circleRadius = (parseInt(getComputedStyle(circle).width) / 2);
        let dx = (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 2 + 0.25); // Change in position along X-axis
        let dy = (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 2 + 0.25); // Change in position along Y-axis
        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;

        function move() {
            // Bounce the circle off the screen edges
            if (x + dx > window.innerWidth - circleRadius || x + dx < circleRadius) {
                dx = -dx;
            }
            if (y + dy > 650 || y + dy < circleRadius) {
                dy = -dy;
            }
            x += dx;
            y += dy;

            circle.style.left = `${x}px`;
            circle.style.top = `${y}px`;

            requestAnimationFrame(move);
        }

        move();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Check if the current page is 'index.html'
    if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
        const circle = document.querySelector(".gradient_circle_alt");

        if (!circle) return; // Make sure the circle element exists

        const circleRadius = (parseInt(getComputedStyle(circle).width) / 2);
        let dx = (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 2 + 0.25); // Change in position along X-axis
        let dy = (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 2 + 0.25); // Change in position along Y-axis
        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;

        function move() {
            // Bounce the circle off the screen edges
            if (x + dx > window.innerWidth - circleRadius || x + dx < circleRadius) {
                dx = -dx;
            }
            if (y + dy > 650 || y + dy < circleRadius) {
                dy = -dy;
            }
            x += dx;
            y += dy;

            circle.style.left = `${x}px`;
            circle.style.top = `${y}px`;

            requestAnimationFrame(move);
        }

        move();
    }
});

document.addEventListener("mousemove", function (event) {
    if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
        const circle = document.querySelector(".gradient_circle_pointer");
        const pointerColor = window.getComputedStyle(document.documentElement).getPropertyValue("--pointer-color");

        // Set the circle's position to be centered on the cursor, accounting for scroll position
        const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;

        circle.style.left = `${event.clientX + scrollX}px`;
        circle.style.top = `${event.clientY + scrollY}px`;

        // Optional: Update the pointer color if needed
        circle.style.setProperty("--pointer-color", pointerColor);
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    const draggables = document.querySelectorAll('.draggable');

    draggables.forEach(draggable => {
        let offsetX = 0, offsetY = 0, initialX = 0, initialY = 0;
        let isDragging = false;

        draggable.addEventListener('mousedown', (e) => {
            e.preventDefault(); // Prevent default behavior
            isDragging = true;
            initialX = e.clientX;
            initialY = e.clientY;
            offsetX = draggable.offsetLeft;
            offsetY = draggable.offsetTop;
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
        });

        function onMouseMove(e) {
            if (isDragging) {
                const dx = e.clientX - initialX;
                const dy = e.clientY - initialY;
                draggable.style.left = `${offsetX + dx}px`;
                draggable.style.top = `${offsetY + dy}px`;
            }
        }

        function onMouseUp() {
            isDragging = false;
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        }
    });
});





// window.addEventListener('DOMContentLoaded', function () {
//     const projectContainers = document.querySelectorAll('.project_container');

//     projectContainers.forEach(container => {
//         container.addEventListener('touchstart', function (event) {
//             event.preventDefault(); // Prevent default touch behavior
//             const touchTimer = setTimeout(function () {
//                 // Simulate tap and hold action
//                 container.classList.add('hovered');
//             }, 500); // Adjust the duration as needed

//             container.addEventListener('touchend', function () {
//                 clearTimeout(touchTimer); // Cancel tap and hold action if touch is released
//             });
//         });
//     });
// });

function navToProject(url) {
    window.location.href = url;
}

function toggleMenu() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    if (dropdownMenu.style.display === 'none') {
        dropdownMenu.style.display = 'flex';
    } else {
        dropdownMenu.style.display = 'none';
    }
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