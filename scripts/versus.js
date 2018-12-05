var fileUrl = "output/versus.xml";
var upSpeed = 500;
var inSpeed = 500;
var outSpeed = 500;

var p1, p2, s1, s2, mm, gg;

$(function() {
	checkUpdate();
	setInterval(function() { checkUpdate(); }, upSpeed);
});

function getResponse() {
	p1 = getElement(responseXml, "player1");
	p2 = getElement(responseXml, "player2");
	s1 = getElement(responseXml, "score1");
	s2 = getElement(responseXml, "score2");
	mm = getElement(responseXml, "matchA");
	gg = getElement(responseXml, "gameA");
}

 function runUpdate() {
	if (timeOld == timeNew) return;

	  if ($('#mm').get("innerHTML") != mm) {
		$('#mm').set("innerHTML", mm);
	}

	if ($('#p1').get("innerHTML") != p1 || $('#p2').get("innerHTML") != p2) {

			$('#p1').set("innerHTML", p1);
			$('#p2').set("innerHTML", p2);
	}

	if ($('#s1').get("innerHTML") != s1 || $('#s2').get("innerHTML") != s2) {

			$('#s1').set("innerHTML", s1);
			$('#s2').set("innerHTML", s2);
	}

		if ($('#gg').get("innerHTML") != gg) {
				$('#gg').set("innerHTML", gg);
		}
}
