const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  focusON();
});

function focusON() {
  const $graphs = d.querySelectorAll(".graph");
  const $grid = d.getElementById("grid-container");
  const $outFocusBtn = d.querySelector(".out-focus-btn");

  const gridAreas = [
    "grid-area-1",
    "grid-area-2",
    "grid-area-3",
    "grid-area-4",
    "grid-area-5",
  ];

  $graphs.forEach((graph, index) => {
    graph.addEventListener("click", () => {
      // Remove all grid-area classes from all graphs
      $graphs.forEach((item) => {
        item.classList.remove(...gridAreas);
      });

      // Add the active class to the clicked graph and the appropriate grid-area class
      graph.classList.add("grid-area-1"); // Replace "active" with your desired class

      let j = 1;
      for (let i = 0; i < $graphs.length; i++) {
        if ($graphs[i] !== graph) {
          $graphs[i].classList.add(gridAreas[j]);
          j++;
        }
      }

      // Adjust the grid layout as needed
      $grid.classList.add("grid-focus");
      $outFocusBtn.classList.remove("disabled");
    });
  });

  $outFocusBtn.addEventListener("click", () => {
    $graphs.forEach((item) => {
      item.classList.remove(...gridAreas);
      $grid.classList.remove("grid-focus");
      $outFocusBtn.classList.add("disabled");
    });
  });
}

function gridBlackBgDelay() {
  const elemento = d.getElementById("grid-container");

  setTimeout(() => {
    elemento.style.backgroundColor = "black";
  }, 2000);
}

function hiddenMenu() {
  const $btn = d.querySelector(".menu-btn");
  const $window = d.querySelector(".window");
  const $flex = d.querySelector("body");
  const $main = d.querySelector(".main");
  const $inv = d.querySelector(".invisible-exit");

  $inv.addEventListener("click", () => {
    $window.classList.toggle("disabled");
    $window.classList.toggle("window-view");
    $flex.classList.toggle("window-flex");
    $main.classList.toggle("window-main");
    $inv.classList.toggle("disabled");
  });

  $btn.addEventListener("click", () => {
    $window.classList.toggle("disabled");
    $window.classList.toggle("window-view");
    $flex.classList.toggle("window-flex");
    $main.classList.toggle("window-main");
    $inv.classList.toggle("disabled");
  });
}

d.addEventListener("DOMContentLoaded", (e) => {
  hiddenMenu();
  gridBlackBgDelay();
  focusON();
});
