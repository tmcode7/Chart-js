const ctx = document.getElementById('myChart').getContext('2d')

const labels = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
]

const data = {
    labels,
    datasets: [
    {
        data:[1,2,3,4,5,6],
        label: 'Hours'
    },
],
}

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
    },
}

const myChart = new Chart(ctx, config)

