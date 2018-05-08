// http://www.sizmek.es/eb/users/javiegido_/__TESTS/DemoTool/index.html?placementId=24969871&width=980&height=250&position=1&cssCode=%23formContainer%7Bdisplay%3Anone%7D

var creativeId = "AdPulse Magnifier Glasses";
var creativeVersion = "1.0.1";
var lastModified = "2017-08-02";
var lastUploaded = "2017-08-02";
var templateVersion = "2.0.24";

var adId, rnd, uid;
var bannerDiv;
var expandButton;

function checkIfAdKitReady(event) {
	adkit.onReady(initializeCreative);
}

function initializeCreative(event) {
	try { //try/catch just in case localPreview.js is not included
		if (window.localPreview) {
			window.initializeLocalPreview(); //in localPreview.js
		}
	}
	catch (e) {}

	//Workaround (from QB6573) for Async EB Load where Modernizr isn't properly initialized
	typeof Modernizr === "object" && (Modernizr.touch = Modernizr.touch || "ontouchstart" in window);

	window.registerInteraction = function() {}; //overwrite rI function because it will never actually be called
	initializeGlobalVariables();
}

function initializeGlobalVariables() {
	adId = EB._adConfig.adId;
	rnd = EB._adConfig.rnd;
	uid = EB._adConfig.uid;

	bannerDiv = document.getElementById("banner");
	expandButton = document.getElementById("expandButton");
	expandButton.addEventListener("click", handleExpandButtonClick);
}

function handleExpandButtonClick() {
	adkit.expand({
        panelName: "expand",
				actionType: adkit.ActionType.USER,
        expandToMax: !0,
        useCustomClose: true,
        animate: {
             clip: "rect(0, 100%, 100%, 0)",
             duration: 300,
             easing: adkit.Animation.Easing.EASE_IN,
             opacity: 1,
             init: {
                   clip: "rect(0, 100%, 0, 100%)",
                   opacity: 0
             }
        }
    });
}

window.addEventListener("load", checkIfAdKitReady);