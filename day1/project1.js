let headingElement = document.getElementById("headingElement");
let textElement = document.getElementById("text");

function red(){
    headingElement.style.color = "red";
    textElement.textContent = "I like RED Color";
}

function green(){
    headingElement.style.color = "green";
    textElement.textContent = "I like GREEN Color";
}

function blue(){
    headingElement.style.color = "blue";
    textElement.textContent = "I like BLUE Color";
}

function no(){
    headingElement.style.color = "";
    textElement.textContent = "There is no my favourite Color";
}
