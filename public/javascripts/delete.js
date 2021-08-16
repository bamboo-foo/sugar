let table = document.querySelector("table");

table.addEventListener("click", handleRemove);

let idForRemoval,
  action,
  removeRecord,
  recordForRemoval,
  response,
  tableRow,
  prefixPath,
  myPath;

async function handleRemove(mouseEvent) {
  myPath = window.location.pathname;
  idForRemoval = mouseEvent.target.id;
  if (idForRemoval) {
    prefixPath = myPath.match(/\/[a-z]*\//g)[0];
    try {
      action = prefixPath + idForRemoval;

      response = await fetch(action, {
        method: "DELETE",
        //   headers: { "Content-Type": "application/json" },

        //   body: JSON.stringify(payload),
      });
    } catch (error) {
      //remove element tr from DOM
      console.log(error);
    }

    recordForRemoval = mouseEvent.target.parentElement;

    response.status === 200
      ? recordForRemoval.remove()
      : console.log("resource not available");
  }

  //   removeRecord = response ? true : false;

  //   if (removeRecord) {
  //       recordForRemoval.remove();
  //   }
}
