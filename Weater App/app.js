var weather = document.querySelector('.weather');
var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var time = document.querySelector('.time');
var value = document.querySelector('.value');
var short_desc = document.querySelector('.short_desc');
var visibility = document.querySelector('.visibility span');
var wind = document.querySelector('.wind span')
var hudimity = document.querySelector('.humidity span');
var content = document.querySelector('.content')
var body = document.querySelector('body')

async function changeWeatherUI(capital) {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=8b5e5543cd14da6ac4e9d9bb2285e585`
    let data = await fetch(apiURL).then(res=> res.json());
    
    if (data.cod == 200) {
        content.classList.remove('hide')
        city.innerText = data.name
        country.innerText = data.sys.country
        temp =Math.round(data.main.temp)
        value.innerText = temp
        short_desc.innerText = data.weather[0] ? data.weather[0].main : ''
        visibility.innerText = data.visibility+' m'
        wind.innerText = data.wind.speed+' m/s'
        hudimity.innerText = data.main.humidity+' %'
        time.innerText = new Date().toLocaleString('vi')
    } else {
        content.classList.add('hide')
    }
    if (temp<33) {
        body.setAttribute('class','summer')
    }
    if (temp<=27) {
        body.setAttribute('class','autumn')
    }
    if (temp<22) {
        body.setAttribute('class','spring')
    }
    if (temp<=15) {
        body.setAttribute('class','winter')
    }
}
search.addEventListener('keypress',function(e){
    if (e.code == 'Enter'){
        let capital = search.value.trim();
        changeWeatherUI(capital)
    }
})
changeWeatherUI('hanoi')