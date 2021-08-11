const submitBtn = document.getElementById("submit");

const myPath = window.location.pathname;

submitBtn.addEventListener("click", updateSugar);

const recordId = myPath.slice(8, 32),
  formAction = "/sugars/" + recordId + "/edit";

const payload = {
  _id: recordId,
  reading: 6,
};

function updateSugar(mouseEvent) {
  fetch(formAction, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    // grabs an object and converts into JSON
    body: JSON.stringify(payload),
    // body: payload,
  });
}
