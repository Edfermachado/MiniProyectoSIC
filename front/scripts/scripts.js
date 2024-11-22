const d = document;

const ctx1 = document.getElementById("chart-main");
const ctx2 = document.getElementById("chart-side-1");
const ctx3 = document.getElementById("chart-side-2");
const $select = d.getElementById("chart-main-option");

const loadMainChart = () => {
  let localOption = localStorage.getItem("select-option");
  console.log(localOption);
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
                data: [100000, 99990, 80000, 85000, 76000, 95000],
                borderColor: "#aaadff",
                backgroundColor: "rgba(170, 173, 255, 0.2)",
                fill: true,
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
                data: [100000, 99990, 80000, 85000, 76000, 95000],
                borderColor: "#aaadff",
                backgroundColor: "#21c0d7",
                fill: true,
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
                data: [100000, 99990, 80000, 85000, 76000, 95000],
                borderColor: "#aaadff",
                backgroundColor: "#d99e2b",
                fill: true,
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
                data: [100000, 99990, 80000, 85000, 76000, 95000],
                borderColor: "#aaadff",
                backgroundColor: "#cd3a81",
                fill: true,
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
            data: [100000, 99990, 80000, 85000, 76000, 95000],
            borderColor: "#aaadff",
            backgroundColor: "rgba(170, 173, 255, 0.2)",
            fill: true,
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
                data: [100000, 99990, 80000, 85000, 76000, 95000],
                borderColor: "#aaadff",
                backgroundColor: "rgba(170, 173, 255, 0.2)",
                fill: true,
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
                data: [100000, 99990, 80000, 85000, 76000, 95000],
                borderColor: "#aaadff",
                backgroundColor: "#21c0d7",
                fill: true,
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
                data: [100000, 99990, 80000, 85000, 76000, 95000],
                borderColor: "#aaadff",
                backgroundColor: "#d99e2b",
                fill: true,
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
                data: [100000, 99990, 80000, 85000, 76000, 95000],
                borderColor: "#aaadff",
                backgroundColor: "#cd3a81",
                fill: true,
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
          },
        });
        break;
      default:
        console.log("Error en la impresión de la Chart");
    }
  });
};

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
//           "rgba(170, 173, 255, 0.2)",
//           "rgba(170, 173, 255, 0.2)",
//           "rgba(170, 173, 255, 0.2)",
//           "rgba(170, 173, 255, 0.2)",
//           "rgba(170, 173, 255, 0.2)",
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

new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
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
  },
});

new Chart(ctx3, {
  type: "pie",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [(12, 19, 3, 5, 2, 3)],
        borderColor: "#36A2EB",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
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
        fill: true,
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
  },
});

d.addEventListener("DOMContentLoaded", (e) => {
  loadMainChart();
  selectMainChart();
});

fetch(
  "http://127.0.0.1:8000/predict_salary/Data%20Scientist/2022?csv_file=data_science_salaries.csv"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // Aquí tendrás el número entero
  })
  .catch((error) => {
    console.error("Error:", error);
  });
