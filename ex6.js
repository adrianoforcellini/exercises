var personName = "";

const input = document.querySelector('input');
input.addEventListener('change', updateValue);

function updateValue(e) {
    personName += input
}


function complainMessage() {
    alert("I told you not to do that " + personName);
}

function typeAndScream() {
    document.getElementById("audio").play();
    personName = document.getElementById("name").value;
}

function goDark() {
    var body = document.getElementsByTagName("body")[0];
    if (body.className == "") {
        body.className = "dark";
    } else {
        body.className = "";
    }

}

function finishTheStory() {
    document.getElementById("story").innerHTML = "So I carefully searched the damp dungeon. There you are! I grinned a smile with all 98 of my gleaming teeth. Dinner time!";
}

const getMode = document.getElementsByTagName("button")[0];
getMode.addEventListener("click", goDark);

const pls = document.getElementsByTagName("button")[1];
pls.addEventListener("click", som);
pls.addEventListener("click", complainMessage);



function som() {
    audio.play()
}

const tll = document.getElementsByTagName("button")[2];
tll.addEventListener("click", finishTheStory);