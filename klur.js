
const app = document.getElementById('root');

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

page1 = document.querySelector(".djur-page1");
page2 = document.querySelector(".djur-page2");
page3 = document.querySelector(".djur-page3");
fram = document.querySelector(".fram");
back = document.querySelector(".back");
djurcontent = document.querySelector(".djur-content");
färgcontent = document.querySelector(".färg-content");
pluscontent = document.querySelector(".plus-content");


/* if (page1.style.display === "none" && page2.style.display === "none" && page3.style.display === "none") */


function färgoform() {
    console.log("placeholder")
    djurcontent.style.display = "none";
    pluscontent.style.display = "none";
    färgcontent.style.display = "flex";
    fram.style.display = "none";
    page1.style.display = "none";
    page1.style.display = "none";
    page1.style.display = "none";
    back.style.display = "none";
}

function plusominus() {
    console.log("placeholder")
    djurcontent.style.display = "none";
    färgcontent.style.display = "none";
    pluscontent.style.display = "flex";
    fram.style.display = "none";
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    back.style.display = "none";

}

function djurosaker() {
    färgcontent.style.display = "none";
    pluscontent.style.display = "none";
    djurcontent.style.display = "flex";
    fram.style.display = "block";
    page1.style.display = "block";
    page2.style.display = "none";
    page3.style.display = "none";
    back.style.display = "block";
}



function framåt() {
        if (page1.style.display === "block"){
            page3.style.display = "none";
            page1.style.display = "none";
            page2.style.display = "block";
        }
        else if (page2.style.display === "block") {
            page1.style.display = "none";
            page2.style.display = "none";
            page3.style.display = "block";
        }
        else if (page3.style.display === "block") {
            page2.style.display = "none";
            page3.style.display = "none";
            page1.style.display = "block";
        }

}

function bakåt() {
    if (page1.style.display === "block"){
        page1.style.display = "none";
        page2.style.display = "none";
        page3.style.display = "block";
    }
    else if (page2.style.display === "block") {
        page2.style.display = "none";
        page3.style.display = "none";
        page1.style.display = "block";
    }
    else if (page3.style.display === "block") {
        page3.style.display = "none";
        page1.style.display = "none";
        page2.style.display = "block";
    }

}



// Simple Math... Color Buttons...Fruit...
// https://www.wallpapermania.eu/download/2012-08/3309/Raining-in-my-neighborhood_1920x1200.jpg
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
request.send();
