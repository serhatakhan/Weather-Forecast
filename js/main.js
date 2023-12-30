/*
* API:https://openweathermap.org/current

    1.ADIM: util.js
    
    - convertTimeStamp: Zaman dilimini kullanarak, biçimlendirilmiş bir tarih
    ve saat bilgisini döndüren fonksiyon oluşturacağız.

    - convertCountryCode: Ülke koduna göre, ülke adını çeviren bir fonksiyon
    oluşturacağız.

    2.ADIM: api.js

    - Openweather api'sine şehir, birim ve API key ile istekte bulunarak
    hava durumunu getiren fonksiyonu oluşturacağız.

    3. ADIM: ui.js

    - API'den alınan hava durumu verilerini kullanarak kullanıcı arayüzünü
    güncelleyen fonksiyon oluşturacağız.


*/

//------------------------------------------------------------------------------

// böyle import ettik. dosyanın sonuna .js yazılmalı !!! yoksa sıkıntı çıkabilir
/*
import { convertTimeStamp } from "./utils.js";
import { convertCountryCode } from "./utils.js";
*/



import { getWeather } from "./weather.js";

document.addEventListener("DOMContentLoaded", ()=>getWeather())
//ekran yüklendiği anda getWeather fonksiyonunu çalıştır dedik.