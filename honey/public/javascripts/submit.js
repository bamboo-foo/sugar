// cache elements
const submitBtn = document.getElementById("submit");

// state vars
let reading, units, readingType, takenAtDate, takenAtTime;

// path for id
const myPath = window.location.pathname;

submitBtn.addEventListener("click", updateSugar);

const recordId = myPath.slice(8, 32),
  formAction = "/sugars/" + recordId + "/edit";

function updateSugar(mouseEvent) {
  //ensures correct state for vars after click
  reading = document.getElementById("reading").value;

  units = document.getElementById("units").value;
  readingType = document.getElementById("readingType").value;
  takenAtDate = document.getElementById("takenAtDate").value;
  takenAtTime = document.getElementById("takenAtTime").value;

  const payload = {
    _id: recordId,
    reading,
    units,
    readingType,
    takenAtDate,
    takenAtTime,
  };

  fetch(formAction, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },

    body: JSON.stringify(payload),
  });
}
