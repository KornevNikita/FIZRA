var fileUrl = "output/teams.xml";
var upSpeed = 5000;
var inSpeed = 1000;
var outSpeed = 500;

var t1, t1p1, t1p2, t1p3, t1p4, t1p5;
var t2, t2p1, t2p2, t2p3, t2p4, t2p5;


$(function() {
	checkUpdate();
	setInterval(function() { checkUpdate(); }, upSpeed);
});

function getResponse() {
    t1 = getElement(responseXml, "t1");
    t2 = getElement(responseXml, "t2");
    t1p1 = getElement(responseXml, "t1p1");
    t2p1 = getElement(responseXml, "t2p1");
    t1p2 = getElement(responseXml, "t1p2");
    t2p2 = getElement(responseXml, "t2p2");
    t1p3 = getElement(responseXml, "t1p3");
    t2p3 = getElement(responseXml, "t2p3");
    t1p4 = getElement(responseXml, "t1p4");
    t2p4 = getElement(responseXml, "t2p4");
    t1p5 = getElement(responseXml, "t1p5");
    t2p5 = getElement(responseXml, "t2p5");
}

 function runUpdate() {
	if (timeOld == timeNew) return;	
	if ($('#t1').get("innerHTML") != t1 || $('#t2').get("innerHTML") != t2 || $('#t1p1').get("innerHTML") != t1p1 || $('#t2p1').get("innerHTML") != t2p1 || $('#t1p2').get("innerHTML") != t1p2 || $('#t2p2').get("innerHTML") != t2p2 || $('#t1p3').get("innerHTML") != t1p3 || $('#t2p3').get("innerHTML") != t2p3 || $('#t1p4').get("innerHTML") != t1p4 || $('#t2p4').get("innerHTML") != t2p4 || $('#t1p5').get("innerHTML") != t1p5 || $('#t2p5').get("innerHTML") != t2p5) {
	    updating = true;
	    $('#t1').set("innerHTML", t1);
	    $('#t2').set("innerHTML", t2);
	    $('#t1p1').set("innerHTML", t1p1);
	    $('#t2p1').set("innerHTML", t2p1);
	    $('#t1p2').set("innerHTML", t1p2);
	    $('#t2p2').set("innerHTML", t2p2);
	    $('#t1p3').set("innerHTML", t1p3);
	    $('#t2p3').set("innerHTML", t2p3);
	    $('#t1p4').set("innerHTML", t1p4);
	    $('#t2p4').set("innerHTML", t2p4);
	    $('#t1p5').set("innerHTML", t1p5);
	    $('#t2p5').set("innerHTML", t2p5);
	}
} 