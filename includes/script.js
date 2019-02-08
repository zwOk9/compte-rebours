setInterval(function(){

	let date1 = new Date();

	let date2 = new Date('December 01 2019 20:24:00');

	let resultat = date2.getTime()-date1.getTime();

	let days =Math.floor(resultat/(1000* 60 * 60 * 24));
	let seconds=Math.floor((resultat % (1000 * 60)) / 1000);
	let minutes=Math.floor((resultat % (1000 * 60 * 60)) / (1000 * 60));
	let hours=Math.floor((resultat % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

	if(days.toString().length==1){
		
		days='0'+days.toString();
	}
	if(hours.toString().length==1){
		
		hours='0'+hours.toString();
	}
	if(minutes.toString().length==1){
		
		minutes='0'+minutes.toString();
	}
	if(seconds.toString().length==1){
		
		seconds='0'+seconds.toString();
	}
	function dixaine(number){
		var tab=[];
		var num= number;
		
		for(var i=0; num.toString().length>i; i++){
			
			tab.push(num.toString().charAt(i));
		}
		if(tab[0]==undefined ){
			tab[0]='0';
		}
		return tab[0];
	}

	function Unite(number){
		var tab=[];
		var num= number;
		
		for(var i=0; num.toString().length>i; i++){
			
			tab.push(num.toString().charAt(i));
		}
		if(tab[1]===undefined){
			tab[1]='0';
		}
		return tab[1];
	}





	document.getElementById("daysDixaine").innerHTML="<p>"+dixaine(days)+"</p>";
	document.getElementById("daysUnite").innerHTML="<p>"+Unite(days)+"</p>";
	document.getElementById("hourDixaine").innerHTML="<p>"+dixaine(hours)+"</p>";
	document.getElementById("hourUnite").innerHTML="<p>"+Unite(hours)+"</p>";
	document.getElementById("minutesDixaine").innerHTML="<p>"+dixaine(minutes)+"</p>";
	document.getElementById("minutesUnite").innerHTML="<p>"+Unite(minutes)+"</p>";
	document.getElementById("secondDixaine").innerHTML="<p>"+dixaine(seconds)+"</p>";
	document.getElementById("secondUnite").innerHTML="<p>"+Unite(seconds)+"</p>";
},1000);
let bool =false;
let card = document.querySelector('.cube');
card.addEventListener( 'click', function() {
	if(bool===false){
  		card.classList.toggle('is-flipped');
  		
  		bool=true;
  	}
});