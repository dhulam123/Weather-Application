function getDate() {
	const Days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

	const d = new Date();
	// console.log(d+"d");	Fri Nov 24 2023 16:15:53 GMT+0530 (India Standard Time)

	// console.log(d.getDay());	//5
	let month = Days[d.getDay()];
	// console.log(month + "month");	Saturday
	document.getElementById("day").innerHTML = month;

	let day = d.getDate();
	// console.log(day + "day");	24
	let Dayss = d.getMonth() + 1;
	// console.log(Dayss + "Dayss");	11
	let year = d.getFullYear();
	// console.log(year + "year");	2023

	let currentDate = `${day}-${Dayss}-${year}`;
	// console.log(currentDate); 	24-11-2023
	document.getElementById("date").innerHTML = currentDate;

	document.getElementById("day-1").innerHTML = month;

	let nextmonth = Days[d.getDay()+1];
	document.getElementById("day-2").innerHTML = nextmonth;

	if (nextmonth == "Saturday") {
		document.getElementById("day-3").innerHTML = "Sunday";
		document.getElementById("day-4").innerHTML = "Monday";
	}
	else{
		let nextofmonth = Days[d.getDay()+2];
		document.getElementById("day-3").innerHTML = nextofmonth;
		let nextofnextofmonth = Days[d.getDay()+3];
		document.getElementById("day-4").innerHTML = nextofnextofmonth;
	}
}
async function search(){
	var city = document.querySelector(".search")
	var apiURL = "https://api.openweathermap.org/data/2.5/weather?q="+city.value+"&appid=f42c5c95a2ee7c223eaba3886575a1b7"
	var raw=await fetch(apiURL)
	var data=await raw.json()

	if(data){
		if(data.message == 'city not found'){
			document.querySelector(".tempvalue").innerHTML= "0°C";
			document.querySelector(".cityname").innerHTML="---";
			document.querySelector(".humidity-value").innerHTML= "0%";
			document.querySelector(".wind-value").innerHTML= "0 Km/Hr";
		}else{
			if(data.main.temp-273.15.toFixed(2)>30)
			{
				document.querySelector(".season").innerHTML="SUNNY";
			}
			else{
				document.querySelector(".season").innerHTML="CLOUDY";
			}
			document.querySelector(".tempvalue").innerHTML=(data.main.temp-273.15).toFixed(2)+" °C";
			document.querySelector(".cityname").innerHTML=(data.name);
			document.querySelector(".humidity-value").innerHTML=(data.main.humidity)+ "%";
			document.querySelector(".wind-value").innerHTML=(data.wind.speed)+ " km/hr";

			document.querySelector(".d-1").innerHTML=(data.main.temp-273.15).toFixed(2)+" °C";
			document.querySelector(".d-2").innerHTML=(data.main.temp-273.20).toFixed(2)+" °C";
			document.querySelector(".d-3").innerHTML=(data.main.temp-272.94).toFixed(2)+" °C";
			document.querySelector(".d-4").innerHTML=(data.main.temp-274.34).toFixed(2)+" °C";
		}
	}
}
