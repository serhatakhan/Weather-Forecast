//zaman bilgisini kullanarak biçimlendirmiş bir tarih ve saat bilgisini döndürür
function convertTimeStamp(timeStamp, timezone) {
  //zamanı saniyeden saate dönüştürür.
  const convertTimezone = timezone / 3600;
  // yeni bir tarih nesnesi oluşturduk. saniyeye çevirmek istiyoruz o yüzden *1000 yaptık
  const date = new Date(timeStamp * 1000);

  // tarih ve saat bilgisi için seçenekleri belirledik
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timezone: `Utc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(
      convertTimezone //telefonlarda olur Utc/GMT+3, GMT-4 vesaire. o yapıyı oluşturduk burada
      //abs metodu ile de mutlak değerini aldık bazen - gelibiliyor.
    )}`,
    hour12: true, //12 saat formatında gösterilsin mi
  };

  //   tarih ve saati kullanıcıya yerel bir formatta döndürür
  return date.toLocaleString("en-US", options);
}

// ülke kodunu ülke adına çeviren fonksiyon
function convertCountryCode(country){
    let regionNames = new Intl.DisplayNames(["en"], {type:"region"})
    // console.log(regionNames.of(country))
    return regionNames.of(country)
    //gelen country'i, ülkeye çeviriyoruz of() ile.
    // of(), ülke kodunu "Intl.DisplayNames" yi kullanarak ülke adına çevirir
}
/* 
Intl.DisplayNames(), js de yer alan uluslararası dil ve bölge adlarına 
çevirmek için kullanılan api'dir.
*/

export {convertTimeStamp, convertCountryCode}
/* her fonsiyonun başına export yazarak da
buradaki fonksiyonlar dışarı aktarılabilir. yukarıdaki gibi de olur !!! */
