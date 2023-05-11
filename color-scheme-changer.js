const colorSchemes = [

    // Paste color scheme objects here.
    
];
let currentColorSchemeIndex = 0;

function changeColorScheme(direction) {
    if (direction === 'next') {
        currentColorSchemeIndex = (currentColorSchemeIndex + 1) % colorSchemes.length;
    } else if (direction === 'previous') {
        currentColorSchemeIndex = (currentColorSchemeIndex - 1 + colorSchemes.length) % colorSchemes.length;
    }

    const colorScheme = colorSchemes[currentColorSchemeIndex];

    for (const [property, value] of Object.entries(colorScheme)) {
        document.documentElement.style.setProperty(property, value);
    }

    updateColorSchemeIndexDisplay();
}

function updateColorSchemeIndexDisplay() {
    let indexDisplay = document.getElementById("color-scheme-index");

    if (!indexDisplay) {
        indexDisplay = document.createElement("div");
        indexDisplay.id = "color-scheme-index";
        indexDisplay.style.position = "absolute";
        indexDisplay.style.bottom = "10px";
        indexDisplay.style.left = "10px";
        indexDisplay.style.backgroundColor = "white";
        indexDisplay.style.color = "black";
        indexDisplay.style.padding = "5px";
        indexDisplay.style.fontFamily = "Inter";
        document.body.appendChild(indexDisplay);
    }

    indexDisplay.innerText = `Color Scheme Index: ${currentColorSchemeIndex}`;
}

function handleKeydown(event) {
    if (event.key === 'ArrowRight') {
        changeColorScheme('next');
    } else if (event.key === 'ArrowLeft') {
        changeColorScheme('previous');
    }
}

document.addEventListener('keydown', handleKeydown);
changeColorScheme('next');

