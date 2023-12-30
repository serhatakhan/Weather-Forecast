const API_KEY = "";

// bu fonkiyon, şehir ve birim bilgilerini parametre alır. onlar da dışarıdan gelecek
async function fetchWeatherData(city, units) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
    );
    //eğer isteğimiz okay gelmezse, aşağıda bilerek hata fırlattık
    if (!response.ok) {
      throw new Error("Opss, İstek Başarılı Değil"); //daha fazla kontrol sağladık
    }
    return response.json(); //api den gelen yanıtı JSON'a çevirip dışarı aktardık dışarda kullanabilmek için
  } catch (error) {
    console.log(error);
  }
}

export default fetchWeatherData;
// önemli bir fonksiyonu dışarı aktarırken export default kullanabiliriz.
// zorunluluk değil export default şeklinde kullanmak.
// export default sadece o sayfada 1 fonksiyon için ve en önemlisi için kullanılabilir.
/*** 
fonsiyonları gönderilirken çalışır halde gönderilmez. 
yani fonsiyonun sonuna () konmaz.
***/
