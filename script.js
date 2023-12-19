const apikey = "055e038fb8dedd03881fe188368a9c3d";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const sbutton = document.querySelector(".search button");
async function checkweather(city){
    const response= await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    
    console.log(data);


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".Wind").innerHTML = data.wind.speed + "km/h";
}
    sbutton.addEventListener("click" , ()=>{
    checkweather(searchbox.value);
         }
    )

