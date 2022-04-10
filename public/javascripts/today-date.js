document.addEventListener("DOMContentLoaded", insertDate);

const dateField = document.getElementById("takenAtDate");

function insertDate() {
  // controller will validate even if client has js blocked
  dateField.value = todaysDate();
}

function todaysDate() {
  const dateEntered = new Date(),
    year = dateEntered.getFullYear().toString(),
    month = (dateEntered.getMonth() + 1).toString(),
    date = dateEntered.getDate();

  function unshiftZero(input) {
    if (input < 10) {
      let dateStr = input.toString();

      return "0" + dateStr;
    } else {
      return input.toString();
    }
  }

  let monthStr = unshiftZero(month),
    dateStr = unshiftZero(date);

  return year + "-" + monthStr + "-" + dateStr;
}
