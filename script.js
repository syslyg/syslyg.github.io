function loadTextFromFile(filePath, elementId) {
    fetch(filePath)
        .then(response => response.text())
        .then(text => {
            document.getElementById(elementId).innerHTML = text;
        })
        .catch(error => console.error('Error loading file:', error));
}
function loadImage(imagePath, elementId) {
    document.getElementById(elementId).src = imagePath;
}
function buttonOneFunction() { 
    document.getElementById("1").innerHTML = "Kedves Látogató!";
    loadTextFromFile("content1.txt", "2");
    loadImage("pic1.jpg", '4');
    loadImage("pic1.jpg", "5");
} 
function buttonTwoFunction() { 
    loadTextFromFile('content2.txt', '2');
    document.getElementById("1").innerHTML = "Versek";
    loadImage("pic1.jpg", '4');
    loadImage("pic1.jpg", "5");
} 
function buttonThreeFunction() { 
    loadTextFromFile('content3.txt', '2');
    document.getElementById("1").innerHTML = "";
    loadImage("pic1.jpg", '4');
    loadImage("pic1.jpg", "5");
}
function buttonFourFunction() { 
    loadTextFromFile('content4.txt', '2');
    document.getElementById("1").innerHTML = "";
    loadImage("pic1.jpg", '4');
    loadImage("pic1.jpg", "5");
}
function buttonFiveFunction() { 
    loadTextFromFile('content5.txt', '2');
    document.getElementById("1").innerHTML = "";
    loadImage("pic1.jpg", '4');
    loadImage("pic1.jpg", "5");
}
function buttonSixFunction() { 
    loadTextFromFile('content6.txt', '2');
    document.getElementById("1").innerHTML = "";
    loadImage("pic1.jpg", '4');
    loadImage("pic1.jpg", "5");
}
function buttonSevenFunction() { 
    loadTextFromFile('content7.txt', '2');
    document.getElementById("1").innerHTML = "";
    loadImage("pic1.jpg", '4');
    loadImage("pic1.jpg", "5");
}
function buttonEightFunction() { 
    loadTextFromFile('content8.txt', '2');
    document.getElementById("1").innerHTML = "";
    loadImage("pic1.jpg", '4');
    loadImage("pic1.jpg", "5");
}
function buttonNineFunction() { 
    loadTextFromFile('content9.txt', '2');
    document.getElementById("1").innerHTML = "";
    loadImage("pic1.jpg", '4');
    loadImage("pic1.jpg", "5");
}
function buttonTenFunction() { 
    loadTextFromFile('content10.txt', '2');
    document.getElementById("1").innerHTML = "";
    loadImage("pic1.jpg", '4');
    loadImage("pic1.jpg", "5");
}
function buttonElevenFunction() {
    document.getElementById("1").innerHTML = "Üdv!";
    document.getElementById("2").innerHTML = "Kérlek válassz valamit a menüből!";
    loadImage("", '4');
    loadImage("", "5");
}