console.log("hello")
let urls = "https://api.openweathermap.org/data/2.5/weather?q=";
let key = "d3d3cf70e752b539e68de8dd0d1d82f1";
let city = document.getElementById("city");
let search = document.getElementById("search");
let temp = document.getElementById("temp");
let main = document.getElementById("main");
let img = document.getElementById("img");
let imgurl = "http://openweathermap.org/img/wn/";
let invalid  = document.getElementById("invalid");
let dates = document.getElementById("date");
let map = document.getElementsByClassName("map");
let sunrise = document.getElementById("sunrise");
let sunset = document.getElementById("sunset");
let realfeel = document.getElementById("realfeel");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");
let cityname = document.getElementById("city_name");
let country = document.getElementById("country");
let windspeed = document.getElementById("windspeed");



let weather = async() =>{
    let response = await fetch(`${urls}${city.value}&appid=${key}`);
   
    // console.log((temp));
    if(response.status == 404){
        invalid.style.display = "inline"
        invalid.innerHTML = `Invalid City Name`
        rain.innerHTML =  ``;
        alert("Invalid City Name");

        description.innerHTML = ``
    }else{
        let data = await response.json();
        let temps = await Math.ceil((data.main.temp)-273.15);
        let mains =  await data.weather[0].main;
        temp.innerHTML = `${temps}°C`;
        main.innerHTML = mains;
        let imgs = await data.weather[0].icon;
        img.src  = `${imgurl}${imgs}@2x.png`;
        invalid.style.display = "none"
        console.log(imgs)
        let sunrises = await data.sys.sunrise;
        let myUnix_rise = await sunrises;
        let sun_rise = await new Date(myUnix_rise * 1000);
        let sun_r = sun_rise.toLocaleTimeString();
        sunrise.innerHTML = `Sun Rise ${sun_r}`;
        console.log(sun_r);
        let sunsets = await data.sys.sunset;
        let myUnix_set = await sunsets;
        let sun_set = await new Date(myUnix_set * 1000);
        let sun_s = sun_set.toLocaleTimeString();
        sunset.innerHTML = `Sun Set ${sun_s}`;
        let realfeels = await Math.ceil((data.main.feels_like)-273.15);
        // let realfeel =  await data.weather[0].main;
        realfeel.innerHTML = `Real Feel ${realfeels}°C`;
        let names = await data.name;
        cityname.innerHTML = `${names},`;
        let countrys = await data.sys.country;
        country.innerHTML = ` ${countrys}`;
        let humiditys = await data.main.humidity;
        humidity.innerHTML = `Humidity ${humiditys}%`;
        let presures = await data.main.pressure;
        pressure.innerHTML = `Pressure ${presures}mb`
        let windspeeds = await data.wind.speed;
        windspeed.innerHTML = `Wind Speed ${windspeeds} m/s`
        console.log(humidity);
        console.log(data);
        console.log(country)
    }
    
    
}
// temp.innerHTML = temp;btn
search.addEventListener("click", weather)



let currentDate = new Date(); 
dates.innerHTML = `${currentDate.toDateString()}`
console.log(currentDate.getDay())


