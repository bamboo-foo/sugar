// cache elements
const submitBtn = document.getElementById("submit");

// state vars
let reading, units, readingType, takenAtDate, takenAtTime, response;

// path for id
const myPath = window.location.pathname;

submitBtn.addEventListener("click", updateSugar);

const recordId = myPath.slice(8, 32),
  formAction = "/sugars/" + recordId + "/edit";

async function updateSugar(mouseEvent) {
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

  try {
    response = await fetch(formAction, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.log(err);
  }
  informUser = response ? 
  console.log('Record Updated')// this could be like updating the title and giving a settimeoutbefore the redirect on the server side
}
