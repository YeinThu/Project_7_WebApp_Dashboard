// DOM Variables
const alertBanner = document.getElementById('alert');
const trafficCanvas = document.getElementById('traffic-chart');
const dailyCanvas = document.getElementById('daily-chart');
const mobileCanvas = document.getElementById('mobile-chart');
const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

// Traffic Data
let trafficData = {
  labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
  datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1
  }]
};

// Traffic Options
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

// Traffic Chart
let trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficData,
  options: trafficOptions
});

// Daily Traffic Data
const dailyData = {
  labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  datasets: [{
    label:'# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
  }]
};

// Daily Traffic Options
const dailyOptions = {
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

// Daily Traffic Chart
let dailyChart = new Chart(dailyCanvas, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});

// Mobile Data
const mobileData = {
  labels: ['Desktop', 'Tablet', 'Phones'],
  datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: ['#7477BF', '#78CF82', '#51B6C8']
  }]
};

// Mobile Options
const mobileOptions = {
  legend: {
    position: 'right',
    labels: {
      boxWidth: 20,
      fontStyle: 'bold'
    }
  }
};

// Mobile Chart
let mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});

// Alert HTML
alertBanner.innerHTML = `
  <div class="alert-banner">
    <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
    <p class="alert-banner-close">x</p>
  </div>
`;

// Alert Event Listener
alertBanner.addEventListener('click', e => {
  const element = e.target;

  if (element.classList.contains('alert-banner-close')) {
    alert.style.display = 'none';
  }
})

// Send Event Listener
send.addEventListener('click', e => {
  e.preventDefault();

  if (user.value === '' && message.value === '') {
    alert('Please fill out user and message fields before sending');
  } else if (user.value === '') {
    alert('Please fill out user field before sending');
  } else if (message.value === '') {
    alert('Please fill out message field before sending');
  } else {
    alert(`Message successfully sent to: ${user.value}`);
  }
});