
//Open panel
function openPanel() {
    document.getElementById("mySidePanel").style.width = "250px";
}

//Close panel
function closePanel() {
    document.getElementById("mySidePanel").style.width = "0";
}

document.getElementById("Ns-retro").onclick=function(){
    window.location.href="NS_Retro.html";
};

document.getElementById("NS-Bluewave").onclick=function() {
    window.location.href="NS_Bluewave.html";
};

document.getElementById("NS-GreenBlock").onclick=function() {
    window.location.href="NS_Greenblock.html";
};

document.getElementById("NS-Sunrise").onclick=function(){
    window.location.href="NS_Sunrise.html";
};