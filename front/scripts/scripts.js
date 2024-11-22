const d = document;

const ctx1 = document.getElementById("chart-main");
const ctx2 = document.getElementById("chart-side-1");
const ctx3 = document.getElementById("chart-side-2");
const $select = d.getElementById("chart-main-option");

<<<<<<< HEAD
<<<<<<< HEAD
=======
async function fetchMultipleEndpoints() {
  const DE = "http://127.0.0.1:8000/predict_salary/Data%20Engineer/2025";
  const DS = "http://127.0.0.1:8000/predict_salary/Data%20Scientist/2025";
  const DA = "http://127.0.0.1:8000/predict_salary/Data%20Analyst/2025";
  const MLE =
    "http://127.0.0.1:8000/predict_salary/Machine%20Learning%20Engineer/2025";

  try {
    const [response1, response2, response3] = await Promise.all([
      fetch(endpoint1),
      fetch(endpoint2),
      fetch(endpoint3),
    ]);

    const data1 = await response1.json();
    const data2 = await response2.json();
    const data3 = await response3.json();

    console.log("Datos del endpoint 1:", data1);
    console.log("Datos del endpoint 2:", data2);
    console.log("Datos del endpoint 3:", data3);
  } catch (error) {
    console.error("Error al realizar las peticiones:", error);
  }
}

