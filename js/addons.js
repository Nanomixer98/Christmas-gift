let timesRun = 0;
var interval = setInterval(() => {
    if (timesRun === 100) {
        clearInterval(interval);
        document.getElementById("loader").classList.toggle('hidden');
    }
    document.querySelector(".nes-progress").value = timesRun;
    timesRun++;
}, 1);

// set up text to print, each item in array is new line
var aText = new Array(
    "¿Cómo estas hoy mi vida? Espero que estes muy bien pero muy bien",
    "Sé que estas fechas son muy felices para ti y te amo tanto que quiero hacerte aun más feliz",
    "Eres lo más especial que tengo y quiero que estemos juntos para toda la vida",
    "Pero como todo debemos empezar por el principio jejeje...",
);
var iSpeed = 125; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}


typewriter();
document.addEventListener("click", (e) => {
    let $btnYes = document.getElementById("btnYes");
    let $btnNo1 = document.getElementById("btnNo1");
    let $btnNo2 = document.getElementById("btnNo2");

    if (e.target.matches("#btnShowDialog")) {
        document.getElementById('dialog-rounded').showModal();
    }
    if (e.target === btnYes) {
        var audio = document.getElementById("audioYes");
        audio.play();
        onClick();
    }
    if (e.target === $btnNo1) {
        e.preventDefault();
        var audio = document.getElementById("audioNo");
        audio.play();
        $btnNo1.classList.toggle('hid');
        $btnNo2.classList.toggle('hid');
    }
    if (e.target === $btnNo2) {
        e.preventDefault();
        var audio = document.getElementById("audioNo");
        audio.play();
        $btnNo1.classList.toggle('hid');
        $btnNo2.classList.toggle('hid');
    }

});

const onClick = () => {
    confetti({
        particleCount: 250,
        spread: 80,
    });
};