  	      function czas()
	  {
		  var data = new Date();
		  
		  var dzien = data.getDate();
		  var miesiac = data.getMonth()+1;
		  var rok = data.getFullYear();
		  
		  var godzina = data.getHours();
		  if(godzina<10) godzina = "0"+godzina;
		  var minuty = data.getMinutes();
		  if(minuty<10) minuty = "0"+minuty;
		  var sekundy = data.getSeconds();
		  if(sekundy<10) sekundy = "0"+sekundy;
		  document.getElementById("zegar").innerHTML = "<h3>Godzina: "+godzina+":"+minuty+":"+sekundy+"</h3>";
		  
		  setTimeout("czas()", 1000);
	  }