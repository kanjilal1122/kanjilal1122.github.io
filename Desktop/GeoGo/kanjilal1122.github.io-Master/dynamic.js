//api code start here 

let input = document.getElementById('search');

input.addEventListener('keypress' , (event) =>{

    if( event.key === "Enter" ){

        let cityName = input.value;

         let apiKey = `7899f545cf22a5512d68a9d8b7659733`;

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;


        fetch(url).then((res) =>  res.json())
                .then((data) => {
            getWeatherData(data) 
        }).catch((error) => alert("City does not exixts in openweathermap database"));
        
    }
})

//this is a function of get the data from the openweathermap 

function getWeatherData(dta) {

    //sunrise
    let s = dta.sys.sunrise;
    //sunset
    let st = dta.sys.sunset;

    //country
    let country = dta.sys.country;

    //tempreture in celsius
    let temp = Math.round(( dta.main.temp) - 273.15);

    //day 
     let days = ['Sun' , 'Mon' , 'Tues' , 'wednes' , 'Thrus'  , 'Fri' , 'Satur']
     let day = new Date(dta.dt * 1000);
     //console.log(day.getDay())
     let dayName = days[day.getDay()];
     //console.log(dayName)
    
    function getSunrise_set(t){

        let date = new Date(t * 1000)
    
        return date.toLocaleString('en-US', { hour: 'numeric', minute:'numeric',  hour12: true });

    }

    //sunrise call here
    let sunrise = getSunrise_set(s);
    document.querySelector('#sunriseTime').innerHTML =sunrise;

    //sunset call here 
    
    let sunset = getSunrise_set(st) 
    document.querySelector('#sunsetTime').innerHTML = sunset;

    //country set here on html 
    document.querySelector('#country').innerHTML = dta.name + " , "+ country;

    document.querySelector('.tomorrowCityStatus').innerHTML = dta.name;

    //tempreture set on html 
    document.querySelector('#right-side-top-h1').innerHTML = temp + '&deg;c';
    document.querySelector('.temp').innerHTML = temp + '&deg;c';
    document.querySelector('#span_temp').innerHTML = temp + '&deg;c';

    //cloud status 
    document.querySelector('#cloudStatus').innerHTML = dta.weather[0].description;

    //pressure status 
    document.querySelector('.pressureStatus').innerHTML = dta.main.pressure + "mb";

    //humadity status 
    document.querySelector('.humidityStatus').innerHTML = dta.main.humidity+"%";

    //day set to the html
    document.querySelector('.dayStatus').innerHTML = dayName;

    //console.log(dta);

    //lantitude
    let lati = dta.coord.lat;
   // console.log(lati)

    //longtitude
    let loni= dta.coord.lon;
    //console.log(loni)

    //call onecall api of openweathermap through function
    currentWeather( lati , loni );


}


//definition of currentWeather function code below

function currentWeather( lat1 , lon1 ){

    let api2 = `7899f545cf22a5512d68a9d8b7659733`;

    let url2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat1}&lon=${lon1}&units=metric&appid=${api2}`;

    fetch(url2).then((res) => {
        return res.json(); 
        })
        .then( (data) => {
            console.log(data)
                let dailyData  = data.daily;
               // console.log(dailyData)

                let d = new Date(data.current.dt * 1000);
                let day =d.getDay();
                console.log( "this is date " +d)
                console.log("this is the day "+day)

                //tomorrow temp
                document.querySelector('.tomorrowTemp').innerHTML = Math.round(dailyData[ day-1].temp.day);

                //tomorrow weather status
                document.querySelector('.tomorrowRainStatus').innerHTML  = dailyData[day - 1].weather[0].main;

                //tomorrowNext days 
                let monthNames = [ ' January' , 'February' , ' March ' , 'April' , 'May' , 'June' , 'July' , 'Auguest' , 'Septembar' , 'Novembar' , 'Decembar']
                let tomorrowDay = new Date(dailyData[day+1].dt * 1000);
                let tomorrowMonth = tomorrowDay.getMonth()
                
                
                //console.log(monthNames[tomorrowMonth])

                document.querySelector('.tomorrowNext').innerHTML = monthNames[tomorrowMonth]

                //tomorrow day
                
                //console.log(tomorrowDayValue)  
               // document.querySelector('.tomorrowNextDayValue').innerHTML =  

               //tomorrowNextCloudStatus
                document.querySelector('.tomorrowNextCloudStatus').innerHTML = dailyData[day+1].weather[0].main;

                //Temp Defference
                let min = Math.round(dailyData[day+1].temp.min);
                let max =Math.round(dailyData[day+1].temp.max);
                document.querySelector('.tempDeff').innerHTML = min+'&deg;/'+ max+'&deg;' ; 

                //icon change

                let icon = dailyData[day+1].weather[0].icon;
                document.querySelector('#iconChange').innerHTML = `<img src ="https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/${icon}.png" width="40%" style = " margin-top:20px ">`

                //Tomorrow 
               // let monthNames = [ ' January' , 'February' , ' March ' , 'April' , 'May' , 'June' , 'July' , 'Auguest' , 'Septembar' , 'Novembar' , 'Decembar']
                let tomorrowDay1 = new Date(dailyData[day ].dt * 1000);
                let format = { month:'long' , day:'numeric'}


                document.querySelector('.tomorrowNextNext').innerHTML =tomorrowDay1.toLocaleDateString( undefined , format); 

                //cloud status 
                document.querySelector('.tomorrowNextNextCloudStatus').innerHTML = dailyData[day+1].weather[0].main;

                //temp defference next

                let min1 = Math.round(dailyData[day+1].temp.min);
                let max1 =Math.round(dailyData[day+1].temp.max);
                document.querySelector('.tempNextDeff').innerHTML = min1+'&deg;/'+ max1+'&deg;' ; 

                //Next
                let icon1 = dailyData[day+2].weather[0].icon;
                document.querySelector('#iconChangeNext').innerHTML = `<img src ="https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/${icon1}.png" width="40%" style = " margin-top:20px ">`


                //uvi 
                document.querySelector('.uvValue').innerHTML = Math.round(data.current.uvi)+" UVI";

                //Today icon 
                let icon0 = dailyData[day+1].weather[0].icon;

                document.querySelector('#todayIcon').innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon0}.png ">`
                //`<img src=" http://openweathermap.org/img/wn/${icon0}@2x.png">`

            //Air Quality code start here


                document.querySelector('.windDeg').innerHTML = dailyData[day].wind_deg;

              })

              

}

