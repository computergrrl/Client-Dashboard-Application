const trafficCanvas = document.getElementById("traffic-chart");
const barCanvas = document.getElementById("bar-chart");
const pieCanvas = document.getElementById("pie-chart");


//create weekly chart data
let weeklyData = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"
  ],
  datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
      1350,
    ],
    backgroundColor: 'rgba(117, 9, 2, .5)',
    borderWidth: 1,
    borderColor: '#5e0e15',
  }]
};

//Create hourly chart data
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
    backgroundColor: 'rgba(117, 9, 2, .5)',
    borderWidth: 1,
    borderColor: '#5e0e15',
  }]
};

//create monthly chart data
let monthlyData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
    "Sep", "Oct", "Nov", "Dec"
  ],
  datasets: [{
    data: [4960, 6500, 5323, 7050, 4590, 3600, 5185, 6005, 4420, 6260,
      3995, 5750,
    ],
    backgroundColor: 'rgba(117, 9, 2, .5)',
    borderWidth: 1,
    borderColor: '#5e0e15',
  }]
};

//create daily chart data
let dailyData = {
  labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun", ],
  datasets: [{
    data: [85, 265, 153, 223, 307, 355, 285, ],
    backgroundColor: 'rgba(117, 9, 2, .5)',
    borderWidth: 1,
    borderColor: '#5e0e15',
  }]
};


//create data for chart options
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

//empty variable that will be set to whichever chart is clicked on
let trafficData = " ";


//set up weekly data by default 
if (trafficData === " ") {
  trafficData = weeklyData;
}

//render line chart
let trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficData,
  options: trafficOptions
});


//Render bar chart with included dataset
let barChart = new Chart(barCanvas, {
  type: 'bar',
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", ],
    datasets: [{
      label: 'Unique Visits Per Day',
      data: [85, 265, 153, 223, 307, 355, 285, ],
      backgroundColor: 'rgba(117, 9, 2, .5)',
      borderWidth: 1,
      borderColor: '#5e0e15',
    }]
  },

});

//Create data for donut chart
const mobileData = {
  labels: ["Gryffindor",  "Ravenclaw", "Hufflepuff", "Slytherin"],
  datasets: [{
    label: '# of Users',
    data: [156, 75, 46, 20],
    borderWidth: 0,
    backgroundColor: [
      'rgb(117, 9, 2)',
      'rgb(20, 43, 69)',
      'rgb(252, 141, 15)',
      'rgb(38, 100, 21)',
    ]
  }]
};

// sets labels to the side of pie chart
const mobileOptions = {
  legend: {
    position: 'right',
    labels: {
      boxWidth: 65,
      fontStyle: 'bold'
    }
  }
}

//render donut chart
let donutChart = new Chart(pieCanvas, {
  type: "doughnut",
  data: mobileData,
  options: mobileOptions,
});

let ul = document.querySelectorAll(".traffic-nav li");

/*add event listener to chart links and pass in textContend of selected link as an argument to the chooseGraph function */

for (let li of ul) {
  li.addEventListener("click", (e) => {
    graphData = e.target.textContent;
    chooseGraph(graphData);

  });
}


/*This function changes the value of trafficData based on clicked value and then renders a new chart */

function chooseGraph(value) {
  
  switch (value) {
    case "Hourly":
      trafficData = hourlyData;
      break;
    case "Daily":
      trafficData = dailyData;
      break;
    case "Weekly":
      trafficData = weeklyData;
      break;
    case "Monthly":
      trafficData = monthlyData;
      break;
    default:
      trafficData = weeklyData;
  }

  new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
  });
}