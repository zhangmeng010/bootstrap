 var h;
 var w;
 var l;
 var t;
 var topMar = 3;
 var leftMar = -10;
 var space = 2;
 var isvisible;
 var MENU_SHADOW_COLOR='#ffffff';
 var global = window.document
 global.fo_currentMenu = null
 global.fo_shadows = new Array
 jj = new Array

function HideMenu() 
{
 var mX;
 var mY;
 var vDiv;
 var mDiv;
	if (isvisible == true)
{
		vDiv = document.all("menuDiv");
		mX = window.event.clientX + document.body.scrollLeft;
		mY = window.event.clientY + document.body.scrollTop;
		if ((mX < parseInt(vDiv.style.left)) || (mX > parseInt(vDiv.style.left)+vDiv.offsetWidth) || (mY < parseInt(vDiv.style.top)-h) || (mY > parseInt(vDiv.style.top)+vDiv.offsetHeight)){
			vDiv.style.visibility = "hidden";
			isvisible = false;
		}
}
}

function ShowMenu(vMnuCode,tWidth,id) { 
	var test = document.getElementById(id).coords; 
	jj = test.split(",");
	
	var kkk=document.getElementById("tab")
	
	vSrc = window.event.srcElement;
	vMnuCode = "<table id='submenu' cellspacing=1 cellpadding=3 style='width:"+tWidth+"' onmouseout='HideMenu()'><tr height=23><td nowrap align=left class=tablebody1>" + vMnuCode + "</td></tr></table>";

	h = Number(jj[3])-2;
	w = vSrc.offsetWidth;
	l = Number(jj[0])+Number(kkk.offsetLeft)+183;
	t = Number(jj[3])+142;

	menuDiv.innerHTML = vMnuCode;
	menuDiv.style.top = t;
	menuDiv.style.left = l;
	menuDiv.style.visibility = "visible";
	isvisible = true;
    makeRectangularDropShadow(submenu, MENU_SHADOW_COLOR,4)
}

function makeRectangularDropShadow(el, color, size)
{
	var i;
	for (i=size; i>0; i--)
	{
		var rect = document.createElement('div');
		var rs = rect.style
		rs.position = 'absolute';
		rs.left = (el.style.posLeft + i) + 'px';
		rs.top = (el.style.posTop + i) + 'px';
		rs.width = el.offsetWidth + 'px';
		rs.height = el.offsetHeight + 'px';
		rs.zIndex = el.style.zIndex - i;
		rs.backgroundColor = color;
		var opacity = 1 - i / (i + 1);
		rs.filter = 'alpha(opacity=' + (50 * opacity) + ')';
		el.insertAdjacentElement('afterEnd', rect);
		global.fo_shadows[global.fo_shadows.length] = rect;
	}
}

function menuFix() {
    var ooo = document.getElementById("nav").getElementsByTagName("li");
    for (var i=0; i<ooo.length; i++) {
        ooo[i].onmouseover=function() {
        this.className+=(this.className.length>0? " ": "") + "ho-ver";
        }
        ooo[i].onMouseDown=function() {
        this.className+=(this.className.length>0? " ": "") + "ho-ver";
        }
        ooo[i].onMouseUp=function() {
        this.className+=(this.className.length>0? " ": "") + "ho-ver";
        }
        ooo[i].onmouseout=function() {
        this.className=this.className.replace(new RegExp("( ?|^)ho-ver\\b"),

"");
        }
    }
}
window.onload=menuFix;