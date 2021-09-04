$(document).ready(function () {
  localStorage.setItem("numberofships", 0);
  localStorage.setItem("aifound", 0);
  localStorage.setItem("playerfound", 0);
  
  tableInit(1);
  tableInit(2);
  $("#desc").text("Please place your ships on the left grid");
});

function tableInit(tablenr) {
  for (i = 0; i < 8; i++) {
    $(`#table${tablenr}`).append(`<tr id=tbl${tablenr}-tr${i}>a</tr>`);
    for (j = 0; j < 8; j++) {
      chances = Math.round(Math.random() * 5);
      if (tablenr > 1) {
        if (chances == 4) {
          $(`#tbl${tablenr}-tr${i}`).append(
            `<td id="tbl${tablenr}-tr${i}-td${j}" class='td'>o</td>`
          );
        } else {
          $(`#tbl${tablenr}-tr${i}`).append(
            `<td id="tbl${tablenr}-tr${i}-td${j}" class='td'>x</td>`
          );
        }
      } else {
        $(`#tbl${tablenr}-tr${i}`).append(
          `<td id="tbl${tablenr}-tr${i}-td${j}" class='td'>x</td>`
        );
      }
    }
  }
}

