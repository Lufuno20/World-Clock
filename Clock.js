function updateTime() {
  //South Africa//
  let africa = document.querySelector("#SA");
  if (africa) {
    let africaDate = africa.querySelector(".date");
    let africaTime = africa.querySelector(".time");
    let aficaTimeElement = moment().tz("Africa/Johannesburg");

    africaDate.innerHTML = moment().format("MMMM Do YYYY");
    africaTime.innerHTML = aficaTimeElement.format(
      "H:mm:ss [<small>]A[</small>]"
    );
  }
  //Australia//
  let Australia = document.querySelector("#Australia");
  if (Australia) {
    let AustraliaDate = Australia.querySelector(".date");
    let AustraliaTime = Australia.querySelector(".time");
    let AustraliaTimeElement = moment().tz("Australia/Sydney");

    AustraliaDate.innerHTML = moment().format("MMMM  Do YYYY");
    AustraliaTime.innerHTML = AustraliaTimeElement.format(
      "H:mm:ss [<small>]A[</small>]"
    );
  }

  //Korea//
  let NewYork = document.querySelector("#NewYork");
  if (NewYork) {
    let NewYorkDate = NewYork.querySelector(".date");
    let NewYorkTime = NewYork.querySelector(".time");
    let NewYorkTimeElement = moment().tz("America/New_York");

    NewYorkDate.innerHTML = moment().format("MMMM  Do YYYY");
    NewYorkTime.innerHTML = NewYorkTimeElement.format(
      "H:mm:ss [<small>]A[</small>]"
    );
  }
}

function updatecity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesQuery = document.querySelector("#cities");
  citiesQuery.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")}
           <small>${cityTime.format("A")}</small>
          </div>
          
        </div> 
        
        <a href="index.html">Back to cities</a>`;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#city");

citiesSelect.addEventListener("change", updatecity);
