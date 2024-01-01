import React from 'react'
import ReactApexChart from 'react-apexcharts';

export default function EarningChart() {
    const earningOptions = {
        chart: {
            id: "sparkline3",
            type: "area",
            height: 60,
            sparkline: {
                enabled: true,
            },
            group: "sparklines",
            fontFamily: "Plus Jakarta Sans', sans-serif",
            foreColor: "#adb0bb",
        },
        series: [
            {
                name: "Earnings",
                color: "#49BEFF",
                data: [25, 66, 20, 40, 12, 58, 20],
            },
        ],
        stroke: {
            curve: "smooth",
            width: 2,
        },
        fill: {
            colors: ["#f3feff"],
            type: "solid",
            opacity: 0.05,
        },
        markers: {
            size: 0,
        },
        tooltip: {
            theme: "dark",
            fixed: {
                enabled: true,
                position: "right",
            },
            x: {
                show: false,
            },
        },
    };
    return (
        <ReactApexChart
            options={earningOptions}
            series={earningOptions.series}
            type="area"
            height={earningOptions.chart.height} />
    )
}
