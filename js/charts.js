const trafficCanvas = document.getElementById("traffic-chart");
const barCanvas = document.getElementById("bar-chart");
const pieCanvas = document.getElementById("pie-chart");

let trafficData = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"
  ],
  datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
      2500
    ],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
};

let trafficOptions = {
  aspectRatio: 2.5,
  animation: {
    duration: 0
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  },
  legend: {
    display: false
  }
};

let trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficData,
  options: trafficOptions
});

// let barGraphData = {
//   labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
//   ],
//   datasets: [{
//     data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
//       2500
//     ],
//     backgroundColor: 'rgba(116, 119, 191, .3)',
//     borderWidth: 1,
//   }]
// };

let barChart = new Chart(barCanvas, {
  type: 'bar',
  data: {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", ],
    datasets: [{
      label: 'Unique Visits Per Day',
      data: [600, 575, 525, 625, 825, 775, 650, ],
      backgroundColor: 'rgba(116, 119, 191, .3)',
    }]
  },

});

const mobileData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [{
  label: '# of Users',
  data: [2000, 550, 500],
  borderWidth: 0,
  backgroundColor: [
  '#7477BF',
  '#78CF82',
  '#51B6C8'
  ]
  }]
  };

  //following code sets labels to the side of pie chart
  const mobileOptions = {
    legend: {
    position: 'left',
    labels: {
    boxWidth: 65,
    fontStyle: 'bold'
    }
    }
    }


  let donutChart = new Chart(pieCanvas, {
    type: "doughnut",
    data: mobileData,
    options: mobileOptions,
  });