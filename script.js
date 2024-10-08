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
    document.getElementById("1").innerHTML = "Kedves Látogató!"
    loadTextFromFile('content1.txt', '2');
    document.getElementById("3").innerHTML = ""
    loadImage("pic1.jpg", '4')
    loadImage("pic1.jpg", "5")
} 

function buttonTwoFunction() { 
    loadTextFromFile('content2.txt', '2');
    document.getElementById("1").innerHTML = "Versek";
    document.getElementById("3").innerHTML = ""

} 

function buttonThreeFunction() { 
    loadTextFromFile('content3.txt', '2');
    document.getElementById("3").innerHTML = ""
}