const button = document.getElementById('search-button');
const inputCity = document.getElementById('city-input');

async function getData(cityName){
    const promise = await fetch(
        ``
    );
    return await promise.json();
}

button.addEventListener("click", async() => {
    const value = inputCity.value;
    const result = await getData(value);
    console.log(result);
});