>>>>>>> 5c55feb (Cambios a las gráficas e inserción de datos)
const loadMainChart = () => {
  let localOption = localStorage.getItem("select-option");
<<<<<<< HEAD
=======
  console.log(localOption);
>>>>>>> ace6fb4 (Agregando interactividad en la Gráfica principal)
  if (localOption !== undefined && localOption !== null) {
    $select.value = localOption;

    switch (localOption) {
      case "DE":
        mainChart = new Chart(ctx1, {
          type: "line",
          data: {
            labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
            datasets: [
              {
                label: "Data Engineer Salaries Per Year",
<<<<<<< HEAD
                data: [105382, 119449, 133517, 147585, 161653, 175721],
                borderColor: [
                  "rgb(170, 173, 255)",
                  "rgb(170, 173, 255)",
                  "rgb(170, 173, 255)",
                  "rgb(170, 173, 255)",
                  "rgb(170, 173, 255)",
                  "red",
                ],
                backgroundColor: "rgba(170, 173, 255, 0.4)",
=======
                data: [100000, 99990, 80000, 85000, 76000, 95000],
<<<<<<< HEAD
                borderColor: "#aaadff",
                backgroundColor: "rgba(170, 173, 255, 0.2)",
>>>>>>> ace6fb4 (Agregando interactividad en la Gráfica principal)
=======
                borderColor: "rgb(170, 173, 255)",
                backgroundColor: "rgba(170, 173, 255, 0.4)",
>>>>>>> 5c55feb (Cambios a las gráficas e inserción de datos)
                fill: true,
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
<<<<<<< HEAD
<<<<<<< HEAD
                max: 200000,
=======
>>>>>>> ace6fb4 (Agregando interactividad en la Gráfica principal)
=======
                max: 200000,
>>>>>>> 5c55feb (Cambios a las gráficas e inserción de datos)
              },
            },
          },
        });
        break;
      case "DS":
        mainChart = new Chart(ctx1, {
          type: "line",
          data: {
            labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
            datasets: [
              {
                label: "Data Scientist Salaries Per Year",
<<<<<<< HEAD
                data: [89267, 110839, 132411, 153982, 175554, 197125],
                borderColor: [
                  "rgb(255, 165, 0)",
                  "rgb(255, 165, 0)",
                  "rgb(255, 165, 0)",
                  "rgb(255, 165, 0)",
                  "rgb(255, 165, 0)",
                  "red",
                ],
                backgroundColor: "rgba(255, 165, 0, 0.4)",
=======
                data: [100000, 99990, 80000, 85000, 76000, 95000],
<<<<<<< HEAD
                borderColor: "#aaadff",
                backgroundColor: "#21c0d7",
>>>>>>> ace6fb4 (Agregando interactividad en la Gráfica principal)
=======
                borderColor: "rgb(255, 165, 0)",
                backgroundColor: "rgba(255, 165, 0, 0.4)",
>>>>>>> 5c55feb (Cambios a las gráficas e inserción de datos)
                fill: true,
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
<<<<<<< HEAD
<<<<<<< HEAD
                max: 200000,
=======
>>>>>>> ace6fb4 (Agregando interactividad en la Gráfica principal)
=======
                max: 200000,
>>>>>>> 5c55feb (Cambios a las gráficas e inserción de datos)
              },
            },
          },
        });
        break;
      case "DA":
        mainChart = new Chart(ctx1, {
          type: "line",
          data: {
            labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
            datasets: [
              {
                label: "Data Analyst Salaries Per Year",
<<<<<<< HEAD
                data: [89321, 95528, 101734, 107941, 114147, 120353],
                borderColor: [
                  "rgb(255, 192, 203)",
                  "rgb(255, 192, 203)",
                  "rgb(255, 192, 203)",
                  "rgb(255, 192, 203)",
                  "rgb(255, 192, 203)",
                  "red",
                ],
                backgroundColor: "rgba(255, 192, 203, 0.4)",
=======
                data: [100000, 99990, 80000, 85000, 76000, 95000],
<<<<<<< HEAD
                borderColor: "#aaadff",
                backgroundColor: "#d99e2b",
>>>>>>> ace6fb4 (Agregando interactividad en la Gráfica principal)
=======
                borderColor: "rgb(255, 192, 203)",
                backgroundColor: "rgba(255, 192, 203, 0.4)",
>>>>>>> 5c55feb (Cambios a las gráficas e inserción de datos)
                fill: true,
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
<<<<<<< HEAD
<<<<<<< HEAD
                max: 200000,
=======
>>>>>>> ace6fb4 (Agregando interactividad en la Gráfica principal)
=======
                max: 200000,
>>>>>>> 5c55feb (Cambios a las gráficas e inserción de datos)
              },
            },
          },
        });
        break;
      case "MLE":
        mainChart = new Chart(ctx1, {
          type: "line",
          data: {
            labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
            datasets: [
              {
                label: "Machine Learning Engineer Salaries Per Year",
<<<<<<< HEAD
                data: [83576, 115836, 148095, 180354, 212614, 244873],
                borderColor: [
                  "rgb(34, 139, 34)",
                  "rgb(34, 139, 34)",
                  "rgb(34, 139, 34)",
                  "rgb(34, 139, 34)",
                  "rgb(34, 139, 34)",
                  "red",
                ],
                backgroundColor: "rgba(34, 139, 34, 0.4)",
=======
                data: [100000, 99990, 80000, 85000, 76000, 95000],
<<<<<<< HEAD
                borderColor: "#aaadff",
                backgroundColor: "#cd3a81",
>>>>>>> ace6fb4 (Agregando interactividad en la Gráfica principal)
=======
                borderColor: "rgb(34, 139, 34)",
                backgroundColor: "rgba(34, 139, 34, 0.4)",
>>>>>>> 5c55feb (Cambios a las gráficas e inserción de datos)
                fill: true,
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
<<<<<<< HEAD
<<<<<<< HEAD
                max: 300000,
=======
>>>>>>> ace6fb4 (Agregando interactividad en la Gráfica principal)
=======
                max: 200000,
>>>>>>> 5c55feb (Cambios a las gráficas e inserción de datos)
              },
            },
          },
        });
        break;
      default:
        console.log("Error en la impresión de la Chart");
    }
  } else {
    $select.value = "DE";
    mainChart = new Chart(ctx1, {
      type: "line",
      data: {
        labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
        datasets: [
          {
            label: "Data Engineer Salaries Per Year",
<<<<<<< HEAD
            data: [105382, 119449, 133517, 147585, 161653, 175721],
            borderColor: [
              "rgb(170, 173, 255)",
              "rgb(170, 173, 255)",
              "rgb(170, 173, 255)",
              "rgb(170, 173, 255)",
              "rgb(170, 173, 255)",
              "red",
            ],
            backgroundColor: "rgba(170, 173, 255, 0.4)",
=======
            data: [100000, 99990, 80000, 85000, 76000, 95000],
            borderColor: "#aaadff",
<<<<<<< HEAD
            backgroundColor: "rgba(170, 173, 255, 0.2)",
>>>>>>> ace6fb4 (Agregando interactividad en la Gráfica principal)
=======
            backgroundColor: "rgba(170, 173, 255, 0.4)",
>>>>>>> 5c55feb (Cambios a las gráficas e inserción de datos)
            fill: true,
            borderWidth: 1,
          },
        ],
=======
new Chart(ctx1, {
  type: "line",
  data: {
    labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
    datasets: [
      {
        label: "# Salarys",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "#aaadff",
        fill: true,
        borderWidth: 1,
>>>>>>> 2b9427a (Update scripts.js)
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
<<<<<<< HEAD
<<<<<<< HEAD
            max: 200000,
=======
>>>>>>> ace6fb4 (Agregando interactividad en la Gráfica principal)
=======
            max: 200000,
>>>>>>> 5c55feb (Cambios a las gráficas e inserción de datos)
          },
        },
      },
    });
  }
};

const selectMainChart = () => {
  $select.addEventListener("change", function () {
    localStorage.setItem("select-option", this.value);
    console.log(this.value);
    mainChart.destroy();
    switch (this.value) {
      case "DE":
        mainChart = new Chart(ctx1, {
          type: "line",
          data: {
            labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
            datasets: [
              {
                label: "Data Engineer Salaries Per Year",
<<<<<<< HEAD
                data: [105382, 119449, 133517, 147585, 161653, 175721],
                borderColor: [
                  "rgb(170, 173, 255)",
                  "rgb(170, 173, 255)",
                  "rgb(170, 173, 255)",
                  "rgb(170, 173, 255)",
                  "rgb(170, 173, 255)",
                  "red",
                ],
                backgroundColor: "rgba(170, 173, 255, 0.4)",
=======
                data: [100000, 99990, 80000, 85000, 76000, 95000],
<<<<<<< HEAD
                borderColor: "#aaadff",
                backgroundColor: "rgba(170, 173, 255, 0.2)",
>>>>>>> ace6fb4 (Agregando interactividad en la Gráfica principal)
=======
                borderColor: "rgba(170, 173, 255)",
                backgroundColor: "rgba(170, 173, 255, 0.4)",
>>>>>>> 5c55feb (Cambios a las gráficas e inserción de datos)
                fill: true,
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
<<<<<<< HEAD
<<<<<<< HEAD
                max: 200000,
=======
>>>>>>> ace6fb4 (Agregando interactividad en la Gráfica principal)
=======
                max: 200000,
>>>>>>> 5c55feb (Cambios a las gráficas e inserción de datos)
              },
            },
          },
        });
        break;
      case "DS":
        mainChart = new Chart(ctx1, {
          type: "line",
          data: {
            labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
            datasets: [
              {
                label: "Data Scientist Salaries Per Year",
<<<<<<< HEAD
                data: [89267, 110839, 132411, 153982, 175554, 197125],
                borderColor: [
                  "rgb(255, 165, 0)",
                  "rgb(255, 165, 0)",
                  "rgb(255, 165, 0)",
                  "rgb(255, 165, 0)",
                  "rgb(255, 165, 0)",
                  "red",
                ],
                backgroundColor: "rgba(255, 165, 0, 0.4)",
=======
                data: [100000, 99990, 80000, 85000, 76000, 95000],
<<<<<<< HEAD
                borderColor: "#aaadff",
                backgroundColor: "#21c0d7",
>>>>>>> ace6fb4 (Agregando interactividad en la Gráfica principal)
=======
                borderColor: "rgba(255, 165, 0)",
                backgroundColor: "rgba(255, 165, 0, 0.4)",
>>>>>>> 5c55feb (Cambios a las gráficas e inserción de datos)
                fill: true,
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
<<<<<<< HEAD
<<<<<<< HEAD
                max: 200000,
=======
>>>>>>> ace6fb4 (Agregando interactividad en la Gráfica principal)
=======
                max: 200000,
>>>>>>> 5c55feb (Cambios a las gráficas e inserción de datos)
              },
            },
          },
        });
        break;
      case "DA":
        mainChart = new Chart(ctx1, {
          type: "line",
          data: {
            labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
            datasets: [
              {
                label: "Data Analyst Salaries Per Year",
<<<<<<< HEAD
                data: [89321, 95528, 101734, 107941, 114147, 120353],
                borderColor: [
                  "rgb(255, 192, 203)",
                  "rgb(255, 192, 203)",
                  "rgb(255, 192, 203)",
                  "rgb(255, 192, 203)",
                  "rgb(255, 192, 203)",
                  "red",
                ],
                backgroundColor: "rgba(255, 192, 203, 0.4)",
=======
                data: [100000, 99990, 80000, 85000, 76000, 95000],
<<<<<<< HEAD
                borderColor: "#aaadff",
                backgroundColor: "#d99e2b",
>>>>>>> ace6fb4 (Agregando interactividad en la Gráfica principal)
=======
                borderColor: "rgb(255, 192, 203)",
                backgroundColor: "rgba(255, 192, 203, 0.4)",
>>>>>>> 5c55feb (Cambios a las gráficas e inserción de datos)
                fill: true,
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
<<<<<<< HEAD
<<<<<<< HEAD
                max: 200000,
=======
>>>>>>> ace6fb4 (Agregando interactividad en la Gráfica principal)
=======
                max: 200000,
>>>>>>> 5c55feb (Cambios a las gráficas e inserción de datos)
              },
            },
          },
        });
        break;
      case "MLE":
        mainChart = new Chart(ctx1, {
          type: "line",
          data: {
            labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
            datasets: [
              {
                label: "Machine Learning Engineer Salaries Per Year",
<<<<<<< HEAD
                data: [83576, 115836, 148095, 180354, 212614, 244873],
                borderColor: [
                  "rgb(34, 139, 34)",
                  "rgb(34, 139, 34)",
                  "rgb(34, 139, 34)",
                  "rgb(34, 139, 34)",
                  "rgb(34, 139, 34)",
                  "red",
                ],
                backgroundColor: "rgba(34, 139, 34, 0.4)",
=======
                data: [100000, 99990, 80000, 85000, 76000, 95000],
<<<<<<< HEAD
                borderColor: "#aaadff",
                backgroundColor: "#cd3a81",
>>>>>>> ace6fb4 (Agregando interactividad en la Gráfica principal)
=======
                borderColor: "rgb(34, 139, 34)",
                backgroundColor: "rgba(34, 139, 34, 0.4)",
>>>>>>> 5c55feb (Cambios a las gráficas e inserción de datos)
                fill: true,
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
<<<<<<< HEAD
<<<<<<< HEAD
                max: 300000,
=======
>>>>>>> ace6fb4 (Agregando interactividad en la Gráfica principal)
=======
                max: 200000,
>>>>>>> 5c55feb (Cambios a las gráficas e inserción de datos)
              },
            },
          },
        });
        break;
      default:
        console.log("Error en la impresión de la Chart");
    }
  });
};
<<<<<<< HEAD
=======

const updateChartData = (chartId, data, label) => {
  const chart = Chart.getChart(chartId);
  chart.data.datasets[0].data = data;
  chart.data.datasets[0].label = label;
  chart.update();
};

// mainChart = new Chart(ctx1, {
//   type: "line",
//   data: {
//     labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
//     datasets: [
//       {
//         label: "# of Votes",
//         data: [100000, 99990, 80000, 85000, 76000, 95000],
//         borderColor: "#aaadff",
//         backgroundColor: [
//           "rgba(170, 173, 255, 0.4)",
//           "rgba(170, 173, 255, 0.4)",
//           "rgba(170, 173, 255, 0.4)",
//           "rgba(170, 173, 255, 0.4)",
//           "rgba(170, 173, 255, 0.4)",
//           "red",
//         ],
//         fill: true,
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// });
>>>>>>> ace6fb4 (Agregando interactividad en la Gráfica principal)

new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: [
      "Data Engineer",
      "Data Scientist",
      "Data Analyst",
      "Machine Learning Engineer",
<<<<<<< HEAD
      "Otros",
=======
>>>>>>> 5c55feb (Cambios a las gráficas e inserción de datos)
    ],
    datasets: [
      {
        label: "Desarrolladores en el Área de datos",
<<<<<<< HEAD
        data: [1307, 1243, 910, 629, 2510],
=======
        data: [1307, 1243, 910, 629],
>>>>>>> 5c55feb (Cambios a las gráficas e inserción de datos)
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(75, 192, 192)",
          "rgba(255, 205, 86)",
          "rgba(237, 125, 229)",
<<<<<<< HEAD
          "rgba(156, 153, 204, 0.2)",
=======
          "rgba(54, 162, 235)",
>>>>>>> 5c55feb (Cambios a las gráficas e inserción de datos)
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "top",
        align: "start",
      },
    },
  },
});

