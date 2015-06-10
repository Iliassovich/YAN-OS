function Power_Word(T) {
	'use strict';
	var WINDOW = document.createElement('div'),
	    Page_Height = window.innerHeight,
	    Page_Width  = window.innerWidth,
	    Desktop = document.getElementById('Desktop'),
	    DOC = document.createElement('div'),
	    WB = document.createElement('div'),
	    target = T.target || T.srcElement,
	    TB_Title = document.createElement('p'),
	    Close = document.createElement('p'),
	    MAX = document.createElement('div'),
	    MIN = document.createElement('div'),
	    Tools_Bar = document.createElement('div'),
	    Text_Area = document.createElement('div'),
	    text = document.createElement('textarea'),
	    Title_Bar = document.createElement('div'),
	    StatBar = document.getElementById('StatBar'),
	    SB_ICO = document.createElement('div');
	WB.style.width = "100%";
	WB.style.height = "40px";
	WB.style.border = "none";
	WB.style.float = "left";
	WB.style.top = "0";
	WB.style.zIndex = "3";
	WINDOW.className = "WINDOW";
	WINDOW.id = "WINDOW";
	Desktop.appendChild(WINDOW);
	Title_Bar.className = "Title_Bar";
	Title_Bar.id = "Title_Bar";
	Title_Bar.addEventListener('mousedown', SwipeWindow);
	WINDOW.appendChild(Title_Bar);
	TB_Title.style.width = "auto";
	TB_Title.style.height = "auto";
	TB_Title.style.float = "left";
	TB_Title.style.marginLeft = "15px";
	TB_Title.style.marginTop = "2.25px";
	TB_Title.style.fontSize = "16px"
	TB_Title.id = "TB_Title";
	TB_Title.style.color = "#FFF";
	TB_Title.style.cursor = "default";
	TB_Title.style.fontFamily = "Neuropol";
	TB_Title.textContent = target.title;
	Title_Bar.appendChild(TB_Title);
	Close.className = "Close";
	Close.id = "Close";
	Close.textContent = "X";
	Close.onclick = Closer;
	Title_Bar.appendChild(Close);
	MAX.className = "MAX";
	MAX.id = "MAX";
	MAX.onclick = MAXER;
	Title_Bar.appendChild(MAX);
	MIN.className = "MIN";
	MIN.id = "MIN";
	MIN.onclick = HIDER;
	Title_Bar.appendChild(MIN);
	Tools_Bar.className = "Tools_Bar";
	Tools_Bar.id = "Tools_Bar";
	WINDOW.appendChild(Tools_Bar);
	DOC.className = "DOCUMENT";
	DOC.id = "DOCUMENT";
	WINDOW.appendChild(DOC);
	Text_Area.className = "Text_Area";
	Text_Area.id = "Text_Area";
	Text_Area.style.height = ((1122.519685039*100)/Page_Height)+"%";
	Text_Area.style.width = ((793.700787*100)/Page_Width)+"%";
	Text_Area.style.marginLeft = "20.9479946193%";
	DOC.appendChild(Text_Area);
	text.className = "Text";
	text.id = "Text";
	Text_Area.appendChild(text);
	SB_ICO.className = "SB_ICO";
	SB_ICO.id = "SB_ICO";
	SB_ICO.onclick = HIDER;
	SB_ICO.style.backgroundImage = "url('files/PW.png')";
	StatBar.appendChild(SB_ICO);
}
function SwipeWindow() {
	'use strict';
	var Window = document.getElementById('WINDOW'),
	    Desktop = document.getElementById('Desktop'),
	    Title_Bar = document.getElementById('Title_Bar');
	    Desktop.onmousemove = function(xy){
	    	Window.style.position = "absolute";
	    	Window.style.top = pageYOffset+xy.clientY+"px";
	    	Window.style.left = pageXOffset+xy.clientX+"px";
	    };
	Title_Bar.onmouseup = function(){Desktop.onmousemove = function(){};};
}
function Closer() {
	'use strict';
	var WINDOW = document.getElementById('WINDOW'),
	    StatBar  = document.getElementById('StatBar'),
	    SB_ICO = document.getElementById('SB_ICO'),
	    MIN      = document.getElementById('MIN'),
	    YAN_FACE = document.getElementById('YAN-FACE'),
	    MAX      = document.getElementById('MAX'),
	    TB_Title = document.getElementById('TB_Title'),
	    Close    = document.getElementById('Close');
	WINDOW.parentNode.removeChild(WINDOW);
	SB_ICO.parentNode.removeChild(SB_ICO);
	MIN.parentNode.removeChild(MIN);
	MAX.parentNode.removeChild(MAX);
	TB_Title.parentNode.removeChild(TB_Title);
	Close.parentNode.removeChild(Close);
	StatBar.style.visibility = "visible";
	StatBar.style.height = "40px";
	YAN_FACE.src = "files/HART.png";
}
function MAXER() {
	'use strict';
	var Stat_Bar = document.getElementById('Stat_Bar'),
	    StatBar  = document.getElementById('StatBar'),
	    YAN_FACE = document.getElementById('YAN-FACE'),
	    Window   = document.getElementById('WINDOW'),
	    Title_Bar= document.getElementById('Title_Bar'),
	    TB_Title = document.getElementById('TB_Title'),
	    MIN      = document.getElementById('MIN'),
	    MAX      = document.getElementById('MAX'),
	    Page_Height = window.innerHeight,
	    Close    = document.getElementById('Close'),
	    DOCUMENT = document.getElementById('DOCUMENT');
	Window.style.float = "left";
	Window.style.top = "40px";
	Window.style.left = "0";
	Window.style.height = "100%";
	Window.style.width = "100%";
	Title_Bar.style.height = "0";
	Title_Bar.style.visibility = "hidden";
	DOCUMENT.style.height = (Page_Height-100)+"px";
	DOCUMENT.style.backgroundColor = "transparent";
	Stat_Bar.appendChild(Close);
	Close.style.marginTop = "12px";
	Close.style.marginRight = "10px";
	Stat_Bar.appendChild(MAX);
	MAX.style.marginTop = "12px";
	Stat_Bar.appendChild(MIN);
	MIN.style.marginTop = "17px";
	StatBar.style.height = "1px";
	setTimeout(function(){
		StatBar.style.visibility = "hidden";
	},0);
	Stat_Bar.appendChild(TB_Title);
	TB_Title.style.marginTop = "12px";
	MAX.onclick = MAXER2;
	YAN_FACE.src = "files/PW.png";
}
function MAXER2() {
	'use strict';
	var Stat_Bar = document.getElementById('Stat_Bar'),
	    StatBar  = document.getElementById('StatBar'),
	    YAN_FACE = document.getElementById('YAN-FACE'),
	    Window   = document.getElementById('WINDOW'),
	    Title_Bar= document.getElementById('Title_Bar'),
	    TB_Title = document.getElementById('TB_Title'),
	    MIN      = document.getElementById('MIN'),
	    MAX      = document.getElementById('MAX'),
	    Close    = document.getElementById('Close'),
	    DOCUMENT = document.getElementById('DOCUMENT');
	Window.style.float = "left";
	Window.style.top = "40px";
	Window.style.left = "0";
	Window.style.height = "50%";
	Window.style.width = "50%";
	Title_Bar.style.height = "25px";
	Title_Bar.style.visibility = "visible";
	DOCUMENT.style.height = "350px";
	DOCUMENT.style.backgroundColor = "#ecf0f1";
	Close.style.marginTop = "3px";
	Title_Bar.appendChild(Close);
	MAX.style.marginTop = "3px";
	Title_Bar.appendChild(MAX);
	MIN.style.marginTop = "10px";
	MAX.onclick = MAXER;
	Title_Bar.appendChild(MIN);
	StatBar.style.height = "40px";
	StatBar.style.visibility = "visible";
	TB_Title.style.marginTop = "2.25px";
	Title_Bar.appendChild(TB_Title);
	YAN_FACE.src = "files/HART.png";

}
function HIDER() {
	'use strict';
	var Window = document.getElementById('WINDOW'),
	    SB_ICO = document.getElementById('SB_ICO'),
	    Title_Bar= document.getElementById('Title_Bar'),
	    TB_Title = document.getElementById('TB_Title'),
	    MIN      = document.getElementById('MIN'),
	    StatBar  = document.getElementById('StatBar'),
	    MAX      = document.getElementById('MAX'),
        YAN_FACE = document.getElementById('YAN-FACE'),
	    Close    = document.getElementById('Close');
	SB_ICO.appendChild(Window);
	Window.style.height = "0";
	Window.style.width  = "0";
	Window.style.visibility = "hidden";
	SB_ICO.onclick = SHOWER;
	SB_ICO.appendChild(Close);
	SB_ICO.appendChild(MAX);
    SB_ICO.appendChild(MIN);
    StatBar.style.height = "40px";
	StatBar.style.visibility = "visible";
    SB_ICO.appendChild(TB_Title);
    YAN_FACE.src = "files/HART.png";
    MIN.style.width = "0";
    MIN.style.height = "0";
    MIN.style.visibility = "hidden";
    MAX.style.width = "0";
    MAX.style.height = "0";
    MAX.style.visibility = "hidden";
    Close.style.width = "0";
    Close.style.height = "0";
    Close.style.visibility = "hidden";
    TB_Title.style.width = "0";
    TB_Title.style.height = "0";
    TB_Title.style.visibility = "hidden";
}
function SHOWER() {
	'use strict';
	var Window = document.getElementById('WINDOW'),
	    SB_ICO = document.getElementById('SB_ICO'),
	    Desktop = document.getElementById('Desktop'),
	    Title_Bar= document.getElementById('Title_Bar'),
	    TB_Title = document.getElementById('TB_Title'),
	    MIN      = document.getElementById('MIN'),
	    StatBar  = document.getElementById('StatBar'),
	    MAX      = document.getElementById('MAX'),
	    Close    = document.getElementById('Close'),
	    YAN_FACE = document.getElementById('YAN-FACE'),
        DOCUMENT = document.getElementById('DOCUMENT');
	Desktop.appendChild(Window);
	Window.style.height = "auto";
	Window.style.width  = "50%";
	Window.style.float = "left";
	Window.style.top = "40px";
	Window.style.left = "0";
	Window.style.visibility = "visible";
	SB_ICO.onclick = HIDER;
	Title_Bar.appendChild(Close);
	Title_Bar.appendChild(MAX);
    Title_Bar.appendChild(MIN);
    Title_Bar.appendChild(TB_Title);
	Title_Bar.style.height = "25px";
	Title_Bar.style.visibility = "visible";
	DOCUMENT.style.height = "350px";
	DOCUMENT.style.backgroundColor = "#ecf0f1";
    Close.style.marginTop = "3px";
    MAX.style.marginTop = "3px";
    MIN.style.marginTop = "10px";
    MAX.onclick = MAXER;
    TB_Title.style.marginTop = "2.25px";
    YAN_FACE.src = "files/HART.png";
    MIN.style.width = "16px";
    MIN.style.height = "auto";
    MIN.style.visibility = "visible";
    MAX.style.width = "10px";
    MAX.style.height = "10px";
    MAX.style.visibility = "visible";
    Close.style.width = "auto";
    Close.style.height = "auto";
    Close.style.visibility = "visible";
    TB_Title.style.width = "auto";
    TB_Title.style.height = "auto";
    TB_Title.style.visibility = "visible";
}
