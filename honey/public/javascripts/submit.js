// cache elements
const submitBtn = document.getElementById("submit");

// state vars for
let reading, units, readingType, takenAtDate, takenAtTime, response, payload;

let date, stress, sleep, exercise;

// path for id
const myPath = window.location.pathname;

submitBtn.addEventListener("click", updateRecord);

const prefixPath = myPath.match(/\/[a-z]*\//g)[0],
  recordId = myPath.slice(prefixPath.length, prefixPath.length + 24),
  formAction = prefixPath + recordId + "/edit";

async function updateRecord(mouseEvent) {
  //ensures correct state for vars after click
  if (prefixPath === "/sugars/") {
    reading = document.getElementById("reading").value;

    units = document.getElementById("units").value;
    readingType = document.getElementById("readingType").value;
    takenAtDate = document.getElementById("takenAtDate").value;
    takenAtTime = document.getElementById("takenAtTime").value;

    payload = {
      _id: recordId,
      reading,
      units,
      readingType,
      takenAtDate,
      takenAtTime,
    };
  } else if (prefixPath === "/contexts/") {
    date = document.getElementById("date").value;
    stress = document.getElementById("stress").value;
    sleep = document.getElementById("sleep").value;
    exercise = document.getElementById("exercise").value;

    payload = {
      _id: recordId,
      date,
      stress,
      sleep,
      exercise,
    };
  }

  try {
    response = await fetch(formAction, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.log(err);
  }

  //TODO: [HON-36]  this could be like updating the title and giving a settimeoutbefore the redirect on the server side
  informUser = response.status === 200 ? response : "error";
  console.log(informUser);
  informUser !== "error"
    ? (window.location = prefixPath + recordId)
    : console.log("please try again");
}
