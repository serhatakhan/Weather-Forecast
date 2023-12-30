import { convertCountryCode, convertTimeStamp } from "./utils.js";

export function updateUI(data, selectors) {
  selectors.city.innerHTML = `${data.name}, ${convertCountryCode(
    data.sys.country
    /*biz fetchWeatherData() fonsiyonunu data değişkenine attık weather.js de.
    buna data dedik. bunun içindeki sys nin içindeki country kısmını aldık.
    orada ülke kodu yazıyordu. Bunu da, ülke kodu çeviren fonksiyonumuzu burada
    çağırarak ona yolladık.*/
  )}`;

  selectors.datetime.innerHTML = convertTimeStamp(data.dt, data.timezone);
  selectors.weatherForecast.innerHTML = `<p>${data.weather[0].main}</p>`;
  selectors.weatherTemperature.innerHTML = `${data.main.temp.toFixed()}&#176`; //toFixed, yuvarlasın diye kullandık
  selectors.weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />`;
  //kendimiz yeni bir img etiketi oluşturduk ve icon url'sini içine kopyaladık.
  //dinamik gelmesi gereken yeri api'nin ilgili kısmında tespit edip orayı dinamik hale getirdik

  selectors.weatherMinMax.innerHTML = `<p class="pFar">Min: ${data.main.temp_min.toFixed()}&#176</p> <p>Max: ${data.main.temp_max.toFixed()}&#176</p>`;
  selectors.weatherRealfeel.innerHTML = `${data.main.feels_like.toFixed()}&#176`;
  selectors.weatherHumidity.innerHTML = `${data.main.humidity}%`
  selectors.weatherWind.innerHTML = `${data.wind.speed} km/h`
  selectors.weatherPressure.innerHTML = `${data.main.pressure} hPa`
}
