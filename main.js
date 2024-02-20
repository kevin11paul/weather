 
var inputval= document.querySelector('#cityinput')
var btn =  document.querySelector('#add');
var city =  document.querySelector('#cityoutput')
var descrip =  document.querySelector('#description')
var temp =  document.querySelector('#temp')
var wind =  document.querySelector('#wind')
apik="110a55ffdb1bb8a5104d3f8a27d84312";
function conversion(val)
    {
        return(val - 273).toFixed(2)
    }
btn.addEventListener('click',function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>
        {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var temperature = data['main']['temp']
            var wndspd = data['wind']['speed']
            city.innerHTML=`Weather of <span>${nameval}</span>`
            temp.innerHTML=`temperature:<span>${conversion(temperature)}c </span>`
            description.innerHTML=`sky condition:<span>${descrip}</span>`
            wind.innerHTML=`wind speed:<span>${wndspd}km/hr </span>`
        })
        .catch(err => alert('you entered wrong city name'))
})        