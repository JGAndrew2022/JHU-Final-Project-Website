var timeout;
function timeAndDate(){
var clock = new Date(),
	hours = clock.getHours(),
	mins = clock.getMinutes(),
	secs = clock.getSeconds(),
	aop = (hours >= 12)? "a.m.":"p.m.",
	month = clock.getMonth(),
	monthName = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	year = clock.getFullYear(),
	day = clock.getDate(),
	clockSpace = document.getElementById("area"),
	otherSpace = document.getElementById("other");
	hours = (hours >= 13)? hours -=12:hours;
	hours = (hours < 0)? 12:hours;
	mins = (mins < 10)? "0" + mins:mins;
	secs = (secs < 10)? "0" + secs:secs;
	clockSpace.innerHTML = monthName[month] + "/" + day + "/" + year + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + hours + ":" + mins + ":" + secs + " " + aop; 
	otherSpace.innerHTML = "Current Date and Time";
	clearTimeout(timeout);
	timeout = setTimeout(function(){ timeAndDate(); }, 1000);
	return;
	}
	function byeClock(){
var clockSpace = document.getElementById("area"),
	otherSpace = document.getElementById("other");
	clockSpace.innerHTML = "";
	otherSpace.innerHTML = "";
	clearTimeout(timeout);
	}
	

	function givePrice() {
	var radio1 = document.getElementById("radio1");
	var radio2 = document.getElementById("radio2");
	var form1 = document.forms["myForm"];
	var numOnly = /^\d+$/;
	var num = form1["start"].value;
	var searchIt = num.match(numOnly);

	if(num.length == 0){
		window.alert("Please do not leave text field blank.");
		return false;
	}
	if(searchIt == null){
		window.alert("Please enter numbers only.");
		return false;
	}
	if(num.length > 2){
		window.alert("Your number is too large.");
	return false;}
	if(radio1.checked){
		var n = num*650;
		var	newNum = n.toFixed(2);
		var myWindow = window.open("newwin.html", "ComfirmationWindow", "width=650px,height=600px");
		myWindow.document.write("<h1>For " + num + " days of daycare it would cost $" + newNum + "</h1> <input type=\"button\" value=\"Print This Page\" onclick=\"print();\" />"); 
if(myWindow.opener.closed){
	myWindow.close();
}
		return true;
	}
	if(radio2.checked){
		var n1 = num*52;
		var	newNum1 = n1.toFixed(2);
		var myWindow1 = window.open("newwin.html", "ComfirmationWindow", "width=650px,height=600px");
	
myWindow1.document.write("<h1>For " + num + " hours of daycare it would cost $" + newNum1 + "</h1> <input type=\"button\" value=\"Print This Page\" onclick=\"print();\" />"); 

return false;
	}
	}
	
	