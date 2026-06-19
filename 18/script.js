const locationButton = document.getElementById('user-location');

async function gotLocation (postion) {
    const result = await getData(postion.coords.latitude, postion.coords.longitude);
    console.log(result);
}

function failedToGetLocation() {
    console.log("There was some issue :(");
}

locationButton.addEventListener("click",async () =>{
    navigator.geolocation.getCurrentPosition(gotLocation,failedToGetLocation)
});

async function getData(lat,long){
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=589008170c714e7dbb2105645261906&q=${lat},${long}&aqi=yes`
    );
    return await promise.json();
}