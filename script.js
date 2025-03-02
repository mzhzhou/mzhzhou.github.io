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

// document.addEventListener("DOMContentLoaded", function () {
//     const circle = document.getElementById("gradient_circle_pointer");
//     const body = document.body;

//     // Movement speed modifier
//     const moveStep = 2; // Adjust speed as needed

//     // Proximity threshold (distance in pixels)
//     const proximityThreshold = 50;

//     // Place the circle at a random position
//     function placeCircleRandomly() {
//         const x = Math.floor(Math.random() * (window.innerWidth - circle.offsetWidth));
//         const y = Math.floor(Math.random() * (window.innerHeight - circle.offsetHeight));
//         circle.style.left = `${x}px`;
//         circle.style.top = `${y}px`;
//     }

//     // Initially place the circle randomly
//     placeCircleRandomly();

//     // Previous mouse position
//     let previousMousePosition = { x: null, y: null };

//     // Function to move the circle based on mouse movement
//     function moveCircle(e) {
//         // Initialize previous mouse position on the first movement
//         if (previousMousePosition.x === null) {
//             previousMousePosition.x = e.clientX;
//             previousMousePosition.y = e.clientY;
//             return; // Do not move on first mouse position initialization
//         }

//         // Calculate the change in mouse position
//         const deltaX = e.clientX - previousMousePosition.x;
//         const deltaY = e.clientY - previousMousePosition.y;

//         // Calculate the circle's position and mouse distance
//         const circleRect = circle.getBoundingClientRect();
//         const distanceToMouse = Math.sqrt((e.clientX - (circleRect.left + circleRect.width / 2)) ** 2 +
//             (e.clientY - (circleRect.top + circleRect.height / 2)) ** 2);

//         // If the mouse is within proximity of the circle
//         if (distanceToMouse < proximityThreshold) {
//             // Calculate the new position of the circle based on the mouse's movement
//             const newX = circleRect.left + deltaX;
//             const newY = circleRect.top + deltaY;

//             // Move the circle to the new position, keeping it within bounds
//             circle.style.left = `${Math.max(0, Math.min(newX, window.innerWidth - circle.offsetWidth))}px`;
//             circle.style.top = `${Math.max(0, Math.min(newY, window.innerHeight - circle.offsetHeight))}px`;
//         }

//         // Update previous mouse position
//         previousMousePosition.x = e.clientX;
//         previousMousePosition.y = e.clientY;
//     }

//     // Listen to mouse movements to move the circle
//     body.addEventListener("mousemove", moveCircle);
// });


document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const spawnCirclesBtn = document.getElementById("game_start_button");
    const gradientCirclePointer = document.getElementById("gradient_circle_pointer");
    const gameText = document.getElementById("game_text");
    let staticCircle = null;

    // Movement parameters
    const moveStep = 5; // Pixels to move for each mouse movement
    const proximityThreshold = 100; // Distance in pixels to trigger movement
    const overlapDuration = 2000; // Duration in milliseconds (5 seconds)

    // Function to place the circle at a random position
    function placeCircleRandomly(circle) {
        const x = Math.floor(Math.random() * (window.innerWidth - 50)); // 50 is the circle's diameter
        const y = Math.floor(Math.random() * (window.innerHeight - 50));
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
    }

    // Function to spawn circles
    function spawnCircles() {

        spawnCirclesBtn.style.display = 'none';
        gameText.style.display = 'block';
        // Remove the existing staticCircle if it already exists
        if (staticCircle) {
            body.removeChild(staticCircle);
        }

        // Create the staticCircle
        staticCircle = document.createElement("div");
        staticCircle.className = "new_circle";
        placeCircleRandomly(staticCircle);
        body.appendChild(staticCircle);

        // Show the gradient_circle_pointer
        gradientCirclePointer.style.display = 'block';
        placeCircleRandomly(gradientCirclePointer); // Position the pointer circle initially

        // Reset previous mouse position
        previousMousePosition = { x: null, y: null };
    }

    // Previous mouse position for the gradientCirclePointer
    let previousMousePosition = { x: null, y: null };

    // Timer for checking overlap
    let overlapTimer = null;

    // Function to check for overlap between two circles
    function checkOverlap() {
        const pointerRect = gradientCirclePointer.getBoundingClientRect();
        const staticCircleRect = staticCircle.getBoundingClientRect();

        // Check if rectangles overlap
        return !(
            pointerRect.right < staticCircleRect.left ||
            pointerRect.left > staticCircleRect.right ||
            pointerRect.bottom < staticCircleRect.top ||
            pointerRect.top > staticCircleRect.bottom
        );
    }

    // Function to move the gradient_circle_pointer based on mouse movement
    function movePointerDest(e) {
        // Initialize previous mouse position on the first movement
        if (previousMousePosition.x === null) {
            previousMousePosition.x = e.clientX;
            previousMousePosition.y = e.clientY;
            return; // Do not move on first mouse position initialization
        }

        // Calculate the change in mouse position
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        // Calculate the pointerDest circle's position and mouse distance
        const pointerRect = gradientCirclePointer.getBoundingClientRect();
        const distanceToMouse = Math.sqrt((e.clientX - (pointerRect.left + pointerRect.width / 2)) ** 2 +
            (e.clientY - (pointerRect.top + pointerRect.height / 2)) ** 2);

        // If the mouse is within proximity of the gradient_circle_pointer
        if (distanceToMouse < proximityThreshold) {
            // Move the circle directly in the direction of the mouse movement
            const angle = Math.atan2(deltaY, deltaX);
            gradientCirclePointer.style.left = `${Math.max(0, Math.min(pointerRect.left + Math.cos(angle) * moveStep, window.innerWidth - gradientCirclePointer.offsetWidth))}px`;
            gradientCirclePointer.style.top = `${Math.max(0, Math.min(pointerRect.top + Math.sin(angle) * moveStep, window.innerHeight - gradientCirclePointer.offsetHeight))}px`;
        }

        // Update previous mouse position
        previousMousePosition.x = e.clientX;
        previousMousePosition.y = e.clientY;

        // Check for overlap between gradient_circle_pointer and staticCircle
        if (checkOverlap()) {
            // Change the border color of the staticCircle
            staticCircle.classList.add("circle_overlap");

            // Clear any existing overlap timer
            clearTimeout(overlapTimer);

            // Set a timer to respawn the staticCircle after 5 seconds
            overlapTimer = setTimeout(() => {
                placeCircleRandomly(staticCircle); // Respawn staticCircle in a new location
                staticCircle.classList.remove("circle_overlap"); // Remove the overlapping class
            }, overlapDuration);
        } else {
            // If there's no overlap, clear the timer and ensure no overlap class is present
            clearTimeout(overlapTimer);
            staticCircle.classList.remove("circle_overlap");
        }
    }

    // Listen for the button click to spawn circles
    spawnCirclesBtn.addEventListener("click", spawnCircles);

    // Listen to mouse movements to move the gradient_circle_pointer
    body.addEventListener("mousemove", movePointerDest);
});

document.addEventListener("DOMContentLoaded", function () {
    let leftLinks = document.querySelector(".left-links");
    let hasScrolled = false;

    window.addEventListener("scroll", function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 50 && !hasScrolled) {
            leftLinks.classList.add("show"); // Show left links
            hasScrolled = true; // Prevent further hiding
        }
    });
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