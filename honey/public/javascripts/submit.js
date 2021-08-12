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

  //TODO: [HON-36]  this could be like updating the title and giving a settimeoutbefore the redirect on the server side
  informUser = response.status === 200 ? response : "error";
  console.log(informUser);
  informUser !== "error"
    ? (window.location = "/sugars")
    : console.log("please try again");
}
