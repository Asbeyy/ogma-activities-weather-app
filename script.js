
window.addEventListener("load", ()=> {
    let long;
    let lat;
    let temperatureString = document.getElementById("degrees")
    let locationString = document.getElementById("location")
    let icon = document.getElementById("icon")
    let description = document.getElementById("description")
    let statOne = document.getElementById("stat-one")
    let statTwo = document.getElementById("stat-two")
    let statThree = document.getElementById("stat-three")
    let statFour = document.getElementById("stat-four")
    let statFive = document.getElementById("stat-five")

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude
            lat = position.coords.latitude

            console.log(position)
    
            
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `https://api.weatherapi.com/v1/current.json?key=1a98c64d6fca4722b08193504232001&q=${lat},${long}`;

            fetch(api)
            .then(risposta =>{
                return risposta.json()
            })
            .then(data =>{
                console.log(data)

                const tempCelsius = data.current.temp_c
                const gpsLocation = data.location.name
                const iconLink = data.current.condition.icon
                const descriptionString = data.current.condition.text
                const windSpeed = data.current.wind_kph
                const visibility = data.current.vis_km
                const knotSpeed = Math.floor(windSpeed * 0.54)
                const gustKph = Math.floor(data.current.gust_kph * 0.54)
                const windDir = data.current.wind_dir

                console.log(knotSpeed)




                //DOM


                temperatureString.textContent = `${Math.floor(tempCelsius)}°C`;
                locationString.textContent = gpsLocation
                icon.src = iconLink
                description.textContent = descriptionString
                statOne.textContent = `Wind:   ${Math.floor(windSpeed)} km/h`
                statTwo.textContent =`Wind: ${knotSpeed} knots`
                statThree.textContent = `Gusts: ${gustKph} knots`
                statFour.textContent = `Wind direction: ${windDir}`
                statFive.textContent = `Visibility: ${visibility} km`

                
            })
        })

        
    }
    
    
})


