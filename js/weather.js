import fetchWeatherData from "./api.js";
import { updateUI } from "./ui.js";

// html elemalarını seçme
export const selectors = {
  city: document.querySelector(".weather-city"),
  datetime: document.querySelector(".weather-datetime"),
  weatherForecast: document.querySelector(".weather-forecast"),
  weatherTemperature: document.querySelector(".weather-temperature"),
  weatherIcon: document.querySelector(".weather-icon"),
  weatherMinMax: document.querySelector(".weather-minmax"),
  weatherRealfeel: document.querySelector(".weather-realfeel"),
  weatherHumidity: document.querySelector(".weather-humidity"),
  weatherWind: document.querySelector(".weather-wind"),
  weatherPressure: document.querySelector(".weather-pressure"),
  searchForm: document.querySelector(".weather-search"),
  searchInput: document.querySelector(".weather-searchform"),
  unitCelsius: document.querySelector(".weather-units-celsius"),
  unitFahrenheit: document.querySelector(".weather-units-fahrenheit"),
  maxTemp: document.getElementById("maxTemp"),
};


// varsayılan şehir ve birim değerlerini belirledik. londra olsun istedik
let currCity = "London"
let units = "metric"


//hava durumu verilerini api'den alma ve updateUI'ı güncellemek için asenkron fonksiyon
//burada da hata vermemesi için async işlem olduğunu belirteceğiz
export async function getWeather(){
    const data = await fetchWeatherData(currCity, units)
    updateUI(data, selectors)
}

// arama kısmı için olay izleyicisi
selectors.searchForm.addEventListener("submit", async (e)=>{
    e.preventDefault() //inputa enter yapınca sayfa yenileniyordu. onu engellemek için.
    currCity = selectors.searchInput.value
    await getWeather()
    /* bir promise yapısını beklememiz gerektiği için yine bu kod bloğunun
    başında (e) den önce async kullandık. getWeather() dan önce de await. */
    /*getWeather() tekrar çalıştıracağız. api tekrardan isteği atsın ve 
    bu gelen cevabı (yani data'yı) alsın ve updateUI'a göndersin. */

    selectors.searchInput.value = ""
    //şehir adını girdikten sonra inputun içi temizlensin diye !!

    // console.log(currCity)
})


selectors.unitCelsius.addEventListener("click", ()=>{
    // eğer metrice eşit değilse, unitsi al metric olarak değiştir dedik
    if(units !== "metric"){
        units = "metric"
        getWeather()
        //sonrasında da fonksiyonu çalıştırdık
    }
})
selectors.unitFahrenheit.addEventListener("click", ()=>{
    // eğer imperial'a eşit değilse, unitsi al imperai olarak değiştir dedik
    if(units !== "imperial"){
        units = "imperial"
        getWeather()
    }
})


// main.js deki sayfa yüklendiğinde kısmında hata olursa burası çalışsın diye yapıyoruz
document.body.addEventListener("load", async ()=>{
    await getWeather()
})