new Chart(ctx3, {
  type: "pie",
  data: {
<<<<<<< HEAD
    labels: ["United States", "United Kingdom", "Canada", "Germany", "Others"],
    datasets: [
      {
<<<<<<< HEAD
        label: "Desarrolladores en el país",
        data: [5305, 401, 241, 71, 581],
=======
        label: "# of Votes",
        data: [(12, 19, 3, 5, 2, 3)],
        borderColor: "#36A2EB",
>>>>>>> ace6fb4 (Agregando interactividad en la Gráfica principal)
=======
    labels: ["United States", "United Kingdom", "Canada", "Germany", "Spain"],
    datasets: [
      {
        label: "Desarrolladores en el país",
        data: [12, 19, 3, 5, 2, 3],
>>>>>>> 5c55feb (Cambios a las gráficas e inserción de datos)
        backgroundColor: [
          "rgba(255, 99, 132, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 205, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(201, 203, 207, 0.4)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        fill: false,
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "top",
        align: "start",
      },
    },
  },
});

d.addEventListener("DOMContentLoaded", (e) => {
  loadMainChart();
  selectMainChart();
});

fetch("http://127.0.0.1:8000/predict_salary/Data%20Scientist/2025")
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // Aquí tendrás el número entero
  })
  .catch((error) => {
    console.error("Error:", error);
  });
