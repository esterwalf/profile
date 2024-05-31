///////////////////////////
/*INTRO TEXT*/
/*let userNameQuestion = prompt("Hello, what is your name?");
let userNameAnswer = document.createElement('h1');

userNameAnswer.textContent = `${userNameQuestion}, Welcome to my Website`;

document.body.appendChild(userNameAnswer);*/


/*HOMEPAGE COLOUR CHANGER*/
function changeColor(type, colorName) {
    const validColorNames = ["Purple", "Lavender", "Blue", "Cyan", "Red", "Maroon", "Green", "Orange", "Yellow", "Pink", "Black", "White"];
    
    if (!validColorNames.includes(colorName)) {
        console.error(`Invalid color name: ${colorName}`);
        return;
    }
    
    const elementId = `${type}${colorName}`;
    const element = document.getElementById(elementId);
    
    if (!element) {
        console.error(`Element with ID "${elementId}" not found.`);
        return;
    }
    
    if (type === 'background') {
        document.body.style.backgroundColor = getComputedStyle(element).backgroundColor;
    } else if (type === 'font') {
        document.body.style.color = getComputedStyle(element).backgroundColor;
    }
}
