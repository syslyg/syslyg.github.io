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
    loadTextFromFile("txt/content1.txt", "2");
    loadImage("pic1.jpg", '4');
    loadImage("pic1.jpg", "5");
} 
function buttonTwoFunction() { 
    loadTextFromFile('txt/content2.txt', '2');
    document.getElementById("1").innerHTML = "Versek";
    loadImage("pic1.jpg", '4');
    loadImage("pic1.jpg", "5");
} 
function buttonThreeFunction() { 
    loadTextFromFile('txt/content3.txt', '2');
    document.getElementById("1").innerHTML = "";
    loadImage("pic1.jpg", '4');
    loadImage("pic1.jpg", "5");
}
function buttonFourFunction() { 
    loadTextFromFile('txt/content4.txt', '2');
    document.getElementById("1").innerHTML = "";
    loadImage("pic1.jpg", '4');
    loadImage("pic1.jpg", "5");
}
function buttonFiveFunction() { 
    loadTextFromFile('txt/content5.txt', '2');
    document.getElementById("1").innerHTML = "";
    loadImage("pic1.jpg", '4');
    loadImage("pic1.jpg", "5");
}
function buttonSixFunction() { 
    loadTextFromFile('txt/content6.txt', '2');
    document.getElementById("1").innerHTML = "";
    loadImage("pic1.jpg", '4');
    loadImage("pic1.jpg", "5");
}
function buttonSevenFunction() { 
    loadTextFromFile('txt/content7.txt', '2');
    document.getElementById("1").innerHTML = "";
    loadImage("pic1.jpg", '4');
    loadImage("pic1.jpg", "5");
}
function buttonEightFunction() { 
    loadTextFromFile('txt/content8.txt', '2');
    document.getElementById("1").innerHTML = "";
    loadImage("pic1.jpg", '4');
    loadImage("pic1.jpg", "5");
}
function buttonNineFunction() { 
    loadTextFromFile('txt/content9.txt', '2');
    document.getElementById("1").innerHTML = "";
    loadImage("pic1.jpg", '4');
    loadImage("pic1.jpg", "5");
}
function buttonTenFunction() { 
    loadTextFromFile('txt/content10.txt', '2');
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