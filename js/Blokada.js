function blokada()
{
	var body = document.getElementById("body");
	body.style.width="100%";
	body.style.height="100%";
	body.style.backgroundImage='url("/obrazy/blokada.jpg")';
	body.style.backgroundRepeat="no-repeat";
	body.style.backgroundSize="100% 100%";
	body.style.backgroundPosition="center";
	body.innerHTML='<div id="zegar"></div>'
	zegarek();
}
window.onload = blokada;

function zegarek()
{
	var zegar = document.getElementById("zegar");
	zegar.style.height=150;
        zegar.style.width=500;
        zegar.style.position="absolute";
        zegar.style.left=70;
        zegar.style.bottom=0;
        zegar.style.fontSize=40;
        zegar.style.marginBottom=20;
	czas();
}
var timer1 = setTimeout("czas()", 1000);
function czas()
{
	z = document.getElementById("zegar");
	var data = new Date();
	var Rok = data.getFullYear();
	var Miesiac = data.getMonth()+1;
	var Dzien = data.getDay();
	var liczba_miesiaca = data.getDate();
	
	var Godzina = data.getHours();
	if(Godzina<10) Godzina = "0"+Godzina;
	var Minuta = data.getMinutes();
	if(Minuta<10) Minuta = "0"+Minuta;
	var Sekunda = data.getSeconds();
	if(Sekunda<10) Sekunda = "0"+Sekunda;
	//-----------------------------------------------
	if(Dzien == 1) var Tydzien = "Poniedziałek";
	if(Dzien == 2) var Tydzien = "Wtorek";
	if(Dzien == 3) var Tydzien = "Środa";
	if(Dzien == 4) var Tydzien = "Czwartek";
	if(Dzien == 5) var Tydzien = "Piątek";
	if(Dzien == 6) var Tydzien = "Sobota";
	if(Dzien == 0) var Tydzien = "Niedziela";
	//-----------------------------------------------
	if(Miesiac == 1) var nazwa_miesiaca = "Styczeń";
	if(Miesiac == 2) var nazwa_miesiaca = "Luty";
	if(Miesiac == 3) var nazwa_miesiaca = "Marzec";
	if(Miesiac == 4) var nazwa_miesiaca = "Kwiecień";
	if(Miesiac == 5) var nazwa_miesiaca = "Maj";
	if(Miesiac == 6) var nazwa_miesiaca = "Lipiec";
	if(Miesiac == 7) var nazwa_miesiaca = "Sierpień";
	if(Miesiac == 8) var nazwa_miesiaca = "Wrzesień";
	if(Miesiac == 9) var nazwa_miesiaca = "Październik";
	if(Miesiac == 10) var nazwa_miesiaca = "Listopad";
	if(Miesiac == 11) var nazwa_miesiaca = "Grudzień";
	//--------------------------------------------------------
	z.innerHTML = '<span style="font-Size:70px">'+Godzina+":"+Minuta+"</span><br />"+Tydzien+", "+liczba_miesiaca+" "+nazwa_miesiaca;
	timer1;
}
var i = 0
function odblokuj()
{
	$("#body").fadeOut(500);
	setTimeout("ekran()", 1000);
}
var blokada = document.getElementById("body");
blokada.addEventListener("click", function (){
	odblokuj();
});
function ekran()
{
	var body = document.getElementById("body");
	var z2 = document.getElementById("zegar");
	document.body.innerHTML='<div id="ekran"></div>';
	body.remove();
	clearTimeout(timer1);
	z2.remove();
	pole();
}
function pole()
{
	var ekran = document.getElementById("ekran");
	ekran.style.width="100%";
	ekran.style.height="100%";
	ekran.style.backgroundImage='url("/obrazy/tapeta.jpg")';
	ekran.style.backgroundRepeat="no-repeat";
	ekran.style.backgroundSize="100% 100%";
	ekran.style.backgroundPosition="center";
	ekran.innerHTML='<div id="loguj"></div>';
	var panel_logowania = document.getElementById("loguj");
	panel_logowania.innerHTML='<div id="avatar"></div><center><h2>Inny użytkownik</h2></center><center><input type="text" class="logowanie" name="login" value="login" id="L" /><br /><br /><input type="text" value="hasło" id="haslo" name="password" /></center>';
	inputs();
}
function inputs()
{
	var avatar = document.getElementById("avatar");
	avatar.style.width="192";
	avatar.style.height="192";
	avatar.style.borderRadius="100%";
	avatar.style.backgroundImage='url("/obrazy/user-192.png")';
	avatar.style.opacity='0';
}
	var klasa = document.querySelector(".logowanie");
	var haslo = document.getElementById("haslo");
	klasa.style.width=195;
	haslo.style.width=195;
	klasa.style.height=29;
	haslo.style.height="29";
	klasa.style.fontSize="20";
	haslo.style.fontSize="20";
	klasa.style.textAlign="center";
	haslo.style.textAlign="center";
	klasa.style.backgroundColor="rgba(0,0,0,0.5)";
	klasa.style.color="rgba(0,0,0,0.5)";
	klasa.style.borderColor="white";
	haslo.style.backgroundColor="rgba(0,0,0,0.5)";
	haslo.style.color="rgba(0,0,0,0.5)";
	haslo.style.borderColor="white";
function login()
{
	var napis = document.querySelector(".logowanie");
	if(napis.value=="login")
	{
		napis.value="";
		napis.style.color="grey";
	}
}
function haslo()
{
	var pas = document.getElementById("haslo");//pis xd
	if(pas.value=="hasło")
	{
		pas.value="";
		pas.style.color="grey";
		pas.type="password";
	}
}