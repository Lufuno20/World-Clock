function updateTime() {
  //South Africa//
  let africa = document.querySelector("#SA");
  let africaDate = africa.querySelector(".date");
  let africaTime = africa.querySelector(".time");
  let aficaTimeElement = moment().tz("Africa/Johannesburg");

  africaDate.innerHTML = moment().format("MMMM Do YYYY");
  africaTime.innerHTML = aficaTimeElement.format(
    "H:mm:ss [<small>]A[</small>]"
  );

  //Australia//
  let Australia = document.querySelector("#Australia");
  let AustraliaDate = Australia.querySelector(".date");
  let AustraliaTime = Australia.querySelector(".time");
  let AustraliaTimeElement = moment().tz("Australia/Sydney");

  AustraliaDate.innerHTML = moment().format("MMMM Do YYYY");
  AustraliaTime.innerHTML = `${AustraliaTimeElement.format(
    "H:mm:ss [<small>]A[</small>]"
  )}`;
}

updateTime();
setInterval(updateTime, 1000);
