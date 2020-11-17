const app = document.getElementById("root");

const container = document.createElement("div");

container.setAttribute("class", "container");

app.appendChild(container);

var request = new XMLHttpRequest();
request.open(
  "GET",
  "https://skolmaten.se/api/3/menu/?school=6703475232604160&client=2j3isiukerylylxdurei",
  true
);
request.onload = function () {
  var data = JSON.parse(this.response);


  idag1 = document.querySelector(".today1").innerHTML;
  idag2 = document.querySelector(".today2").innerHTML;

  console.log(data.weeks[0].days[0].items[0])
  console.log(data.weeks[0].days[0].items[1])
  
  console.log(data.weeks[0].days[1].items[0])
  console.log(data.weeks[0].days[1].items[1])
  
  console.log(data.weeks[0].days[2].items[0])
  console.log(data.weeks[0].days[2].items[1])
  
  console.log(data.weeks[0].days[3].items[0])
  console.log(data.weeks[0].days[3].items[1])
  
  console.log(data.weeks[0].days[4].items[0])
  console.log(data.weeks[0].days[4].items[1])
  

  mondag1 = document.querySelector(".mon1").innerHTML =
    data.weeks[0].days[0].items[0] + ' <i class="fas fa-volume-up">';
  mondag2 = document.querySelector(".mon2").innerHTML =
    data.weeks[0].days[0].items[1] + ' <i class="fas fa-volume-up">';

  tisdag1 = document.querySelector(".tue1").innerHTML =
    data.weeks[0].days[1].items[0] + ' <i class="fas fa-volume-up">';
  tisdag2 = document.querySelector(".tue2").innerHTML =
    data.weeks[0].days[1].items[1] + ' <i class="fas fa-volume-up">';

  onsdag1 = document.querySelector(".wed1").innerHTML =
    data.weeks[0].days[2].items[0] + ' <i class="fas fa-volume-up">';
  onsdag2 = document.querySelector(".wed2").innerHTML =
    data.weeks[0].days[2].items[1] + ' <i class="fas fa-volume-up">';

  torsdag1 = document.querySelector(".thu1").innerHTML =
    data.weeks[0].days[3].items[0] + ' <i class="fas fa-volume-up">';
  torsdag2 = document.querySelector(".thu2").innerHTML =
    data.weeks[0].days[3].items[1] + ' <i class="fas fa-volume-up">';

  fredag1 = document.querySelector(".fri1").innerHTML =
    data.weeks[0].days[4].items[0] + ' <i class="fas fa-volume-up">';
  fredag2 = document.querySelector(".fri2").innerHTML =
    data.weeks[0].days[4].items[1] + ' <i class="fas fa-volume-up">';




  var today = new Date();
  if (today.getDay() == 6 || today.getDay() == 0) {
    document.querySelector(".today1").innerHTML = "Helg!";
    document.querySelector(".today2").innerHTML = "";
    idag1 = "Helg";
  } else if (today.getDay() == 1) {
    idag1 = document.querySelector(".today1").innerHTML =
      data.weeks[0].days[0].items[0] + ' <i class="fas fa-volume-up">';
    idag2 = document.querySelector(".today2").innerHTML =
      data.weeks[0].days[0].items[1] + ' <i class="fas fa-volume-up">';
  } else if (today.getDay() == 2) {
    idag1 = document.querySelector(".today1").innerHTML =
      data.weeks[0].days[1].items[0] + ' <i class="fas fa-volume-up">';
    idag2 = document.querySelector(".today2").innerHTML =
      data.weeks[0].days[1].items[1] + ' <i class="fas fa-volume-up">';
  } else if (today.getDay() == 3) {
    idag1 = document.querySelector(".today1").innerHTML =
      data.weeks[0].days[2].items[0] + ' <i class="fas fa-volume-up">';
    idag2 = document.querySelector(".today2").innerHTML =
      data.weeks[0].days[2].items[1] + ' <i class="fas fa-volume-up">';
  } else if (today.getDay() == 4) {
    idag1 = document.querySelector(".today1").innerHTML =
      data.weeks[0].days[3].items[0] + ' <i class="fas fa-volume-up">';
    idag2 = document.querySelector(".today2").innerHTML =
      data.weeks[0].days[3].items[1] + ' <i class="fas fa-volume-up">';
  } else if (today.getDay() == 5) {
    idag1 = document.querySelector(".today1").innerHTML =
      data.weeks[0].days[4].items[0] + ' <i class="fas fa-volume-up">';
    idag2 = document.querySelector(".today2").innerHTML =
      data.weeks[0].days[4].items[1] + ' <i class="fas fa-volume-up">';
  }
};


request.send();




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

request.send();