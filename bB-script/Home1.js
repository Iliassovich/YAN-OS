function HME() {
	'use strict';
	var TLQ = document.getElementById('Top-Left-Quarter'),
	    TRQ = document.getElementById('Top-Righ-Quarter'),
	    BLQ = document.getElementById('Bottom-Left-Quarter'),
	    BRQ = document.getElementById('Bottom-Right-Quarter'),
	    YAN_FACE = document.getElementById('YAN-FACE'),
	    Stat_Bar = document.getElementById('Stat_Bar'),
	    P_Word = document.getElementById('P-Word'),
	    Desktop = document.getElementById('Desktop'),
	    StatBar = document.getElementById('StatBar');
	setTimeout(function (){
		TLQ.style.height = "0";
		TRQ.style.width = "0";
		BLQ.style.height = "0";
		BLQ.style.width = "0";
		BRQ.style.height = "0";
		BRQ.style.width = "0";
		YAN_FACE.style.float = "left";
		YAN_FACE.style.height = "32px";
		YAN_FACE.style.width = "32px";
		YAN_FACE.style.marginLeft = "20px";
		YAN_FACE.style.marginTop = "4px";
		YAN_FACE.style.position = "static";
		YAN_FACE.style.cursor = "pointer";
		Stat_Bar.appendChild(YAN_FACE);
		Desktop.style.width = "100%";
		Desktop.style.height = "100%";
		Desktop.style.marginLeft = "0";
		Desktop.style.marginTop = "0";
		Stat_Bar.style.width = "100%";
		P_Word.addEventListener('click', Power_Word);
	},2000);
	setTimeout(function(){
		document.body.appendChild(StatBar);
		document.body.appendChild(Stat_Bar);
		StatBar.style.position = "fixed";
		Stat_Bar.style.position = "fixed";
	},4002);
}
function TIME() {
	'use strict';
	var Date_Houre = document.getElementById('Date_Houre'),
	       DatE = new Date(),
	       HourS = DatE.getHours(),
	       MinuteS = DatE.getMinutes();
	if (MinuteS <= 9){
	    Date_Houre.innerHTML = HourS + ":" + 0 + MinuteS;
	}
	else if(MinuteS > 9){
	    Date_Houre.innerHTML = HourS + ":" + MinuteS;
	}
}
setInterval('TIME()',1000);
