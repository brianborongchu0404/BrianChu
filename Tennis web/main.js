
var tID;
function animateScript() {
    var position = 135;
    const interval = 100;
    tID = setInterval(() => {
        document.getElementById("image").style.backgroundPosition =
            `-${position}px 0px`;

        if (position < 1620) { position = position + 135; }

        else { position = 135; }

    }
        , interval);
} 