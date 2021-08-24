window.onload = function() {
	var myWidth = 0, 
	myHeight = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
	}  
  else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    myWidth = document.body.clientWidth;
  myHeight = document.body.clientHeight;}
  
var isCook = navigator.cookieEnabled,
isJava = navigator.javaEnabled(),
c = document.getElementById("cook"),
l = document.getElementById("last"),
p = document.getElementById("java"),
h = document.getElementById("widthheight");
c.innerHTML = isCook == true ? "Cookies are enabled" : "Cookies are not enabled, some features of thist website may be limited unless cookies are turned on.";	
p.innerHTML = isJava == true ? "Java is enabled" : "Java is not enabled";	
l.innerHTML = "Last modified date: " + document.lastModified + " <br /> <br />URL: " + document.location;
h.innerHTML = "Broswer height: " + myHeight + "px | Browser width " + myWidth + "px" + " | Screen height: " + window.screen.height + "px | Screen width: " + window.screen.width + "px";
};
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}


function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
} 
