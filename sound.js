var sounddictionary = { "a1":"soundfile/Correct_Answer/Quiz-Correct_Answer01-1.mp3"}

function soundplay(id) {
    var music = new Audio(sounddictionary[id]);
    music.play();
}

function colorchange(line) {
    var element = document.getElementById(line);
    var lineinitial = line.slice(0, 1);
    if (lineinitial == "a") {
        element.style.backgroundColor="#eb607c" ;
    } else if (lineinitial == "b") {
        element.style.backgroundColor="#89a0a1" ;
    } else if (lineinitial == "c") {
        element.style.backgroundColor="#b59e65" ;
    } else if (lineinitial == "d") {
        element.style.backgroundColor="#c7ebc7" ;
    };
};

function colorundo(line2) {
    var element2 = document.getElementById(line2);
    var lineinitial2 = line2.slice(0, 1);

    if (lineinitial2 == "a") {
        element2.style.backgroundColor="#dc143c" ;
    } else if (lineinitial2 == "b") {
        element2.style.backgroundColor="#5F9EA0" ;
    } else if (lineinitial2 == "c") {
        element2.style.backgroundColor="#B8860B" ;
    } else if (lineinitial2 == "d") {
        element2.style.backgroundColor="#90ee90" ;
    };
};

function color(buttonid) {
    colorchange(buttonid);
    var alter = function() {
        colorundo(buttonid);
    };
    setTimeout(alter, 500);
};


document.getElementById("a1").onclick = function () {
    var button_id = "a1"
    soundplay(button_id);
    color(button_id)
};

document.getElementById("a2").onclick = function () {
    var button_id = "a2"
    soundplay(button_id);
    color(button_id)
};

document.getElementById("a3").onclick = function () {
    var button_id = "a3"
    soundplay(button_id);
    color(button_id)
};

document.getElementById("a4").onclick = function () {
    soundplay("a4");
};

document.getElementById("a5").onclick = function () {
    soundplay("a5");
};

document.getElementById("a7").onclick = function () {
    soundplay("a7");
};

document.getElementById("a8").onclick = function () {
    soundplay("a8");
};

document.getElementById("a9").onclick = function () {
    soundplay("a9");
};

document.getElementById("b1").onclick = function () {
    soundplay("b1");
};

document.getElementById("b2").onclick = function () {
    soundplay("b2");
};

document.getElementById("b3").onclick = function () {
    soundplay("b3");
};

document.getElementById("b4").onclick = function () {
    soundplay("b4");
};

document.getElementById("b5").onclick = function () {
    soundplay("b5");
};

document.getElementById("b6").onclick = function () {
    soundplay("b6");
};

document.getElementById("b7").onclick = function () {
    soundplay("b7");
};

document.getElementById("b8").onclick = function () {
    soundplay("b8");
};

document.getElementById("b9").onclick = function () {
    soundplay("b9");
};

document.getElementById("c1").onclick = function () {
    soundplay("c1");
};

document.getElementById("c2").onclick = function () {
    soundplay("c2");
};

document.getElementById("c3").onclick = function () {
    soundplay("c3");
};

document.getElementById("c4").onclick = function () {
    soundplay("c5");
};

document.getElementById("c6").onclick = function () {
    soundplay("c6");
};

document.getElementById("c7").onclick = function () {
    soundplay("c7");
};

document.getElementById("c8").onclick = function () {
    soundplay("c8");
};

document.getElementById("c9").onclick = function () {
    soundplay("c9");
};

document.getElementById("d1").onclick = function () {
    soundplay("d1");
};

document.getElementById("d2").onclick = function () {
    soundplay("d2");
};

document.getElementById("d3").onclick = function () {
    soundplay("d3");
};

document.getElementById("d4").onclick = function () {
    soundplay("d5");
};

document.getElementById("d6").onclick = function () {
    soundplay("d7");
};

document.getElementById("d8").onclick = function () {
    soundplay("d8");
};

document.getElementById("d9").onclick = function () {
    soundplay("d9");
};
