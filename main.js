const sidemenu = document.querySelector("#sidemenu");

function openmenu(){
    sidemenu.style.transform = 'translateX(-16rem)';
}

function closemenu(){
    sidemenu.style.transform = 'translateX(16rem)';
}

const text = [
    "Frontend Developer"
]

const speed = 200;
const textElement = document.querySelector(".writer")

let textindex = 0;
let characterindex = 0;

function writer(){
    if(characterindex < text[textindex].length){
        textElement.innerHTML += text[textindex].charAt(characterindex);
        characterindex++;
        setTimeout(writer, speed);
    }else{
        setTimeout(erase, 100)
    }
}

function erase(){
    if(textElement.innerHTML.length>0){
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        setTimeout(erase,200);
    }else{
        textindex = (textindex + 1)% text.length;
        characterindex = 0;
        setTimeout(writer, 500)
    }
}
window.onload = writer

