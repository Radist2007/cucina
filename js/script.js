
// show and hide sections of a form
function preparePage() {

        document.getElementById("iconLogin").onclick = function() {
            document.getElementById("indexLogin").style.display = "flex";
            hideLogin = 1;
            
        }
    }

window.onload = function() {
    preparePage();
};