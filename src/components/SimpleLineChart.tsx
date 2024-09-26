import React from 'react';
import { Line } from 'react-chartjs-2';
import { LineChartProps } from '@/types/interfaces';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SimpleLineChart: React.FC<LineChartProps> = ({ data }) => {
    const chartData = {
        labels: data.map(d => d.time),
        datasets: [
            {
                label: 'Umidità',
                data: data.map(d => d.value),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                align: 'end' as const,
            },
        },
    };

    return <Line data={chartData} options={options} />;
};

export default SimpleLineChart;