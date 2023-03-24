const apikey = "2786e6cc9461cc87db580910492ba0d0";

const form=document.querySelector("#form");
const main=document.querySelector("#main");
const search=document.querySelector("#search");

const url =(city)=>`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
async function getWeather(city){
    const response = await fetch(url(city));
    var resdata = await response.json();
 
    console.log(resdata);

addWeatherToPage(resdata);
    }

function addWeatherToPage(data){
 const temp = KtoC(data.main.temp);

    const weather = document.createElement("div");
    weather.classList.add("weather");

    weather.innerHTML=`
   
    <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>${temp}°C</h2>
    <small>${data.weather[0].main}</small>
    `;
 main.innerHTML="";
 main.appendChild(weather);
 // backgroundChange(data.weather[0].main);
 
}  

// function backgroundChange(weather) {
// 	if(weather=="Sunny"){
// document.body.style.backgroundImage = "url('https://cdn.dribbble.com/users/925716/screenshots/3333720/attachments/722376/after_noon.png?compress=1&resize=400x300')";
//   }else if (weather == "Rain") {
//   document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1514632595-4944383f2737?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60')";
//   } else if (weather == "Clouds") {
//   document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1561470508-fd4df1ed90b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2VhdGhlciUyMGNsb3VkeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60')";
//   } else if (weather == "Clear") {
//   document.body.style.backgroundImage = "url('https://cdn.dribbble.com/users/925716/screenshots/3333720/attachments/722375/night.png?compress=1&resize=400x300')";
//   } else {
//   document.body.style.backgroundImage= "url('https://thumbs.dreamstime.com/b/blue-outlined-forecast-weather-app-icon-rainy-day-white-background-167505543.jpg')";
//   }
// }

function KtoC(K)
{
	return Math.floor(K-273.15);
}

form.addEventListener("submit", (e)=>{
e.preventDefault();

const city=search.value;
if(city)
{
getWeather(city);
}

});

  