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

// let goto = (file, line) => {
//     window.parent.postMessage(
//         { type: "glitch/go-to-line", payload: { filePath: file, line: line } },
//         "*"
//     );
// };
// Get the file opening button from its class name
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
    f.onclick = () => {
        goto(f.dataset.file, f.dataset.line);
    };
})