// const myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/ballerina-logo.png') {
        myImage.setAttribute('src', 'images/biztrant-logo.png');
    } else {
        myImage.setAttribute('src', 'images/ballerina-logo.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Ballerina is cool, ${myName}`;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Ballerina is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}

