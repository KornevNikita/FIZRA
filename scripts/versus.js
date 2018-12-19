var fileUrl = "output/versus.xml";
var upSpeed = 1000;
var inSpeed = 1000;
var outSpeed = 1000;

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
	    $('.quarter').animate({ $opacity: '0'}, 1000).then(function () {
	        $('#mm').set("innerHTML", mm);
	        $('.quarter').animate({ $opacity: '1' }, 1000).then(function () { updating = false; });
	    });
	}

	if ($('#p1').get("innerHTML") != p1 || $('#p2').get("innerHTML") != p2) {

			$('#p1').set("innerHTML", p1);
			$('#p2').set("innerHTML", p2);
	}

	if ($('#s1').get("innerHTML") != s1) {
	    $('#s1').set("innerHTML", s1);
	    $('.scores1').animate({ $animation: 'shadow1 0.5s infinite alternate ' }, 800).then(function () {
	        $('.scores1').animate({ $animation: 'shadow1 1s reverse' }, 800).then(function () { updating = false; });
	    });
	}




	if ($('#s2').get("innerHTML") != s2) {
	    $('#s2').set("innerHTML", s2);
	    $('.scores2').animate({ $animation: 'shadow1 0.5s infinite alternate ' }, 800).then(function () {
	        $('.scores2').animate({ $animation: 'shadow1 1s reverse' }, 800).then(function () { updating = false; });
	    });
	}


		if ($('#gg').get("innerHTML") != gg) {
				$('#gg').set("innerHTML", gg);
		}
}
