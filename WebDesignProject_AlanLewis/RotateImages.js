window.onload = rotate;

var theAd = 0;
var adImages = new Array(

	"./images/Sea.jpg",
	"./images/WeAreSwimmers-1024x667.jpg",
	"./images/Streamline-Homepage-Slider-Desktop-3.jpg",
	"./images/HenriOpenWater-1024x667.jpg",
	"./images/AnthonyDive-1.jpg",
	"./images/BrynDelValle-1.jpg",
	"./images/Streamline-Homepage-Slider-Desktop-1.jpg",
	"./images/pebbles.jpg",
	"./images/sea-beach-ocean-waves.jpg",
	"./images/Beach.jpg",
	"./images/Ocean.jpg",
    "./images/wave.jpg",
    "./images/Wavebeach.jpg");

function rotate()

{
	
	if (theAd == adImages.length)
	{
		theAd = 0;
	}
	//document.getElementById("adBanner").innerHTML = adImages[theAd]; // text innerHTML

	document.getElementById("adBanner").src = adImages[theAd];// images
	theAd++;
	setTimeout(rotate, 2000);
}
