const hamburgerMenuIcon = document.getElementById('hamburgerMenuIcon');
const mobileNavDiv = document.getElementById('mobileNavDiv');
const radioButtonsInput = document.querySelectorAll('.inputOptions');
const createdPieChart = document.getElementById('myPieChart');
const createdLineChart = document.getElementById('myLineChart');
const createdBarChart = document.getElementById('myBarChart');

const firstCanvasDiv = document.querySelector('.firstCanvas');
const secondCanvasDiv = document.querySelector('.secondCanvas');
const thirdCanvasDiv = document.querySelector('.thirdCanvas');

// NAV BAR CONST's

const navItems = document.querySelectorAll('.nav-item');
const chartSettings = document.getElementById('chartsDetailsID');
const arraigementSettings = document.getElementById('arraigementID');
const overviewSettings = document.getElementById('overviewID');

// SECTION CONST's

const chartsSection = document.getElementById('chartsSection');
const arraigementSection = document.getElementById('arraigementSection');

// ARRAINGEMENT SECTION CONSTS

const cardAddButton = document.getElementById('plusAdd');
const firstArrCard = document.querySelector('.card');
const secondArrCard = document.querySelector('.cardTwo');
const cardConfirmButton = document.getElementById('cardConfirm');



// HAMBURGER MENU 

hamburgerMenuIcon.addEventListener('click', () => {
    if (hamburgerMenuIcon.src.endsWith('hamburger.png')) {
        hamburgerMenuIcon.src = '../images/close.png';
        mobileNavDiv.classList.toggle('hidden');
    } else if (hamburgerMenuIcon.src.endsWith('close.png')) {
        hamburgerMenuIcon.src = '../images/hamburger.png';
        mobileNavDiv.classList.toggle('hidden');
    }
})

// NAVIGATION

navItems.forEach((item) => {
  item.addEventListener('click', () => {
      // Remove the "bg-[#070d0e]" and "text-white" classes from all items
      navItems.forEach((navItem) => {
          navItem.classList.remove('lg:bg-[#070d0e]');
      });

      // Add the "bg-white" and "text-[#070d0e]" classes to the clicked item
      item.classList.add('lg:bg-[#070d0e]');
  });
});

// NAV CLOSE AFTER CLICKED OUTSIDE

chartsSection.addEventListener('click', () => {
  mobileNavDiv.classList.add('hidden');
  hamburgerMenuIcon.src = '../images/hamburger.png';
})

arraigementSection.addEventListener('click', () => {
  mobileNavDiv.classList.add('hidden');
  hamburgerMenuIcon.src = '../images/hamburger.png';
})

// CHARTS    

function createPieChart(){
    Chart.defaults.color = "#FFFFFF";
    let data = {
        labels: ['Positive', 'Negative', 'Neutral'],
        datasets: [{
          data: [90, 2, 8], // Replace with your values
          backgroundColor: ['#3ea60a', '#ff5733', '#a6a8a5'], // Specify colors
        }],
      };
      
      // Customize chart options
      let options = {
        responsive: true,
      };
      
      // Create the pie chart
      let myPieChart = new Chart(createdPieChart, {
        type: 'pie',
        data: data,
        options: options,
      });
}

function createLineChart(){
    Chart.defaults.color = "#FFFFFF";
     // Sample data (replace with your data)
     const labels = ['September', 'Oktober', 'November', 'December'];
     const data = {
       labels: labels,
       datasets: [
         {
           label: 'Lufthansa',
           data: [65, 59, 80, 81, 56],
           borderColor: 'rgba(75, 192, 192, 1)',
           borderWidth: 2,
           fill: false,
         },
         {
           label: 'Qatar Airways',
           data: [28, 48, 40, 19, 86],
           borderColor: 'rgba(255, 99, 132, 1)',
           borderWidth: 2,
           fill: false,
         },
         {
           label: 'Air Srbija',
           data: [5, 48, 30, 22, 10],
           borderColor: 'rgba(236, 240, 46, 1)',
           borderWidth: 2,
           fill: false,
         },
         {
           label: 'Fly Emirates',
           data: [48, 28, 70, 42, 46],
           borderColor: 'rgba(245, 169, 37, 1)',
           borderWidth: 2,
           fill: false,
         },
       ],
     };
 
     // Customize chart options
     const options = {
       responsive: true,
       scales: {
         x: {
           display: true,
           title: {
             display: true,
             text: 'Months',
           },
         },
         y: {
           display: true,
           title: {
             display: true,
             text: 'Value',
           },
         },
       },
     };
 
     // Get a reference to the canvas element
     const lineCanvas = document.getElementById('myLineChart').getContext('2d');
 
     // Create the Line Chart
     const myLineChart = new Chart(lineCanvas, {
       type: 'line',
       data: data,
       options: options,
     });
}

