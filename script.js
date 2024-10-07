// Utility function to fetch text from a .txt file
function loadTextFromFile(filePath, elementId) {
    fetch(filePath)
        .then(response => response.text())
        .then(text => {
            document.getElementById(elementId).innerHTML = text;
        })
        .catch(error => console.error('Error loading file:', error));
}

// Button functions to load different text files
function buttonOneFunction() { 
    document.getElementById("1").innerHTML = "Kedves Látogató!"
    loadTextFromFile('content1.txt', '2');
    document.getElementById("3").innerHTML = "ui.: A fülek között lehet átfedés, érdemes sorban haladni."
} 

function buttonTwoFunction() { 
    loadTextFromFile('content2.txt', '2');
    document.getElementById("3").innerHTML = ""
} 

function buttonThreeFunction() { 
    loadTextFromFile('content3.txt', '2');
    document.getElementById("3").innerHTML = ""
}