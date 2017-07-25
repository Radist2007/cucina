
// show and hide sections of a form
function preparePage() {
        hideLogin = 0;
        document.getElementById("iconLogin").onclick = function() {
            if(hideLogin == 0) {
                document.getElementById("indexLogin").style.display = "flex";
                hideLogin = 1;
            } else {
                document.getElementById("indexLogin").style.display = "none";
                hideLogin = 0;
            }
        }
    }

window.onload = function() {
    preparePage();
};