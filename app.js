
const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/12.946284/lat/56.03315/data.json', true);
request.onload = function () {
    let data = JSON.parse(this.response);
    console.log(data.timeSeries[0].parameters[18].values)

    if (data.timeSeries[0].parameters[18].values <= 3) {
        console.log("Clear sky") 
        document.querySelector("#väder-nu").src = "sol.jpg";
    } else if (data.timeSeries[0].parameters[18].values <= 7  && data.timeSeries[0].parameters[18].values > 3){
        document.querySelector("#väder-nu").src = "moln.jpg";
        console.log("Cloudy")
    } else if (data.timeSeries[0].parameters[18].values <= 14  && data.timeSeries[0].parameters[18].values >= 7 || data.timeSeries[0].parameters[18].values <= 24  && data.timeSeries[0].parameters[18].values >= 18) {
        document.querySelector("#väder-nu").src = "rainy.jpg";
        console.log("Rain")
    } else if (data.timeSeries[0].parameters[18].values <= 17  && data.timeSeries[0].parameters[18].values >= 15 || data.timeSeries[0].parameters[18].values <= 27  && data.timeSeries[0].parameters[18].values >= 25) {
        document.querySelector("#väder-nu").src = "snow.jpg";
        console.log("Snow")
 
    }
    
}

// Simple Math... Color Buttons...Fruit...

/* 
    1-3 clear
    4-7  cloud 
    8-14 + 18-24 rain
    15-17 + 25-27 snow

    Value	Meaning
    1	Clear sky                         
    2	Nearly clear sky
    3	Variable cloudiness            
    4	Halfclear sky                     
    5	Cloudy sky
    6	Overcast
    7	Fog
    8	Light rain showers                
    9	Moderate rain showers
    10	Heavy rain showers
    11	Thunderstorm
    12	Light sleet showers                
    13	Moderate sleet showers
    14	Heavy sleet showers
    15	Light snow showers            
    16	Moderate snow showers
    17	Heavy snow showers
    18	Light rain
    19	Moderate rain
    20	Heavy rain
    21	Thunder
    22	Light sleet
    23	Moderate sleet
    24	Heavy sleet
    25	Light snowfall
    26	Moderate snowfall
    27	Heavy snowfall

 */



//56.03315	12.946284
//https://opendata.smhi.se/apidocs/metfcst/index.html
//GET /api/category/{category}/version/{version}/geotype/point/lon/{longitude}/lat/{latitude}/data.json
//https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/12.946284/lat/56.03315/data.json
//bjuv

document.getElementById("Sol").addEventListener("click", sol);
document.getElementById("Moln").addEventListener("click", moln);
document.getElementById("Regn").addEventListener("click", regn);
document.getElementById("Snö").addEventListener("click", snö);


var Solcontent = document.querySelector(".Solskenclothes");
var Soldesc = document.querySelector(".sol-plagg");
var Molncontent = document.querySelector(".Molnigtkläder");
var Molndesc = document.querySelector(".moln-plagg");
var RegnContent = document.querySelector(".Regnkläder");
var Regndesc = document.querySelector(".regn-plagg");
var Snöcontent = document.querySelector(".Snöfall");
var Snödesc = document.querySelector(".snö-plagg");





function sol() {
    Solcontent.style.display = "block";
    Soldesc.style.display = "block";
    Molncontent.style.display = "none";
    Molndesc.style.display = "none";
    RegnContent.style.display = "none";
    Regndesc.style.display = "none";
    Snöcontent.style.display = "none";
    Snödesc.style.display = "none";
}


function moln() {
    Solcontent.style.display = "none";
    Soldesc.style.display = "none";
    Molncontent.style.display = "block";
    Molndesc.style.display = "block";
    RegnContent.style.display = "none";
    Regndesc.style.display = "none";
    Snöcontent.style.display = "none";
    Snödesc.style.display = "none";
}

function regn() {
    Solcontent.style.display = "none";
    Soldesc.style.display = "none";
    Molncontent.style.display = "none";
    Molndesc.style.display = "none";
    RegnContent.style.display = "block";
    Regndesc.style.display = "block";
    Snöcontent.style.display = "none";
    Snödesc.style.display = "none";
}


function snö() {
    Solcontent.style.display = "none";
    Soldesc.style.display = "none";
    Molncontent.style.display = "none";
    Molndesc.style.display = "none";
    RegnContent.style.display = "none";
    Regndesc.style.display = "none";
    Snöcontent.style.display = "block";
    Snödesc.style.display = "block";
}



request.send();