function createBarChart(){
    Chart.defaults.color = "#FFFFFF";
     // Sample data (replace with your data)
     const labels = ['Oktober', 'November', 'December'];
     const data = {
       labels: labels,
       datasets: [
         {
           label: 'Visitors',
           data: [240, 400, 850], // Replace with your values
           backgroundColor: 'rgba(75, 192, 192, 0.6)', // Bar color
           borderColor: 'rgba(75, 192, 192, 1)', // Border color
           borderWidth: 1, // Border width
         },
         {
           label: 'Bookings',
           data: [100, 190, 310], // Replace with your values
           backgroundColor: 'rgba(255, 99, 132, 0.6)', // Bar color
           borderColor: 'rgba(255, 99, 132, 1)', // Border color
           borderWidth: 1, // Border width
         },
       ],
     };
 
     // Customize chart options
     const options = {
       responsive: true,
       scales: {
         x: {
           beginAtZero: true,
         },
         y: {
           beginAtZero: true,
         },
       },
     };
 
     // Get a reference to the canvas element
     const barCanvas = document.getElementById('myBarChart').getContext('2d');
 
     // Create the Bar Chart
     const myBarChart = new Chart(barCanvas, {
       type: 'bar',
       data: data,
       options: options,
     });
}

function createDoughnutChart(){
    const data = {
        labels: ["Spain", "Colombia", "Greece"],
        datasets: [
            {
                data: [300, 450, 230],
                backgroundColor: ["#FF5733", "#5733FF", "#d1cd06"]
            }
        ]
    };

    // Doughnut chart configuration options
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 60, // Adjust the size of the hole in the middle (0-100)
        legend: {
            position: 'bottom'
        }
    };

    // Get a reference to the canvas element
    const ctx = document.getElementById('myDoughnutChart').getContext('2d');

    // Create the Doughnut chart
    const myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
    });
}

// SECTIONS

arraigementSettings.addEventListener('click', () => {
  mobileNavDiv.classList.add('hidden');
  hamburgerMenuIcon.src = '../images/hamburger.png';

  chartsSection.classList.add('hidden');
  arraigementSection.classList.remove('lg:hidden', 'hidden');
});

chartSettings.addEventListener('click', () => {
  mobileNavDiv.classList.add('hidden');
  hamburgerMenuIcon.src = '../images/hamburger.png';

  arraigementSection.classList.add('lg:hidden', 'hidden');
  chartsSection.classList.remove('hidden');
});


document.addEventListener("DOMContentLoaded", function() {
  const datepicker = flatpickr("#datePickerInput", {
      mode: "range",
      dateFormat: "Y-m-d",  // Adjust the date format as needed
      minDate: "today",
      disable: [
          {
              from: "1900-01-01",  // Set a range that effectively disables dates in the past
              to: new Date().fp_incr(-1), // Disable all dates before today
          }
      ],
      locale: {
          firstDayOfWeek: 1,  // Set the first day of the week (0 = Sunday, 1 = Monday, etc.)
      },
  });
});


flatpickr("#datePickerInput", {
  mode: "range",
      dateFormat: "Y-m-d",  // Adjust the date format as needed
      minDate: "today",
      disable: [
          {
              from: "1900-01-01",  // Set a range that effectively disables dates in the past
              to: new Date().fp_incr(-1), // Disable all dates before today
          }
      ],
      locale: {
          firstDayOfWeek: 1,  // Set the first day of the week (0 = Sunday, 1 = Monday, etc.)
      },
});


// ARRAINGEMENT SECTION

cardAddButton.addEventListener('click', () => {
  firstArrCard.classList.add('hidden');
  secondArrCard.classList.remove('hidden');
})

cardConfirmButton.addEventListener('click', () => {
  secondArrCard.classList.add('hidden');
  firstArrCard.classList.remove('hidden');
})


createPieChart();
createLineChart();
createBarChart();
createDoughnutChart();