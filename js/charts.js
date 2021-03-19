const trafficCanvas = document.getElementById("traffic-chart");
const barCanvas = document.getElementById("bar-chart");
const pieCanvas = document.getElementById("pie-chart");

//let trafficData



let weeklyData = {
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

let hourlyData = {
  labels: ["12am", "1am", "2am", "3am", "4am", "5am", "6am",
    "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm",
    "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"
  ],
  datasets: [{
    data: [50, 65, 30, 45, 75, 125, 200, 165, 275, 350,
      245, 200, 345, 320, 440, 375, 500, 325, 300, 575, 450, 185,
      65, 45, 75,
    ],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
};

let monthlyData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
    "Sep", "Oct", "Nov", "Dec"
  ],
  datasets: [{
    data: [4960, 6500, 5323, 7050, 4590, 3600, 5185, 6005, 4420, 6260,
      3995, 5750,
    ],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
};

let dailyData = {
  labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun",
  ],
  datasets: [{
    data: [85, 265, 153, 223 , 307, 355, 285,
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

let trafficData = " ";

if (trafficData === " ") {
  trafficData = weeklyData;
}

let trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficData,
  options: trafficOptions
});



let barChart = new Chart(barCanvas, {
  type: 'bar',
  data: {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", ],
    datasets: [{
      label: 'Unique Visits Per Day',
      data: [85, 265, 153, 223 , 307, 355, 285, ],
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
    position: 'right',
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


let ul = document.querySelectorAll(".traffic-nav li");


function chooseGraph(value) {
  if (value === "Hourly") {
    trafficData = hourlyData;
  } else if (value === "Daily") {
    trafficData = dailyData;
  } else if (value === "Weekly") {
    trafficData = weeklyData;
  } else {trafficData = monthlyData;}
  
  new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
  });
}

for (let li of ul) {
  li.addEventListener("click", (e) => {
    graphData = e.target.textContent;
    chooseGraph(graphData);

  });
}

