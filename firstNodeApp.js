// console.log("Hello world")
function getWeatherData(loaction) {
    const weatherData = [
        {
            loaction : 'Kolkata',
            temperature : 36, 
            humidity : 76,
            wind_speed_kms : 14,
            pressuere : 46, 
        },
        {
            loaction : 'London',
            temperature : 36, 
            humidity : 76,
            wind_speed_kms : 14,
            pressuere : 46, 
        },
        {
            loaction : 'Mumbai',
            temperature : 36, 
            humidity : 76,
            wind_speed_kms : 14,
            pressuere : 46, 
        },
        {
            loaction : 'Chennai',
            temperature : 36, 
            humidity : 76,
            wind_speed_kms : 14,
            pressuere : 46, 
        }
    ]
    var found = weatherData.filter(function (el){
        return el.loaction === 'Kolkata'
    })
    return found
}

var data = getWeatherData('Kolkata')
console.log(data)