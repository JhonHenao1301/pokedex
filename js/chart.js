
const ctx = document.getElementById('stats').getContext('2d')

export function createChart(stats) {
    return new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                'Hp',
                'Attack',
                'Defense',
                ['Special', 'Attack'],
                ['Special', 'Defense'],
                'Speed',
            ],
            datasets: [{
                data: stats,
                backgroundColor: 'rgba(255, 255, 250, 0.3)',
                borderColor: 'rgba(255, 255, 250, 0.5)',
                pointBorderColor: 'rgba(0, 10, 10, 0.5)',
            }],  
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                }
            },
            scales: {
                r: {
                    grid: {
                        color: 'white'
                    },
                    pointLabels: {
                        color: 'white'
                    },
                    angleLines: {
                        color: 'white'
                    }
                }
            }
        }
    });
}

  