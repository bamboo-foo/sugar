let table = document.querySelector("table");

table.addEventListener("click", handleRemove);

let idForRemoval, action, removeRecord, recordForRemoval, response, tableRow;

async function handleRemove(mouseEvent) {
  try {
    idForRemoval = mouseEvent.target.id;

    action = "/sugars/" + idForRemoval;

    response = await fetch(action, {
      method: "DELETE",
      //   headers: { "Content-Type": "application/json" },

      //   body: JSON.stringify(payload),
    });
    //remove element tr from DOM
  } catch (error) {
    console.log(error);
  }

  recordForRemoval = mouseEvent.target.parentElement;

  response.status === 200
    ? recordForRemoval.remove()
    : console.log("resource not available");
  //   removeRecord = response ? true : false;

  //   if (removeRecord) {
  //       recordForRemoval.remove();
  //   }
}
